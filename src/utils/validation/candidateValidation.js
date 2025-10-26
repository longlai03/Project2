import * as yup from 'yup'

export const candidateValidation = yup.object({
  CandidateName: yup.string().required('Thông tin này là bắt buộc'),
})
