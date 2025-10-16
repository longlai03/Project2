<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps({
    icon: {
        required: true,
    },
    iconText: {
        required: false,
    }
})
</script>

<template>
    <div class="d-flex d-items-center d-justify-center d-gap-1">
        <FontAwesomeIcon :icon="icon" />
        <p :v-if="iconText">{{ iconText }}</p>
    </div>
</template>

<style scoped>
.logo {
    object-fit: contain;
}
</style>