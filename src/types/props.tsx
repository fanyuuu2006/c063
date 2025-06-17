import { themes } from "../libs";
import { AsComponentProps, OverrideProps } from "./common";
/**
 * 用於表示語法高亮中每個 token 的語意分類，對應於 `<CodeToken />` 中的 `type`。
 *
 * 每個類型會對應特定的顏色與用途，例如關鍵字、數字、字串、註解等，
 * 可配合 `codeColoreMap` 指定顯示樣式。s
 *
 * 類型分為以下幾大類：
 *
 * - `keyword1` / `keyword2`: 關鍵字，如 `const`、`return`、`import` 等，分顏色類別。
 * - `string`: 字串常值，如 `'text'`、`"value"`。
 * - `number`: 數字常值，如 `123`、`3.14`。
 * - `comment`: 註解內容，如 `//`。
 * - `type`: 類型定義，如 `interface`、`enum`、`type`。
 * - `variable`: 識別符號，如變數名、函式名、類別名。
 * - `constant`: 常數或靜態值，如 `PI`、`MAX_VALUE`。
 * - `brackets1`, `brackets2`, `brackets3`: 括號配對，區分不同層級的括號。
 * - `operator`: 運算符，如 `=`, `+`, `===`, `<`, `>=`。
 * - `default`: 其他符號，如 `;`, `,`, `.`, `?`, `"`, `'`。
 *
 * @example
 * const token: CodeTokenType = "keyword1";
 * const token2: CodeTokenType = "string";
 */
export type CodeTokenType =
  | `keyword${1 | 2}` // 關鍵字，分兩種樣式層級
  | "string" // 字串常值：'abc'、"hello"
  | "number" // 數值常量：123、3.14
  | "comment" // 註解內容：// 或 /* */
  | "type" // 類型定義：type、interface、enum
  | "variable" // 變數名、函式名、類別名等識別符號
  | "constant" // 常數值：例如 enum 值、靜態屬性
  | `brackets${1 | 2 | 3}` // 括號配對，三層不同樣式：(), [], {}
  | "operator" // 運算符號：=、+、*、===、<、>= 等
  | "default"; // 其他符號：, ; . ? ! 等

/**
 * 表示可用的語法高亮主題名稱。
 * 對應 `themes` 陣列中定義的名稱，例如 `"vscode-dark"`。
 *
 * @example
 * const theme: CodeTheme = "vscode-dark";
 */
export type CodeTheme = (typeof themes)[number];

/**
 * 單一語法 token 的屬性，用於 <CodeToken /> 元件。
 *
 * @template T HTML 或客製元素，例如 span、a、Link 等
 */
export type CodeTokenProps<T extends React.ElementType> = AsComponentProps<
  T,
  {
    /**
     * 語法 token 的語意類型，用於指定樣式顏色。
     */
    type?: CodeTokenType;
    /**
     * 語法主題名稱。
     * @default "vscode-dark"
     */
    theme?: CodeTheme;
  }
>;

export type CodeTokenBuilder = <T extends React.ElementType>(
  children: CodeTokenProps<T>["children"],
  props?: CodeTokenProps<T>
) => CodeTokenProps<T>;

/**
 * 用於單一程式碼行的屬性，用在 <CodeLine /> 或類似元件中。
 */
export type CodeLineProps<T extends React.ElementType> = OverrideProps<
  React.HTMLAttributes<HTMLElement>,
  {
    /**
     * 該行所包含的語法 token。
     *
     * @example
     * ```tsx
     * <CodeLine tokens={[
     *   { type: "keyword-blue", children: "const" },
     *   { type: "variable", children: "myVar" },
     *   { type: "operator", children: "=" },
     *   { type: "string", children: "'Hello'" },
     * ]} />
     * ```
     */
    tokens: CodeTokenProps<T>[];
    /**
     * 語法主題名稱。
     * @default "vscode-dark"
     */
    theme?: CodeTheme;
  }
>;

export type CodeBlockProps<T extends React.ElementType> = OverrideProps<
  React.HTMLAttributes<HTMLPreElement>,
  {
    /**
     * 所有程式碼行的 token 陣列。
     *
     * @example
     * ```tsx
     * <CodeBlock tokenLines={[
     *   [
     *     { type: "keyword-blue", children: "const" },
     *     { type: "variable", children: "x" },
     *     { type: "operator", children: "=" },
     *     { type: "number", children: "42" },
     *   ],
     *   [
     *     { type: "keyword-purple", children: "return" },
     *     { type: "variable", children: "x" },
     *   ],
     * ]} />
     * ```
     */
    tokenLines: CodeTokenProps<T>[][];

    /**
     * 是否顯示行號。
     * @default true
     */
    showLineNumbers?: boolean;
    /**
     * 行號的樣式。
     * @default { color: "#888", fontSize: "0.8em" }
     * @example
     * ```tsx
     * <CodeBlock lineNumberStyle={{ color: "#888", fontSize: "0.8em" }} />
     * ```
     * */
    lineNumberStyle?: React.CSSProperties;
    /**
     * 語法主題名稱。
     * @default "vscode-dark"
     */
    theme?: CodeTheme;
  }
>;
