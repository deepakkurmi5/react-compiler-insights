import { createSlice } from '@reduxjs/toolkit';
import { User } from './auth-api-slice';

import { authApiSlice } from './auth-api-slice';

interface AuthState {
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checkAuth(state) {
      const localUserInfo = JSON.parse(localStorage.getItem('auth')!);
      if (localUserInfo) {
        state.token = localUserInfo.token;
        state.user = localUserInfo.user;
      }
    },
    logout(state) {
      localStorage.removeItem('auth');
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApiSlice.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
      }
    );
  },
});

export const { checkAuth, logout } = authSlice.actions;

export default authSlice.reducer;
