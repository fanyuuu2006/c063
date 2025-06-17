import { CodeTokenBuilder, CodeTokenProps, CodeTokenType } from "../types";
/**
 * 語法 token 的建構器集合，每個 key 對應一種語法類型（如 `keyword-blue`, `string`, `comment` 等），
 * 透過 Proxy 生成對應的 `CodeTokenBuilder`。
 *
 * 使用方式：
 * ```tsx
 * c063.keyword1("const") // -> { type: "keyword1", children: "const" }
 * c063.string("'hello'", { as: "code" }) // 可自訂 as 或其他 props
 * ```
 *
 * @example
 * tokens.push(c063.keyword1("const"));
 * tokens.push(c063.string("'Hello'"));
 *
 * @returns 一個以 `CodeTokenType` 為 key 的建構器函式集合
 */
const c063 = new Proxy(
  {},
  {
    get: (_, prop: CodeTokenType) => {
      const builder = <T extends React.ElementType = "span">(
        children: React.ReactNode,
        props: CodeTokenProps<T>
      ) => {
        return {
          children,
          type: prop,
          ...props,
        };
      };
      return builder as CodeTokenBuilder;
    },
  }
) as Record<CodeTokenType, CodeTokenBuilder>;

/**
 * 產生指定空白數量的 CodeToken，用於程式碼中的縮排或空格。
 *
 * @param count 空白字元數，預設為 1
 * @returns `CodeTokenProps` 物件，type 為 "default"，children 為空白字串
 *
 * @example
 * tokens.push(whiteSpace(2)); // -> { type: "default", children: "  " }
 */
export const whiteSpace = (count: number = 1): CodeTokenProps<"span"> =>
  c063.default(" ".repeat(count));

export default c063;
