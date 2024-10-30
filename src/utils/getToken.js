export const userToken = () => {
  const userStringfied = localStorage.getItem('user') || '""';
  return JSON.parse(userStringfied || {});
};

export const adminToken = () => {
  const adminStringfied = localStorage.getItem('admin') || '""';
  return JSON.parse(adminStringfied || {});
};