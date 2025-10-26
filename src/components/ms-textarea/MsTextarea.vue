<template>
    <div class="input-container">
        <label for="">{{ title }}</label>
        <textarea :name="name" class="input-field" :rows="rows" :placeholder="placeholder" v-model="modelValue"
            :class="resize ? '' : 'static'"></textarea>
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
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 6px 10px;
    min-width: 200px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    flex: 1;
}

.static {
    resize: none;
}
</style>
