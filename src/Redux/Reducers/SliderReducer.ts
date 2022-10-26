import {createSlice} from "@reduxjs/toolkit";
import {sliderStateType} from "../Types/SlidesType";


const initialState: sliderStateType = {
    slides: [
        {
            title: "GENERAL",
            text: "My name is Mels Vagharshyan.I'm from the Armenia. I live in Sevan." +
                " My birthday is 31.01.2001.I am a very friendly and empathetic person who resolves conflict in a friendly manner." +
                "I have many big dreams and one of them is to become a powerful and successful developer." +
                "I think the key to my success is hard work and dedication to my profession, if I set a goal for myself, " +
                "then I will achieve it in a short period of time."
        },
        {
            title: "EDUCATION",
            text: "I studied at the secondary school named after A. Ter-Grigoryan, with high progress. After that, I entered the Faculty of Law of Yerevan State University, after studying for 2 years, I decided to change my profession and chose programming. Currently, I am studying at the Department of Computer Science of the Faculty of Informatics and Applied Mathematics of Yerevan State University."
        },
        {
            title: "HOBBIES",
            text: " I love programming very much, in my spare time I like to read books and articles about programming and the same time I love to help others and i enjoy exploring new technologies in general! I like to travel,explore different cultures, make new acquaintances, develop myself and expand my worldview, I am an active supporter of self-education",
        },
        {
            title: "LANGUAGES",
            text: ""
        }
    ],
    index: 0
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