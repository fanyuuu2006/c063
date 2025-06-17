import { CodeTokenType } from "../types";

export const map: Record<CodeTokenType, React.CSSProperties["color"]> = {
  keyword1: "#0000ff",
  keyword2: "#0000ff",
  string: "#000000",
  number: "#098658",
  comment: "#008000",
  variable: "#000000",
  constant: "#000000",
  type: "#000000",
  brackets1: "#0431fa",
  brackets2: "#319331",
  brackets3: "#7b3814",
  operator: "#000000",
  default: "#000000",
};
