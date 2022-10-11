import {createSlice} from "@reduxjs/toolkit";
import {sliderStateType} from "../Types/SlidesType";


const initialState: sliderStateType = {
    slides: [
        {
            text: "Walking on water and developing software from a specification are easy if both are frozen.",
            autor: "Edward V Berard"
        },
        {
            text: "Only those who risk going too far can possibly find out how far one can go.",
            autor: "T.S. Eliot"
        },
        {text: "It always takes longer than you expect, even when you take into account.", autor: "Hofstadter's Law"},
        {
            text: "Don't fear failure. A not failure, but low aim, is the crime. In great attempts it is glorious even to fail.",
            autor: "Bruce Lee"
        }
    ],
    index: 1
}

const sliderReducer = createSlice({
    name: "Slider",
    initialState,
    reducers: {
        setIndex(state, action) {
            state.index = action.payload;
        }
    }
});


export const {setIndex} = sliderReducer.actions;

export default sliderReducer.reducer;