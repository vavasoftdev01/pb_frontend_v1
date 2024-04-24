import React from "react";

function PBSingleComponent(props) {
    const data = props.config

    const red = data.btn_group_red

    const blue = data.btn_group_blue


    return(
        <>
            {/* button group #1 - start - TODO: refactor prop/ref based values*/}
            <div className="bg-[#FCE6D2] flex flex-col p-1 rounded-md border-solid border-2 border-b-4 border-black shadow-md">
                <div className=" mb-1 p-2  border-solid border-b-2 border-black">
                    { data.title }
                </div>
                <div className="flex flex-row gap-2 text-white">
                    <div className="w-full flex-col">
                        <div className="even">
                            {blue.map(btn => 
                                <div key={btn.id} className="bet_btn_blue p-1 mb-1 rounded-lg hover:cursor-pointer hover:bg-blue-600 border-solid border-2 border-black flex flex-row">
                                <span className="w-full text-xs">
                                    { btn.caption }
                                </span>
                                <span className="bg-blue-900 p-1 rounded-md">
                                    { btn.bet_value }
                                </span>
                                </div>
                                
                            )}
                        </div>
                    </div>

                    <div className="w-full flex-col">
                        <div className="odd">
                            {red.map(btn => 
                                <div key={btn.id} className="bet_btn_red p-1 mb-1 rounded-lg hover:cursor-pointer hover:bg-red-600 border-solid border-2 border-black flex flex-row">
                                <span className="w-full text-xs">
                                    { btn.caption }
                                </span>
                                <span className="bg-red-900 p-1 rounded-md">
                                    { btn.bet_value }
                                </span>
                                </div>     
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* button group #1 - end */}
        
        </>
    )
}

export default PBSingleComponent;