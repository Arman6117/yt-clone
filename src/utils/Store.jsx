import { configureStore } from '@reduxjs/toolkit';
import appReducer from "./appSlice";
import chatReducer from './ChatSlice'; // Corrected import

const store = configureStore({
    reducer: {
        app: appReducer,
        chat: chatReducer // Corrected reducer naming
    }
});

export default store;


// import { configureStore } from '@reduxjs/toolkit'
// import appReducer from "./appSlice";
// import ChatSlice from './ChatSlice';


// const store = configureStore({
//     reducer:{
//        app: appReducer,
//        chat: ChatSlice
//     }
// })


// export default store;