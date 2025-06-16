import { AsComponentProps, DistributiveOmit, OverrideProps } from "./common";

export type KeywordColorType =
  | "blue" // const, let, function, if, else class type
  | "purple"; // import, export, from, as ,return

export type CodeTokenType =
  | `keyword-${KeywordColorType}`
  | "string" // string
  | "number" // number
  | "comment" // comment ex: //, /* */, /** */
  | "type" // type, interface, enum
  | "variable" // variable, function name, class name, method name
  | "constant" // constant, enum value, static property
  | `brackets-${1 | 2 | 3}` // (), [], {}, <>, (), [], {}, <
  | "operator" // +, -, *, /, %, =, ==, ===, !=, !==, <, >, <=, >=
  | "default"; // ., ,, ;, :, ?, !, @, #, $, %, ^, &, *, (, ), [, ], {, }, <, >, /, \, |, \", ', `;

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
  }
>;
