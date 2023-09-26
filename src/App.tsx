import styles from './App.module.scss';
import React from "react";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";
import Messenger from "./Components/Messenger/Messenger";
import Footer from "./Components/Footer/Footer";
import FreeHelp from "./Components/FreeHelp/FreeHelp";
import {useAppDispatch, useAppSelector} from "./Redux/hooks";
import {setOpen} from "./Redux/Reducers/MobileReducer";
import ArrowTop from "./Components/ArrowTop/ArrowTop";
import About from "./Components/About/About";



const App: React.FC = () => {



    const {open} = useAppSelector(state=> state.open);
    const dispatch = useAppDispatch();

    return (
        <div className={styles.App} onClick={()=> open === true && dispatch(setOpen(false))} >
            <Header/>
            <About/>
            <Skills/>
            <Messenger/>
            <ArrowTop/>
            <FreeHelp/>
            <Footer/> 
        </div>
    );
}

export default App;
