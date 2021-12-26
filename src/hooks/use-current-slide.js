import {useContext} from 'react'
import PresentationContext from '../contexts/presentation-context'

export default useCurrentSlide = () => {
  const {slide} = useContext(PresentationContext)

  return slide
}
