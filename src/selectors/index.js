const detailTaskSelector = (taskId) => (state) => state?.todos?.tasks[taskId || ''] ?? {};

export default detailTaskSelector;
