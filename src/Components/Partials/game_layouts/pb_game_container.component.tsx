import React from "react";

function PBGameContainerComponent(props) {
    return(
        <>
            <div className="bg-slate-600 rounded-lg h-2/5 flex relative w-full border-4 border-solid border-black">
                <img src="./images/BallsMachine_container_bg.jpeg" className="w-full object-cover relative"/>
                <img src="./images/BallsMachine_bg.gif" className="h-full w-full object-contain absolute mx-auto my-auto"/>
                <img src="./images/BallsMachine_case.webp" className="h-full w-full object-contain absolute mx-auto my-auto"/>
                <img src="./images/BallsMachine_mx.webp" className="h-full w-full object-contain absolute mx-auto my-auto"/>
                <div className="beam-cont w-full h-full absolute">
                    {/* <img src="./images/light-shine-purple.gif" className="object-contain w-1/2 h-full ml-5 -mt-7 absolute" /> */}
                    {/* <img src="./images/light-shine-gold.gif" className="object-contain w-1/2 h-full ml-100  absolute"/> */}
                    {/* <img src="./images/light-shine-purple.gif" className="object-cover absolute bg-red-50"/> */}
                </div>
                
            </div>
        </>
    )
}

export default PBGameContainerComponent