import { useState } from 'react';

function TextEditor(props) {
    console.log(props);
    //means values of text is only change by set text function
    const [text, setText] = useState("");
    const convertUpper = () => {
        let upText = text.toUpperCase();
        console.log(text, upText);
        setText(upText);
        props.showAlert("Text Are Upper Cased.","success");
    }
    const convertLower = () => {
        let lowText = text.toLowerCase();
        console.log(text, lowText);
        setText(lowText);
        props.showAlert("Text Are Lower Cased.","success");
    }
    const updateText = (event) => {
        setText(event.target.value);
    }
    const clearText = (event) => {
        setText('');
        props.showAlert("Text Are Cleared.","danger");
    }
    const copyText = (event) => {
        let tempText = document.getElementById("textInput");
        tempText.select();
        navigator.clipboard.writeText(tempText.value);
        props.showAlert("Text Are Copied.","success");
    }
    const removeExtraSpaces = (event) => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Are Removed.","success");
    }
    const shareOnMail = () => {
        window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.example&&body=" + text;
    }
    return (
        <>
            <div className="container my-3">
                <h1>Enter your text</h1>
                <textarea className="form-control" style={{ border: '2px solid' }} id="textInput" cols="30" rows="8" onChange={updateText} value={text} placeholder="Enter the text"></textarea>
                <button disabled={text.trim().length===0} className="btn btn-primary my-2" onClick={convertUpper} title="Click here for Upper Case">Upper Case</button>
                <button disabled={text.trim().length===0} className="btn btn-primary mx-2 my-2" onClick={convertLower} title="Click here for Lower Case">Lower Case</button>
                <button disabled={text.trim().length===0} className="btn btn-primary mx-2 my-2" onClick={copyText} title="Click here for Copy Text">Copy Text</button>
                <button disabled={text.trim().length===0} className="btn btn-primary mx-2 my-2" onClick={removeExtraSpaces} title="Click here to remove extra spaces">Remove Extra Spaces</button>
                <button disabled={text.trim().length===0} className="btn btn-danger mx-2 my-2" onClick={clearText} title="Click here for clear">Clear</button>
                <button disabled={text.trim().length===0} className="btn btn-danger mx-2 my-2" onClick={shareOnMail} title="Click here for Share On Gmail">Share On Gmail</button>
                <h3>Text Summary</h3>
                <p className='my-2'>{text.trim().length===0 ? 0:text.trim().split(/\s+/).length} words and {text.length} charecters.</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>

    );
}

export default TextEditor;