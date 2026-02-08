
interface RawChemicalData {
  name: string;
  hStatements: string[];
  isFlammable: boolean;
}

/**
 * 离线化学品安全数据库
 * 涵盖：有机溶剂、无机酸、无机碱、盐类、常见有机试剂、工业气体等
 */
export const CHEMICAL_DB: Record<string, RawChemicalData> = {
  // --- 1. 常见有机溶剂 ---
  "64-17-5": { name: "乙醇", hStatements: ["H225", "H319"], isFlammable: true },
  "67-63-0": { name: "异丙醇", hStatements: ["H225", "H319", "H336"], isFlammable: true },
  "67-64-1": { name: "丙酮", hStatements: ["H225", "H319", "H336"], isFlammable: true },
  "67-56-1": { name: "甲醇", hStatements: ["H225", "H301", "H311", "H331", "H370"], isFlammable: true },
  "75-05-8": { name: "乙腈", hStatements: ["H225", "H302", "H312", "H332", "H319"], isFlammable: true },
  "141-78-6": { name: "乙酸乙酯", hStatements: ["H225", "H319", "H336"], isFlammable: true },
  "109-99-9": { name: "四氢呋喃", hStatements: ["H225", "H302", "H319", "H335", "H351"], isFlammable: true },
  "110-54-3": { name: "正己烷", hStatements: ["H225", "H304", "H315", "H336", "H361", "H373", "H411"], isFlammable: true },
  "108-88-3": { name: "甲苯", hStatements: ["H225", "H304", "H315", "H336", "H361", "H373"], isFlammable: true },
  "1330-20-7": { name: "二甲苯", hStatements: ["H226", "H312", "H315", "H332"], isFlammable: true },
  "75-09-2": { name: "二氯甲烷", hStatements: ["H315", "H319", "H335", "H336", "H351"], isFlammable: false },
  "68-12-2": { name: "N,N-二甲基甲酰胺(DMF)", hStatements: ["H226", "H312", "H319", "H332", "H360D"], isFlammable: true },
  "127-19-5": { name: "N,N-二甲基乙酰胺(DMAc)", hStatements: ["H312", "H332", "H360D"], isFlammable: true },
  "60-29-7": { name: "乙醚", hStatements: ["H224", "H302", "H336"], isFlammable: true },
  "71-43-2": { name: "苯", hStatements: ["H225", "H304", "H315", "H319", "H340", "H350", "H372"], isFlammable: true },
  "110-82-7": { name: "环己烷", hStatements: ["H225", "H304", "H315", "H336", "H410"], isFlammable: true },
  "108-10-1": { name: "甲基异丁基甲酮(MIBK)", hStatements: ["H225", "H319", "H332", "H335"], isFlammable: true },
  "123-86-4": { name: "乙酸正丁酯", hStatements: ["H226", "H336"], isFlammable: true },

  // --- 2. 强酸与弱酸 ---
  "7647-01-0": { name: "盐酸", hStatements: ["H314", "H335"], isFlammable: false },
  "7664-93-9": { name: "硫酸", hStatements: ["H314"], isFlammable: false },
  "7697-37-2": { name: "硝酸", hStatements: ["H272", "H314"], isFlammable: false },
  "7664-38-2": { name: "磷酸", hStatements: ["H314"], isFlammable: false },
  "7664-39-3": { name: "氢氟酸", hStatements: ["H300", "H310", "H330", "H314"], isFlammable: false },
  "64-19-7": { name: "乙酸(冰醋酸)", hStatements: ["H226", "H314"], isFlammable: true },
  "64-18-6": { name: "甲酸", hStatements: ["H302", "H314", "H331"], isFlammable: false },
  "79-09-4": { name: "丙酸", hStatements: ["H226", "H314"], isFlammable: true },
  "79-11-8": { name: "氯乙酸", hStatements: ["H301", "H311", "H331", "H314", "H400"], isFlammable: false },
  "7601-90-3": { name: "高氯酸", hStatements: ["H271", "H314"], isFlammable: false },

  // --- 3. 强碱与弱碱 ---
  "1310-73-2": { name: "氢氧化钠", hStatements: ["H314"], isFlammable: false },
  "1310-58-3": { name: "氢氧化钾", hStatements: ["H302", "H314"], isFlammable: false },
  "1336-21-6": { name: "氨水", hStatements: ["H314", "H335", "H400"], isFlammable: false },
  "1310-65-2": { name: "氢氧化锂", hStatements: ["H302", "H314"], isFlammable: false },
  "1305-62-0": { name: "氢氧化钙", hStatements: ["H315", "H318", "H335"], isFlammable: false },
  "124-41-4": { name: "甲醇钠", hStatements: ["H228", "H251", "H302", "H314"], isFlammable: true },

  // --- 4. 氧化剂与过氧化物 ---
  "7722-84-1": { name: "过氧化氢(双氧水)", hStatements: ["H272", "H302", "H314", "H332"], isFlammable: false },
  "7722-64-7": { name: "高锰酸钾", hStatements: ["H272", "H302", "H361", "H373", "H410"], isFlammable: false },
  "7775-09-9": { name: "氯酸钠", hStatements: ["H271", "H302", "H411"], isFlammable: false },
  "7778-50-9": { name: "重铬酸钾", hStatements: ["H272", "H340", "H350", "H360F", "H330", "H301", "H372", "H314"], isFlammable: false },
  "7727-21-1": { name: "过硫酸钾", hStatements: ["H272", "H302", "H315", "H317", "H319", "H334", "H335"], isFlammable: false },
  "78-18-2": { name: "过氧化甲乙酮", hStatements: ["H242", "H302", "H314", "H332"], isFlammable: true },

  // --- 5. 无机盐类 (部分) ---
  "7647-14-5": { name: "氯化钠", hStatements: [], isFlammable: false },
  "7447-40-7": { name: "氯化钾", hStatements: [], isFlammable: false },
  "10043-35-3": { name: "硼酸", hStatements: ["H360"], isFlammable: false },
  "7487-94-7": { name: "氯化汞", hStatements: ["H300", "H314", "H341", "H361", "H372", "H410"], isFlammable: false },
  "7758-98-7": { name: "硫酸铜", hStatements: ["H302", "H315", "H319", "H410"], isFlammable: false },
  "7733-02-0": { name: "硫酸锌", hStatements: ["H302", "H318", "H410"], isFlammable: false },
  "10102-40-6": { name: "钼酸钠", hStatements: [], isFlammable: false },
  "7631-99-4": { name: "硝酸钠", hStatements: ["H272", "H319"], isFlammable: false },
  "7757-79-1": { name: "硝酸钾", hStatements: ["H272"], isFlammable: false },
  "10124-37-5": { name: "硝酸钙", hStatements: ["H272", "H302", "H318"], isFlammable: false },

  // --- 6. 还原剂与活泼金属 ---
  "7440-23-5": { name: "钠(金属)", hStatements: ["H260", "H314"], isFlammable: true },
  "7440-09-7": { name: "钾(金属)", hStatements: ["H260", "H314"], isFlammable: true },
  "7439-95-4": { name: "镁粉", hStatements: ["H228", "H252", "H261"], isFlammable: true },
  "7440-66-6": { name: "锌粉", hStatements: ["H250", "H260", "H410"], isFlammable: true },
  "16940-66-2": { name: "硼氢化钠", hStatements: ["H260", "H301", "H314", "H360"], isFlammable: true },
  "1313-59-3": { name: "氧化钠", hStatements: ["H314"], isFlammable: false },

  // --- 7. 有机试剂 & 常用中间体 ---
  "50-00-0": { name: "甲醛", hStatements: ["H301", "H311", "H331", "H314", "H317", "H341", "H350"], isFlammable: true },
  "62-53-3": { name: "苯胺", hStatements: ["H301", "H311", "H331", "H317", "H318", "H341", "H351", "H372", "H400"], isFlammable: true },
  "98-95-3": { name: "硝基苯", hStatements: ["H301", "H311", "H331", "H351", "H360", "H372", "H411"], isFlammable: true },
  "108-95-2": { name: "苯酚", hStatements: ["H301", "H311", "H331", "H314", "H341", "H373"], isFlammable: false },
  "106-44-5": { name: "对甲酚", hStatements: ["H301", "H311", "H314"], isFlammable: true },
  "110-86-1": { name: "吡啶", hStatements: ["H225", "H302", "H312", "H332"], isFlammable: true },
  "107-06-2": { name: "1,2-二氯乙烷", hStatements: ["H225", "H302", "H315", "H319", "H335", "H350"], isFlammable: true },
  "156-59-2": { name: "顺-1,2-二氯乙烯", hStatements: ["H225", "H302", "H332", "H412"], isFlammable: true },
  "67-66-3": { name: "氯仿(三氯甲烷)", hStatements: ["H302", "H315", "H319", "H331", "H351", "H361", "H372"], isFlammable: false },
  "56-23-5": { name: "四氯化碳", hStatements: ["H301", "H311", "H331", "H351", "H372", "H412", "H420"], isFlammable: false },

  // --- 8. 常见气体 (压缩或液化) ---
  "7782-50-5": { name: "氯气", hStatements: ["H270", "H280", "H315", "H319", "H330", "H400"], isFlammable: false },
  "7664-41-7": { name: "氨气(无水)", hStatements: ["H221", "H280", "H314", "H331", "H400"], isFlammable: true },
  "74-85-1": { name: "乙烯", hStatements: ["H220", "H280", "H336"], isFlammable: true },
  "74-86-2": { name: "乙炔", hStatements: ["H220", "H280", "H230"], isFlammable: true },
  "124-38-9": { name: "二氧化碳", hStatements: ["H280"], isFlammable: false },
  "7727-37-9": { name: "氮气", hStatements: ["H280"], isFlammable: false },
  "7782-44-7": { name: "氧气", hStatements: ["H270", "H280"], isFlammable: false },
  "1333-74-0": { name: "氢气", hStatements: ["H220", "H280"], isFlammable: true },
  "74-82-8": { name: "甲烷", hStatements: ["H220", "H280"], isFlammable: true },
  "74-98-6": { name: "丙烷", hStatements: ["H220", "H280"], isFlammable: true },

  // --- 9. 更多精细化学品与盐类 ---
  "100-42-5": { name: "苯乙烯", hStatements: ["H226", "H315", "H319", "H332", "H361", "H372"], isFlammable: true },
  "108-05-4": { name: "乙酸乙烯酯", hStatements: ["H225", "H332", "H335", "H351"], isFlammable: true },
  "79-06-1": { name: "丙烯酰胺", hStatements: ["H301", "H312", "H315", "H317", "H319", "H332", "H340", "H350", "H361", "H372"], isFlammable: false },
  "107-13-1": { name: "丙烯腈", hStatements: ["H225", "H301", "H311", "H331", "H315", "H317", "H318", "H350", "H411"], isFlammable: true },
  "91-20-3": { name: "萘", hStatements: ["H228", "H302", "H351", "H410"], isFlammable: true },
  "120-12-7": { name: "蒽", hStatements: ["H315", "H317", "H319", "H335", "H410"], isFlammable: false },
  "85-01-8": { name: "菲", hStatements: ["H302", "H315", "H317", "H319", "H335", "H410"], isFlammable: false },
  "129-00-0": { name: "芘", hStatements: ["H315", "H319", "H410"], isFlammable: false },

  // --- 10. 常用生化试剂与缓冲液成分 ---
  "56-81-5": { name: "甘油", hStatements: [], isFlammable: false },
  "151-21-3": { name: "十二烷基硫酸钠(SDS)", hStatements: ["H228", "H302", "H311", "H315", "H318", "H335"], isFlammable: true },
  "77-86-1": { name: "Tris (三羟甲基氨基甲烷)", hStatements: ["H315", "H319"], isFlammable: false },
  "60-00-4": { name: "EDTA (乙二胺四乙酸)", hStatements: ["H319"], isFlammable: false },
  "9002-93-1": { name: "Triton X-100", hStatements: ["H302", "H318", "H411"], isFlammable: false },
  "9005-64-5": { name: "Tween 20", hStatements: [], isFlammable: false },
  "57-13-6": { name: "尿素", hStatements: [], isFlammable: false },
  "50-01-1": { name: "盐酸胍", hStatements: ["H302", "H315", "H319"], isFlammable: false },
  "1185-57-5": { name: "柠檬酸铁铵", hStatements: [], isFlammable: false },

  // --- 11. 各类常见的金属盐类补全 ---
  "10025-70-4": { name: "氯化锶", hStatements: [], isFlammable: false },
  "7789-41-5": { name: "溴化钙", hStatements: ["H318"], isFlammable: false },
  "7758-02-3": { name: "溴化钾", hStatements: ["H319"], isFlammable: false },
  "7681-11-0": { name: "碘化钾", hStatements: ["H372"], isFlammable: false },
  "7681-82-5": { name: "碘化钠", hStatements: ["H315", "H319", "H400"], isFlammable: false },
  "7558-79-4": { name: "磷酸氢二钠", hStatements: [], isFlammable: false },
  "7778-77-0": { name: "磷酸二氢钾", hStatements: [], isFlammable: false },
  "7757-82-6": { name: "硫酸钠", hStatements: [], isFlammable: false },
  "7778-80-5": { name: "硫酸钾", hStatements: [], isFlammable: false },
  "7487-88-9": { name: "硫酸镁", hStatements: [], isFlammable: false },
  "10101-41-4": { name: "硫酸钙(石膏)", hStatements: [], isFlammable: false },
  "10043-01-3": { name: "硫酸铝", hStatements: ["H318"], isFlammable: false },
  "7783-20-2": { name: "硫酸铵", hStatements: [], isFlammable: false },
  "144-55-8": { name: "碳酸氢钠", hStatements: [], isFlammable: false },
  "497-19-8": { name: "碳酸钠", hStatements: ["H319"], isFlammable: false },
  "584-08-7": { name: "碳酸钾", hStatements: ["H302", "H315", "H319", "H335"], isFlammable: false },
  "544-17-2": { name: "甲酸钙", hStatements: ["H318"], isFlammable: false },
  "631-61-8": { name: "乙酸铵", hStatements: [], isFlammable: false },
  "127-08-2": { name: "乙酸钾", hStatements: [], isFlammable: false },
  "127-09-3": { name: "乙酸钠", hStatements: [], isFlammable: false },

  // ... 此处省略部分数据，实际应用中可通过自动化脚本将1000+条记录注入此 Record
};
