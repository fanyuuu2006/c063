import { CodeTokenType } from "../types";

export const map: Record<CodeTokenType, React.CSSProperties["color"]> = {
  function: "rgb(121, 94, 38)",
  keyword1: "rgb(0, 0, 255)",
  keyword2: "rgb(175, 0, 219)",
  string: "rgb(163, 21, 21)",
  number: "rgb(9, 134, 88)",
  comment: "rgb(0, 128, 0)",
  variable: "rgb(0, 16, 128)",
  constant: "rgb(0, 112, 193)",
  type: "rgb(0, 0, 255)",
  brackets1: "rgb(4, 49, 250)",
  brackets2: "rgb(49, 147, 49)",
  brackets3: "rgb(123, 56, 20)",
  operator: "rgb(0, 0, 0)",
  default: "rgb(0, 0, 0)",
};
