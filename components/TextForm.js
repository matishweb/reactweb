import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick = () => {
        console.log('upclicked');
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowclick =()=>{
        console.log('Downclicked');
        let newTextlow=text.toLowerCase();
        setText(newTextlow);
    }

    const handleOnchange = (event) => {
        console.log('onchnage');
        setText(event.target.value);
    }

    const [text, setText] = useState('Changed the textusing useState...');


    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3 my-3">
                <textarea className="form-control my-2" value={text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpclick} >ConvertToUpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowclick} >ConvertToLowerCase</button>
            </div>
        </div>
    )
}
