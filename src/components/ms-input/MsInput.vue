<template>
    <div class="input-container" :class="title && inlineTitle ? 'inline' : ''">
        <label :for="name" v-if="title">{{ title }}</label>
        <input :id="name" :name="name" :type="type" class="input-field" :placeholder="placeholder"
            v-model="modelValue" />
    </div>
</template>
<script setup>
defineProps({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: false,
    },
    inlineTitle: {
        type: Boolean,
        default: false,
        required: false,
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
<style scoped>
.input-container {
    gap: 6px;
    display: flex;
    flex-direction: column;
    flex: 1;
}

.input-container-inline {
    gap: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.input-container label {
    font-weight: bold;
    font-size: 14px;
}

.input-field {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 6px 10px;
    min-width: 200px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    flex: 1;
}

.input-field::placeholder {
    color: var(--color-gray-neutral);
    font-size: 12px;
}

.input-field:hover {
    background-color: #e6e6e6;
    cursor: pointer;
}

.inline {
    flex-direction: row;
}
</style>