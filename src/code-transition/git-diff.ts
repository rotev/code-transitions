import Prism from '../vendor/prism/prism';
import '../vendor/prism/prism.css'

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
  code3.innerHTML = Prism.highlight(diff, Prism.languages.diff, 'diff-tsx');;
}
