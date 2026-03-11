import { useEffect, useRef } from 'react'
import * as THREE from 'three'

type SceneProps = {
  className?: string
}

export default function Scene({ className }: SceneProps) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const isMobile =
      window.matchMedia('(max-width: 768px)').matches || /Mobi|Android|iPhone/i.test(navigator.userAgent)
    const particleCount = isMobile ? 700 : 1600
    const networkNodeCount = isMobile ? 0 : 52

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x081019, 8, 24)

    const camera = new THREE.PerspectiveCamera(58, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.set(0, 0.15, 6.4)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.2 : 1.7))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setClearColor(0x02060b, 0)
    mount.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xa8ffef, 0.44)
    const pointLight = new THREE.PointLight(0x5ff3d8, 1.2, 50)
    pointLight.position.set(2.4, 2.2, 3.5)
    const fillLight = new THREE.PointLight(0x6f9dff, 0.5, 45)
    fillLight.position.set(-3, -1.4, 2)
    scene.add(ambientLight, pointLight, fillLight)

    const coreGeometry = new THREE.IcosahedronGeometry(1.15, 0)
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x66ffe0,
      metalness: 0.34,
      roughness: 0.42,
      emissive: 0x0d4a43,
      emissiveIntensity: 0.45,
      wireframe: true,
    })
    const core = new THREE.Mesh(coreGeometry, coreMaterial)
    scene.add(core)

    const particleGeometry = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i += 1) {
      const i3 = i * 3
      particlePositions[i3] = (Math.random() - 0.5) * 20
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 12
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 20
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x8af6ff,
      size: isMobile ? 0.016 : 0.02,
      transparent: true,
      opacity: 0.66,
    })
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    let networkPoints: THREE.Points | null = null
    let networkLines: THREE.LineSegments | null = null
    let networkPointsGeometry: THREE.BufferGeometry | null = null
    let networkLinesGeometry: THREE.BufferGeometry | null = null
    let networkPointsMaterial: THREE.PointsMaterial | null = null
    let networkLinesMaterial: THREE.LineBasicMaterial | null = null

    if (networkNodeCount > 0) {
      const nodePositions: number[] = []
      const nodeVectors: THREE.Vector3[] = []

      for (let i = 0; i < networkNodeCount; i += 1) {
        const node = new THREE.Vector3(
          (Math.random() - 0.5) * 7,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 7,
        )
        nodeVectors.push(node)
        nodePositions.push(node.x, node.y, node.z)
      }

      networkPointsGeometry = new THREE.BufferGeometry()
      networkPointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(nodePositions, 3))
      networkPointsMaterial = new THREE.PointsMaterial({
        color: 0x67fff5,
        size: 0.035,
        transparent: true,
        opacity: 0.85,
      })
      networkPoints = new THREE.Points(networkPointsGeometry, networkPointsMaterial)
      scene.add(networkPoints)

      const linePositions: number[] = []
      const threshold = 1.75
      for (let i = 0; i < nodeVectors.length; i += 1) {
        for (let j = i + 1; j < nodeVectors.length; j += 1) {
          const distance = nodeVectors[i].distanceTo(nodeVectors[j])
          if (distance < threshold) {
            linePositions.push(
              nodeVectors[i].x,
              nodeVectors[i].y,
              nodeVectors[i].z,
              nodeVectors[j].x,
              nodeVectors[j].y,
              nodeVectors[j].z,
            )
          }
        }
      }

      networkLinesGeometry = new THREE.BufferGeometry()
      networkLinesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
      networkLinesMaterial = new THREE.LineBasicMaterial({
        color: 0x68d8ff,
        transparent: true,
        opacity: 0.2,
      })
      networkLines = new THREE.LineSegments(networkLinesGeometry, networkLinesMaterial)
      scene.add(networkLines)
    }

    const pointerTarget = new THREE.Vector2(0, 0)
    const onPointerMove = (event: MouseEvent) => {
      pointerTarget.x = (event.clientX / window.innerWidth - 0.5) * 0.9
      pointerTarget.y = (event.clientY / window.innerHeight - 0.5) * -0.8
    }

    const onResize = () => {
      const width = mount.clientWidth
      const height = mount.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('mousemove', onPointerMove)
    window.addEventListener('resize', onResize)

    const clock = new THREE.Clock()
    let frameId = 0
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      core.rotation.x = elapsed * 0.22
      core.rotation.y = elapsed * 0.35
      particles.rotation.y = elapsed * 0.02

      if (networkPoints && networkLines) {
        networkPoints.rotation.y = elapsed * 0.05
        networkLines.rotation.y = elapsed * 0.05
      }

      camera.position.x += (pointerTarget.x - camera.position.x) * 0.05
      camera.position.y += (pointerTarget.y + 0.15 - camera.position.y) * 0.05
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', onPointerMove)
      window.removeEventListener('resize', onResize)

      coreGeometry.dispose()
      coreMaterial.dispose()
      particleGeometry.dispose()
      particleMaterial.dispose()
      networkPointsGeometry?.dispose()
      networkLinesGeometry?.dispose()
      networkPointsMaterial?.dispose()
      networkLinesMaterial?.dispose()

      renderer.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className={className} style={{ width: '100%', height: '100%' }} />
}
