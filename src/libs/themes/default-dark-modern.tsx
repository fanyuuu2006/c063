import { CodeTokenType } from "../../types";

export const map: Record<CodeTokenType, React.CSSProperties["color"]> = {
  function: "#dcdcaa",
  keyword1: "#569cd6",
  keyword2: "#c586c0",
  string: "#ce9178",
  number: "#b5cea8",
  comment: "#6a9955",
  variable: "#9cdcfe",
  constant: "#4fc1ff",
  type: "#4ec9b0",
  brackets1: "#ffd700",
  brackets2: "#da70d6",
  brackets3: "#179fff",
  operator: "#d4d4d4",
  default: "#d4d4d4",
};
