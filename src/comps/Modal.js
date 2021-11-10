import React from "react";

const Modal = ({selectedImage,setSelectedImage})=>{

    return (
        <div className="backdrop" onClick={()=>{setSelectedImage(null)}}>
            <img src={selectedImage} alt="Enalrged"/>
        </div>
    )
}

export default Modal;