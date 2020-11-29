import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import './VisionParallax.css'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Card() {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 2, tension: 200, friction: 40 } }))
  return (
    <animated.div
      class="card Vision1"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
        <h3 style={{
        }}>Ainal Abdul Azeez</h3>
    </animated.div>
  )
}

export default Card
