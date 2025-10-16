<script setup>
defineProps({
    src: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: false,
    }
})
</script>

<template>
    <div class="d-flex d-items-center d-gap-5">
        <img :src="src" :alt="title" class="logo" />
        <p class="font-heading1">{{ title }}</p>
    </div>
</template>

<style scoped>
.logo {
    object-fit: contain;
}
</style>