import { useEffect, useState } from 'react'
import './NbgConstructionLoader.css'

const floors = Array.from({ length: 9 }, (_, index) => index)

function NbgConstructionLoader() {
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const [visible, setVisible] = useState(true)
  const phase =
    progress < 12
      ? 'LAYING THE FOUNDATION'
      : progress < 27
        ? 'BUILDING THE LOBBY'
        : progress < 85
          ? 'RAISING THE TOWER'
          : progress < 100
            ? 'FINISHING THE ROOFTOP'
            : 'PREPARING YOUR EXPERIENCE'

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const startedAt = performance.now()
    const minimumDuration = reducedMotion ? 700 : 3500
    const fallbackDuration = reducedMotion ? 9000 : 12000
    const fadeDuration = reducedMotion ? 20 : 500
    let frame = 0
    let leavingAt = null

    const update = (now) => {
      const elapsed = now - startedAt
      const ratio = reducedMotion ? 1 : Math.min(elapsed / 2330, 1)
      setProgress(Math.floor(ratio * 100))

      const legacyLoaderRemoved = !document.getElementById('loader')
      if (
        leavingAt === null &&
        elapsed >= minimumDuration &&
        (legacyLoaderRemoved || elapsed >= fallbackDuration)
      ) {
        leavingAt = now
        setLeaving(true)
      }

      if (leavingAt !== null && now - leavingAt >= fadeDuration) {
        setVisible(false)
        return
      }

      frame = requestAnimationFrame(update)
    }

    frame = requestAnimationFrame(update)
    return () => cancelAnimationFrame(frame)
  }, [])

  if (!visible) return null

  return (
    <div
      className={`nbg-loader${leaving ? ' nbg-loader--leaving' : ''}`}
      aria-label="Constructing your experience"
    >
      <div className="nbg-loader__content">
        <svg
          className="nbg-loader__building"
          viewBox="0 0 480 490"
          role="img"
          aria-label="A modern apartment tower drawn from foundation to rooftop"
        >
          <defs>
            <filter id="nbg-line-glow" x="-35%" y="-20%" width="170%" height="140%">
              <feGaussianBlur stdDeviation="2.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="nbg-sweep-gradient" x1="0" x2="0" y1="1" y2="0">
              <stop offset="0" stopColor="#20C5C8" stopOpacity="0" />
              <stop offset="0.5" stopColor="#B9F0EE" />
              <stop offset="1" stopColor="#20C5C8" stopOpacity="0" />
            </linearGradient>
          </defs>

          <g className="nbg-loader__architecture" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <g className="nbg-loader__draw nbg-loader__foundation">
              <path pathLength={1} d="M83 438H382M99 438V449H366V438M113 449V458H352V449M127 458H338" />
              <path pathLength={1} d="M109 438L117 449M151 438L157 449M193 438L197 449M235 438V449M277 438L273 449M319 438L313 449M361 438L351 449" />
              <path pathLength={1} d="M91 438H374" stroke="#B9F0EE" strokeWidth="1.25" />
            </g>

            <g className="nbg-loader__draw nbg-loader__lobby" style={{ animationDelay: '280ms' }}>
              <path pathLength={1} d="M129 344H322L350 329M129 414H322L350 399M129 344V414M322 344V414M350 329V399M322 414L350 399" />
              <path pathLength={1} d="M129 414H350M129 344H322" stroke="#20C5C8" strokeWidth="1.4" />
              <path pathLength={1} d="M176 346V412M275 346V412M176 346H275V412H176Z" />
              <path pathLength={1} d="M183 352H220V407H183ZM231 352H268V407H231ZM224 347V412" />
              <path pathLength={1} d="M218 379H230M220 347H271" stroke="#B9F0EE" strokeWidth="1.1" />
              <path pathLength={1} d="M137 338H324L354 322M137 338V344" />
              <path pathLength={1} d="M145 419H336M158 422H324" stroke="#087F85" strokeWidth="1" />
            </g>

            {floors.map((index) => {
              const slabY = 344 - index * 30
              const delay = 610 + index * 130

              return (
                <g
                  key={index}
                  className="nbg-loader__draw nbg-loader__floor"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  <path
                    pathLength={1}
                    d={`M129 ${slabY - 30}V${slabY}M322 ${slabY - 30}V${slabY}M174 ${slabY - 30}V${slabY}M225 ${slabY - 30}V${slabY}M276 ${slabY - 30}V${slabY}M129 ${slabY}H322M322 ${slabY - 30}L350 ${slabY - 45}V${slabY - 15}L322 ${slabY}`}
                  />
                  <path
                    pathLength={1}
                    d={`M140 ${slabY - 25}H166V${slabY - 5}H140ZM184 ${slabY - 25}H215V${slabY - 5}H184ZM235 ${slabY - 25}H266V${slabY - 5}H235ZM286 ${slabY - 25}H312V${slabY - 5}H286Z`}
                  />
                  <path
                    pathLength={1}
                    d={`M153 ${slabY - 25}V${slabY - 5}M199 ${slabY - 25}V${slabY - 5}M250 ${slabY - 25}V${slabY - 5}M299 ${slabY - 25}V${slabY - 5}`}
                    stroke="#087F85"
                    strokeWidth="0.8"
                  />
                  <path
                    pathLength={1}
                    d={`M330 ${slabY - 30}H344V${slabY - 16}H330ZM330 ${slabY - 10}H344V${slabY - 1}H330Z`}
                    stroke="#087F85"
                    strokeWidth="0.85"
                  />
                  {index % 2 === 1 && (
                    <path
                      pathLength={1}
                      d={`M137 ${slabY - 22}H170V${slabY - 8}H137ZM137 ${slabY - 22}H170M141 ${slabY - 19}V${slabY - 8}M149 ${slabY - 19}V${slabY - 8}M157 ${slabY - 19}V${slabY - 8}M165 ${slabY - 19}V${slabY - 8}`}
                      stroke="#B9F0EE"
                      strokeWidth="0.9"
                    />
                  )}
                  <path pathLength={1} d={`M126 ${slabY - 30}H326`} stroke="#20C5C8" strokeWidth="1.15" />
                </g>
              )
            })}

            <g className="nbg-loader__draw nbg-loader__roof" style={{ animationDelay: '1970ms' }}>
              <path pathLength={1} d="M119 74H322L357 56M119 74V83M322 74L357 56V65M124 83H322L352 68" />
              <path pathLength={1} d="M132 74V68H147V74M299 74V68H314V74" />
              <path pathLength={1} d="M157 66H283M164 62H276" stroke="#087F85" strokeWidth="0.9" />
              <path pathLength={1} d="M119 83H322L352 68" stroke="#B9F0EE" strokeWidth="1.25" />
              <path pathLength={1} d="M343 59V46M347 57V43M343 46H347" stroke="#20C5C8" strokeWidth="1" />
              <path pathLength={1} d="M225 59V50M221 50H229M225 50V45" stroke="#087F85" strokeWidth="0.9" />
            </g>

            <path
              className="nbg-loader__sweep"
              d="M238 449V45"
              pathLength="1"
              stroke="url(#nbg-sweep-gradient)"
            />
          </g>
        </svg>

        <div className="nbg-loader__identity">
          <img
            className="nbg-loader__logo"
            src={`${import.meta.env.BASE_URL}images/brand/nbg-logo.png`}
            alt="NBG"
          />
          <p className="nbg-loader__name">NEXT BRIDGE GROUP LIMITED</p>
          <p className="nbg-loader__tagline">BUILDING A BETTER TOMORROW</p>
        </div>
      </div>

      <div className="nbg-loader__progress">
        <div className="nbg-loader__progress-label">
          <span>{phase}</span>
          <span className="nbg-loader__percentage">{progress}%</span>
        </div>
        <div
          className="nbg-loader__track"
          role="progressbar"
          aria-label="Construction progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <span className="nbg-loader__fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}

export default NbgConstructionLoader
