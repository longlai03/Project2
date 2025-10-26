/**
 * @typedef {Object} ToastAPI
 * @property {(title: string, message?: string, duration?: number) => void} success
 * @property {(title: string, message?: string, duration?: number) => void} error
 * @property {(title: string, message?: string, duration?: number) => void} warning
 * @property {(title: string, message?: string, duration?: number) => void} info
 */

/**
 * Trả về API toast toàn cục
 * @returns {ToastAPI}
 */

export function useToast() {
  return window.toast
}

