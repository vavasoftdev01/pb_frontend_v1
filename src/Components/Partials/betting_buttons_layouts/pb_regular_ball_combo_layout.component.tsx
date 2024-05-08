import React from "react";


function PBRegularBallComboComponent(props) {
    const data = props.config

    const sm_red = data.btn_3x2_layout.btn_group_red

    const sm_blue = data.btn_3x2_layout.btn_group_blue

    const md_red = data.btn_2x2_layout.btn_group_red

    const md_blue = data.btn_2x2_layout.btn_group_blue

    const caption_balls = data.caption_balls


    return (
        <>
            <div className="bg-[#FCE6D2] flex flex-col p-1 mb-1 rounded-md border-solid border-2 border-b-4 border-black shadow-md">
                <div className="m-1 -pb-1 -mt-1 w-full -ml-1 mr-4 -pt-1 border-solid border-b-2 border-black text-xs flex flex-row">
                    <p className="ml-2">
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

                        
                    </div>


                </div>

                {/* Main */}
                <div className="flex flex-col gap-1 text-white">
                    {/* 2x3 layout */}
                    <div className="w-full">
                        <div className="even flex flex-row gap-2">
                            {sm_blue.map(btn => 
                                <div key={btn.id} className="bg-[#055abb] p-1 rounded-lg hover:cursor-pointer hover:bg-blue-700 border-solid border-2 border-b-4 border-black flex flex-row w-full" onClick={ (e) => props.onPlaceBet(e) }>
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

                    <div className="w-full">
                        <div className="odd flex flex-row gap-2">
                            {sm_red.map(btn => 
                                <div key={btn.id} className="bg-[#aa2d37] p-1 rounded-lg hover:cursor-pointer hover:bg-red-700 border-solid border-2 border-b-4 border-black flex flex-row w-full" onClick={ (e) => props.onPlaceBet(e) }>
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
                {/* 2x2 layout */}
                <div className="flex flex-row gap-2 text-white mt-2">
                    <div className="w-full flex-col">
                        <div className="even">
                            {md_blue.map(btn => 
                                <div key={btn.id} className="bet_btn_blue p-1 mb-1 rounded-lg hover:cursor-pointer hover:bg-blue-600 border-solid border-2 border-b-4 border-black flex flex-row" onClick={ (e) => props.onPlaceBet(e) }>
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
                            {md_red.map(btn => 
                                <div key={btn.id} className="bet_btn_red p-1 mb-1 rounded-lg hover:cursor-pointer hover:bg-red-600 border-solid border-2 border-b-4 border-black flex flex-row" onClick={ (e) => props.onPlaceBet(e) }>
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
        </>
    )
}

export default PBRegularBallComboComponent;