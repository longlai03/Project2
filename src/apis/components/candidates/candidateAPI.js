import api from '@/apis/config/APIconfig.js'
import BaseAPI from '@/apis/base/baseAPI.js'

class CandidateAPI extends BaseAPI {
  constructor() {
    super()
    this.controller = 'candidates'
  }

  // async getAll() {
  //   try {
  //     const getData = await api.get(`${this.controller}`)
  //     if (getData) {
  //       return getData.data
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  //   /**
  //    * Hàm kiểm tra trùng lặp theo nghiệp vụ riêng
  //    * @param {*} payload
  //    * @returns
  //    */
  //   checkDuplicate(payload) {
  //     return api.post(`${this.controller}/check-duplicate`, payload)
  //   }
}

export default new CandidateAPI()
