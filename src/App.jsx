import { useEffect, useState } from 'react'
import { legacyAssets } from './legacy-assets.js'
import markup from './legacy-markup.html?raw'
import NbgConstructionLoader from './NbgConstructionLoader.jsx'
import './legacy.css'

function App() {
  const [runtimeError, setRuntimeError] = useState('')

  useEffect(() => {
    window.__IMG = Object.fromEntries(
      Object.entries(legacyAssets).map(([key, path]) => [
        key,
        `${import.meta.env.BASE_URL}images/${path}`,
      ]),
    )

    const script = document.createElement('script')
    script.src = `${import.meta.env.BASE_URL}legacy-runtime.js`
    script.async = false
    script.onerror = () => {
      const error = new Error('The page runtime failed to load.')
      console.error('Failed to initialize the Ocean Mist page:', error)
      setRuntimeError(error.message)
    }
    document.body.appendChild(script)

    return () => script.remove()
  }, [])

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: markup }} />
      <NbgConstructionLoader />
      {runtimeError && (
        <p className="runtime-error" role="alert">
          The website could not finish loading: {runtimeError}
        </p>
      )}
    </>
  )
}

export default App
