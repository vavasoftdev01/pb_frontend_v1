import React from "react";

function PBSingleComponent(props) {
    const data = props.config

    const red = data.btn_group_red

    const blue = data.btn_group_blue

    const caption_balls = data.caption_balls


    return(
        <>
            {/* button group #1 - start - TODO: refactor prop/ref based values*/}
            <div className="bg-[#FCE6D2] flex flex-col p-1 mb-1 rounded-md border-solid border-2 border-b-4 border-black shadow-md">
                <div className="m-1 -pb-1 -mt-1 w-full -ml-1 mr-4 -pt-1 border-solid border-b-2 border-black text-xs flex flex-row">
                    <p className="ml-2 w-24">
                    { data.title }
                    </p>

                    <div className="ball_icon_container w-48 flex flex-row">
                        {
                            caption_balls.map(ball => (
                                
                                <div key={ball} className={"w-3 h-3 rounded-full self-center ml-1 border-solid border-[0.1rem] border-black bg-"+ball+"-600"}>
                                    &nbsp;
                                </div>
                                
                            ))
                        }
                        {/* <div className="bg-yellow-500 w-3 h-3 rounded-full self-center ml-1 border-solid border-[0.1rem] border-black">&nbsp;</div>
                        <div className="bg-red-500 w-3 h-3 rounded-full self-center ml-1 border-solid border-[0.1rem] border-black">&nbsp;</div>
                        <div className="bg-blue-500 w-3 h-3 rounded-full self-center ml-1 border-solid border-[0.1rem] border-black">&nbsp;</div>
                        <div className="bg-green-500 w-3 h-3 rounded-full self-center ml-1 border-solid border-[0.1rem] border-black">&nbsp;</div>
                        <div className="bg-slate-800 w-3 h-3 rounded-full self-center ml-1 border-solid border-[0.1rem] border-black">&nbsp;</div> */}
                    </div>
                </div>
                <div className="flex flex-row gap-2 text-white">
                    <div className="w-full flex-col">
                        <div className="even">
                            {
                                blue.map(btn => 
                                    <div key={btn.id} className="bet_btn_blue p-1 mb-1 rounded-lg hover:cursor-pointer hover:bg-blue-600 border-solid border-2 border-black flex flex-row" onClick={ (e) => props.onPlaceBet(e) }>
                                        <span className="w-full text-xs my-auto">
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
                                <div key={btn.id} className="bet_btn_red p-1 mb-1 rounded-lg hover:cursor-pointer hover:bg-red-600 border-solid border-2 border-black flex flex-row" onClick={ (e) => props.onPlaceBet(e) }>
                                    <span className="w-full text-xs my-auto">
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