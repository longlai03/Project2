<template>
    <div class="table-container">
        <TableFilter :v-if="filter" />
        <TableItem :columns="columns" :items="items" />
        <TablePagination :v-if="pagination" />
    </div>
</template>
<script setup>
import TableFilter from './TableFilter.vue';
import TableItem from './TableItem.vue';
import TablePagination from './TablePagination.vue';

defineProps({
    filter: {
        type: Boolean,
        default: false,
        required: false,
    },
    pagination: {
        type: Boolean,
        default: false,
        required: false,
    },
    columns: {
        type: Array,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    }
})
</script>
<style scoped>
.table-container {
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    overflow: hidden;
    border-radius: 4px;
    flex: 1;
}
</style>