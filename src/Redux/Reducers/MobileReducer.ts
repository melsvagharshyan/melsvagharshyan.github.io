import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    open: false,
    active: false
}

const mobileReducer = createSlice({
    name: "mobile",
    initialState,
    reducers: {
        setOpen(state, action) {
            state.open = action.payload;
        },
        setActive(state, action){
            state.active = action.payload;
        }
    }
});


export const {setOpen, setActive} = mobileReducer.actions;

export default mobileReducer.reducer;