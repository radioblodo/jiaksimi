<script setup lang="ts">
import { useCookStore } from "@/stores/cook";
import { CATEGORIES } from "@/data/ingredients";
import { useI18n } from "vue-i18n";
const cook = useCookStore();
const { t, locale } = useI18n();
</script>

<template>
  <el-card shadow="never">
    <h2 class="big-title">{{ t("title") }}</h2>

    <section v-for="(items, key) in CATEGORIES" :key="key" class="mb-4">
      <h3 class="cat-title">{{ t("groups." + key) }}</h3>

      <div class="flex flex-wrap">
        <span
          v-for="it in items"
          :key="it.slug"
          :class="[
            'pill',
            key,
            { selected: cook.ingredients.includes(it.slug) },
          ]"
          @click="cook.toggleIngredient(it.slug)"
        >
          {{ locale === "zh" ? it.zh : it.en }}
        </span>
      </div>
    </section>
  </el-card>
</template>
