import {
  DESKTOP,
  TABLET,
  IS_MOBILE,
  IS_DESKTOP,
  IS_TABLET,
  IPAD,
  IS_IPAD,
} from "@/utils/window-sizes";
import { onUnmounted, ref } from "vue";

export function windowWidth() {
  const windowWidth = ref("");

  function update() {
    const currentWindowWidth = window.innerWidth;
    if (currentWindowWidth >= DESKTOP) windowWidth.value = IS_DESKTOP;
    else if (currentWindowWidth >= TABLET) windowWidth.value = IS_TABLET;
    else if (currentWindowWidth >= IPAD) windowWidth.value = IS_IPAD;
    else windowWidth.value = IS_MOBILE;
  }

  update();

  window.addEventListener("resize", update);
  onUnmounted(() => window.removeEventListener("resize", update));

  return windowWidth;
}
