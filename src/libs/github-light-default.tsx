import { CodeTokenType } from "../types";

export const map: Record<CodeTokenType, React.CSSProperties["color"]> = {
  function: "#8250df",
  keyword1: "#cf222e",
  keyword2: "#cf222e",
  string: "#0a3069",
  number: "##0550ae",
  comment: "#6e7781",
  variable: "#1f2328",
  constant: "#0550ae",
  type: "#cf222e",
  brackets1: "#0969da",
  brackets2: "#1a7f37",
  brackets3: "#9a6700",
  operator: "#cf222e",
  default: "#24292e",
};
