<template>
    <InputGroup>
        <InputGroupAddon v-if="$slots.inputLeft">
            <slot name="inputLeft"></slot>
        </InputGroupAddon>
        <slot name="inputContent"></slot>
        <InputGroupAddon v-if="$slots.inputRight">
            <slot name="inputRight"></slot>
        </InputGroupAddon>
    </InputGroup>
</template>
<script setup>
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
</script>
<style scoped></style>