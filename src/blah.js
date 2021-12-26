import Prism from './vendor/prism/prism';
import './vendor/prism/prism.css'

import "./styles.css";

Prism.manual = true;

const Diff = require("diff");


export function doStuff() {

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

  const htmlOne = Prism.highlight(one, Prism.languages.tsx, 'tsx');
  const htmlOther = Prism.highlight(other, Prism.languages.tsx, 'tsx');

  const code1 = document.getElementById("code1");
  const code2 = document.getElementById("code2");
  const code3 = document.getElementById("code3");

  code1.innerHTML = htmlOne;
  code2.innerHTML = htmlOther;

  let span = null;

  const diff = Diff.diffChars(one, other),
    display = document.getElementById("display"),
    fragment = document.createDocumentFragment();

  let fullCode = "";

  diff.forEach((part) => {
    // green for additions, red for deletions
    // grey for common parts
    const color = part.added ? "green" : part.removed ? "red" : "grey";
    span = document.createElement("span");
    span.style.color = color;
    span.style.border = "2px solid " + color;
    span.style.margin = "5px 0";
    //span.style.display = "block";
    span.appendChild(document.createTextNode(part.value));
    fragment.appendChild(span);

    fullCode += part.value;
  });

  console.log(diff);

  display.appendChild(fragment);

  code3.innerHTML = Prism.highlight(fullCode, Prism.languages.tsx, 'tsx');
}

