<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { setLocale } from "@/i18n";
const { locale } = useI18n();
function change(loc: "en" | "zh") {
  setLocale(loc);
}
</script>

<template>
  <el-segmented
    :options="[
      { label: 'English', value: 'en' },
      { label: '中文', value: 'zh' },
    ]"
    v-model="locale"
    @change="change"
  />
</template>
