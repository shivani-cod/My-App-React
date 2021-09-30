import React ,{useState} from 'react'



export default function BhootForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");

    }

    const whiteSpace = ()=>{
        let newText = text.replace(/\s+/g,' ').trim();
        setText(newText)
        props.showAlert("Removed all extra spaces","success");
    }

    
    const Clear =()=>{
        let newText =("");
        setText(newText)
        props.showAlert("Textarea is cleared","success");
    }

    const Copy = ()=>{
        var newText = document.getElementById("Writehere");
        newText.select();
        navigator.clipboard.writeText(newText.value)
        props.showAlert("Text are copied ","success")
        
       
    }

   
     

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');

    return (
        <>
        <div className="container" style={{color: props.mode === 'light' ? '#564102':'white'}}>

        <h1 >{props.heading} </h1>  
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white':props.area,color: props.mode === 'light' ? '#564102':'white'}}  id="Writehere" rows="6"></textarea>
        </div>
        <button className={`btn btn-${props.button} mx-3  `} onClick={handleUpClick} >Convert to UpperCase</button>
        <button className={`btn btn-${props.button} mx-3  `} onClick={handleLoClick}>Convert to LowerCase</button>
        <button className={`btn btn-${props.button} mx-3  `} onClick={whiteSpace}>Extra space</button>
        <button className={`btn btn-${props.button} mx-3  `} onClick={Clear}>Clear</button>
        <button className={`btn btn-${props.button} mx-3  `} onClick={Copy}>Copy</button>
        </div>  
        <div className="container my-4" style={{color: props.mode === 'light' ? '#564102':'white'}} >
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words  {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to Read.</p>
            <p>{text.split(". ").length - 1} No. of Sentences.</p>

           
            <h3>Preview:-</h3>
            <p>{text.length>0?text:"Enter the something above in the textbox to get preview"}</p>
           
            </div>   

</>
    )
}
