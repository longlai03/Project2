export default class BaseLocalStorage {
  constructor() {
    this.localStorageKey = null
    this.localStorageFieldId = 'id'
  }

  /**
   * @todo: Phương thức lấy tất cả dữ liệu từ localStorage
   * @returns {Array} Mảng dữ liệu hoặc mảng rỗng nếu chưa có dữ liệu
   */
  getAll() {
    const data = JSON.parse(localStorage.getItem(this.localStorageKey))
    return Array.isArray(data) ? data : []
  }

  /**
   * @todo: Phương thức lấy dữ liệu cụ thể từ localStorage
   * @param {*} id - Giá trị định danh
   * @returns {Object|null}
   */
  getById(id) {
    const localStorageData = this.getAll()
    if (!localStorageData.length) return null

    return (
      localStorageData.find((item) => Number(item[this.localStorageFieldId]) === Number(id)) || null
    )
  }

  /**
   * @todo: Thêm bản ghi mới vào localStorage
   * @param {Object} newData
   * @returns {Object} Object data được thêm vào, đã được gán id
   */
  add(newData) {
    const localStorageData = this.getAll()
    const dataId = this.createUniqueKey()
    const formatData = { ...newData, [this.localStorageFieldId]: dataId }

    localStorageData.push(formatData)
    localStorage.setItem(this.localStorageKey, JSON.stringify(localStorageData))
    return formatData
  }

  /**
   * @todo: Hàm cập nhật dữ liệu trong localStorage
   * @param {*} id - Giá trị định danh
   * @param {*} newData - Dữ liệu mới
   * @returns {Object} Object data được chỉnh sửa
   */
  update(id = -1, newData) {
    const localStorageData = this.getAll()
    const index = localStorageData.findIndex(
      (item) => Number(item[this.localStorageFieldId]) === Number(id),
    )

    if (index === -1) return false

    localStorageData[index] = { ...localStorageData[index], ...newData }

    localStorage.setItem(this.localStorageKey, JSON.stringify(localStorageData))
    return newData
  }

  /**
   * @todo: Hàm xóa bản ghi trong localStorage
   * @param {Array<Number> [0,1,2]} ids - Giá trị định danh
   * @returns {Number} Id của phần tử bị xóa
   */
  delete(ids = []) {
    const localStorageData = this.getAll()
    const newData = localStorageData.filter((item) => !ids.includes(item[this.localStorageFieldId]))

    if (newData.length === localStorageData.length) return false

    localStorage.setItem(this.localStorageKey, JSON.stringify(newData))
    return ids
  }

  /**
   * @todo: Xóa toàn bộ dữ liệu trong localStorage
   */
  clear() {
    localStorage.removeItem(this.localStorageKey)
  }

  createUniqueKey() {
    const localStorageData = this.getAll()
    if (localStorageData.length > 0) {
      let maxVal = -1
      for (const item of localStorageData) {
        if (maxVal < item[this.localStorageFieldId]) maxVal = item[this.localStorageFieldId]
      }
      return maxVal + 1
    }
    return 0
  }
}
