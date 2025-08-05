import { createI18n } from "vue-i18n";

export type AppLocale = "en" | "zh";
const saved = (localStorage.getItem("locale") as AppLocale) || "en";

export const i18n = createI18n({
  legacy: false,
  locale: saved,
  messages: {
    en: {
      title: "Select what you have",
      groups: {
        veg: "Vegetables",
        meat: "Meats",
        seafood: "Seafood",
        tofu_eggs: "Tofu & Eggs",
        sauce_paste: "Sauces & Pastes",
        spice_aromatic: "Spices & Aromatics",
        herb: "Herbs",
        other: "Other Ingredients",
        staple: "Staples",
        tool: "Tools",
      },
      cookBtn: "Cook for me!",
      ytBtn: "Search on YouTube",
      empty: "Select ingredients & hit “Cook for me!”",
    },
    zh: {
      title: "🍽️ 先选一下食材",
      groups: {
        veg: "蔬菜们",
        meat: "肉肉们",
        staple: "主食",
        seafood: "海鲜",
        tofu_eggs: "豆腐 & 蛋类",
        sauce_paste: "酱料 & 调味品",
        spice_aromatic: "香料 & 调味料",
        herb: "香草",
        other: "其他食材",
        tool: "厨具",
      },
      cookBtn: "开煮！",
      ytBtn: "在 YouTube 搜索",
      empty: "选择食材后点击“开煮！”",
    },
  },
});

export function setLocale(loc: AppLocale) {
  i18n.global.locale.value = loc;
  localStorage.setItem("locale", loc);
}
