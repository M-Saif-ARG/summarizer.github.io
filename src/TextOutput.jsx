import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TextOutput = (props) => {


    const [wordCountI, setWordCountI] = useState(0);
    useEffect(() => {
        if (props.text !== null) {
            const words = props.text.split(' ').filter(word => word !== '');
            setWordCountI(words.length);
        }

    }, [props.text]);

    const [data, setData] = useState("");

    const [wordCountO, setWordCountO] = useState(0);
    useEffect(() => {
        if (data.summary) {
            const words = data.summary.split(' ').filter(word => word !== '');
            setWordCountO(words.length);
        }
    }, [data.summary]);

    useEffect(() => {

        const options = {
            method: 'POST',
            url: 'https://gpt-summarization.p.rapidapi.com/summarize',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': process.env.REACT_APP_SECRET_KEY,
                'X-RapidAPI-Host': 'gpt-summarization.p.rapidapi.com'
            },
            data: {
                text: props.text,
                num_sentences: 6
            }
        };

        axios.request(options)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [props.text]);


    return (
        <>
            <div className="flex-container">
                <div className="flex-item">Input Data :
                    <p className="paraI">
                        {props.text}
                        {console.log(props.text)}
                    </p>
                    <div className="lenInput">
                        Number of words : {wordCountI}
                    </div>
                </div>
                <div className="flex-item">Summarized Data :
                    <p className="paraO">
                        {data.summary}
                    </p>
                    <div className="lenOutput">
                        Number of words : {wordCountO}
                    </div>
                </div>
            </div>
        </>
    );
};
export default TextOutput;