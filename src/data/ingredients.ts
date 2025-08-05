// src/data/ingredients.ts
export type CatKey =
  | "veg"
  | "meat"
  | "seafood"
  | "tofu_eggs"
  | "staple"
  | "sauce_paste"
  | "spice_aromatic"
  | "herb"
  | "other";

export interface Item {
  slug: string;
  en: string;
  zh: string;
  ms: string;
  api?: string; // optional: override English when calling external APIs
}

export const CATEGORIES: Record<CatKey, Item[]> = {
  veg: [
    {
      slug: "kangkung",
      en: "water spinach",
      zh: "空心菜",
      ms: "kangkung",
      api: "water spinach",
    },
    {
      slug: "chye-sim",
      en: "choy sum",
      zh: "菜心",
      ms: "sawi bunga",
      api: "choy sum",
    },
    {
      slug: "kai-lan",
      en: "Chinese broccoli",
      zh: "芥蓝",
      ms: "kailan",
      api: "chinese broccoli",
    },
    {
      slug: "bok-choy",
      en: "bok choy",
      zh: "小白菜",
      ms: "sawi putih",
      api: "bok choy",
    },
    {
      slug: "bean-sprouts",
      en: "bean sprouts",
      zh: "豆芽",
      ms: "tauge",
      api: "bean sprouts",
    },
    {
      slug: "long-beans",
      en: "yardlong beans",
      zh: "长豆",
      ms: "kacang panjang",
      api: "long beans",
    },
    { slug: "okra", en: "okra", zh: "秋葵", ms: "bendi", api: "okra" },
    {
      slug: "eggplant",
      en: "eggplant (brinjal)",
      zh: "茄子",
      ms: "terung",
      api: "eggplant",
    },
    {
      slug: "bitter-gourd",
      en: "bitter gourd",
      zh: "苦瓜",
      ms: "peria",
      api: "bitter melon",
    },
    { slug: "cabbage", en: "cabbage", zh: "卷心菜", ms: "kobis" },
    { slug: "carrot", en: "carrot", zh: "胡萝卜", ms: "lobak merah" },
    { slug: "potato", en: "potato", zh: "土豆", ms: "kentang" },
    { slug: "tomato", en: "tomato", zh: "番茄", ms: "tomato" },
    { slug: "cucumber", en: "cucumber", zh: "黄瓜", ms: "timun" },
  ],

  meat: [
    { slug: "chicken", en: "chicken", zh: "鸡肉", ms: "ayam" },
    { slug: "pork", en: "pork", zh: "猪肉", ms: "babi" },
    { slug: "beef", en: "beef", zh: "牛肉", ms: "daging lembu" },
    { slug: "mutton", en: "mutton", zh: "羊肉", ms: "kambing" },
    { slug: "duck", en: "duck", zh: "鸭肉", ms: "itik" },
    {
      slug: "luncheon-meat",
      en: "luncheon meat",
      zh: "午餐肉",
      ms: "daging tin",
      api: "spam",
    },
    {
      slug: "lap-cheong",
      en: "Chinese sausage",
      zh: "腊肠",
      ms: "sosej cina",
      api: "chinese sausage",
    },
    {
      slug: "roast-pork",
      en: "roast pork (siu yuk)",
      zh: "烧肉",
      ms: "babi panggang",
      api: "pork belly",
    },
  ],

  seafood: [
    { slug: "prawn", en: "prawns", zh: "虾", ms: "udang", api: "shrimp" },
    { slug: "squid", en: "squid", zh: "鱿鱼", ms: "sotong" },
    { slug: "mackerel", en: "mackerel", zh: "鲭鱼", ms: "ikan kembung" },
    { slug: "pomfret", en: "pomfret", zh: "鲳鱼", ms: "ikan bawal" },
    { slug: "stingray", en: "stingray", zh: "魔鬼鱼", ms: "ikan pari" },
    { slug: "clams", en: "clams (lala)", zh: "蛤蜊", ms: "lala" },
    { slug: "cockles", en: "cockles (see hum)", zh: "血蛤", ms: "kerang" },
    {
      slug: "ikan-bilis",
      en: "anchovies (ikan bilis)",
      zh: "江鱼仔",
      ms: "ikan bilis",
      api: "anchovies",
    },
    {
      slug: "dried-shrimp",
      en: "dried shrimp",
      zh: "虾米",
      ms: "udang kering",
    },
    { slug: "fish-cake", en: "fish cake", zh: "鱼饼", ms: "kek ikan" },
  ],

  tofu_eggs: [
    { slug: "egg", en: "egg", zh: "鸡蛋", ms: "telur" },
    {
      slug: "tofu-firm",
      en: "firm tofu (tau kwa)",
      zh: "硬豆腐",
      ms: "taukwa",
      api: "firm tofu",
    },
    {
      slug: "tofu-puffs",
      en: "tofu puffs (tau pok)",
      zh: "油豆腐泡",
      ms: "tau pok",
      api: "fried tofu",
    },
    {
      slug: "silken-tofu",
      en: "silken tofu",
      zh: "嫩豆腐",
      ms: "tauhu sutera",
      api: "silken tofu",
    },
    { slug: "tempeh", en: "tempeh", zh: "天贝", ms: "tempe" },
    { slug: "fish-balls", en: "fish balls", zh: "鱼丸", ms: "bebola ikan" },
  ],

  staple: [
    {
      slug: "rice",
      en: "jasmine rice",
      zh: "香米",
      ms: "beras wangi",
      api: "rice",
    },
    { slug: "glutinous-rice", en: "glutinous rice", zh: "糯米", ms: "pulut" },
    {
      slug: "rice-noodles",
      en: "rice vermicelli (bee hoon)",
      zh: "米粉",
      ms: "bihun",
      api: "rice noodles",
    },
    {
      slug: "kway-teow",
      en: "flat rice noodles (kway teow)",
      zh: "河粉",
      ms: "kuey teow",
      api: "rice noodles",
    },
    {
      slug: "yellow-noodles",
      en: "yellow noodles",
      zh: "黄面",
      ms: "mi kuning",
      api: "egg noodles",
    },
    {
      slug: "mee-pok",
      en: "mee pok",
      zh: "面薄",
      ms: "mee pok",
      api: "egg noodles",
    },
    {
      slug: "instant-noodles",
      en: "instant noodles",
      zh: "方便面",
      ms: "mi segera",
    },
    { slug: "bread", en: "bread", zh: "面包", ms: "roti" },
    { slug: "coconut-milk", en: "coconut milk", zh: "椰浆", ms: "santan" },
    {
      slug: "evaporated-milk",
      en: "evaporated milk",
      zh: "淡奶",
      ms: "susu sejat",
    },
    {
      slug: "condensed-milk",
      en: "condensed milk",
      zh: "炼奶",
      ms: "susu pekat manis",
    },
  ],

  sauce_paste: [
    {
      slug: "light-soy",
      en: "light soy sauce",
      zh: "生抽",
      ms: "kicap masin",
      api: "soy sauce",
    },
    {
      slug: "dark-soy",
      en: "dark soy sauce",
      zh: "老抽",
      ms: "kicap pekat",
      api: "dark soy sauce",
    },
    {
      slug: "kecap-manis",
      en: "kecap manis (sweet soy)",
      zh: "甜酱油",
      ms: "kicap manis",
      api: "sweet soy sauce",
    },
    { slug: "oyster-sauce", en: "oyster sauce", zh: "蚝油", ms: "sos tiram" },
    { slug: "fish-sauce", en: "fish sauce", zh: "鱼露", ms: "sos ikan" },
    {
      slug: "belacan",
      en: "shrimp paste (belacan)",
      zh: "虾膏",
      ms: "belacan",
      api: "shrimp paste",
    },
    {
      slug: "taucheo",
      en: "fermented bean paste (taucheo)",
      zh: "豆酱",
      ms: "taucu",
      api: "fermented bean paste",
    },
    {
      slug: "sambal",
      en: "sambal chili paste",
      zh: "叁峇辣椒酱",
      ms: "sambal",
    },
    {
      slug: "tomato-ketchup",
      en: "tomato ketchup",
      zh: "番茄酱",
      ms: "sos tomato",
    },
    { slug: "chili-sauce", en: "chili sauce", zh: "辣椒酱", ms: "sos cili" },
    {
      slug: "peanut-butter",
      en: "peanut butter",
      zh: "花生酱",
      ms: "mentega kacang",
    },
    {
      slug: "black-vinegar",
      en: "Chinese black vinegar",
      zh: "陈醋",
      ms: "cuka hitam",
    },
  ],

  spice_aromatic: [
    { slug: "garlic", en: "garlic", zh: "蒜", ms: "bawang putih" },
    {
      slug: "shallot",
      en: "shallots",
      zh: "红葱头",
      ms: "bawang merah kecil",
      api: "shallots",
    },
    { slug: "onion", en: "onion", zh: "洋葱", ms: "bawang besar" },
    { slug: "ginger", en: "ginger", zh: "姜", ms: "halia" },
    { slug: "lemongrass", en: "lemongrass", zh: "香茅", ms: "serai" },
    { slug: "galangal", en: "galangal", zh: "南姜", ms: "lengkuas" },
    { slug: "turmeric", en: "fresh turmeric", zh: "黄姜", ms: "kunyit" },
    {
      slug: "curry-powder",
      en: "curry powder",
      zh: "咖喱粉",
      ms: "serbuk kari",
    },
    {
      slug: "chili-padi",
      en: "bird’s eye chili",
      zh: "小米椒",
      ms: "cili padi",
      api: "thai chili",
    },
    {
      slug: "dried-chili",
      en: "dried chilies",
      zh: "干辣椒",
      ms: "cili kering",
    },
    {
      slug: "white-pepper",
      en: "white pepper",
      zh: "白胡椒",
      ms: "lada putih",
    },
    {
      slug: "black-pepper",
      en: "black pepper",
      zh: "黑胡椒",
      ms: "lada hitam",
    },
  ],

  herb: [
    { slug: "curry-leaves", en: "curry leaves", zh: "咖喱叶", ms: "daun kari" },
    { slug: "pandan", en: "pandan leaves", zh: "香兰叶", ms: "daun pandan" },
    {
      slug: "kaffir-lime",
      en: "kaffir lime leaves",
      zh: "香茅叶/泰国柠檬叶",
      ms: "daun limau purut",
    },
    {
      slug: "coriander",
      en: "coriander (cilantro)",
      zh: "香菜",
      ms: "daun ketumbar",
      api: "cilantro",
    },
    {
      slug: "spring-onion",
      en: "spring onion",
      zh: "葱",
      ms: "daun bawang",
      api: "green onions",
    },
    {
      slug: "chives",
      en: "Chinese chives",
      zh: "韭菜",
      ms: "kucai",
      api: "chives",
    },
    { slug: "mint", en: "mint leaves", zh: "薄荷叶", ms: "daun pudina" },
    {
      slug: "laksa-leaf",
      en: "laksa leaf (Vietnamese coriander)",
      zh: "叻沙叶",
      ms: "daun kesum",
      api: "vietnamese coriander",
    },
  ],

  other: [
    { slug: "tamarind", en: "tamarind", zh: "罗望子", ms: "asam jawa" },
    {
      slug: "palm-sugar",
      en: "palm sugar (gula melaka)",
      zh: "椰糖",
      ms: "gula melaka",
      api: "palm sugar",
    },
    {
      slug: "soybeansprouts-note",
      en: "fermented tofu (fu ru)",
      zh: "腐乳",
      ms: "taucu pekat",
      api: "fermented tofu",
    },
    { slug: "sesame-oil", en: "sesame oil", zh: "麻油", ms: "minyak bijan" },
    {
      slug: "coconut-oil",
      en: "coconut oil",
      zh: "椰子油",
      ms: "minyak kelapa",
    },
    { slug: "peanuts", en: "peanuts", zh: "花生", ms: "kacang tanah" },
  ],
};
