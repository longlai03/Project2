<template>
    <div class="side-bar d-flex d-flex-col d-justify-between">
        <ul class="d-flex d-flex-col d-gap-2">
            <li v-for="(item, index) in sidebarList">
                <MsButton :button-icon="item.icon" icon-position="left"
                    :button-text="isCollapsed ? undefined : item.title" button-type="plain" class="side-bar-button"
                    :class="isCollapsed ? 'collapse' : ''" :onClick="() => navigate(item.path)" />
            </li>
        </ul>
        <div>
            <MsButton :button-icon="isCollapsed ? faChevronRight : faChevronLeft" icon-position="left"
                :button-text="isCollapsed ? undefined : 'Thu gọn'" button-type="plain" class="side-bar-button"
                :class="isCollapsed ? 'collapse' : ''" :onClick="handleCollapse" />
        </div>
    </div>
</template>
<script setup>
import MsButton from '@/components/ms-button/MsButton.vue';
import router from '@/router';
import { faCalendar, faCommentDots, faEnvelope, faIdBadge, faRectangleList, faUser } from '@fortawesome/free-regular-svg-icons';
import { faChartColumn, faChartPie, faChevronLeft, faChevronRight, faClipboardCheck, faGear } from '@fortawesome/free-solid-svg-icons';
import { ref } from 'vue';

const sidebarList = [
    {
        title: 'Tin tuyển dụng',
        icon: faRectangleList,
        path: '/',
    },
    {
        title: 'Ứng viên',
        icon: faUser,
        path: '/candidates',
    },
    {
        title: 'Lịch',
        icon: faCalendar,
        path: '/',
    },
    {
        title: 'Kho tiềm năng',
        icon: faIdBadge,
        path: '/',
    },
    {
        title: 'Chiến dịch tuyển dụng',
        icon: faChartColumn,
        path: '/',
    },
    {
        title: 'Công việc',
        icon: faClipboardCheck,
        path: '/',
    },
    {
        title: 'Trao đổi với ứng viên',
        icon: faEnvelope,
        path: '/',
    },
    {
        title: 'Báo cáo',
        icon: faCommentDots,
        path: '/',
    },
    {
        title: 'Thiết lập',
        icon: faChartPie,
        path: '/',
    },
    {
        title: 'Kiến thức hữu ích',
        icon: faGear,
        path: '/',
    },
];
const isCollapsed = ref(false);

const navigate = (link = '/') => {
    router.push(link);
}

const handleCollapse = () => {
    isCollapsed.value = !isCollapsed.value;
}

</script>
<style scoped>
.side-bar {
    position: relative;
    background-color: var(--color-gray-dark);
    padding: 18px 10px;
}

.side-bar-button {
    color: white;
    width: 100%;
    font-size: 14px;
}

.side-bar-button:hover {
    background-color: var(--color-blue-primary);
}

.collapse {
    display: flex;
    align-items: center;
    width: 32px;
    white-space: nowrap;
    justify-content: center;
}
</style>