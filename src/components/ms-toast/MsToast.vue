<template>
    <div class="toast-container">
        <transition-group name="toast-fade" tag="div">
            <div v-for="toast in toasts" :key="toast.id" class="toast">
                <div class="d-flex d-items-center d-gap-2">
                    <div class="toast-icon" :class="`toast-${toast.type}`">
                        <FontAwesomeIcon :icon="toast.icon" />
                    </div>
                    <div class="d-flex d-flex-col d-gap-1">
                        <p class="toast-title">{{ toast.title }}</p>
                        <p v-if="toast.message">{{ toast.message }}</p>
                    </div>
                </div>
                <MsButton class="toast-close" button-type="plain" :button-icon="faXmark"
                    :onClick="() => removeToast(toast.id)" />
            </div>
        </transition-group>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleCheck, faCircleXmark, faTriangleExclamation, faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons'
import MsButton from '../ms-button/MsButton.vue'

const toasts = ref([])
const icons = {
    success: faCircleCheck,
    error: faCircleXmark,
    warning: faTriangleExclamation,
    info: faCircleInfo,
}

/**
 * @todo: Thêm một thông báo (toast) mới vào danh sách.
 * @param {string} type - Loại thông báo ('success' | 'error' | 'warning' | 'info').
 * @param {string} title - Tiêu đề của thông báo.
 * @param {string} [message] - Nội dung chi tiết của thông báo (tuỳ chọn).
 * @param {number} [duration=3000] - Thời gian hiển thị (theo ms) trước khi tự động ẩn.
 * @returns {void}
 */
const addToast = (type, title, message, duration = 3000) => {
    const id = Date.now()
    const toast = {
        id,
        type,
        title,
        message,
        icon: icons[type] || faCircleInfo,
    }
    toasts.value.push(toast)

    setTimeout(() => removeToast(id), duration)
}

/**
 * @todo: Xoá một thông báo (toast) khỏi danh sách theo ID.
 * @param {number} id - ID của thông báo cần xoá.
 * @returns {void}
 */
const removeToast = (id) => {
    toasts.value = toasts.value.filter((t) => t.id !== id)
}

/**
 * @todo: Đăng ký các phương thức hiển thị toast ở phạm vi global (window.toast).
 * @type {Object}
 * @property {(title: string, message?: string, duration?: number) => void} success - Hiển thị toast thành công.
 * @property {(title: string, message?: string, duration?: number) => void} error - Hiển thị toast lỗi.
 * @property {(title: string, message?: string, duration?: number) => void} warning - Hiển thị toast cảnh báo.
 * @property {(title: string, message?: string, duration?: number) => void} info - Hiển thị toast thông tin.
 */
if (!window.toast) {
    window.toast = {
        success: (title, message, duration) => addToast('success', title, message, duration),
        error: (title, message, duration) => addToast('error', title, message, duration),
        warning: (title, message, duration) => addToast('warning', title, message, duration),
        info: (title, message, duration) => addToast('info', title, message, duration),
    }
}
</script>

<style scoped>
.toast-container {
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 999999;
}

.toast {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 8px;
    color: var(----color-gray-dark);
    font-size: 14px;
    border: 1px solid var(--color-gray-light);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    min-width: 260px;
    max-width: 400px;
    background-color: var(--color-offwhite);
}

.toast-title {
    font-size: 16px;
    font-weight: 700;
}

.toast-icon {
    font-size: 24px;
}

.toast-success {
    color: green;
}

.toast-error {
    color: #e74c3c;
}

.toast-warning {
    color: #f39c12;
}

.toast-info {
    color: #3498db;
}

.toast-fade-enter-active,
.toast-fade-leave-active {
    transition: all 0.3s ease;
}

.toast-fade-enter-from,
.toast-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
