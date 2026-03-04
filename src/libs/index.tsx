import type { CodeTokenType, CodeTheme } from "../types";
import { map as darkModern } from "./themes/default-dark-modern";
import { map as dark } from "./themes/default-dark";
import { map as darkPlus } from "./themes/default-dark-plus";
import { map as vsLight } from "./themes/visual-studio-light";
import { map as lightPlus } from "./themes/default-light-plus";
import { map as lightModern } from "./themes/default-light-modern";
import { map as ghLight } from "./themes/github-light";
import { map as ghLightDefault } from "./themes/github-light-default";
import { map as ghLightBilnd } from "./themes/github-light-colorblind";
import { map as ghDark } from "./themes/github-dark";
import { map as ghDarkDefault } from "./themes/github-dark-default";
import { map as ghDarkBilnd } from "./themes/github-dark-colorblind";

const _themeRegistry = {
  "default-dark-modern": darkModern,
  "default-dark": dark,
  "default-dark-plus": darkPlus,
  "visual-studio-light": vsLight,
  "default-light-plus": lightPlus,
  "default-light-modern": lightModern,
  "github-light": ghLight,
  "github-light-default": ghLightDefault,
  "github-light-colorblind": ghLightBilnd,
  "github-dark": ghDark,
  "github-dark-default": ghDarkDefault,
  "github-dark-colorblind": ghDarkBilnd,
} as const;

// 自動推導主題名稱
export const themes = Object.keys(
  _themeRegistry
) as (keyof typeof _themeRegistry)[];

// themeMap 保留給外部使用
export const themeMap: Record<
  CodeTheme,
  Record<CodeTokenType, React.CSSProperties["color"]>
> = _themeRegistry;

export const CODE_TOKEN_TYPES = [
  "keyword1", // 關鍵字 1
  "keyword2", // 關鍵字 2
  "function", // 函式名稱
  "string", // 字串常值
  "number", // 數字常值
  "comment", // 註解內容
  "type",  // 類型定義
  "variable",  // 變數名稱、函式名稱、類別名稱等識別符號
  "constant", // 常數值，例如 enum 值、靜態屬性等
  "brackets1", // 括號第一層
  "brackets2", // 括號第二層
  "brackets3", // 括號第三層
  "operator", // 運算符號
  "default", // 其他符號，例如逗號、分號、點號等
] as const;