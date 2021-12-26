import {useContext} from 'react'
import PresentationContext from '../contexts/presentation-context'
import Content from '../content'

export default useCurrentSlide = () => {
  const {slide} = useContext(PresentationContext)

  return {slide, Content: Content[slide]}
}
