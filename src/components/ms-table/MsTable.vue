<template>
    <div class="table-container">
        <!-- Filter -->
        <div class="table-filter" v-if="filter">
            <MsButton v-if="checkedRows.length > 0" :button-icon="faTrash" button-type="destructive" button-text="Xóa"
                @click="() => openDeletePopup = true" />
            <MsSearch :search-icon="faSearch" placeholder="Tìm kiếm tin tuyển dụng, ứng viên, nhân tài"
                v-model="searchFilter" @change="handleSearchChange" />
            <MsButton :button-icon="faFilter" button-type="outlined" />
            <MsButton :button-icon="faRightFromBracket" button-type="outlined" />
            <MsButton :button-icon="faWaveSquare" button-type="outlined" />
            <MsButton :button-icon="faGear" button-type="outlined" />
        </div>
        <!-- Body -->
        <div class="table-data-container">
            <table class="table-content">
                <thead>
                    <tr class="table-content-header">
                        <th>
                            <input type="checkbox" id="select-all"
                                :checked="checkedRows > 0 && checkedRows.length === props.items.length"
                                @click="handleRowCheckboxCheckedAll($event.target.checked)" />
                        </th>
                        <th v-for="(column, index) in columns" :key="column.fieldID" class="table-content-header">
                            {{ column.label }}
                        </th>
                    </tr>
                </thead>
                <tbody class="table-data">
                    <tr v-for="(item, index) in items" :key="item[props.itemId]" class="t   able-data-item"
                        :id="item[props.itemId]" @click="handleRowClick(item[props.itemId])">
                        <td>
                            <input type="checkbox" :data-set-id="item[props.itemId]"
                                :checked="checkedRows.includes(item[props.itemId])"
                                @click.stop="handleRowCheckboxChecked(item[props.itemId], $event.target.checked)" />
                        </td>
                        <td v-for="column in columns" :key="column.fieldID">
                            <div v-if="column.type == 'date'">
                                {{ item[column.fieldID] }}
                            </div>
                            <div v-else-if="column.type == 'custom'">
                                <slot :name="column.fieldID" :data="item">
                                    {{ item[column.fieldID] }}
                                </slot>
                            </div>
                            <div v-else>
                                {{ item[column.fieldID] || "--" }}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Pagination -->
        <div class="table-pagination-container" v-if="pagination">
            <div class="table-pagination-left">
                <p class="font-body1">
                    Tổng:
                    <span class="stroke">{{ items.length }}</span> bản ghi
                </p>
            </div>
            <div class="table-pagination-right">
                <p class="font-body1">Số bản ghi/trang</p>
                <MsSelect name="TablePagination" :options="tablePaginationOption" />
                <p class="font-body1">1-25 bản ghi</p>
                <div class="d-flex">
                    <MsButton :button-icon="faChevronLeft" button-type="plain" />
                    <MsButton :button-icon="faChevronRight" button-type="plain" />
                </div>
            </div>
        </div>
        <MsPopup v-model:openModal="openDeletePopup" v-slot:body popup-title="Xóa ứng viên"
            :primary-action="primaryPopupAction" :secondary-action="secondaryPopupAction">
            <p>Bạn chắc chắn muốn xóa thông tin ứng viên?</p>
        </MsPopup>
    </div>
</template>
<script setup>
import { faChevronLeft, faChevronRight, faGear, faRightFromBracket, faSearch, faTrash, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter';
import { computed, ref, watch } from 'vue';
import MsButton from '../ms-button/MsButton.vue';
import MsSearch from '../ms-input/MsSearch.vue';
import MsSelect from '../ms-select/MsSelect.vue';
import MsPopup from '../ms-popup/MsPopup.vue';

const props = defineProps({
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
    itemId: {
        type: String,
        required: true,
    },
    columns: {
        type: Array,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    },
})

const emit = defineEmits(['row-click', 'row-checked', 'delete-click', 'search-change']);
const tablePaginationOption = [
    { value: 10, title: 10 },
    { value: 20, title: 20 },
    { value: 50, title: 50 },
    { value: 100, title: 100 },
]
const primaryPopupAction = {
    title: "Xóa",
    action: () => handleDeleteItems(checkedRows.value)
}
const secondaryPopupAction = [{
    title: "Hủy",
    action: () => openDeletePopup.value = false,
}]
const checkedRows = ref([]);
const openDeletePopup = ref(false);
const searchFilter = ref('');

const customColumns = computed(() => {
    return props.columns.filter(x => x.type == 'custom');
})

const handleRowClick = (candidateId) => {
    emit('row-click', candidateId)
}

/**
 * @todo: Hàm xử lý khi row được chọn
 * @param {String} selectedId - id của row được chọn
 * @param {Boolean} checkStatus - Trạng thái của row được chọn
 * @returns {void} 
 */
const handleRowCheckboxChecked = (selectedId, checkStatus) => {
    if (checkStatus) {
        if (!checkedRows.value.includes(selectedId)) {
            checkedRows.value.push(selectedId)
        }
    } else {
        checkedRows.value = checkedRows.value.filter(id => id !== selectedId)
    }
    emit('row-checked', checkedRows.value);
}

/**
 * @todo: Hàm xử lý khi lựa chọn select all
 * @returns {void} 
 */
const handleRowCheckboxCheckedAll = (checkStatus) => {
    if (checkStatus) {
        checkedRows.value = props.items.map(item => item[props.itemId])
    } else {
        checkedRows.value = []
    }
    emit('row-checked', checkedRows.value)
}

/**
 * @todo: Hàm xử lý xóa item trong phần tử
 * @param {Array} selectedId - Mảng id của phần tử bị xóa
 * @returns {void} 
 */
const handleDeleteItems = (selectedId) => {
    emit('delete-click', [...selectedId])
    checkedRows.value = [];
    openDeletePopup.value = false;
}

/**
 * @todo: Hàm xử lý việc tìm kiếm phần tử
 * @returns {void} 
 */
const handleSearchChange = (searchFilter) => {
    emit('search-change', searchFilter)
}

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

/* Filter */
.table-filter {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    padding: 12px;
}

/* Body */
.table-data-container {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex: 1;
}

.table-content {
    border-collapse: collapse;
    font-size: 14px;
    width: 100%;
}

.table-content thead {
    white-space: nowrap;
    position: sticky;
    text-align: left;
    top: 0;
    z-index: 100;
}

.table-content thead th,
.table-content tbody td {
    padding: 12px;
}

.table-content thead th {
    border-right: 1px solid var(--color-gray-light)
}

.table-content tbody td {
    /* max-width: 160px; */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.table-content tbody tr {
    border: 1px solid #ddd;
}

.table-content-header {
    background-color: var(--color-gray-very-light);
}

.table-data-item:hover {
    background-color: var(--color-pink-very-light);
}

.subtext {
    display: flex;
    align-items: center;
    gap: 6px;
    color: green;
}

/* Pagination */
.table-pagination-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: var(--color-offwhite);
}

.table-pagination-left {
    display: flex;
    align-items: center;
}

.table-pagination-right {
    display: flex;
    align-items: center;
    gap: 12px;
}
</style>
