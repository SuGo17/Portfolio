import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { THEME, Themes as ThemeType } from "./enum";

export interface ThemeState {
  theme: ThemeType;
}

const initialTheme = localStorage.getItem(THEME) as ThemeType;

const initialState: ThemeState = {
  theme: initialTheme || ThemeType.DARK,
};

export const themeSlice = createSlice({
  name: THEME,
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateTheme } = themeSlice.actions;

export default themeSlice.reducer;
