import React from "react";

function Product ({title, description, mover, count}){
    return(
        <div  className="w-full py-10 h-[20rem] z-10">
            <div onMouseEnter={()=> mover(count)} className="max-w-screen-lg mx-auto flex items-center justify-between">
                <h1 className="font-['Playfair_Display'] text-9xl font-regular">{title}</h1>
                <div className="dets w-1/3">
                    <p className="mb-10">{description}</p>
                </div>
            </div>

        </div>
    )
}

export default Product;