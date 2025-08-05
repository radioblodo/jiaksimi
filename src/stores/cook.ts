import { defineStore } from "pinia";
import type { AppLocale } from "@/i18n";
import { CATEGORIES } from "@/data/ingredients";
import { searchYouTube, YTVideo } from "@/services/youtube";

export const useCookStore = defineStore("cook", {
  state: () => ({
    ingredients: [] as string[], // slugs only
    limit: 5,
    recipes: [] as any[],
    videos: [] as any[],
    loading: false,
  }),
  actions: {
    toggleIngredient(slug: string) {
      this.ingredients = this.ingredients.includes(slug)
        ? this.ingredients.filter((s) => s !== slug)
        : [...this.ingredients, slug];
    },
    async refreshYouTube(locale: AppLocale) {
      if (!this.ingredients.length) return;
      this.loading = true;
      try {
        this.videos = await searchYouTube(this.getLabels(locale), this.limit);
      } finally {
        this.loading = false;
      }
    },
    getLabels(locale: AppLocale) {
      // Map selected slugs → display labels in chosen language
      const dict = Object.values(CATEGORIES).flat();
      return this.ingredients.map((slug) => {
        const it = dict.find((i) => i.slug === slug)!;
        return locale === "zh" ? it.zh : it.en;
      });
    },
  },
});
