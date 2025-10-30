import React from "react";
import {
  CodeTokenBuilder,
  CodeTokenProps,
  CodeTokenType,
  ParsableLanguage,
} from "../types";

const CODE_TOKEN_TYPES = new Set<CodeTokenType>([
  "keyword1",
  "keyword2",
  "function",
  "string",
  "number",
  "comment",
  "type",
  "variable",
  "constant",
  "brackets1",
  "brackets2",
  "brackets3",
  "operator",
  "default",
]);
/**
 * 檢查給定的值是否為有效的 `CodeTokenType`。
 * @param value 要檢查的值
 * @returns 如果值是有效的 `CodeTokenType`，則返回 `true`，否則返回 `false`
 * @example
 * ```ts
 * isCodeTokenType("keyword1"); // true
 * isCodeTokenType("invalidType"); // false
 * ```
 */
export const isCodeTokenType = (value: any): value is CodeTokenType => {
  return CODE_TOKEN_TYPES.has(value);
};

/**
 * `c063` 是一組語法高亮 token 建構器集合。
 * 每個 key 對應一種語法分類（如 `keyword1`, `string`, `comment` 等），
 * 回傳對應的 `CodeTokenProps` 物件。
 *
 * @example
 * ```tsx
 * const keyword = c063.keyword1("const");
 * const str = c063.string("'Hello'", { as: "code" });
 * ```
 *
 * @returns 以 `CodeTokenType` 為 key 的建構器函式集合。
 */
const c063 = new Proxy(
  {},
  {
    get: (_, prop: CodeTokenType) => {
      /**
       * 建立指定語法類型的 CodeToken。
       *
       * @param children 要包裹的 React 內容或字串
       * @param props 可選的額外屬性，如 `as` 或 `className`
       * @returns 一個 CodeToken 物件
       */
      const builder = <T extends React.ElementType = "span">(
        children: React.ReactNode,
        props?: CodeTokenProps<T>
      ) => {
        if (!isCodeTokenType(prop)) {
          throw new Error(`Invalid CodeTokenType: ${String(prop)}`);
        }
        return {
          children,
          type: prop,
          ...props,
        };
      };
      return builder;
    },
  }
) as Record<CodeTokenType, CodeTokenBuilder>;
export default c063;

/**
 * 產生指定空白數量的 CodeToken，用於縮排、空格等用途。
 *
 * @param count 空白字元數，預設為 1
 * @returns type 為 `"default"`、內容為空格的 `CodeTokenProps`
 *
 * @example
 * ```tsx
 * tokens.push(whiteSpace(2)); // -> { type: "default", children: "  " }
 * ```
 */
export const whiteSpace = (count: number = 1): CodeTokenProps<"span"> =>
  c063.default(" ".repeat(count));

/**
 * 遞迴抽取 ReactNode 中的純文字內容。
 *
 * @param children ReactNode，可以是字串、數字、JSX 元素、陣列等
 * @returns 純文字內容字串
 */
const _extractReactNode = (children: React.ReactNode): string => {
  if (typeof children === "string") return children;
  if (typeof children === "number") return children.toString();
  if (Array.isArray(children)) return children.map(_extractReactNode).join("");
  if (React.isValidElement(children)) {
    return _extractReactNode((children as React.JSX.Element).props.children);
  }
  if (typeof children === "object" && children !== null) {
    return React.Children.toArray(children).map(_extractReactNode).join("");
  }

  return ""; // 如果 children 是 null 或 undefined，則返回空字串
};

/**
 * 抽取單個 `CodeTokenProps` 的純文字內容。
 *
 * @param token 要處理的 token
 * @returns 對應的文字內容
 *
 * @example
 * ```tsx
 * extractTokenContent(c063.keyword1("return")); // => "return"
 * ```
 */
export const extractTokenContent = <T extends React.ElementType>(
  token: CodeTokenProps<T>
): string => {
  return _extractReactNode(token.children);
};

/**
 * 判斷兩個 token 是否相等（type 與內容皆相同）。
 *
 * @param a 第一個 token
 * @param b 第二個 token
 * @returns 是否相等
 */
export const isTokenEqual = <T extends React.ElementType>(
  a: CodeTokenProps<T>,
  b: CodeTokenProps<T>
): boolean => {
  if (!isCodeTokenType(a.type) || !isCodeTokenType(b.type)) {
    return false;
  }
  return a.type === b.type && extractTokenContent(a) === extractTokenContent(b);
};

/**
 * 將 token 列表按語法類型分類。
 *
 * @param lines 二維陣列，每行為一組 token
 * @returns 分組後的 token 映射，key 為 `CodeTokenType`
 */
export const groupTokensByType = <T extends React.ElementType>(
  lines: CodeTokenProps<T>[][]
): Record<CodeTokenType, CodeTokenProps<T>[]> => {
  const grouped: Record<CodeTokenType, CodeTokenProps<T>[]> = {
    keyword1: [],
    keyword2: [],
    function: [],
    string: [],
    number: [],
    comment: [],
    type: [],
    variable: [],
    constant: [],
    brackets1: [],
    brackets2: [],
    brackets3: [],
    operator: [],
    default: [],
  };

  for (const token of lines.flat()) {
    grouped[token.type ?? "default"].push(token);
  }

  return grouped;
};

/**
 * 待實作
 * `parseTokens` 是語法解析器的代理集合，用來解析特定語言的程式碼字串。
 *
 * 每個 key 對應一種可解析語言（如 `"javascript"`、`"python"` 等），
 * 傳入原始程式碼字串後，回傳解析後的 token 二維陣列（每行一組 token）。
 *
 *
 * @example
 * ```ts
 * const tokens = parseTokens.javascript("const x = 1;");
 * ```
 *
 * @returns 語法高亮用的 `CodeTokenProps` 二維陣列
 */
const parseTokens = new Proxy(
  {},
  {
    get: (_, prop: ParsableLanguage) => {
      const parser = (content: string): CodeTokenProps<"span">[][] => {
        const result: CodeTokenProps<"span">[][] = [];

        return result;
      };
      return parser;
    },
  }
) as Record<ParsableLanguage, (content: string) => CodeTokenProps<"span">[][]>;
