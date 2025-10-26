<template>
    <div class="input-container" :class="inlineTitle ? 'inline' : ''">
        <label :for="name">{{ title }}</label>
        <div class="d-flex d-flex-1 w-full h-full">
            <select :id="name" :name="name" class="input-field" :placeholder="placeholder" v-model="modelValue">
                <option v-for="(item, index) in options" :key="index" :value="item.value">{{ item.title }}</option>
            </select>
        </div>
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