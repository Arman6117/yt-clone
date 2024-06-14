import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        setMessage: (state, action) => {
            if (state.messages.length >= 100) {
                state.messages.shift(); // Ensure we don't have more than 100 messages
            }
            state.messages.push(action.payload);
        }
    }
});

export const { setMessage } = chatSlice.actions;
export default chatSlice.reducer; // Corrected export


// import {createSlice} from "@reduxjs/toolkit";

// const chatSlice = createSlice({
//     name: "chat",
//     initialState:{
//         message: [],
//     },
//     reducers:{
//         setMessage: (state, action)=> {
//             state.message.splice(100,1);
//             state.message.push(action.payload)
//         }
//     }
// })

// export const {setMessage} = chatSlice.actions;
// export default chatSlice.reducers;