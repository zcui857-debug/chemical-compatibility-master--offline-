
import { GoogleGenAI, Type } from "@google/genai";
import { ChemicalInfo, StorageCategory } from "./types.ts";
import { H_TO_CATEGORY_RULES, CATEGORY_LABELS } from "./constants.ts";

// 严格使用 API_KEY 环境变量
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function fetchChemicalInfo(cas: string): Promise<ChemicalInfo> {
  const prompt = `查找 CAS 号为 ${cas} 的化学品信息。提供官方中文名称、常见的 GHS H 短语（危险说明，如 H225, H301 等），以及在储存语境下是否属于易燃（flammable）物质。如果 CAS 号无效，请返回错误。`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING, description: "化学品中文名称" },
          hStatements: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "H短语列表 (例如 ['H225', 'H314'])"
          },
          isFlammable: { type: Type.BOOLEAN, description: "是否易燃" }
        },
        required: ["name", "hStatements", "isFlammable"]
      }
    }
  });

  const data = JSON.parse(response.text);
  
  let detectedCategory = StorageCategory.UNKNOWN;
  const hSet = new Set(data.hStatements.map((s: string) => s.toUpperCase().trim()));

  for (const rule of H_TO_CATEGORY_RULES) {
    const hasHCodes = rule.hCodes.some(code => hSet.has(code));
    if (hasHCodes) {
      if (rule.flammable !== undefined) {
        if (rule.flammable === data.isFlammable) {
          detectedCategory = rule.category;
          break;
        }
      } else {
        detectedCategory = rule.category;
        break;
      }
    }
  }

  if (detectedCategory === StorageCategory.UNKNOWN && data.isFlammable) {
      if (hSet.has('H224') || hSet.has('H225') || hSet.has('H226')) detectedCategory = StorageCategory.CAT_3;
  }

  return {
    cas: cas,
    name: data.name,
    hStatements: data.hStatements,
    isFlammable: data.isFlammable,
    category: detectedCategory,
    categoryLabel: CATEGORY_LABELS[detectedCategory]
  };
}
