import BaseLocalStorage from '@/localStorage/base/baseLocalStorage'

class CandidatesLocalStorage extends BaseLocalStorage {
  constructor() {
    super()
    this.localStorageKey = 'candidates'
    this.localStorageFieldId = 'CandidateId'
  }

  // /**
  //  * Hàm kiểm tra trùng lặp theo nghiệp vụ riêng
  //  * @param {*} payload
  //  * @returns
  //  */
  // checkDuplicate(payload) {
  //     return api.post(`${this.controller}/check-duplicate`, payload);
  // }
}

export default new CandidatesLocalStorage()
