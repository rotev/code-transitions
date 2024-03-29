import {useEffect, useState} from 'react'
import PresentationContext from '../contexts/presentation-context'
import Content from '../content'

import Slide from './slide'

export default Presentation = () => {
  const [slide, setSlide] = useState(0)

  const context = {
    slide
  }

  useEffect(() => {
    const onClick = () => {
      setSlide((slide + 1) % Content.length)
    }
    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  })

  return (
    <PresentationContext.Provider value={context}>
      <Slide />
    </PresentationContext.Provider>
  )
}
