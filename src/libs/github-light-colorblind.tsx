import { CodeTokenType } from "../types";

export const map: Record<CodeTokenType, React.CSSProperties["color"]> = {
  function: "#8250df",
  keyword1: "#b35900",
  keyword2: "#b35900",
  string: "#0a3069",
  number: "#0550ae",
  comment: "#6e7781",
  variable: "#24292f",
  constant: "#0550ae",
  type: "#b35900",
  brackets1: "#0969da",
  brackets2: "#0969da",
  brackets3: "#9a6700",
  operator: "#b35900",
  default: "#24292f",
};
