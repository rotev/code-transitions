import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/github.css";

import "./styles.css";
const Diff = require("diff");

hljs.registerLanguage("typescript", typescript);

const one = `
describe('ItemPaneSidebarActions', () => {
  test('Convert to issue', async () => {

  })
})
`;

const other = `
describe('ItemPaneSidebar', (hello) => {
  test('Convert to draft', async () => {


    render(<ItemPaneSidebarActions />)

    
  })
})
`;

const htmlOne = hljs.highlight(one, { language: "typescript" }).value;
const htmlOther = hljs.highlight(other, { language: "typescript" }).value;

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

code3.innerHTML = hljs.highlight(fullCode, { language: "typescript" }).value;
