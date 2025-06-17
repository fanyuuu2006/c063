import { CodeTokenType } from "../types";

export const map: Record<CodeTokenType, React.CSSProperties["color"]> = {
  function: "#d2a8ff",
  keyword1: "#ff7b72",
  keyword2: "#ff7b72",
  string: "#a5d6ff",
  number: "#79c0ff",
  comment: "##6a737d",
  variable: "#e6edf3",
  constant: "#79c0ff",
  type: "#ff7b72",
  brackets1: "#79c0ff",
  brackets2: "#56d364",
  brackets3: "#e3b341",
  brackets4: "#ffa198",
  operator: "#ff7b72",
  default: "#e6edf3",
};
