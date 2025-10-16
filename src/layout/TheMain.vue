<template>
    <div class="main">
        <RouterView />
    </div>
</template>
<script setup>
</script>
<style scoped>
.main {
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: var(--color-gray-light);
    min-width: 0;
}
</style>