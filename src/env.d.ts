/// <reference types="@types/google.maps" />
/// <reference types="@types/google.maps" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
