import { parsableLanguages } from "../libs";
import {
  CodeTokenProps,
  CodeTokenType,
  ParsableLanguage,
} from "../types/index";

const isParsableLanguage = (lang: string): lang is ParsableLanguage => {
  return parsableLanguages.includes(lang as ParsableLanguage);
};

const regexMap: Record<
  ParsableLanguage,
  { type: CodeTokenType; regex: RegExp }[]
> = {
  javascript: [
    { type: "comment", regex: /^\/\/.*/ },
    { type: "string", regex: /^(['"])(?:\\.|[^\\])*?\1/ },
    { type: "number", regex: /^\d+(\.\d+)?/ },
    {
      type: "keyword1",
      regex:
        /^(?:const|let|var|function|class|interface|type|enum|extends|implements|new|this|super)\b/,
    },
    {
      type: "keyword2",
      regex:
        /^(?:return|import|from|for|while|as|await|async|export|if|else|switch|case|break|continue)\b/,
    },
    {
      type: "type",
      regex: /^(?:string|number|boolean|void|any|unknown|never|Record|Array)\b/,
    },
    { type: "operator", regex: /^(===|!==|==|!=|<=|>=|=>|<|>|\+|-|\*|\/|=)/ },
    { type: "constant", regex: /^[A-Z_][A-Z0-9_]*/ },
    { type: "variable", regex: /^[a-zA-Z_$][a-zA-Z0-9_$]*/ },
    { type: "default", regex: /^[:;,.?]/ },
  ],
};
const bracketLevels = { "(": 1, "{": 1, "[": 1, ")": -1, "}": -1, "]": -1 };
// 解析單行 CodeTokenProps
const _parseTokenLine = (
  line: string,
  lang: ParsableLanguage
): CodeTokenProps<"span">[] => {
  if (!isParsableLanguage(lang)) return [];

  const result: CodeTokenProps<"span">[] = [];
  let remaining = line;
  let bracketDepth = 0;

  const bracketLevels = { "(": 1, "{": 1, "[": 1, ")": -1, "}": -1, "]": -1 };
  const bracketRegex = /^[\[\]{}()]/;
  const rules = regexMap[lang];

  outer: while (remaining.length > 0) {
    const whitespaceMatch = remaining.match(/^\s+/);
    if (whitespaceMatch) {
      result.push({ type: "default", children: whitespaceMatch[0] });
      remaining = remaining.slice(whitespaceMatch[0].length);
      continue outer;
    }

    // 括號處理（根據深度標記 brackets1 / 2 / 3）
    const bracketMatch = remaining.match(bracketRegex);
    if (bracketMatch) {
      const bracket = bracketMatch[0];
      bracketDepth += bracketLevels[bracket as keyof typeof bracketLevels] || 0;
      const depth = Math.max(1, Math.min(3, Math.abs(bracketDepth)));
      result.push({
        type: `brackets${depth}` as CodeTokenType,
        children: bracket,
      });
      remaining = remaining.slice(1);
      continue outer;
    }

    // 用 regexMap 中的每個語法規則嘗試匹配
    for (const { type, regex } of rules) {
      const match = remaining.match(regex);
      if (match) {
        result.push({ type, children: match[0] });
        remaining = remaining.slice(match[0].length);
        continue outer;
      }
    }

    // 如果沒有任何規則匹配，就當作 default 一個字元
    result.push({ type: "default", children: remaining[0] });
    remaining = remaining.slice(1);
  }

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
