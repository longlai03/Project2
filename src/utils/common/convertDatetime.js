import moment from 'moment'

/**
 * Chuyển thời gian local sang UTC (GMT)
 * @param {Date|string} value - Giá trị ngày giờ (Date hoặc chuỗi)
 * @param {string} format - Định dạng output (mặc định ISO)
 * @returns {string|null} Chuỗi thời gian UTC
 */
export const convertLocalDateTimeToGMT = (value, format = 'YYYY-MM-DDTHH:mm:ss[Z]') => {
  if (!value) {
    return value
  }
  return moment(value).utc().format(format)
}

/**
 * Chuyển thời gian UTC (GMT) từ DB về local time
 * @param {string} value - Chuỗi thời gian UTC từ DB
 * @param {string} format - Định dạng input (phải khớp với DB)
 * @returns {Date|null} Đối tượng Date (local)
 */
export const convertGMTToLocalDateTime = (value, format = 'YYYY-MM-DDTHH:mm:ss[Z]') => {
  if (!value) {
    return value
  }
  return moment.utc(value, format).local().toDate()
}

/**
 * Chuyển ngày sang định dạng chuẩn để lưu DB
 * @param {Date|string} value - Giá trị ngày (Date hoặc chuỗi)
 * @param {string} format - Định dạng output (mặc định yyyy-MM-dd)
 * @returns {string|null} Chuỗi ngày dạng yyyy-MM-dd
 */
export const convertDateTime = (value, format = 'YYYY-MM-DD') => {
  if (!value) {
    return value
  }
  return value ? moment(value).format(format) : null
}
