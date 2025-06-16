import { CodeLineProps } from "../types/props";
import { CodeToken } from "./CodeToken";

export const CodeLine = <T extends React.ElementType>({
  style,
  tokens,
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
        <CodeToken key={`${token.type}-${index}`} {...token} />
      ))}
    </code>
  );
};

CodeLine.displayName = "CodeLine";
