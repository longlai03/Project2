<template>
    <Textarea :name="name" :rows="rows" :placeholder="placeholder" v-model="modelValue" auto-resize fluid
        :style="{ resize: resize }" />
</template>
<script setup>
import Textarea from 'primevue/textarea';

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: false,
    },
    rows: {
        type: Number,
        default: 5,
    },
    resize: {
        type: Boolean,
        default: true,
    },
    placeholder: {
        type: String,
        required: false
    },
})

const modelValue = defineModel();
</script>
<style scoped>
.resize {
    resize: none !important;
}
</style>
