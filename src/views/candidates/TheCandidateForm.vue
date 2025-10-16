<template>
    <!-- ToDo: Đây là nơi sẽ viết form trong popup body -->
    <form class="form-container">
        <input type="hidden" name="CandidateId" id="id" value="" />

        <InputMs name="CandidateName" title="Họ và tên" placeholder="Nhập họ và tên"
            v-model="candidateFormData.CandidateName" />

        <div class="d-flex d-gap-2">
            <InputMs name="Birthday" title="Ngày sinh" placeholder="dd/MM/yyyy" type="date"
                v-model="candidateFormData.Birthday" />
            <SelectMs name="Gender" title="Giới tính" placeholder="Chọn giới tính" v-model="candidateFormData.Gender"
                :options="genderOption" />
        </div>

        <SelectMs name="AreaName" title="Khu vực" placeholder="Chọn khu vực" v-model="candidateFormData.AreaName"
            :options="areaOption" />

        <div class="d-flex d-gap-2">
            <InputMs name="Mobile" title="Số điện thoại" placeholder="Nhập số điện thoại"
                v-model="candidateFormData.Mobile" />

            <InputMs name="Email" title="Email" placeholder="Nhập email" type="email"
                v-model="candidateFormData.Email" />
        </div>

        <InputMs name="Address" title="Địa chỉ" placeholder="Nhập địa chỉ" v-model="candidateFormData.Address" />

        <!-- Update later -->
        <div class="">
            <label class="">HỌC VẤN</label>
            <ul class="input-form-group m-2">
                <li>
                    <div class="input-container-inline">
                        <div class="d-flex d-gap-2">
                            <span>•</span>
                            <label for="">Trình độ đào tạo</label>
                        </div>
                        <div class="d-flex">
                            <div class="input-field-container-icon-right">
                                <input name="EducationDegreeName" class="input-field input-field-education"
                                    placeholder="Nhập trình độ đào tạo" />
                                <button class="button-plain input-field-icon-right">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                            <button class="button-outlined button-field-education">
                                <i class="fa-solid fa-chevron-down"></i>
                            </button>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="input-container-inline">
                        <div class="d-flex d-gap-2">
                            <span>•</span>
                            <label for="">Nơi đào tạo</label>
                        </div>
                        <div class="d-flex">
                            <div class="input-field-container-icon-right">
                                <input name="EducationPlaceName" class="input-field input-field-education"
                                    placeholder="Nhập nơi đào tạo" />
                                <button class="button-plain input-field-icon-right">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                            <button class="button-outlined button-field-education">
                                <i class="fa-solid fa-chevron-down"></i>
                            </button>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="input-container-inline">
                        <div class="d-flex d-gap-2">
                            <span>•</span>
                            <label for="">Chuyên ngành</label>
                        </div>
                        <div class="d-flex">
                            <div class="input-field-container-icon-right">
                                <input name="EducationMajorName" class="input-field input-field-education"
                                    placeholder="Nhập chuyên ngành" />
                                <button class="button-plain input-field-icon-right">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                            <button class="button-outlined button-field-education">
                                <i class="fa-solid fa-chevron-down"></i>
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div>
            <hr />
        </div>

        <ButtonMs buttonText="Thêm học vấn" :button-icon="faPlus" button-type="plain"
            :onClick="() => { console.log('click me') }" class="form-button" />

        <div class="d-flex d-gap-2">
            <InputMs name="ApplyDate" title="Ngày ứng tuyển" placeholder="dd/MM/yyyy" type="date"
                v-model="candidateFormData.ApplyDate" />
            <SelectMs name="ChannelName" title="Nguồn ứng viên" placeholder="Chọn nguồn ứng viên"
                v-model="candidateFormData.ChannelName" :options="genderOption" />
        </div>

        <div class="d-flex d-gap-2">
            <SelectMs name="RecruitmentName" title="Nhân sự khai thác" placeholder="Chọn nhân sự khai thác"
                v-model="candidateFormData.RecruitmentName" :options="genderOption" />
            <SelectMs name="CollaboratorName" title="Cộng tác viên" placeholder="Chọn cộng tác viên"
                v-model="candidateFormData.CollaboratorName" :options="genderOption" />
        </div>
        <!-- Update later -->
        <CheckboxMs name="Check" title="Thêm nhanh người tham chiếu vào kho ứng viên" />

        <ButtonMs buttonText="Thêm người giới thiệu" :button-icon="faPlus" button-type="plain"
            :onClick="() => { console.log('click me') }" class="form-button" />

        <InputMs name="WorkPlaceRecent" title="Nơi làm việc gần đây" placeholder="Nhập nơi làm việc gần đây"
            v-model="candidateFormData.WorkPlaceRecent" />

        <div>
            <hr />
        </div>

        <ButtonMs buttonText="Thêm kinh nghiệm làm việc" :button-icon="faPlus" button-type="plain"
            :onClick="() => { console.log('click me') }" class="form-button" />

        <!-- Update later -->
        <InputMs name="WorkPlace" title="Nơi làm việc" placeholder="Nhập nơi làm việc"
            v-model="candidateFormData.WorkPlace" />

        <div class="d-flex d-flex-col d-gap-2">
            <label>Thời gian</label>
            <div class="d-flex d-items-center d-gap-1">
                <InputMs name="WorkTimeStart" :inline-title="true" placeholder="MM/yyyy" type="date"
                    v-model="candidateFormData.WorkTimeStart" />
                <p>-</p>
                <InputMs name="WorkTimeEnd" placeholder="MM/yyyy" type="date" v-model="candidateFormData.WorkTimeEnd" />
            </div>
        </div>

        <InputMs name="JobPositionName" title="Vị trí công việc" placeholder="Nhập vị trí công việc"
            v-model="candidateFormData.JobPositionName" />

        <!-- Update later -->
        <TextareaMs name="JobDescription" title="Mô tả công việc" :rows=5 :resize="false"
            placeholder="Nhập mô tả công việc" v-model="candidateFormData.JobDescription" />
    </form>
</template>
<script setup>
import ButtonMs from '@/components/control/ButtonMs.vue';
import CheckboxMs from '@/components/form/CheckboxMs.vue';
import InputMs from '@/components/form/InputMs.vue';
import SelectMs from '@/components/form/SelectMs.vue';
import TextareaMs from '@/components/form/TextareaMs.vue';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { reactive, watch } from 'vue';

const candidateFormData = reactive({
    CandidateId: '',
    CandidateName: '',
    Birthday: '',
    Gender: 0,
    AreaName: '',
    Mobile: '',
    Email: '',
    Address: '',
    ApplyDate: '',
    ChannelName: '',
    RecruitmentName: '',
    CollaboratorName: '',
    WorkPlaceRecent: '',
    WorkPlace: '',
    WorkTimeStart: '',
    WorkTimeEnd: '',
    JobPositionName: '',
    JobDescription: '',
})

const genderOption = [
    { value: 0, title: 'Nam' },
    { value: 1, title: 'Nữ' }
]

const areaOption = [
    { value: 'Thanh Xuan', title: 'Thanh Xuân' },
    { value: 'Dong Da', title: 'Đống Đa' },
    { value: 'Cau Giay', title: 'Cầu Giấy' },
]

watch(candidateFormData, (newVal, oldVal) => {
    console.log('Form change', newVal);
}, { deep: true });
</script>
<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.form-button {
    color: var(--color-blue-primary);
}
</style>