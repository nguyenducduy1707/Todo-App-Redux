const detailTaskSelector = (state) => (taskId) => state?.todos?.tasks[taskId || ''] ?? {};

export default detailTaskSelector;
