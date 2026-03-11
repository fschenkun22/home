📘 《个人主页开发文档（第一阶段）》
目标：搭建一个可正常访问的 Vite + Three.js 单页网站，并部署到 GitHub Pages。

1. 项目目标（Project Goal）
构建一个：

单页（Single Page）

使用 Vite 构建

使用 Three.js 渲染基础 3D 场景

可在 GitHub Pages 正常访问

目录结构清晰、可扩展

这是基础版本，用于验证部署流程与技术栈是否正常工作。

2. 技术栈（Tech Stack）
Vite（构建工具）

JavaScript / TypeScript（推荐 TypeScript）

Three.js（3D 场景）

GitHub Pages（静态托管）

Cloudflare CDN（后续可加）

3. 项目初始化（Project Initialization）
使用 Vite 创建项目：

Code
npm create vite@latest home --template react-ts
进入项目：

Code
cd home
npm install
4. Vite 配置（vite.config.ts）
因为 GitHub Pages 的访问路径是：

Code
https://fschenkun22.github.io/home/
所以必须设置：

ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/home/',   // 必须，否则资源路径会 404
})
5. 项目目录结构（Project Structure）
Code
home/
  ├─ src/
  │   ├─ components/
  │   ├─ sections/
  │   ├─ three/
  │   │    ├─ Scene.tsx
  │   │    └─ utils/
  │   ├─ App.tsx
  │   └─ main.tsx
  ├─ public/
  │   └─ assets/
  ├─ index.html
  ├─ vite.config.ts
  └─ package.json
6. 基础 Three.js 场景（src/three/Scene.tsx）
这是一个最简单的 Three.js 场景，用于验证渲染是否正常：

tsx
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Scene() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current!
    const width = mount.clientWidth
    const height = mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 3

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)
    mount.appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshStandardMaterial({ color: 0x00ffcc })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(5, 5, 5)
    scene.add(light)

    function animate() {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />
}
7. 在 App.tsx 中加载场景
tsx
import Scene from './three/Scene'

function App() {
  return (
    <div>
      <Scene />
    </div>
  )
}

export default App
8. 构建与部署（Build & Deploy）
构建：

Code
npm run build
构建产物在：

Code
dist/
9. 推送到 GitHub（Push to GitHub）
Code
git add .
git commit -m "init project"
git push origin main
10. GitHub Pages 部署方式（使用 gh-pages 分支）
安装部署工具：

Code
npm install gh-pages --save-dev
在 package.json 添加：

json
"homepage": "https://fschenkun22.github.io/home/",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
部署：

Code
npm run deploy
GitHub 会自动生成 gh-pages 分支。

11. 验证访问
访问：

Code
https://fschenkun22.github.io/home/
如果能看到旋转立方体，说明：

Vite 配置正确

Three.js 正常渲染

GitHub Pages 路径正确

部署流程正常

第一阶段成功。