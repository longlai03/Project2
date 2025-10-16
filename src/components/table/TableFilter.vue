<template>
    <div class="table-filter">
        <div class="">
            <ButtonMs :button-icon="faTrash" button-type="destructive" button-text="Xóa" />
        </div>
        <div class="table-search-container d-flex d-items-center d-gap-1">
            <label class="table-search-label" for="table-search">
                <i class="fa-solid fa-magnifying-glass"></i>
            </label>
            <SearchMs :search-icon="faSearch" placeholder="Tìm kiếm tin tuyển dụng, ứng viên, nhân tài" />
        </div>
        <ButtonMs :button-icon="faFilter" button-type="outlined" />
        <ButtonMs :button-icon="faRightFromBracket" button-type="outlined" />
        <ButtonMs :button-icon="faWaveSquare" button-type="outlined" />
        <ButtonMs :button-icon="faGear" button-type="outlined" />
    </div>
</template>
<script setup>
import { faGear, faRightFromBracket, faSearch, faTrash, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import ButtonMs from '../control/ButtonMs.vue';
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter';
import SearchMs from '../control/SearchMs.vue';

</script>
<style scoped>
.table-filter {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    padding: 12px;
}
</style>