import { type Middleware } from 'redux';
import { isRejected } from '@reduxjs/toolkit';
import { message } from 'antd';
// import { ERROR_STATUS_CODES } from '@/constant/statusCodes';

interface DetailInnerArray {
  ctx?: unknown;
  input?: string;
  loc?: unknown;
  msg: string;
  type?: string;
}

interface MSG {
  message: string;
}

interface ErrorPayload {
  data: {
    detail: string | MSG | DetailInnerArray[];
  };
  status: number;
}

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejected(action)) {
    const payload = action.payload as ErrorPayload;

    if (payload?.data?.detail) {
      message.error(
        (payload.data?.detail as MSG)?.message ||
          (payload.data?.detail as DetailInnerArray[])[0]?.msg ||
          (payload.data?.detail as string),
      );
    } else {
      // message.error(ERROR_STATUS_CODES[payload?.status] || ERROR_STATUS_CODES[1010]);
      message.error('test error msg');
    }
  }

  return next(action);
};
