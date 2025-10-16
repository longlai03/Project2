<script setup>
import TheHeader from './layout/TheHeader.vue';
import TheContent from './layout/TheMain.vue';
import TheSidebar from './layout/TheSidebar.vue';

</script>

<template>
  <div class="container">
    <TheHeader />
    <div class="content">
      <TheSidebar />
      <TheContent />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.content {
  display: flex;
  flex: 1;
  overflow: hidden;
}
</style>
