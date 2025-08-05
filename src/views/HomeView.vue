<!-- src/views/HomeView.vue -->
<template>
  <IngredientSelector />
  <Controls />
  <RecipeList />
</template>

<script setup lang="ts">
import IngredientSelector from "@/components/IngredientSelector.vue";
import Controls from "@/components/Controls.vue";
import RecipeList from "@/components/VideoList.vue";
</script>
