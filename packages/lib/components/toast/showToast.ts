import type { ToastConfig } from './types';

const toastDefaults: Partial<ToastConfig> = {
  duration: 5000,
  severity: 'info',
};

export const showToast = (config: ToastConfig) => {
  const mergedConfig: ToastConfig = { ...toastDefaults, ...config };
  const event = new CustomEvent('cx-show-toast', { bubbles: true, composed: true, detail: mergedConfig });
  document.dispatchEvent(event);
};
