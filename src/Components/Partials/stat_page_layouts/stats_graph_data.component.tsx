import React from "react";

function StatsGraphData(props) {

    return(
        <>
            <div className="border-solid border-gray-400 border-[0.1rem] m-2 rounded-md w-auto mb-10 p-10">
               <div className="flex flex-row main">

                    <div className="w-[70%] flex flex-col">
                        <div className="bg-purple-400 p-10 my-5 mx-5 rounded-[2rem] border-solid border-black border-2">PB progress</div>
                        <div className="bg-purple-400 p-10 my-2 mx-5 rounded-[2rem] border-solid border-black border-2">NB progress</div>
                    </div>

                    <div className="graph w-[30%] flex flex-col">
                        <div className="bg-red-300 p-10 my-5 mx-5 h-[60%]">aas</div>
                        <div className="bg-blue-300 caption-data p-5 my-1 mx-5 h-[40%]">
                            sa
                        </div>
                    </div>

               </div>
            </div>
        </>
    )
}

export default StatsGraphData