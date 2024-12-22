<template>
  <main class="main-content">
    <div
      v-viewer.static="{
        title: false,
        navbar: false,
        toolbar: false,
        tooltip: false,
      }"
      class="main-content__img"
    >
      <img src="/picture2.jpg">
    </div>
    <div class="main-content__text">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ratione, dolor vel, cumque illum modi deleniti, quae provident fugiat et sequi corporis veniam tenetur eos officia similique iste molestias magni.</p>
      <p>Repellendus corrupti accusamus cum voluptates odio commodi doloribus vero laborum eum nisi ut error consequatur, veritatis beatae voluptatem, corporis ducimus animi exercitationem quidem ipsam ratione. Libero asperiores facilis sit nesciunt?</p>
      <p>Harum assumenda, molestias delectus magni quidem ut repellat officiis fugit, ratione quaerat eius adipisci velit nesciunt, sunt facilis? Quasi, quibusdam! Sed, minima qui? Labore nisi provident temporibus minima officiis sequi.</p>
      <p>Harum assumenda, molestias delectus magni quidem ut repellat officiis fugit, ratione quaerat eius adipisci velit nesciunt, sunt facilis? Quasi, quibusdam! Sed, minima qui? Labore nisi provident temporibus minima officiis sequi.</p>
      <p>Harum assumenda, molestias delectus magni quidem ut repellat officiis fugit, ratione quaerat eius adipisci velit nesciunt, sunt facilis? Quasi, quibusdam! Sed, minima qui? Labore nisi provident temporibus minima officiis sequi.</p>
    </div>
  </main>

  <Transition name="fade">
    <GiftBox v-if="showGiftBox" @gift-opened="showGiftBox = false" />
  </Transition>

  <div v-if="coverMe" class="black-mask" />
</template>

<script setup lang="ts">
const showGiftBox = ref(true);

// Cover things if pw not match
const { pw } = useUrlSearchParams();
const coverMe = import.meta.env.MODE !== "development" && pw !== "Yukimatsu1225!";
</script>

<style lang="scss" scoped>
.black-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 999;
}

.main-content {
  --margin: 1.5rem;
  font-size: 1.25rem;
  display: grid;
  place-items: center;
  gap: var(--margin);
  height: 100%;
  padding: var(--margin);
  overflow: auto;
}

.main-content__img {
  img {
    width: min(40rem, 100%);
    margin: auto;
  }
}
.main-content__text {
  color: #fff;
  text-align: center;
}

@media (width >= 50em) {
  .main-content {
    grid-template-columns: 1fr 1fr;
    .main-content__img {
      img {
        position: fixed;
        left: var(--margin);
        top: 50%;
        width: calc(50% - var(--margin) * 1.5);
        max-height: calc(100% - var(--margin) * 2);
        object-fit: contain;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
