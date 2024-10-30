import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  admin: localStorage.getItem('admin')
    ? JSON.parse(localStorage.getItem('admin'))
    : null,
};

const adminAuthSlice = createSlice({
  name: 'adminAuth',
  initialState,
  reducers: {
    setAdminCredentials: (state, action) => {
      state.admin = action.payload;
      localStorage.setItem('admin', JSON.stringify(action.payload));
    },
    clearAdminCredentials: (state) => {
      state.admin = null;
      localStorage.removeItem('admin');
      console.log('Removed admin from local storage');
    },
  },
});

export const { setAdminCredentials, clearAdminCredentials } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
