import { CodeTokenBuilder, CodeTokenProps, CodeTokenType } from "../types";

export const createToken = new Proxy(
  {},
  {
    get: (_, prop: CodeTokenType) => {
      const builder: CodeTokenBuilder<React.ElementType> = (
        children,
        props?
      ) => ({
        type: prop,
        children,
        ...props,
      });
      return builder;
    },
  }
) as Record<CodeTokenType, CodeTokenBuilder<React.ElementType>>;

export const whiteSpace = (count: number = 1): CodeTokenProps => ({
  type: "default",
  children: " ".repeat(count),
});
