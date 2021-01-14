import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'

const slides = [
  { id: 0, url: 'https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/Landing%20Page%2FCarousel%2FWEB_COV1.jpeg?alt=media&token=0e62d291-bba1-46db-8a1b-57706d3a9391' },
  { id: 1, url: 'https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/Landing%20Page%2FCarousel%2FWEB_COV2.png?alt=media&token=4ff7312c-d67b-4fb2-94a4-8b223d1612da' },
  { id: 2, url: 'https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/Landing%20Page%2FCarousel%2FWEB_COV3.png?alt=media&token=97941d21-6dbe-4dd6-8f62-b9f708c1ab10' },
  { id: 3, url: 'https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/Landing%20Page%2FCarousel%2FWEB_COV5.jpeg?alt=media&token=a756106d-a7f8-489d-a335-c277e5626c23' },
  { id: 4, url: 'https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/Landing%20Page%2FCarousel%2FWEB_COV6.jpeg?alt=media&token=e297783d-4299-4cc0-9338-cdc27da4f8b1' },
]

const Landing_Carousel = () => {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 4000), [])
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="bg"
      style={{ ...props, backgroundImage: `url(${item.url})`, backgroundSize: '100% 100%' }}
    />
  ))
}

export default Landing_Carousel
