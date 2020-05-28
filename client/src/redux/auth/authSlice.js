import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { UserAPI } from '../../api/userAPI';
import { mapFirestoreErrors } from '../../utils/errors';

export const signUpWithEmail = createAsyncThunk(
  'auth/signUpWithEmail',
  async ({ displayName, email, password }, { rejectWithValue }) => {
    try {
      const response = await UserAPI.signUpWithEmail(email, password);
      const { uid: id } = response.user;
      await UserAPI.syncProfileWithFirestore(id, { displayName, email });
    } catch (error) {
      if (!error.code) {
        throw error;
      }
      return rejectWithValue(mapFirestoreErrors(error.code));
    }
  }
);

export const signInWithEmail = createAsyncThunk(
  'auth/signInWithEmail',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      await UserAPI.signInWithEmail(email, password);
    } catch (error) {
      if (!error.code) {
        throw error;
      }
      return rejectWithValue(mapFirestoreErrors(error.code));
    }
  }
);

export const signInWithGoogle = createAsyncThunk(
  'auth/signInWithGoogle',
  async () => {
    try {
      const response = await UserAPI.signInWithGoogle();
      const { uid: id, displayName, email } = response.user;
      await UserAPI.syncProfileWithFirestore(id, { displayName, email });
    } catch (error) {
      throw error;
    }
  }
);

export const signOut = createAsyncThunk(
  'auth/signOut',
  async () => {
    try {
      await UserAPI.signOut();
    } catch (error) {
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isOnBootAuthVerified: false,
    redirectPath: '/'
  },
  reducers: {
    userDetected(state, action) {
      state.isOnBootAuthVerified = true;
      state.user = action.payload;
    },
    userNotDetected(state) {
      state.isOnBootAuthVerified = true;
      state.user = null;
    },
    setRedirectPath(state, action) {
      state.redirectPath = action.payload;
    }
  }
});

export const {
  userDetected,
  userNotDetected,
  setRedirectPath
} = authSlice.actions;

export default authSlice.reducer;

// Input selectors
export const selectIsOnBootAuthVerified = state => state.isOnBootAuthVerified;
export const selectUser = state => state.user;
export const selectRedirectPath = state => state.redirectPath;