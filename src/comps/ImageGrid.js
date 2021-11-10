import React from "react";
import useFireStore from "../hooks/useFireStore";
// import { motion } from "framer-motion";
const ImageGrid = ({setSelectedImage})=>{
    const {docs} = useFireStore('images')
    console.log(docs);
    return (
    <div className="img-grid">
        {docs&&docs.map((doc)=>{
            return (
            <div className="img-wrap" key={doc.id}
            whileHover={{opacity:1}}
            onClick={()=>setSelectedImage(doc.url)}
            >
                <img src={doc.url} alt="uploaded_Img"/>
            </div>)
        })}
    </div>
    );
}

export default ImageGrid;