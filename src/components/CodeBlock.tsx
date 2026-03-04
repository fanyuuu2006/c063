import { CSSProperties } from "react";
import { CodeBlockProps } from "../types/index";
import { CodeLine } from "./CodeLine";

const preStyle: CSSProperties = { margin: 0, padding: 0, overflowX: "auto" };
const tableStyle: CSSProperties = { borderCollapse: "collapse", width: "100%" };
const rowStyle: CSSProperties = { verticalAlign: "top" };
const codeCellStyle: CSSProperties = { width: "100%" };
const lineNumberBaseStyle: CSSProperties = {
  paddingInline: "0.5rem",
  textAlign: "right",
  whiteSpace: "pre",
  fontVariantNumeric: "tabular-nums",
  color: "#888",
  userSelect: "none",
};

/**
 * 顯示完整程式碼區塊，支援多行語法 token 與行號顯示。
 *
 * @template T 元件渲染類型，預設為 <span>
 * @param props.tokenLines 所有程式碼行的 token 陣列
 * @param props.showLineNumbers 是否顯示行號，預設為 true
 * @param props.lineNumberStyle 行號的自訂樣式
 * @param props.theme 主題
 * @param rest 其他傳遞給 <pre> 的屬性
 * @returns JSX 元素，呈現語法高亮的程式碼區塊
 */
export const CodeBlock = <T extends React.ElementType = "span">({
  tokenLines,
  showLineNumbers = true,
  lineNumberStyle,
  autoWrap,
  theme,
  ...rest
}: CodeBlockProps<T>) => {
  return (
    <pre {...rest} style={preStyle}>
      <table style={tableStyle}>
        <tbody>
          {tokenLines.map((line, index) => (
            <tr key={index} style={rowStyle}>
              {showLineNumbers && (
                <td
                  style={{
                    ...lineNumberBaseStyle,
                    ...lineNumberStyle,
                  }}
                >
                  {index + 1}
                </td>
              )}
              <td style={codeCellStyle}>
                <CodeLine theme={theme} tokens={line} autoWrap={autoWrap} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </pre>
  );
};

CodeBlock.displayName = "CodeBlock";
