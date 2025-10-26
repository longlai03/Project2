<template>
    <form class="form-container">
        <input v-if="candidateId !== null && candidateId !== ''" type="hidden" name="CandidateId" id="id" value="" />

        <div class="d-flex d-flex-col d-gap-2 d-flex-1">
            <label for="CandidateName" class="input-label">
                Họ và tên
            </label>
            <MsInput2 name="CandidateName" placeholder="Nhập họ và tên" v-model="modelValue.CandidateName" />
        </div>

        <div class="d-flex d-gap-2">
            <div class="d-flex d-flex-col d-gap-2 d-flex-1">
                <label for="Birthday" class="input-label">
                    Ngày sinh
                </label>
                <MsDatePicker name="Birthday" placeholder="dd/MM/yyyy" v-model="modelValue.Birthday" />
            </div>
            <div class="d-flex d-flex-col d-gap-2 d-flex-1">
                <label for="Birthday" class="input-label">
                    Giới tính
                </label>
                <MsSelect2 name="Gender" placeholder="Chọn giới tính" v-model="modelValue.Gender"
                    :options="genderOptions" />
            </div>

        </div>

        <div class="d-flex d-flex-col d-gap-1">
            <label for="AreaName" class="input-label">Khu vực</label>
            <!-- <MsSelectWithAction name="Address" placeholder="Chọn khu vực" :options="areaOption"
                v-model="modelValue.AreaName" :button-icon="faEllipsis"
                :button-on-action="() => console.log('press ne')" /> -->
            <MsInputGroup>
                <template #inputContent>
                    <MsSelect2 name="Address" placeholder="Chọn khu vực" :options="areaOptions"
                        v-model="modelValue.AreaName" />
                </template>
                <template #inputRight>
                    <FontAwesomeIcon :icon="faEllipsis" />
                </template>
            </MsInputGroup>
        </div>

        <div class="d-flex d-gap-2">
            <div class="d-flex d-flex-col d-gap-2 d-flex-1">
                <label for="Birthday" class="input-label">
                    Số điện thoại
                </label>
                <MsInput2 name="Mobile" placeholder="Nhập số điện thoại" v-model="modelValue.Mobile" />
            </div>
            <div class="d-flex d-flex-col d-gap-2 d-flex-1">
                <label for="Birthday" class="input-label">
                    Email
                </label>
                <MsInput2 name="Email" placeholder="Nhập email" v-model="modelValue.Email" type="email" />
            </div>
        </div>

        <div class="d-flex d-flex-col d-gap-2 d-flex-1">
            <label for="Address" class="input-label">
                Địa chỉ
            </label>
            <MsInput2 name="Address" placeholder="Nhập địa chỉ" v-model="modelValue.Address" />
        </div>
        <!-- Update later -->
        <div class="d-flex d-flex-col d-gap-2">
            <label class="">HỌC VẤN</label>
            <div class="d-flex d-flex-col d-gap-1">
                <div class="d-flex d-justify-between d-items-center">
                    <label for="EducationDegreeName" class="input-label input-group-label">
                        <span>•</span>
                        Trình độ đào tạo
                    </label>
                    <MsInputWithAction name="EducationDegreeName" placeholder="Nhập trình độ đào tạo"
                        v-model="modelValue.EducationDegreeName" :button-icon="faChevronDown"
                        :button-on-action="() => { console.log('click me') }" />
                </div>
                <div class="d-flex d-justify-between d-items-center">
                    <label for="EducationPlaceName" class="input-label input-group-label">
                        <span>•</span>
                        Nơi đào tạo
                    </label>
                    <MsInputWithAction name="EducationPlaceName" placeholder="Nhập nơi đào tạo"
                        v-model="modelValue.EducationPlaceName" :button-icon="faChevronDown"
                        :button-on-action="() => { console.log('click me') }" class="input-group-field" />
                </div>
                <div class="d-flex d-justify-between d-items-center">
                    <label for="EducationMajorName" class="input-label input-group-label">
                        <span>•</span>
                        Chuyên ngành
                    </label>
                    <MsInputWithAction name="EducationMajorName" placeholder="Nhập chuyên ngành"
                        v-model="modelValue.EducationMajorName" :button-icon="faChevronDown"
                        :button-on-action="() => { console.log('click me') }" />
                </div>
            </div>
        </div>

        <div>
            <hr />
        </div>

        <MsButton buttonText="Thêm học vấn" :button-icon="faPlus" button-type="plain"
            :onClick="() => { console.log('click me') }" class="form-button" />

        <div class="d-flex d-gap-2">
            <div class="d-flex d-flex-col d-gap-2 d-flex-1">
                <label for="ApplyDate" class="input-label">
                    Ngày ứng tuyển
                </label>
                <MsDatePicker name="ApplyDate" placeholder="dd/MM/yyyy" v-model="modelValue.ApplyDate" />
            </div>
            <div class="d-flex d-flex-col d-gap-2 d-flex-1">
                <label for="ChannelName" class="input-label">
                    Nguồn ứng viên
                </label>
                <MsSelect2 name="ChannelName" placeholder="Chọn nguồn ứng viên" v-model="modelValue.ChannelName"
                    :options="channelNameOptions" />
            </div>
        </div>

        <div class="d-flex d-gap-2">
            <div class="d-flex d-flex-col d-gap-2 d-flex-1">
                <label for="RecruitmentName" class="input-label">
                    Nhân sự khai thác
                </label>
                <MsSelect2 name="RecruitmentName" placeholder="Chọn nhân sự khai thác"
                    v-model="modelValue.RecruitmentName" :options="recruitmentName" />
            </div>
            <div class="d-flex d-flex-col d-gap-2 d-flex-1">
                <label for="CollaboratorName" class="input-label">
                    Cộng tác viên
                </label>
                <MsSelect2 name="CollaboratorName" placeholder="Chọn cộng tác viên"
                    v-model="modelValue.CollaboratorName" :options="collaboratorName" />
            </div>
        </div>
        <!-- Update later -->
        <CheckboxMs name="Check" title="Thêm nhanh người tham chiếu vào kho ứng viên" />

        <MsButton buttonText="Thêm người giới thiệu" :button-icon="faPlus" button-type="plain"
            :onClick="() => { console.log('click me') }" class="form-button" />

        <div class="d-flex d-flex-col d-gap-2 d-flex-1">
            <label for="WorkPlaceRecent" class="input-label">
                Nơi làm việc gần đây
            </label>
            <MsInput2 name="WorkPlaceRecent" placeholder="Nhập nơi làm việc gần đây"
                v-model="modelValue.WorkPlaceRecent" />
        </div>

        <div>
            <hr />
        </div>

        <MsButton buttonText="Thêm kinh nghiệm làm việc" :button-icon="faPlus" button-type="plain"
            :onClick="() => { console.log('click me') }" class="form-button" />

        <div class="d-flex d-flex-col d-gap-2 d-flex-1">
            <label for="WorkPlace" class="input-label">
                Nơi làm việc
            </label>
            <MsInput2 name="WorkPlace" placeholder="Nhập nơi làm việc" v-model="modelValue.WorkPlace" />
        </div>

        <div class="d-flex d-flex-col d-gap-2">
            <label class="input-label">Thời gian</label>
            <div class="d-flex d-items-center d-gap-1">
                <div class="d-flex d-flex-col d-gap-2 d-flex-1">
                    <MsDatePicker name="WorkTimeStart" placeholder="MM/yyyy" v-model="modelValue.WorkTimeStart" />
                </div>
                <p>-</p>
                <div class="d-flex d-flex-col d-gap-2 d-flex-1">
                    <MsDatePicker name="WorkTimeEnd" placeholder="MM/yyyy" v-model="modelValue.WorkTimeEnd" />
                </div>
            </div>
        </div>

        <div class="d-flex d-flex-col d-gap-2 d-flex-1">
            <label for="JobPositionName" class="input-label">
                Vị trí công việc
            </label>
            <MsInput2 name="JobPositionName" placeholder="Nhập vị trí công việc" v-model="modelValue.JobPositionName" />
        </div>

        <div class="d-flex d-flex-col d-gap-2 d-flex-1">
            <label for="JobDescription" class="input-label">
                Mô tả công việc
            </label>
            <!-- <MsTextarea name="JobDescription" :rows=5 :resize="false" placeholder="Nhập mô tả công việc"
                v-model="modelValue.JobDescription" /> -->
            <MsTextarea2 name="JobDescription" :rows=5 :resize="true" placeholder="Nhập mô tả công việc"
                v-model="modelValue.JobDescription" />
        </div>

        <div>
            <div class="footer-helper"></div>
        </div>
    </form>
</template>
<script setup>
import MsInput2 from '@/components/ms-input/MsInput2.vue';
import MsButton from '@/components/ms-button/MsButton.vue';
import CheckboxMs from '@/components/ms-checkbox/MsCheckbox.vue';
import MsDatePicker from '@/components/ms-input/MsDatePicker.vue';
import MsInputWithAction from '@/components/ms-input/MsInputWithAction.vue';
import MsSelect2 from '@/components/ms-select/MsSelect2.vue';
import candidatesLocalStorage from '@/localStorage/components/candidates/candidatesLocalStorage';
import { faChevronDown, faEllipsis, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ref, watch } from 'vue';
import { genderOptions, areaOptions, channelNameOptions, recruitmentName, collaboratorName, candidateFormDefaultValue } from '@/context/constants/candidateFormConst';
import MsInputGroup from '@/components/ms-input-group/MsInputGroup.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import MsTextarea2 from '@/components/ms-textarea/MsTextarea2.vue';
import candidateAPI from '@/apis/components/candidates/candidateAPI';
import { convertGMTToLocalDateTime } from '@/utils/common/convertDatetime';

const props = defineProps({
    candidateId: {
        required: false,
    },
})

const modelValue = defineModel();

/**
 * @todo: Lấy dữ liệu từ localStorage (giả lập API)
 */
// watch(
//     () => props.candidateId,
//     (newVal) => {
//         if (newVal !== null) {
//             //Fill các trường
//             const formData = candidatesLocalStorage.getById(newVal)
//             Object.assign(modelValue.value, formData)
//         } else {
//             //Reset form
//             Object.keys(modelValue.value).forEach(key => modelValue.value[key] = '')
//         }
//     },
//     { immediate: true }
// )

/**
 * @todo: Lấy dữ liệu từ API
 */
watch(
    () => props.candidateId,
    async (newVal) => {
        if (newVal !== null) {
            // Fill các trường
            const getById = await candidateAPI.getById(props.candidateId);
            const data = getById.data
            const formatFormApiData = {
                ...data,
                Birthday: data.Birthday ? convertGMTToLocalDateTime(data.Birthday) : null,
                ApplyDate: data.ApplyDate ? convertGMTToLocalDateTime(data.ApplyDate) : null,
            }
            Object.assign(modelValue.value, formatFormApiData)
        } else {
            //Reset form
            Object.keys(modelValue.value).forEach(key => modelValue.value[key] = '')
        }
    },
    { immediate: true }
)

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

.input-label {
    display: flex;
    gap: 6px;
    font-weight: bold;
    font-size: 14px;
    flex: 1;
}

.footer-helper {
    height: 16px;
}
</style>