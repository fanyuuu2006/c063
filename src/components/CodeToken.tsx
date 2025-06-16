import { codeColoreMap } from "../libs/codeColorMap";
import { CodeTokenProps } from "../types/props";

export const CodeToken = <T extends React.ElementType = "span">({
  as,
  style,
  children,
  type,
  ...rest
}: CodeTokenProps<T>) => {
  const Tag = as || "span";

  return (
    <Tag
      {...rest}
      style={{
        color: codeColoreMap[type || "default"],
        ...style,
      }}
    >
      {children}
    </Tag>
  );
};

CodeToken.displayName = "CodeToken";
