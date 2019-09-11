import { notification } from 'antd';

export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const CLEAN_MESSAGE = 'CLEAN_MESSAGE';

export const notificationTypes = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  INFO: 'INFO',
};

export function cleanMessage() {
  return (dispatch) => {
    dispatch({
      type: CLEAN_MESSAGE,
    });
  };
}

export function showMessage({ text, type = notificationTypes.SUCCESS }) {
  return (dispatch) => {
    dispatch({
      type: SHOW_MESSAGE,
      payload: {
        text,
        type,
      },
    });
    switch (type) {
      case notificationTypes.SUCCESS:
        notification.success({
          message: text,
        });
        break;
      case notificationTypes.ERROR:
        notification.error({
          message: text,
        });
        break;
      case notificationTypes.WARNING:
        notification.warning({
          message: text,
        });
        break;
      case notificationTypes.INFO:
        notification.info({
          message: text,
        });
        break;
      default:
        notification.info({
          message: text,
        });
        break;
    }
    dispatch(cleanMessage());
  };
}
