import Prism from '../vendor/prism/prism';
import '../vendor/prism/prism.css'
import anime from 'animejs/lib/anime.es.js';

Prism.manual = true;

export const doThings = () => {
  
  const one = `
  describe('ItemPaneSidebarActions', () => {
    test('Convert to issue', async () => {

    })
  })
  `;

  const other = `
  describe('ItemPaneSidebar', (hello) => {
    test('Convert to draft', async () => {


      render(<ItemPaneSidebarActions item={item} />)

      
    })
  })
  `;

  const diff = `

describe('ItemPaneSidebar', (hello) => {
  test('Convert to draft', async () => {
+
+    render(<ItemPaneSidebarActions item={item} />)
+
  })
})
  `;

  const code3 = document.getElementById("code3");
  code3.innerHTML = Prism.highlight(diff, Prism.languages.diff, 'diff-tsx');

  animate();
}

const animate = () => {
  const container = document.getElementById("code3")

  // hide new code.
  let originalHeight
  const newCode = container.getElementsByClassName("inserted-sign")

  const items = Array.from(newCode).map(element => {
    originalHeight = element.offsetHeight
    element.style.opacity = "0"
    element.style.height = "0"
    element.style.transform = "translateX(50px)"

    return {
      element,
      originalHeight: originalHeight
    }
  })

  // animate the new code height to make space.
  items.forEach(item => {
    anime({
      targets: item.element,
      height: item.originalHeight,
      easing: 'easeInOutQuad'
    });
  })

  // reveal the new code.
  items.forEach(item => {
    anime({
      targets: item.element,
      opacity: 1,
      translateX: 0,
      easing: 'easeInOutQuad'
    });
  })
}
