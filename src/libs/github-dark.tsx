import { CodeTokenType } from "../types";

export const map: Record<CodeTokenType, React.CSSProperties["color"]> = {
  function: "#b392f0",
  keyword1: "#f97583",
  keyword2: "#f97583",
  string: "#9ecbff",
  number: "#79b8ff",
  comment: "##6a737d",
  variable: "#e1e4e8",
  constant: "#79b8ff",
  type: "#f97583",
  brackets1: "#79b8ff",
  brackets2: "#ffab70",
  brackets3: "#b392f0",
  operator: "#f97583",
  default: "#e1e4e8",
};
