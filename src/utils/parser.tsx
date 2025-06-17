import { parsableLanguages } from "../libs";
import { CodeTokenProps, ParsableLanguage } from "../types/index";

const isParsableLanguage = (lang: string): lang is ParsableLanguage => {
  return parsableLanguages.includes(lang as ParsableLanguage);
};

// 解析單行 CodeTokenProps
const _parseTokenLine = (
  line: string,
  lang: ParsableLanguage
): CodeTokenProps<"span">[] => {
  if (!isParsableLanguage(lang)) return [];
  const result: CodeTokenProps<"span">[] = [];
  // 這邊放對應語言的解析邏輯或呼叫外部 parser
  // 目前先用預設行全文字 token
  result.push({ type: "default", children: line });
  return result;
};
const parseTokenLines = new Proxy(
  {},
  {
    get:
      (_, prop: ParsableLanguage) =>
      (content: string): CodeTokenProps<"span">[][] =>
        content.split("\n").map((line) => _parseTokenLine(line, prop)),
  }
) as Record<ParsableLanguage, (content: string) => CodeTokenProps<"span">[][]>;

// parseTokenLines.javascript(
//   `const FanYu = {
//   name: '范余振富',
//   nickname: '飯魚',
//   age: 19, // <-點看看🤫
//   hobbies: ['寫程式', '繪畫'],
//   skills: ['TypeScript', 'React', 'Python'],
// } as const;`
// );
