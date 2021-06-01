export const STATUSES = {
  CREATED: 'CREATED',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
};
export const getStatusName = (status) => {
  switch (status) {
    case STATUSES.CREATED:
      return 'Chưa làm';
    case STATUSES.IN_PROGRESS:
      return 'Đang làm';
    case STATUSES.DONE:
      return 'Đã xong';
    default:
      return 'Chưa làm';
  }
};
