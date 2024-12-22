<template>
  <Transition name="fade">
    <GiftBox v-if="showGiftBox" @gift-opened="showGiftBox = false" />
  </Transition>
</template>

<script setup lang="ts">
// FIXME: Use LocalStorge
const showGiftBox = ref(false);
</script>

<style lang="scss" scoped>

</style>
