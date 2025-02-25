export type ToastConfig = {
  body: string;
  duration?: number;
  severity?: 'info' | 'success';
};

export type ToastWithId = Required<ToastConfig> & {
  id: number;
};
