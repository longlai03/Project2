<template>
    <div class="input-container">
        <input :id="name" :name="name" type="checkbox" v-model="modelValue" />
        <label :for="name">{{ title }}</label>
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
        required: true
    },
})

const modelValue = defineModel();
</script>
<style scoped>
.input-container {
    gap: 6px;
    display: flex;
    align-items: center;
    flex: 1;
}

.input-container label {
    font-weight: 600;
    font-size: 14px;
}
</style>