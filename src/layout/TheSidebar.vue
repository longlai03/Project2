<template>
    <div class="side-bar d-flex d-flex-col d-justify-between">
        <ul class="d-flex d-flex-col d-gap-2">
            <li>
                <ButtonMs :button-icon="faRectangleList" icon-position="left" button-text="Tin tuyển dụng"
                    button-type="plain" class="side-bar-button" :onClick="() => navigate('/')" />
            </li>
            <li>
                <ButtonMs :button-icon="faUser" icon-position="left" button-text="Ứng viên" button-type="plain"
                    class="side-bar-button" :onClick="() => navigate('/candidates')" />
            </li>
            <li>
                <ButtonMs :button-icon="faCalendar" icon-position="left" button-text="Lịch" button-type="plain"
                    class="side-bar-button" :onClick="() => navigate('/')" />
            </li>
            <li>
                <ButtonMs :button-icon="faIdBadge" icon-position="left" button-text="Kho tiềm năng" button-type="plain"
                    class="side-bar-button" :onClick="() => navigate('/')" />
            </li>
            <li>
                <ButtonMs :button-icon="faChartColumn" icon-position="left" button-text="Chiến dịch tuyển dụng"
                    button-type="plain" class="side-bar-button" :onClick="() => navigate('/')" />
            </li>
            <li>
                <ButtonMs :button-icon="faClipboardCheck" icon-position="left" button-text="Công việc"
                    button-type="plain" class="side-bar-button" :onClick="() => navigate('/')" />
            </li>
            <li>
                <ButtonMs :button-icon="faEnvelope" icon-position="left" button-text="Trao đổi với ứng viên"
                    button-type="plain" class="side-bar-button" :onClick="() => navigate('/')" />
            </li>
            <li>
                <ButtonMs :button-icon="faCommentDots" icon-position="left" button-text="Báo cáo" button-type="plain"
                    class="side-bar-button" :onClick="() => navigate('/')" />
            </li>
            <li>
                <ButtonMs :button-icon="faChartPie" icon-position="left" button-text="Thiết lập" button-type="plain"
                    class="side-bar-button" :onClick="() => navigate('/')" />
            </li>
            <li>
                <ButtonMs :button-icon="faGear" icon-position="left" button-text="Kiến thức hữu ích" button-type="plain"
                    class="side-bar-button" :onClick="() => navigate('/')" />
            </li>
        </ul>
        <div class="">
            <ButtonMs :button-icon="faRectangleList" icon-position="left" button-text="Thu gọn" button-type="plain"
                class="side-bar-button" :onClick="() => navigate('/')" />
        </div>
    </div>
</template>
<script setup>
import ButtonMs from '@/components/control/ButtonMs.vue';
import router from '@/router';
import { faCalendar, faCommentDots, faEnvelope, faIdBadge, faRectangleList, faUser } from '@fortawesome/free-regular-svg-icons';
import { faChartColumn, faChartPie, faClipboardCheck, faGear } from '@fortawesome/free-solid-svg-icons';

const navigate = (link = '/') => {
    router.push(link);
}
</script>
<style scoped>
.side-bar {
    position: relative;
    background-color: var(--color-gray-dark);
    padding: 18px 10px;
}

.side-bar-button {
    color: white !important;
    width: 100% !important;
    font-size: 14px;
}

.side-bar-button:hover {
    background-color: var(--color-blue-primary) !important;
}
</style>