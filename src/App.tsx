import styles from './App.module.scss';
import React from "react";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Messenger from "./Components/Messenger/Messenger";
import Footer from "./Components/Footer/Footer";
import FreeHelp from "./Components/FreeHelp/FreeHelp";



const App: React.FC = () => {



    return (
        <div className={styles.App} >
            <Header/>
            <About/>
            <Skills/>
            <Messenger/>
            <FreeHelp/>
            <Footer/>
        </div>
    );
}

export default App;
