<template>
    <Select :name="name" v-model="modelValue" checkmark fluid :options="options" optionLabel="title" optionValue="value"
        :placeholder="placeholder" />
</template>
<script setup>
import { Select } from 'primevue';
defineProps({
    name: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        required: false
    },
    options: {
        required: true,
    }
})

const modelValue = defineModel();
</script>
<style scoped>
.input-container {
    gap: 6px;
    display: flex;
    flex-direction: column;
    flex: 1;
}

.input-container label {
    font-weight: bold;
    font-size: 14px;
}

.input-field {
    padding: 6px 10px;
    min-width: 200px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    flex: 1;
}

.input-field::placeholder {
    color: var(--color-gray-neutral);
    font-size: 14px;
}

.input-field:hover {
    background-color: #e6e6e6;
    cursor: pointer;
    border: 1px solid var(--color-gray-dark);
}

.inline {
    align-items: center;
    gap: 16px;
    flex-direction: row;
}
</style>