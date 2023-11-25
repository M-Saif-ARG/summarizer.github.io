import React, { useState } from "react";
import Button from '@mui/material/Button';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Swal from 'sweetalert2'

const TextInput = (props) => {

    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleClick = () => {
        if(text !==  ''){
            Swal.fire("Summarizing the data");
        }
        if(text ===  ''){
            Swal.fire("TextArea is Empty");
        }
        props.handleButtonClick(text);
        setText(''); // This will clear the text area after clicking the button
    };

    return (
        <>
            <div className="main_note">
                <textarea
                    rows="7" cols=""
                    value={text}
                    onChange={handleChange}
                    placeholder="Enter text here...">
                </textarea>
                <Button onClick={handleClick}>
                    <UploadFileIcon className="upload_sign" />
                </Button>
            </div>
        </>
    );
};
export default TextInput;