<template>
    <div class="modal" v-if="openModal">
        <div class="modal-container">
            <!-- Header -->
            <div class="modal-header">
                <p class="font-heading1">{{ popupTitle }}</p>
                <ButtonMs :button-icon="faXmark" button-type="plain" :onClick="() => openModal = false" />
            </div>
            <!-- Body -->
            <div class="modal-body">
                <slot name="msBodyPopup"></slot>
            </div>
            <!-- Footer -->
            <div class="modal-footer">
                <!-- Secondary buttons -->
                <ButtonMs v-for="(button, index) in secondaryAction" :key="index" button-type="plain"
                    :button-text="button.title" :onClick="button.action" />
                <!-- Primary button -->
                <ButtonMs button-type="primary" :button-text="primaryAction.title" :onClick="primaryAction.action" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import ButtonMs from '../control/ButtonMs.vue';

defineProps({
    popupTitle: {
        type: String,
        required: true,
    },
    primaryAction: {
        type: Object,
        required: true,
    },
    secondaryAction: {
        type: Array,
        required: true,
    },
})

const openModal = defineModel('openModal');

</script>
<style scoped>
.modal {
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 10;
}

.modal-container {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 4px;
    min-width: 500px;
    max-height: 60%;
}

.modal-header {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding: 10px;
}

.modal-body {
    padding: 10px;
    display: flex;
    overflow: auto;
}

.modal-footer {
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    background-color: var(--color-offwhite);
    border-radius: 0 0 4px 4px;
}
</style>