<template>
  <div class="giftbox">
    <div class="giftbox__wrapper">
      <ConfettiExplosion
        v-if="isOpened"
        :force="0.7"
        :stage-width="windowWidth * 1.75"
        :stage-height="windowHeight * 1.75"
      />
      <button
        type="button"
        class="btn giftbox-btn"
        @click="handleClick"
        @animationend="showClickMe = true"
      >
        <Icon v-show="isOpened" icon="streamline-emojis:wrapped-gift-2" />
        <Icon v-show="!isOpened" icon="streamline-emojis:wrapped-gift-1" />
      </button>
      <div v-show="showClickMe && !isOpened" class="click-me"><Icon icon="mynaui:click-solid" /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ConfettiExplosion from "vue-confetti-explosion";

const emit = defineEmits<{
  giftOpened: [],
}>();

const isOpened = ref<boolean>(false);
const showClickMe = ref<boolean>(false);
const { width: windowWidth, height: windowHeight } = useWindowSize();

function handleClick() {
  isOpened.value = true;
  showClickMe.value = false;
  useTimeoutFn(() => {
    document.documentElement.classList.add("box-opened");
    emit("giftOpened");
  }, 1500);
}
</script>

<style lang="scss" scoped>
@keyframes fade-in {
  0% { opacity: 0; }
  30% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes blink {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}
.giftbox {
  display: grid;
  place-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  // isolation: isolate;
}
.giftbox__wrapper {
  position: relative;
}
.confetti-container {
  position: absolute;
  left: 50%;
  top: 50%;
}
.giftbox-btn {
  font-size: 15rem;
  animation: fade-in 1s ease;
}
.click-me {
  color: #ffee91;
  font-size: 10rem;
  position: absolute;
  top: 40%;
  left: 40%;
  opacity: 0;
  animation: blink 1.5s ease .5s infinite;
  pointer-events: none;
}
</style>
