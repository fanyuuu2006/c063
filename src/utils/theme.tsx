import { CodeTheme, CodeTokenType } from "../types";

export const loadTheme = async (
  theme: CodeTheme
): Promise<Record<CodeTokenType, React.CSSProperties["color"]>> => {
  const { map } = await import(`../libs/themes/${theme}`);
  return map;
};
