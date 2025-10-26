<template>
    <div class="candidate-container">
        <!-- Header -->
        <div class="candidate-header d-flex d-justify-between d-items-center">
            <p class="font-heading1">Ứng viên</p>
            <div class="employee-button-add-container d-flex">
                <MsButton :button-icon="faPlus" icon-position="left" button-text="Thêm ứng viên" buttonType="primary"
                    class="employee-button-1" :onClick="() => handleOpenPopup()" />
                <MsButton :button-icon="faChevronDown" icon-position="left" button-type="primary"
                    class="employee-button-2" />
            </div>
        </div>
        <!-- Body -->
        <MsTable :filter="true" :pagination="true" :columns="tableColumn" :items="popupData" item-id="CandidateID"
            class="candidate-body" @row-click="(id) => handleOpenPopup(id)" @delete-click="handleDelete"
            @search-change="debounceGetCandidates">
            <template #CandidateName="{ data }">
                <div class="d-flex d-items-center d-gap-2">
                    <MsAvatar :avatar-src="avatarPlaceholder" />
                    <div class="d-flex" :class="data.IsEmployee ? 'd-flex-col' : 'd-gap-1'">
                        {{ data.CandidateName || "--" }}
                        <span class="subtext" v-if="data.IsEmployee">
                            <FontAwesomeIcon :icon="faCheck" />
                            Nhân viên
                        </span>
                        <MailNotification :unread-text="data.UnreadEmailQuantity" v-if="data.UnreadEmailQuantity > 0" />
                    </div>
                </div>
            </template>
            <template #Overall="{ data }">
                <div class="d-flex">
                    <FontAwesomeIcon v-for="i in 5" :icon="i <= (data.Overall ?? 0) ? faStar1 : faStar2" />
                </div>
            </template>
        </MsTable>
    </div>
    <!-- Popup -->
    <Popup v-model:openModal="showPopup" v-slot:body
        :popup-title="selectedCandidateId !== null ? 'Sửa ứng viên' : 'Thêm ứng viên'"
        :primary-action="primaryPopupAction" :secondary-action="secondaryPopupAction">
        <TheCandidateForm :candidate-id="selectedCandidateId" v-model="popupFormData" />
    </Popup>
</template>
<script setup>
import candidateAPI from '@/apis/components/candidates/candidateAPI';
import avatarPlaceholder from '@/assets/images/employee1.jpg';
import MsAvatar from '@/components/ms-avatar/MsAvatar.vue';
import MsButton from '@/components/ms-button/MsButton.vue';
import MailNotification from '@/components/ms-icons/MsMailNotificationIcon.vue';
import Popup from '@/components/ms-popup/MsPopup.vue';
import MsTable from '@/components/ms-table/MsTable.vue';
import { useToast } from '@/helpers/useToast';
import { faStar as faStar2 } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faChevronDown, faPlus, faStar as faStar1 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { onMounted, ref } from 'vue';
import TheCandidateForm from './TheCandidateForm.vue';
import { convertGMTToLocalDateTime, convertLocalDateTimeToGMT } from '@/utils/common/convertDatetime';
import { debounce } from 'lodash';

const toast = useToast();
const showPopup = ref(false);
const popupData = ref([])
const popupFormData = ref({});
const selectedCandidateId = ref(null);
const tableColumn = [
    { label: "Họ và tên", fieldID: "CandidateName", type: "custom", visible: true },
    { label: "Số điện thoại", fieldID: "Mobile", type: "mobile" },
    { label: "Email", fieldID: "Email", type: "text" },
    { label: "Chiến dịch tuyển dụng", fieldID: "RecruitmentCampaign", type: "text" },
    { label: "Vị trí tuyển dụng", fieldID: "JobPositionName", type: "text" },
    { label: "Tín tuyển dụng", fieldID: "ChannelName", type: "text" },
    { label: "Vòng tuyển dụng", fieldID: "RecruitmentStatus", type: "text" },
    { label: "Đánh giá", fieldID: "Overall", type: "custom" },
    { label: "Ngày ứng tuyển", fieldID: "ApplyDate", type: "date" },
];
const primaryPopupAction = {
    title: "Gửi",
    action: () => handleAddOrUpdate()
}
const secondaryPopupAction = [
    {
        title: "Hủy",
        action: () => {
            showPopup.value = false;
        }
    }
]

onMounted(async () => {
    // setTimeout(() => {
    //     const localStorageData = candidatesLocalStorage.getAll()
    //     popupData.value = localStorageData;
    //     console.log(localStorageData);

    // }, 4000);
    // candidateAPI.getAll().then((res) => console.log(res));
    // const getAll = await candidateAPI.getAll();
    // console.log(apiData);
    // const formatApiData = getAll.data.map(item => ({
    //     ...item,
    //     Birthday: item.Birthday ? convertGMTToLocalDateTime(item.Birthday) : null,
    //     ApplyDate: item.ApplyDate ? convertGMTToLocalDateTime(item.ApplyDate) : null,
    // }));
    // popupData.value = formatApiData;
    await getCandidates();
})

const getCandidates = async (search = '', limit = '10', page = '1') => {
    const getAllByFilter = await candidateAPI.getAllByFilter(search, limit, page);
    const formatApiData = getAllByFilter.data.map(item => ({
        ...item,
        Birthday: item.Birthday ? convertGMTToLocalDateTime(item.Birthday) : null,
        ApplyDate: item.ApplyDate ? convertGMTToLocalDateTime(item.ApplyDate) : null,
    }));
    popupData.value = formatApiData;
}

const debounceGetCandidates = debounce(async (search = '', limit = '10', page = '1') => {
    await getCandidates(search, limit, page)
}, 400)

const handleOpenPopup = (id = null) => {
    selectedCandidateId.value = id;
    showPopup.value = true;
}

const handleAddOrUpdate = async () => {
    const cloneFormData = {
        ...popupFormData.value,
        Birthday: popupFormData.value.Birthday ? convertLocalDateTimeToGMT(popupFormData.value.Birthday) : null,
        ApplyDate: popupFormData.value.Birthday ? convertLocalDateTimeToGMT(popupFormData.value.ApplyDate) : null,
    }
    console.log(cloneFormData);
    // if (selectedCandidateId.value !== null) {
    //     // const updated = candidatesLocalStorage.update(selectedCandidateId.value, cloneFormData)
    //     const updated = await candidateAPI.update(selectedCandidateId.value, cloneFormData);
    //     if (updated.data) {
    //         const index = popupData.value.findIndex(
    //             item => item.CandidateID === selectedCandidateId.value
    //         )
    //         if (index !== -1) { popupData.value[index] = updated.data }
    //         toast.success('Sửa thành công!', 'Dữ liệu đã được cập nhật.')
    //     } else {
    //         toast.error('Sửa thất bại', 'Có lỗi khi cập nhật dữ liệu.')
    //     }
    // } else {
    //     // const added = candidatesLocalStorage.add(cloneFormData)
    //     const added = await candidateAPI.add(cloneFormData);
    //     if (added.data) {
    //         popupData.value.push(added.data)
    //         toast.success('Thêm thành công!', 'Dữ liệu đã được thêm.')
    //     } else {
    //         toast.error('Thêm thất bại', 'Có lỗi khi thêm dữ liệu.')
    //     }
    // }
    showPopup.value = false;
}

const handleDelete = async (selectedIds) => {
    popupData.value = popupData.value.filter(
        (item) => !selectedIds.includes(item.CandidateID)
    );
    const deleted = await candidateAPI.delete(selectedIds);
    if (deleted.data) {
        toast.success("Xóa thành công!", "Dữ liệu đã được cập nhật.");
    }
}

</script>
<style scoped>
.candidate-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 16px;
    gap: 16px;
    overflow: hidden;
}

.candidate-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.employee-button-add-container:hover {
    opacity: 0.8 !important;
}

.employee-button-add-container:hover * {
    opacity: 1;
}

.employee-button-1 {
    border-radius: 4px 0px 0px 4px;
    border-right: 1px solid #fff
}

.employee-button-2 {
    border-radius: 0px 4px 4px 0px;
}

.subtext {
    color: green
}
</style>