import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './PageTransition.css'

export default function PageTransition({ children }) {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState('in')
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('out')
    }
  }, [location, displayLocation])

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current)
  }, [])

  const handleAnimationEnd = () => {
    if (transitionStage === 'out') {
      window.scrollTo({ top: 0, behavior: 'auto' })
      setDisplayLocation(location)
      setTransitionStage('in')
    }
  }

  return (
    <div
      key={displayLocation.pathname}
      className={`page-transition ${transitionStage}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  )
}
