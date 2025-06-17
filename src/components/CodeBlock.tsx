import { CodeBlockProps } from "../types/index";
import { CodeLine } from "./CodeLine";
/**
 * 顯示完整程式碼區塊，支援多行語法 token 與行號顯示。
 *
 * @template T 元件渲染類型，預設為 <span>
 * @param props.tokenLines 所有程式碼行的 token 陣列
 * @param props.showLineNumbers 是否顯示行號，預設為 true
 * @param props.lineNumberStyle 行號的自訂樣式
 * @param rest 其他傳遞給 <pre> 的屬性
 * @returns JSX 元素，呈現語法高亮的程式碼區塊
 */
export const CodeBlock = <T extends React.ElementType = "span">({
  tokenLines,
  showLineNumbers = true,
  lineNumberStyle,
  theme,
  ...rest
}: CodeBlockProps<T>) => {
  return (
    <pre {...rest}>
      {tokenLines.map((line, index) => (
        // eslint-disable-next-line react/react-in-jsx-scope
        <div
          key={index}
          style={{
            display: "flex",
            flexWrap: "nowrap",
            width: "100%",
            gap: "0.5rem",
          }}
        >
          {showLineNumbers && (
            <span
              style={{ color: "#888", userSelect: "none", ...lineNumberStyle }}
            >
              {index + 1}
            </span>
          )}
          <CodeLine theme={theme} tokens={line} />
        </div>
      ))}
    </pre>
  );
};

CodeBlock.displayName = "CodeBlock";
