import { CodeTokenBuilder, CodeTokenProps, CodeTokenType } from "../types";

export const createToken = new Proxy(
  {},
  {
    get: (_, prop: CodeTokenType) => {
      const builder = <T extends React.ElementType = "span">(
        children: React.ReactNode,
        props: CodeTokenProps<T>
      ) => {
        return {
          children,
          type: prop,
          ...props,
        };
      };
      return builder;
    },
  }
) as Record<CodeTokenType, CodeTokenBuilder>;

export const whiteSpace = (count: number = 1): CodeTokenProps<"span"> => ({
  type: "default",
  children: " ".repeat(count),
});
