<template>
    <div class="input-container">
        <input :id="name" :name="name" :type="type" class="input-field" :placeholder="placeholder"
            v-model="modelValue" />
        <MsButton :button-icon=buttonIcon button-type="outlined" :onClick="buttonOnAction" class="input-button" />
    </div>
</template>
<script setup>
import MsButton from '../ms-button/MsButton.vue';

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
    buttonIcon: {
        required: true,
    },
    buttonOnAction: {
        required: true
    }
})

const modelValue = defineModel();
</script>
<style scoped>
.input-container {
    display: flex;
    flex-direction: row;
    flex: 1;
}

.input-field {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 6px 10px;
    min-width: 200px;
    border-radius: 4px 0 0 4px;
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
    border: 1px solid var(--color-gray-dark);
}

.input-button {
    border-left: none;
    border-radius: 0 4px 4px 0;
}
</style>