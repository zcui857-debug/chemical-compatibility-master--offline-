
import { ChemicalInfo, StorageCategory } from "./types.ts";
import { H_TO_CATEGORY_RULES, CATEGORY_LABELS } from "./constants.ts";
import { CHEMICAL_DB } from "./chemicalDatabase.ts";

/**
 * 模拟原有的异步查询，但现在数据源来自本地静态数据库。
 * 如果数据库中没有该 CAS，将抛出错误提示。
 */
export async function fetchChemicalInfo(cas: string): Promise<ChemicalInfo> {
  // 简单模拟网络延迟，提升用户感知的“评估过程”
  await new Promise(resolve => setTimeout(resolve, 500));

  const trimmedCas = cas.trim();
  const rawData = CHEMICAL_DB[trimmedCas];

  if (!rawData) {
    throw new Error(`CAS号 ${trimmedCas} 未在本地数据库中找到。请联系管理员添加或检查输入。`);
  }

  let detectedCategory = StorageCategory.UNKNOWN;
  const hSet = new Set(rawData.hStatements.map((s: string) => s.toUpperCase().trim()));

  // 沿用原有的 H短语 -> 储存分类 映射逻辑
  for (const rule of H_TO_CATEGORY_RULES) {
    const hasHCodes = rule.hCodes.some(code => hSet.has(code));
    if (hasHCodes) {
      if (rule.flammable !== undefined) {
        if (rule.flammable === rawData.isFlammable) {
          detectedCategory = rule.category;
          break;
        }
      } else {
        detectedCategory = rule.category;
        break;
      }
    }
  }

  // 兜底逻辑：如果是易燃物质但未识别分类，归类为 易燃液体 (3)
  if (detectedCategory === StorageCategory.UNKNOWN && rawData.isFlammable) {
      if (hSet.has('H224') || hSet.has('H225') || hSet.has('H226')) detectedCategory = StorageCategory.CAT_3;
  }

  return {
    cas: trimmedCas,
    name: rawData.name,
    hStatements: rawData.hStatements,
    isFlammable: rawData.isFlammable,
    category: detectedCategory,
    categoryLabel: CATEGORY_LABELS[detectedCategory]
  };
}
