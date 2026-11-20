import { useEffect, useState } from 'react'
import { legacyAssets } from './legacy-assets.js'
import markup from './legacy-markup.html?raw'
import NbgConstructionLoader from './NbgConstructionLoader.jsx'
import './legacy.css'

function App() {
  const [runtimeError, setRuntimeError] = useState('')
  const [siteReady, setSiteReady] = useState(false)

  useEffect(() => {
    let active = true
    let runtimeLoaded = false
    let heroLoaded = false
    let readyFallback = 0

    window.__IMG = Object.fromEntries(
      Object.entries(legacyAssets).map(([key, path]) => [
        key,
        `${import.meta.env.BASE_URL}images/${path}`,
      ]),
    )
    window.__NBG_GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''

    const hero = document.querySelector('.hero-img')
    const markReady = () => {
      if (active && runtimeLoaded && heroLoaded) {
        window.clearTimeout(readyFallback)
        setSiteReady(true)
      }
    }
    const onHeroLoad = () => {
      if (hero?.currentSrc.startsWith('data:')) return
      heroLoaded = true
      markReady()
    }

    if (hero) {
      if (hero.complete && hero.naturalWidth > 1 && !hero.currentSrc.startsWith('data:')) {
        heroLoaded = true
      } else {
        hero.addEventListener('load', onHeroLoad)
        hero.addEventListener('error', onHeroLoad)
      }
    } else {
      heroLoaded = true
    }

    const script = document.createElement('script')
    script.src = `${import.meta.env.BASE_URL}legacy-runtime.js`
    script.async = false
    script.onload = () => {
      runtimeLoaded = true
      markReady()
    }
    script.onerror = () => {
      const error = new Error('The page runtime failed to load.')
      console.error('Failed to initialize the Ocean Mist page:', error)
      setRuntimeError(error.message)
      runtimeLoaded = true
      heroLoaded = true
      markReady()
    }

    readyFallback = window.setTimeout(() => {
      if (active) setSiteReady(true)
    }, 3500)

    document.body.appendChild(script)

    return () => {
      active = false
      window.clearTimeout(readyFallback)
      hero?.removeEventListener('load', onHeroLoad)
      hero?.removeEventListener('error', onHeroLoad)
      script.remove()
    }
  }, [])

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: markup }} />
      <NbgConstructionLoader ready={siteReady} />
      {runtimeError && (
        <p className="runtime-error" role="alert">
          The website could not finish loading: {runtimeError}
        </p>
      )}
    </>
  )
}

export default App
