import { themeMap } from "../libs/index";
import { CodeTokenProps } from "../types/index";

/**
 * 渲染單一語法 token（例如關鍵字、字串、註解等），可指定標籤與樣式。
 *
 * @template T 元件渲染類型，預設為 <span>
 * @param props.as 指定要渲染的 HTML 標籤或客製元件
 * @param props.type 語法類型，用於對應不同顏色
 * @param props.style 額外樣式，會與語法顏色合併
 * @param props.children 顯示的程式碼字串
 * @param props.theme 主題設定
 * @param rest 其他 HTML 屬性
 * @returns JSX 元素，顯示帶有語法顏色的 token
 */
export const CodeToken = <T extends React.ElementType = "span">({
  as,
  style,
  children,
  type,
  theme,
  ...rest
}: CodeTokenProps<T>) => {
  const Tag = as || "span";

  return (
    <Tag
      {...rest}
      style={{
        color: themeMap[theme || "default-dark-modern"][type || "default"],
        ...style,
      }}
    >
      {children}
    </Tag>
  );
};

CodeToken.displayName = "CodeToken";
