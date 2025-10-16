<script setup>
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
    unreadText: {
        required: false,
    },
})
</script>

<template>
    <div class="email-notification">
        <FontAwesomeIcon :icon="faEnvelope" />
        <div class="email-notification-icon">{{ unreadText }}</div>
    </div>
</template>

<style scoped>
.email-notification {
    position: relative;
}

.email-notification-icon {
    position: absolute;
    left: 60%;
    bottom: 60%;
    background-color: red;
    font-size: 8px;
    text-align: center;
    color: white;
    width: 10px;
    height: 10px;
    border-radius: 100%;
}
</style>
