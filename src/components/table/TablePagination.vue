<template>
  <div class="table-pagination-container">
    <div class="table-pagination-left">
      <p class="font-body1">
        Tổng:
        <span class="stroke">5631</span> bản ghi
      </p>
    </div>
    <div class="table-pagination-right">
      <p class="font-body1">Số bản ghi/trang</p>
      <p class="font-body1">1-25 bản ghi</p>
      <div class="d-flex">
        <ButtonMs :button-icon="faChevronLeft" button-type="plain" />
        <ButtonMs :button-icon="faChevronRight" button-type="plain" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ButtonMs from '../control/ButtonMs.vue';

</script>
<style scoped>
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