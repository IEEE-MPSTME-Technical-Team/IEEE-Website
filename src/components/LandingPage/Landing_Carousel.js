import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'

const slides = [
  { id: 0, url: 'https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/Landing%20Page%2FCarousel%2FUNDay.jpg?alt=media&token=126b2649-51fb-45cb-9325-fd8ba9a334e3' },
  { id: 1, url: 'https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/Landing%20Page%2FCarousel%2FVinodSir1.jpeg?alt=media&token=958f7243-0c8c-45f4-a39d-a796c8c2a5a7' },
  { id: 2, url: 'https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/Landing%20Page%2FCarousel%2FIEEEDay.jpg?alt=media&token=e5367087-7884-4cbf-94eb-aeac813f94cb' },
  { id: 3, url: 'https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/Landing%20Page%2FCarousel%2FAinalSir1.jpeg?alt=media&token=cf782256-dc93-4e72-bac6-dd26b39b3acd' },
  { id: 4, url: 'https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/Landing%20Page%2FCarousel%2FAI%26ML.jpg?alt=media&token=6fa8161f-2902-4dc6-9c67-83e3e3f19521' },
  
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
