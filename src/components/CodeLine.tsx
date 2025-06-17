import { CodeLineProps } from "../types/index";
import { CodeToken } from "./CodeToken";
/**
 * 渲染單一程式碼行，包含多個語法 token。
 *
 * @template T 元件渲染類型，例如 <code>、<span> 等
 * @param props.tokens 該行所包含的語法 token 陣列
 * @param props.style 自訂樣式，會與 whiteSpace: pre-wrap 合併
 * @param props.theme 主題 
 * @param rest 其他 HTMLAttributes
 * @returns JSX 元素，呈現語法 token 的單行程式碼
 */
export const CodeLine = <T extends React.ElementType = "span">({
  style,
  tokens,
  theme,
  ...rest
}: CodeLineProps<T>) => {
  return (
    <code
      {...rest}
      style={{
        whiteSpace: "pre-wrap",
        ...style,
      }}
    >
      {tokens.map((token, index) => (
        <CodeToken key={index} theme={theme} {...token} />
      ))}
    </code>
  );
};

CodeLine.displayName = "CodeLine";
