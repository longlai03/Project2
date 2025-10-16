<template>
    <div class="candidate-container">
        <!-- Header -->
        <div class="candidate-header d-flex d-justify-between d-items-center">
            <p class="font-heading1">Ứng viên</p>
            <div class="employee-button-add-container d-flex">
                <ButtonMs :button-icon="faPlus" icon-position="left" button-text="Thêm ứng viên" buttonType="primary"
                    class="employee-button-1" :onClick="() => showPopup = true" />
                <ButtonMs :button-icon="faChevronDown" icon-position="left" button-type="primary"
                    class="employee-button-2" />
            </div>
        </div>
        <!-- Body -->
        <MsTable :columns="tableColumn" :items="tableItems" class="candidate-body" />
    </div>
    <Popup v-model:openModal="showPopup" v-slot:msBodyPopup popup-title="Thêm ứng viên"
        :primary-action="primaryPopupAction" :secondary-action="secondaryPopupAction">
        <TheCandidateForm />
    </Popup>
</template>
<script setup>
import ButtonMs from '@/components/control/ButtonMs.vue';
import Popup from '@/components/popup/Popup.vue';
import MsTable from '@/components/table/MsTable.vue';
import TheCandidateForm from '@/views/candidates/TheCandidateForm.vue';
import { faChevronDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ref } from 'vue';

const tableColumn = [
    'Họ và tên',
    'Số điện thoại',
    'Email',
    'Chiến dịch tuyển dụng',
    'Vị trí tuyển dụng',
    'Tín tuyển dụng',
    'Vòng tuyển dụng',
    'Đánh giá',
    'Ngày ứng tuyển'
];

const tableItems = [
    {
        CountTask: null,
        CandidateName: "Lại Hoàng Long",
        Mobile: "0918982455",
        Email: "hoanglong2dtd@gmail.com",
        RecruitmentCampaignNames: null,
        JobPositionName: "Phát triển phần mềm",
        RecruitmentName: "QC/Tester HN, HCM Quý 3.2025",
        RecruitmentRoundName: "Offer",
        Score: 0,
        ApplyDate: "2025-08-19T10:01:31.379+07:00",
        ChannelName: null,
        EducationDegreeName: null,
        EducationPlaceName: null,
        EducationMajorName: null,
        WorkPlaceRecent: null,
        AttractivePersonnel: "Dương Thị Thảo",
        OrganizationUnitName: null,
        Overall: null,
        AreaName: "thanhhoa",
        PresenterName: null,
        ProbationInfoStatus: null,
        IsTalentPoolDetail: null,
        AccountPortal: null,
        TagInfos: null,
        CandidateStatusID: 1,
        Gender: 1,
        Birthday: null,
        Address: "",
        ReasonRemoved: null,
        CollaboratorName: null,
        HireDate: null,
        OfferStatus: 1,
        RecruitmentChannelID: null,
        CandidateID: 0,
        RecruitmentID: 20962,
        Avatar: null,
        AvatarColor: "#EDC201",
        Active: 1,
        CandidateStatusName: null,
        IsNew: 0,
        IsSelfUpdate: 0,
        IsNewProbationInfo: 0,
        IsSentProbationInfo: 0,
        RecruitmentStatusReal: 5,
        RecruitmentStatus: 5,
        IsOutOfCapcity: null,
        BirthdayFormat: 3,
        MonthOfBirthday: 1,
        YearOfBirthday: 1970,
        IsMultiNews: 0,
        IsEmployee: true,
        CustomInforFields: "{}",
        PresenterOUID: null,
        PresenterOUName: null,
        CandidateType: 0,
        UnreadEmailQuantity: 0,
        EmployeeBlackListIDs: null,
        RecruitmentCampaignIDs: null,
        CandidateConvertID: "d1fa29d8-7ca8-11f0-a2ee-005056b252e4",
        SentPropose: null,
        UnreadCommentQuantity: 0,
        StatusTrain: null,
        IsSendTrain: null,
        ProposeOfferStatus: 2,
        IsDuplicate: 0,
    },
    {
        CountTask: null,
        CandidateName: "Nguyễn Thị Mai",
        Mobile: "0987123456",
        Email: "mainguyen.dev@gmail.com",
        RecruitmentCampaignNames: null,
        JobPositionName: "Tester phần mềm",
        RecruitmentName: "QC/Tester HN, HCM Quý 3.2025",
        RecruitmentRoundName: "Interview",
        Score: 85,
        ApplyDate: "2025-09-02T14:30:20.000+07:00",
        ChannelName: "Website",
        EducationDegreeName: "Đại học",
        EducationPlaceName: "ĐH Bách Khoa Hà Nội",
        EducationMajorName: "Công nghệ thông tin",
        WorkPlaceRecent: "FPT Software",
        AttractivePersonnel: "Trần Minh Tâm",
        OrganizationUnitName: "Phòng QA",
        Overall: null,
        AreaName: "hanoi",
        PresenterName: "Phạm Hồng Anh",
        ProbationInfoStatus: null,
        IsTalentPoolDetail: null,
        AccountPortal: null,
        TagInfos: null,
        CandidateStatusID: 2,
        Gender: 0,
        Birthday: "1999-05-14T00:00:00.000+07:00",
        Address: "Hà Nội",
        ReasonRemoved: null,
        CollaboratorName: null,
        HireDate: null,
        OfferStatus: 0,
        RecruitmentChannelID: null,
        CandidateID: 1,
        RecruitmentID: 20962,
        Avatar: null,
        AvatarColor: "#3AA655",
        Active: 1,
        CandidateStatusName: "Phỏng vấn",
        IsNew: 0,
        IsSelfUpdate: 0,
        IsNewProbationInfo: 0,
        IsSentProbationInfo: 0,
        RecruitmentStatusReal: 3,
        RecruitmentStatus: 3,
        IsOutOfCapcity: null,
        BirthdayFormat: 1,
        MonthOfBirthday: 5,
        YearOfBirthday: 1999,
        IsMultiNews: 0,
        IsEmployee: false,
        CustomInforFields: "{}",
        PresenterOUID: null,
        PresenterOUName: null,
        CandidateType: 0,
        UnreadEmailQuantity: 1,
        EmployeeBlackListIDs: null,
        RecruitmentCampaignIDs: null,
        CandidateConvertID: "e6a7b4de-7db1-11f0-b8b2-005056b252e4",
        SentPropose: null,
        UnreadCommentQuantity: 0,
        StatusTrain: null,
        IsSendTrain: null,
        ProposeOfferStatus: 1,
        IsDuplicate: 0,
    },
    {
        CountTask: null,
        CandidateName: "Trần Quốc Huy",
        Mobile: "0912345678",
        Email: "quochuy.it@gmail.com",
        RecruitmentCampaignNames: null,
        JobPositionName: "Frontend Developer",
        RecruitmentName: "Frontend ReactJS Quý 4.2025",
        RecruitmentRoundName: "Test kỹ năng",
        Score: 92,
        ApplyDate: "2025-10-10T09:15:45.000+07:00",
        ChannelName: "LinkedIn",
        EducationDegreeName: "Đại học",
        EducationPlaceName: "ĐH Công nghệ TP.HCM",
        EducationMajorName: "Khoa học máy tính",
        WorkPlaceRecent: "TMA Solutions",
        AttractivePersonnel: "Nguyễn Văn Long",
        OrganizationUnitName: "Phòng Phát triển Web",
        Overall: null,
        AreaName: "hcm",
        PresenterName: null,
        ProbationInfoStatus: null,
        IsTalentPoolDetail: null,
        AccountPortal: null,
        TagInfos: null,
        CandidateStatusID: 3,
        Gender: 1,
        Birthday: "1997-08-22T00:00:00.000+07:00",
        Address: "TP. Hồ Chí Minh",
        ReasonRemoved: null,
        CollaboratorName: null,
        HireDate: null,
        OfferStatus: 1,
        RecruitmentChannelID: null,
        CandidateID: 2,
        RecruitmentID: 21001,
        Avatar: null,
        AvatarColor: "#2196F3",
        Active: 1,
        CandidateStatusName: "Đang đánh giá",
        IsNew: 0,
        IsSelfUpdate: 1,
        IsNewProbationInfo: 0,
        IsSentProbationInfo: 0,
        RecruitmentStatusReal: 4,
        RecruitmentStatus: 4,
        IsOutOfCapcity: null,
        BirthdayFormat: 3,
        MonthOfBirthday: 8,
        YearOfBirthday: 1997,
        IsMultiNews: 0,
        IsEmployee: false,
        CustomInforFields: "{}",
        PresenterOUID: null,
        PresenterOUName: null,
        CandidateType: 0,
        UnreadEmailQuantity: 0,
        EmployeeBlackListIDs: null,
        RecruitmentCampaignIDs: null,
        CandidateConvertID: "f2c2a3a2-7dc2-11f0-c91e-005056b252e4",
        SentPropose: null,
        UnreadCommentQuantity: 2,
        StatusTrain: null,
        IsSendTrain: null,
        ProposeOfferStatus: 2,
        IsDuplicate: 0,
    }
];

const primaryPopupAction = {
    title: "Gửi",
    action: () => {
        console.log('click ne');
    }
}

const secondaryPopupAction = [
    {
        title: "Hủy",
        action: () => {
            showPopup.value = false;
        }
    }
]

const showPopup = ref(false);
</script>
<style scoped>
.candidate-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 16px;
    gap: 16px;
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
</style>