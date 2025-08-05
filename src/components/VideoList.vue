<script setup lang="ts">
import { useCookStore } from "@/stores/cook";
const cook = useCookStore();
</script>

<template>
  <el-card v-if="cook.loading" class="text-center">Loading…</el-card>

  <el-card v-else-if="cook.videos.length === 0" class="text-center">
    <p>Select ingredients & hit “Cook for me!”</p>
  </el-card>

  <el-row v-else :gutter="16">
    <el-col v-for="v in cook.videos" :key="v.id" :span="8">
      <el-card :body-style="{ padding: '10px' }">
        <img :src="v.thumbnail" class="w-full rounded mb-2" />
        <h3 style="font-size: 14px; margin: 4px 0">{{ v.title }}</h3>
        <small>{{ v.channel }}</small>
        <div style="margin-top: 8px">
          <el-button type="primary" :href="v.url" target="_blank"
            >Watch</el-button
          >
          <!-- Or embed on click with https://www.youtube-nocookie.com/embed/{id} -->
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
