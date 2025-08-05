<!-- src/App.vue -->
<template>
  <div class="shell">
    <!-- Header -->
    <header class="topbar">
      <span class="logo">
        {{ locale == "zh" ? "吃什么" : "What to eat" }}
      </span>
      <el-space>
        <el-icon @click="toggle" style="cursor: pointer">
          <component :is="dark ? Moon : Sunny" />
        </el-icon>
        <el-icon><Search /></el-icon>
        <LocaleSwitcher />
      </el-space>
    </header>

    <!-- Dynamic content (HomeView, EatOutView, etc.) -->
    <main>
      <router-view />
    </main>

    <!-- Footer navigation -->
    <footer class="bottom-nav">
      <div class="nav-item" @click="router.push('/')">
        <el-icon><House /></el-icon>
        <span class="label">Home</span>
      </div>
      <div class="nav-item" @click="router.push('/eatout')">
        <el-icon><KnifeFork /></el-icon>
        <span class="label">Eat Out</span>
      </div>
      <div class="nav-item">
        <el-icon><QuestionFilled @click="router.push('/help')" /></el-icon>
        <span class="label">Help</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useDarkMode } from "@/composables/useDark";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import {
  Sunny,
  Moon,
  Search,
  House,
  KnifeFork,
  QuestionFilled,
} from "@element-plus/icons-vue";
import LocaleSwitcher from "@/components/LocaleSwitcher.vue";

const { dark, toggle } = useDarkMode();
const { locale } = useI18n();
const router = useRouter();
</script>

<style scoped>
.shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.topbar {
  width: 100%;
  max-width: 1200px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-size: 2.2rem;
  line-height: 1;
}
main {
  width: 100%;
  max-width: 1200px;
  padding: 1rem 2rem 5rem; /* room for bottom nav */
  flex: 1;
}
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  padding: 0.6rem 0;
  border-top: 1px solid #eee;
  background: #fff;
  z-index: 10;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75rem;
  color: #555;
  cursor: pointer;
}

.nav-item .el-icon {
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
}

.nav-item:hover {
  color: #409eff; /* Element Plus primary color */
}
</style>
