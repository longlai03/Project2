import api from '../config/APIconfig'

export default class BaseAPI {
  constructor() {
    this.controller = null
  }

  /**
   * @todo: Lấy tất cả dữ liệu
   * @returns {Array}
   */
  async getAll() {
    const res = await api.get(`${this.controller}`)
    console.log(res.data)
    return res.data
  }

  /**
   * @todo: Lấy tất cả dữ liệu (có phân trang và filter theo từ khóa tìm kiếm, limit, page)
   * @returns {Array}
   */
  async getAllByFilter(search, limit = 10, page = 0) {
    const res = await api.get(`${this.controller}?search=${search}&limit=${limit}&page=${page}`)
    return res.data
  }

  /**
   * @todo: Lấy dữ liệu theo ID
   * @param {String} id - ID của bản ghi
   * @returns {Object|null}
   */
  async getById(id) {
    const res = await api.get(`${this.controller}/${id}`)
    return res.data
  }

  /**
   * @todo: Lấy dữ liệu phân trang
   * @param {Object} payload - Dữ liệu phân trang
   * @returns {Object}
   */
  paging(payload) {
    return api.post(`${this.controller}/paging`, payload)
  }

  /**
   * @todo: Thêm mới bản ghi
   * @param {Object} body - Dữ liệu cần thêm
   * @returns {Object}
   */
  async add(body) {
    const res = await api.post(`${this.controller}`, body)
    return res.data
  }

  /**
   * @todo: Cập nhật bản ghi
   * @param {String} id - ID của bản ghi cần cập nhật
   * @param {Object} body - Dữ liệu cập nhật
   * @returns {Object}
   */
  async update(id, body) {
    const res = await api.put(`${this.controller}/${id}`, body)
    return res.data
  }

  /**
   * @todo: Xóa bản ghi
   * @param {String} id - ID của bản ghi cần xóa
   * @returns {Object}
   */
  async delete(id) {
    const res = await api.delete(`${this.controller}/${id}`)
    console.log(res.data)
    return res.data
  }
}
