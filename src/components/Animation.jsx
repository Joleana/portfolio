import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated as anim } from 'react-spring'
import '../index.css'

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export default function Goo() {
  const [{ pos1 }, set] = useSpring({ pos1: [0, 0], config: fast })
  const [{ pos2 }] = useSpring({ pos2: pos1, config: slow })
  const [{ pos3 }] = useSpring({ pos3: pos2, config: slow })
  // Effect for fetching mouse coordinates
  useEffect(() => {
    const handler = ({ clientX, clientY }) => set({ pos1: [clientX, clientY] })
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])
  return (
    <>
      <svg style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
        </filter>
      </svg>
          <anim.div class="b1" style={{ position: 'absolute', top: 0, left: 0, transform: pos3.interpolate(trans) }} />
          <anim.div class="b2" style={{ position: 'absolute', top: 0, left: 0, transform: pos2.interpolate(trans) }} />
          <anim.div class="b3" style={{ position: 'absolute', top: 0, left: 0, transform: pos1.interpolate(trans) }} />
    </>
  )
}
