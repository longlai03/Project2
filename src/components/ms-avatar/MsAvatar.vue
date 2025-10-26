<script setup>
defineProps({
    avatarSrc: {
        type: String,
        required: true,
    },
    avatarName: {
        type: String,
        required: false,
    }
})
</script>

<template>
    <div class="d-flex d-items-center d-gap-5">
        <img :src="avatarSrc" :alt="avatarName ?? 'Avatar'" class="avatar" />
        <!-- May change later -->
        <p class="font-heading1">{{ avatarName }}</p>
    </div>
</template>

<style scoped>
.avatar {
    width: 26px;
    height: 26px;
    border-radius: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>