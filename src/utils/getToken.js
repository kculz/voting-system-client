export const userToken = () => {
  const userStringfied = localStorage.getItem('user') || '""';
  return JSON.parse(userStringfied || {});
};