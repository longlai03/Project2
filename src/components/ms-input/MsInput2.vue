<template>
    <InputText :id="name" :name="name" :inputmode="type" class="input-field" :placeholder="placeholder"
        v-model="modelValue" />
</template>
<script setup>
import { InputText } from 'primevue';

defineProps({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'text',
        required: false,
    },
    placeholder: {
        type: String,
        required: false
    },
})

const modelValue = defineModel();
</script>
<style scoped></style>