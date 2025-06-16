import { CodeTokenType } from "../types/props";

export const codeColoreMap: Record<
  CodeTokenType,
  React.HTMLAttributes<React.ElementType>["className"]
> = {
  "keyword-blue": "#569cd6",
  "keyword-purple": "#c586c0",
  string: "#ce9178",
  number: "#b5cea8",
  comment: "#6a9955",
  variable: "#9cdcfe",
  constant: "#4fc1ff",
  type: "#4ec9b0",
  "brackets-1": "#ffd700",
  "brackets-2": "#da70d6",
  "brackets-3": "#179fff",
  operator: "#d4d4d4",
  default: "#d4d4d4",
};
