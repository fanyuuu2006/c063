import { CodeTokenType } from "../types";

export const map: Record<CodeTokenType, React.CSSProperties["color"]> = {
  keyword1: "#569cd6", // 深藍色關鍵字
  keyword2: "#c586c0", // 紫色關鍵字
  string: "#ce9178", // 淺棕色字串
  number: "#b5cea8", // 淺綠色數字
  comment: "#6a9955", // 綠色註解
  variable: "#9cdcfe", // 藍色變數
  constant: "#4fc1ff", // 藍色常數
  type: "#4ec9b0", // 青綠色類型
  brackets1: "#ffd700", // 金黃色括號層級1
  brackets2: "#da70d6", // 紫羅蘭色括號層級2
  brackets3: "#179fff", // 藍色括號層級3
  operator: "#d4d4d4", // 淺灰色運算符
  default: "#d4d4d4", // 淺灰色預設文字
};
