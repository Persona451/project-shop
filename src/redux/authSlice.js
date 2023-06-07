import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  role: localStorage.getItem("role") || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.role = action.payload.user.role;
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("role", action.payload.user.role);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.role = "";
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("role");
    },
  },
});

export const { logout, loginSuccess } = authSlice.actions;
export default authSlice.reducer;