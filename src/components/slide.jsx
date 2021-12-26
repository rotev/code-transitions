import React from 'react'
import useCurrentSlide from '../hooks/use-current-slide'

export default Slide = () => {
  const slide = useCurrentSlide()

  return <h1>Slide {slide}</h1>
}
