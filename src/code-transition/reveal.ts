import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import typescript from "highlight.js/lib/languages/javascript";

export const doBetter = () => {
  let deck = new Reveal({
    plugins: [ Markdown, Highlight ],
    highlight: {
      beforeHighlight: hljs => hljs.registerLanguage("typescript", typescript)
    }
  })
  deck.initialize();
}
