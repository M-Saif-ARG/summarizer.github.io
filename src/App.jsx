import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TextInput from "./TextInput";
import TextOutput from "./TextOutput";

const App = () => {
    // const [addItem, setAddItem] = useState([]);
    // const addNote = (note) => {
    //     setAddItem(() => {
    //         return [note];
    //     });

    // };
    const [displayText, setDisplayText] = useState('');

    const handleButtonClick = (text) => {
        setDisplayText(text);
    };
    return (
        <>
            <Header />
            <TextInput handleButtonClick={handleButtonClick} />
            <br />
            <TextOutput text={displayText} />
            <br />
            <Footer />
        </>
    )
};

export default App;