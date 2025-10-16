<template>
    <div class="table-data-container d-flex d-flex-col">
        <table class="table-content">
            <thead>
                <tr class="table-content-header">
                    <th>
                        <input type="checkbox" id="select-all" />
                    </th>
                    <th v-for="(column, index) in columns" :key="index" class="table-content-header">
                        {{ column }}
                    </th>
                </tr>
            </thead>
            <tbody class="table-data">
                <tr v-for="(item, index) in items" :key="item.CandidateId" class="table-data-item">
                    <td><input type="checkbox" :data-set-id="item.CandidateId" /></td>
                    <td>
                        <div class="d-flex d-items-center d-gap-2">
                            <Avatar :avatar-src="avatarPlaceholder" />
                            <div class="d-flex" :class="item.IsEmployee ? 'd-flex-col' : 'd-gap-1'">
                                {{ item.CandidateName || "--" }}
                                <span class="subtext" v-if="item.IsEmployee">
                                    <FontAwesomeIcon :icon="faCheck" />
                                    Nhân viên
                                </span>
                                <MailNotification :unread-text="item.UnreadEmailQuantity"
                                    v-if="item.UnreadEmailQuantity > 0" />
                            </div>
                        </div>
                    </td>
                    <td>
                        {{ item.Mobile || "--" }}
                    </td>
                    <td>
                        {{ item.Email || "--" }}
                    </td>
                    <td>
                        {{ item.RecruitmentCampaign || "--" }}
                    </td>
                    <td>
                        {{ item.JobPositionName || "--" }}
                    </td>
                    <td>
                        {{ item.ChannelName || "--" }}
                    </td>
                    <td>
                        {{ item.RecruitmentStatus || "--" }}
                    </td>
                    <td>
                        <div class="d=flex">
                            <FontAwesomeIcon :icon="faStar" />
                            <FontAwesomeIcon :icon="faStar" />
                            <FontAwesomeIcon :icon="faStar" />
                            <FontAwesomeIcon :icon="faStar" />
                            <FontAwesomeIcon :icon="faStar" />
                        </div>
                    </td>
                    <td>
                        {{ item.ApplyDate || "--" }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Avatar from '../icon/AvatarMs.vue';
import avatarPlaceholder from '@/assets/images/employee1.jpg'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import MailNotification from '@/customIcon/MailNotification.vue';

defineProps({
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
    top: 0;
}

.table-content thead th,
.table-content tbody td {
    padding: 12px;
}

.table-content tbody td {
    max-width: 160px;
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
    background-color: var(--color-rosy-brown);
}

.subtext {
    display: flex;
    align-items: center;
    gap: 6px;
    color: green;
}
</style>