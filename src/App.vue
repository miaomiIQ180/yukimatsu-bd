<template>
  <main class="main-content">
    <div class="main-content__img"><img src="/picture1.jpg"></div>
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
</template>

<script setup lang="ts">
// FIXME: Use LocalStorge
const showGiftBox = ref(false);
</script>

<style lang="scss" scoped>
.main-content {
  font-size: 1.25rem;
  display: grid;
  place-items: center;
  gap: 2rem;
  height: 100%;
  padding: 2rem;
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
        left: 2rem;
        top: 50%;
        width: calc(50% - 3rem);
        max-height: calc(100% - 4rem);
        object-fit: contain;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
