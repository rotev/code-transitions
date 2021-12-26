import React from 'react'
import useCurrentSlide from '../hooks/use-current-slide'

export default Slide = () => {
  const {slide, Content} = useCurrentSlide()

  return (<>
    <h1>Slide {slide}</h1>
    <Content />
  </>)
}
