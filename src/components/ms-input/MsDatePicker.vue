<template>
    <DatePicker :id="name" :name="name" :placeholder="placeholder" v-model="modelValue" dateFormat="dd/mm/yy" showIcon
        fluid :showOnFocus="false" />
</template>
<script setup>
import DatePicker from 'primevue/datepicker';
defineProps({
    name: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        required: false
    },
})
const modelValue = defineModel();
</script>
<style scoped></style>