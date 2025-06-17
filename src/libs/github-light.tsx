import { CodeTokenType } from "../types";

export const map: Record<CodeTokenType, React.CSSProperties["color"]> = {
  function: "#6f42c1",
  keyword1: "#d73a49",
  keyword2: "#d73a49",
  string: "#032f62",
  number: "#005cc5",
  comment: "#6a737d",
  variable: "#24292e",
  constant: "#0070c1",
  type: "#6f42c1",
  brackets1: "#005cc5",
  brackets2: "#e36209",
  brackets3: "#5a32a3",
  operator: "#d73a49",
  default: "#24292e",
};
