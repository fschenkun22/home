import { useEffect, useRef, useState } from 'react'
import { GlobeIcon, SunMoonIcon } from './components/Icons'
import { dictionaries, type Locale, type ThemeMode } from './content/siteContent'
import About from './sections/About'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Scope from './sections/Scope'
import Services from './sections/Services'
import './App.css'

const LOCALE_KEY = 'site.locale'
const THEME_KEY = 'site.theme'
const SWITCH_OUT_MS = 120
const SWITCH_IN_MS = 220

const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') return 'en'
  const storedLocale = window.localStorage.getItem(LOCALE_KEY)
  if (storedLocale === 'en' || storedLocale === 'zh') return storedLocale
  return window.navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

const getInitialTheme = (): ThemeMode => {
  if (typeof window === 'undefined') return 'dark'
  const storedTheme = window.localStorage.getItem(THEME_KEY)
  if (storedTheme === 'dark' || storedTheme === 'light') return storedTheme
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme)
  const [isSwitching, setIsSwitching] = useState(false)
  const toolbarRef = useRef<HTMLElement>(null)
  const switchTimerRef = useRef<number | null>(null)
  const settleTimerRef = useRef<number | null>(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
    window.localStorage.setItem(LOCALE_KEY, locale)
  }, [locale])

  useEffect(() => {
    const root = document.documentElement
    const toolbar = toolbarRef.current
    if (!toolbar) return

    const updateToolbarHeight = () => {
      root.style.setProperty('--toolbar-height', `${toolbar.offsetHeight}px`)
    }

    updateToolbarHeight()
    window.addEventListener('resize', updateToolbarHeight)

    const observer = new ResizeObserver(updateToolbarHeight)
    observer.observe(toolbar)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateToolbarHeight)
    }
  }, [locale])

  useEffect(() => {
    return () => {
      if (switchTimerRef.current) window.clearTimeout(switchTimerRef.current)
      if (settleTimerRef.current) window.clearTimeout(settleTimerRef.current)
    }
  }, [])

  const runSoftSwitch = (update: () => void) => {
    if (isSwitching) return
    setIsSwitching(true)

    if (switchTimerRef.current) window.clearTimeout(switchTimerRef.current)
    if (settleTimerRef.current) window.clearTimeout(settleTimerRef.current)

    switchTimerRef.current = window.setTimeout(() => {
      update()
      settleTimerRef.current = window.setTimeout(() => {
        setIsSwitching(false)
      }, SWITCH_IN_MS)
    }, SWITCH_OUT_MS)
  }

  const handleLocaleChange = (nextLocale: Locale) => {
    if (nextLocale === locale) return
    runSoftSwitch(() => setLocale(nextLocale))
  }

  const handleThemeChange = (nextTheme: ThemeMode) => {
    if (nextTheme === theme) return
    runSoftSwitch(() => setTheme(nextTheme))
  }

  const content = dictionaries[locale]
  const brandPrimary = locale === 'zh' ? '陈坤' : 'CHENKUN'
  const brandSecondary = locale === 'zh' ? 'CHENKUN' : '陈坤'
  const brandPrimaryClass = locale === 'zh' ? 'name-zh' : 'name-en'
  const brandSecondaryClass = locale === 'zh' ? 'name-en' : 'name-zh'

  return (
    <div className={`site-shell ${isSwitching ? 'is-switching' : ''}`}>
      <header ref={toolbarRef} className="site-toolbar">
        <div className="container toolbar-inner">
          <div className="site-brand" aria-label="site owner name">
            <span className={`brand-name brand-primary ${brandPrimaryClass}`}>{brandPrimary}</span>
            <span className="brand-separator">/</span>
            <span className={`brand-name brand-secondary ${brandSecondaryClass}`}>
              {brandSecondary}
            </span>
          </div>
          <div className="toolbar-block">
            <span className="toolbar-label with-icon">
              <GlobeIcon />
              {content.ui.language}
            </span>
            <div className="toggle-group">
              <button
                className={`toggle-chip ${locale === 'en' ? 'is-active' : ''}`}
                type="button"
                onClick={() => handleLocaleChange('en')}
                disabled={isSwitching}
              >
                {content.ui.english}
              </button>
              <button
                className={`toggle-chip ${locale === 'zh' ? 'is-active' : ''}`}
                type="button"
                onClick={() => handleLocaleChange('zh')}
                disabled={isSwitching}
              >
                {content.ui.chinese}
              </button>
            </div>
          </div>
          <div className="toolbar-block">
            <span className="toolbar-label with-icon">
              <SunMoonIcon />
              {content.ui.theme}
            </span>
            <div className="toggle-group">
              <button
                className={`toggle-chip ${theme === 'dark' ? 'is-active' : ''}`}
                type="button"
                onClick={() => handleThemeChange('dark')}
                disabled={isSwitching}
              >
                {content.ui.dark}
              </button>
              <button
                className={`toggle-chip ${theme === 'light' ? 'is-active' : ''}`}
                type="button"
                onClick={() => handleThemeChange('light')}
                disabled={isSwitching}
              >
                {content.ui.light}
              </button>
            </div>
          </div>
        </div>
      </header>
      <Hero content={content.hero} theme={theme} />
      <main>
        <About content={content.about} />
        <Services content={content.services} />
        <Projects content={content.projects} />
        <Scope content={content.scope} />
        <Contact content={content.contact} />
      </main>
    </div>
  )
}

export default App
