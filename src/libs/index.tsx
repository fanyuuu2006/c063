import type { CodeTokenType, CodeTheme } from "../types";
import { map as darkModern } from "./default-dark-modern";
import { map as dark } from "./default-dark";
import { map as darkPlus } from "./default-dark-plus";
import { map as vsLight } from "./visual-studio-light";
import { map as lightPlus } from "./default-light-plus";
import { map as lightModern } from "./default-light-modern";
import { map as ghLight } from "./github-light";
import { map as ghLightDefault } from "./github-light-default";
import { map as ghLightBilnd } from "./github-light-colorblind";
import { map as ghDark } from "./github-dark";
import { map as ghDarkDefault } from "./github-dark-default";
import { map as ghDarkBilnd } from "./github-dark-colorblind";

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
