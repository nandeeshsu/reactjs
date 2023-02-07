import { createSlice } from "@reduxjs/toolkit";

export const newCompAppSlice = createSlice({
    name: 'newCompApp',
    initialState: {
        message: "Subscribe to React Learning redux"
    },
    reducers: {
        buttonchange: (state) => {
            state.message = "Thanks for subscribing Redux";
        }
    }
});

export const { buttonchange } = newCompAppSlice.actions
export default newCompAppSlice.reducer