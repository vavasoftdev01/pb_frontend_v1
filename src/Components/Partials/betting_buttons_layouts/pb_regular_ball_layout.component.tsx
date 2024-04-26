import React from "react";

function PBRegularBallComponent(props) {
    const data = props.config

    const red = data.btn_group_red

    const blue = data.btn_group_blue

    const btn_grid_1 = data.btn_grid_1

    const btn_grid_2 = data.btn_grid_2

    const btn_grid_3 = data.btn_grid_3


    return (
        <>
             <div className="bg-[#FCE6D2] flex flex-col p-1 mb-1 rounded-md border-solid border-2 border-b-4 border-black shadow-md">
                <div className="m-1 pb-1 -mt-1 -pt-1 border-solid border-b-2 border-black text-xs">
                    { data.title }
                </div>
                <div className="flex flex-row gap-2 text-white">
                    <div className="w-full flex-col">
                        <div className="even">
                            {blue.map(btn => 
                                <div key={btn.id} className="bet_btn_blue p-1 mb-1 rounded-lg hover:cursor-pointer hover:bg-blue-600 border-solid border-2 border-black flex flex-row" onClick={ (e) => props.onPlaceBet(e) }>
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
                                <div key={btn.id} className="bet_btn_red p-1 mb-1 rounded-lg hover:cursor-pointer hover:bg-red-600 border-solid border-2 border-black flex flex-row" onClick={ (e) => props.onPlaceBet(e) }>
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
                <div className="w-full flex flex-row gap-1">
                    {/* 3 buttons layout.. */}
                    <div key={btn_grid_1.id} className="w-full bg-green-700 p-1 mb-1 rounded-lg hover:cursor-pointer hover:bg-green-600 border-solid border-2 border-black flex flex-row text-white" onClick={ (e) => props.onPlaceBet(e) }>
                        <span className="w-full text-xs">
                            { btn_grid_1.caption }
                        </span>
                        <span className="bg-green-900 p-1 rounded-md">
                            { btn_grid_1.bet_value }
                        </span>
                    </div>

                    <div key={btn_grid_2.id} className="w-full bet_btn_blue p-1 mb-1 rounded-lg hover:cursor-pointer hover:bg-blue-600 border-solid border-2 border-black flex flex-row text-white" onClick={ (e) => props.onPlaceBet(e) }>
                        <span className="w-full text-xs">
                            { btn_grid_2.caption }
                        </span>
                        <span className="bg-blue-900 p-1 rounded-md">
                            { btn_grid_2.bet_value }
                        </span>
                    </div>

                    <div key={btn_grid_3.id} className="w-full bet_btn_red p-1 mb-1 rounded-lg hover:cursor-pointer hover:bg-red-600 border-solid border-2 border-black flex flex-row text-white" onClick={ (e) => props.onPlaceBet(e) }>
                        <span className="w-full text-xs">
                            { btn_grid_3.caption }
                        </span>
                        <span className="bg-red-900 p-1 rounded-md">
                            { btn_grid_3.bet_value }
                        </span>
                    </div>        
                </div>
            </div>
        </>
    )
}

export default PBRegularBallComponent;