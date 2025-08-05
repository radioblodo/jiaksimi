<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useCookStore } from "@/stores/cook";

const cook = useCookStore();
const { t, locale } = useI18n();

const onRun = async () => {
  if (!cook.ingredients.length) return;
  await cook.refreshYouTube(locale.value as "en" | "zh");
};

const btnLabel = computed(() => t("ytBtn"));
</script>

<template>
  <el-row
    justify="space-between"
    align="middle"
    class="my-6 card-ish"
    gutter="12"
  >
    <!-- left: mode switch + slider -->
    <el-col :span="16">
      <div
        style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap"
      >
        <!-- Suggestions slider -->
        <div style="flex: 1; min-width: 220px">
          <el-slider
            v-model="cook.limit"
            :min="1"
            :max="10"
            size="small"
            :format-tooltip="(v:number)=>`${v} ${t('suggestions') || 'suggestions'}`"
            style="width: 100%"
          />
        </div>
      </div>
    </el-col>

    <!-- right: action button -->
    <el-col :span="8" class="text-right">
      <el-button
        type="success"
        size="large"
        :loading="cook.loading"
        :disabled="!cook.ingredients.length"
        @click="onRun"
      >
        {{ btnLabel }}
      </el-button>
    </el-col>
  </el-row>
</template>

<style scoped>
.card-ish {
  padding: 16px;
  border-radius: 6px;
  border: 1px solid #eee;
}
</style>
