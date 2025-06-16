import { CodeTokenBuilder, CodeTokenProps, CodeTokenType } from "../types";

export const createToken = new Proxy(
  {},
  {
    get: (_, prop: CodeTokenType) => {
      const builder: CodeTokenBuilder = (children, props?) => ({
        type: prop,
        children,
        ...props,
      });
      return builder;
    },
  }
) as Record<CodeTokenType, CodeTokenBuilder>;

export const whiteSpace = (count: number = 1): CodeTokenProps => ({
  type: "default",
  children: " ".repeat(count),
});
