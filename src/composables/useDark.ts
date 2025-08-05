import { ref, watchEffect } from "vue";

const dark = ref(localStorage.getItem("theme") === "dark");

watchEffect(() => {
  document.documentElement.classList.toggle("dark", dark.value);
  localStorage.setItem("theme", dark.value ? "dark" : "light");
});

export function useDarkMode() {
  return { dark, toggle: () => (dark.value = !dark.value) };
}
