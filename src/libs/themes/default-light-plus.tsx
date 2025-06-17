import { CodeTokenType } from "../../types";

export const map: Record<CodeTokenType, React.CSSProperties["color"]> = {
  function: "#795e26",
  keyword1: "#0000ff",
  keyword2: "#af00db",
  string: "#a31515",
  number: "#098658",
  comment: "#008000",
  variable: "#001080",
  constant: "#0070c1",
  type: "#267f99",
  brackets1: "#0431fa",
  brackets2: "#319331",
  brackets3: "#7b3814",
  operator: "#000000",
  default: "#000000",
};
