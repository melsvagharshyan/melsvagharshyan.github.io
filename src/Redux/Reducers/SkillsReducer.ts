import {createSlice} from "@reduxjs/toolkit";
import {skillsStateType} from "../Types/SkillsType";


const initialState: skillsStateType = {
    items:  [
        {img:"../../../Images/Skills/Ts.png", header: "TypeScript", context: "TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system."},
        {img:"../../../Images/Skills/Js.png", header: "JavaScript", context: "JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries."},
        {img:"../../../Images/Skills/react.png", header: "React", context: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies."},
        {img:"../../../Images/Skills/Redux.png", header: "Redux", context: "Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces."},
        {img:"../../../Images/Skills/html.png", header: "HTML5", context: "HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final[3] major HTML version that is a World Wide Web Consortium (W3C) recommendation."},
        {img:"../../../Images/Skills/Sass.png", header: "Sass", context: "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS)."}
    ]
}

const SkillsReducer = createSlice({
    name: "Skills",
    initialState,
    reducers:{

    }
});

export default SkillsReducer.reducer;