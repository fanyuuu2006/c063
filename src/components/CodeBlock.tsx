import { CodeBlockProps } from "../types/props";
import { CodeLine } from "./CodeLine";

export const CodeBlock = <T extends React.ElementType = "span">({
  tokenLines,
  showLineNumbers = true,
  lineNumberStyle,
  ...rest
}: CodeBlockProps<T>) => {
  return (
    <pre {...rest}>
      {tokenLines.map((line, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexWrap: "nowrap",
            width: "100%",
            gap: "0.5rem",
          }}
        >
          {/* 如果需要顯示行號，則在每行前添加行號 */}
          {showLineNumbers && (
            <span
              style={{ color: "#888", userSelect: "none", ...lineNumberStyle }}
            >
              {index + 1}
            </span>
          )}
          <CodeLine tokens={line} />
        </div>
      ))}
    </pre>
  );
};

CodeBlock.displayName = "CodeBlock";
