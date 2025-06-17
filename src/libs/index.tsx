import type { CodeTokenType, CodeTheme } from "../types";
import { map as darkModern } from "./default-dark-modern";
import { map as vsLight } from "./visual-studio-light";

export const themeRegistry = {
  "default-dark-modern": darkModern,
  "visual-studio-light": vsLight,
} as const;

// 自動推導主題名稱
export const themes = Object.keys(
  themeRegistry
) as (keyof typeof themeRegistry)[];

// themeMap 保留給外部使用
export const themeMap: Record<
  CodeTheme,
  Record<CodeTokenType, React.CSSProperties["color"]>
> = themeRegistry;
