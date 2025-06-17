import { CodeTokenType } from "../../types";

export const map: Record<CodeTokenType, React.CSSProperties["color"]> = {
  function: "rgb(210, 168, 255)",
  keyword1: "rgb(236, 142, 44)",
  keyword2: "rgb(236, 142, 44)",
  string: "rgb(165, 214, 255)",
  number: "rgb(121, 192, 255)",
  comment: "#rgb(139, 148, 158)",
  variable: "rgb(201, 209, 217)",
  constant: "rgb(121, 192, 255)",
  type: "rgb(236, 142, 44)",
  brackets1: "rgb(121, 192, 255)",
  brackets2: "rgb(121, 192, 255)",
  brackets3: "rgb(227, 179, 65)",
  operator: "rgb(236, 142, 44)",
  default: "rgb(201, 209, 217)",
};
