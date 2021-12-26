import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/javascript";

const Diff = require("diff");

hljs.registerLanguage("typescript", typescript);

export const transition = (
  current: string,
  next: string,
  element: HTMLElement
) => {
  const diff = Diff.diffChars(current, next);
  const currentHighlight = hljs.highlight(current, { language: "typescript" })
    .value;
  const nextHighlight = hljs.highlight(next, { language: "typescript" }).value;
};
