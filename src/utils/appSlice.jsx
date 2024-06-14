import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    open: true,
    video: [],
    category: "All",
    searchSuggestion: [],
  },
  reducers: {
    togglesidebar: (state) => {
      state.open = !state.open;
    },
    setHomeVideo: (state, action) => {
      state.video = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload; // Fix capitalization issue here
    },
    setSearchSuggestion: (state, action) => {
      state.searchSuggestion = action.payload;
    },
  },
});

export const { togglesidebar, setHomeVideo, setCategory, setSearchSuggestion } = appSlice.actions;
export default appSlice.reducer;



// import { createSlice, configureStore } from '@reduxjs/toolkit'

// const appSlice = createSlice({
//   name: 'app',
//   initialState: {
//     open: true,
//     video: [],
//     category: "All",
//     searchSuggestion: [],
//   },
//   reducers: {
//     // actions
//     togglesidebar:(state) => {
//       state.open = !state.open;
//     },
//     setHomeVideo: (state, action) => {
//       state.video = action.payload;
//     },
//     setCategory: (state, action) => {
//       state.Category = action.payload;
//     },
//     setSearchSuggestion: (state, action) => {
//       state.searchSuggestion = action.payload;
//     }

//   }

// });
// export const {togglesidebar, setHomeVideo, setCategory,  setSearchSuggestion} = appSlice.actions;
// export default appSlice.reducer;