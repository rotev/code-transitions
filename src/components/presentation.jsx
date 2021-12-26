import PresentationContext from '../contexts/presentation-context'

import Slide from './slide'

const defaultContext = {
  slide: 1
}

export default Presentation = () => {
  return (
    <PresentationContext.Provider value={defaultContext}>
      <Slide />
    </PresentationContext.Provider>
  )
}
