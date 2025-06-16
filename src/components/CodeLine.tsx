import { CodeLineProps } from "../types/props";
import { CodeToken } from "./CodeToken";

export const CodeLine = ({ style, tokens, ...rest }: CodeLineProps) => {
  return (
    <code
      {...rest}
      style={{
        whiteSpace: "pre-wrap",
        ...style,
      }}
    >
      {tokens.map((token, index) => (
        <CodeToken key={`${token.type}-${index}`} {...token} />
      ))}
    </code>
  );
};

CodeLine.displayName = "CodeLine";
