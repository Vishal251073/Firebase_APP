import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
const UpLoad = ()=>{
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);
    const types = ['image/png','image/jpeg','image/jpg'];
    function changeHandler(event)
    {
        let selected = event.target.files[0];
        if(selected && types.includes(selected.type))
        {
            setFile(selected);
            setError("")
        }
        else{
            setFile(null);
            setError('Please select a valid file type i.e "jpeg , png or jpg"')
        }
    }
    return (
        <form>
            <label>
                <input onChange={changeHandler} type ="file"/>
                <span>+</span>
            </label>
            <div className="output">
                {error && <div>{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <div>{<ProgressBar file={file} setFile={setFile}/>}</div>}
            </div>
        </form>
    )
}
export default UpLoad;