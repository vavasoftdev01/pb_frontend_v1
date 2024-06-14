import React from "react";

function StatsGraphData(props) {

    const graphData = props;

    console.log(graphData.data?.[0].even_count)

    const odd_count = graphData.data?.[0].results_count - graphData.data?.[0].even_count;

    const even_count_percentage = Math.abs(Math.round((100 * graphData.data?.[0].even_count) / graphData.data?.[0].results_count));

    const odd_count_percentage = Math.abs(Math.round((100 * odd_count) / graphData.data?.[0].results_count));

    const under_count = graphData.data?.[0].under_count;

    const over_count = graphData.data?.[0].under_count;

    const under_count_percentage = Math.abs(Math.round((100 * under_count) / graphData.data?.[0].results_count));

    const over_count_percentage = Math.abs(Math.round((100 * over_count) / graphData.data?.[0].results_count));

    const normalball_odd_count = graphData.data?.[0].normal_ball_results.normal_ball_odd_count;

    const normalball_even_count = graphData.data?.[0].normal_ball_results.normal_ball_even_count;

    const normalball_even_count_percentage = Math.abs(Math.round((100 * normalball_odd_count) / graphData.data?.[0].results_count));

    const normalball_odd_count_percentage = Math.abs(Math.round((100 * normalball_even_count) / graphData.data?.[0].results_count));

    const normalball_under_count = graphData.data?.[0].normal_ball_results.normal_ball_under_count;

    const normalball_under_count_percentage = Math.abs(Math.round((100 * normalball_under_count) / graphData.data?.[0].results_count));

    const normalball_over_count = graphData.data?.[0].normal_ball_results.normal_ball_over_count;

    const normalball_over_count_percentage = Math.abs(Math.round((100 * normalball_over_count) / graphData.data?.[0].results_count));

    

    return(
        <>
            <div className="border-solid border-gray-400 border-[0.1rem]  rounded-md w-auto mb-10 p-2">
               <div className="flex flex-row main">

                    <div className="w-[70%] flex flex-col">
                        <div className="bg-[#eeeeee] pt-2 pb-2 my-2 mx-2 rounded-[2rem] border-solid border-black border-2 flex flex-col h-full">

                            {/* Header */}
                            <div className="border-b-2 border-black pl-5 inline-flex">
                                <div>파워볼</div>
                                <div className={"w-3 h-3 rounded-full self-center ml-1 border-solid border-[0.1rem] border-black bg-slate-600"}>
                                    &nbsp;
                                </div>
                            </div>
                            {/* Row 1 */}
                            <div className="inline-flex py-3 px-2">
                                <div className="circle-container w-[5%] mt-2">
                                    <div className={" text-white rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto text-[0.5rem] " + ((graphData.data?.[0].even_count >  odd_count) ? 'bg-[#7a6c5e]': 'bg-blue-500')}>
                                        홀
                                    </div>
                                </div>
                                <div className="progress-bar w-[94%] inline-flex text-white mt-2">
                                    <div className={"h-7 -p-1 rounded-2xl w-[100%] border-solid border-[0.1rem] border-black bg-[#7a6c5e]"}>
                                        <div className="flex flex-row -p-1 relative">
                                            <div className="w-1/2 z-20 pl-1">
                                                { graphData.data?.[0].even_count } ({even_count_percentage}%)
                                            </div>
                                            <div className="w-1/2 z-20 text-right pr-1">
                                                { odd_count } ({odd_count_percentage}%)
                                            </div>
                                            <div className={"inline-flex w-full absolute"+(odd_count > graphData.data?.[0].even_count ? " ": " flex-row-reverse")}>
                                                <div className={"z-10 rounded-full "+(odd_count > graphData.data?.[0].even_count ? "bg-blue-500": "bg-red-500")} style={{ width: (odd_count > graphData.data?.[0].even_count ? odd_count_percentage: even_count_percentage)+'%'}}>&nbsp;</div>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                                <div className="circle-container w-[5%] mt-2">
                                    <div className={" text-white rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto text-[0.5rem] " + ((graphData.data?.[0].even_count >  odd_count) ? 'bg-red-500': 'bg-[#7a6c5e]')}>
                                        짝
                                    </div>
                                </div>
                            </div>
                            {/* Row 2 */}
                            <div className="inline-flex py-3 px-2">
                                <div className="circle-container w-[5%] mt-2">
                                    <div className={" text-white rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto text-[0.5rem] " + ((over_count > under_count) ? 'bg-[#7a6c5e]': 'bg-blue-500')}>
                                        언더
                                    </div>
                                </div>
                                <div className="progress-bar w-[94%] inline-flex text-white mt-2">
                                    <div className={"h-7 -p-1 rounded-2xl w-[100%] border-solid border-[0.1rem] border-black bg-[#7a6c5e]"}>
                                        <div className="flex flex-row -p-1 relative">
                                            <div className="w-1/2 z-20 pl-1">
                                                { under_count } ({ under_count_percentage }%)
                                            </div>
                                            <div className="w-1/2 z-20 text-right pr-1">
                                                { over_count } ({over_count_percentage}%)
                                            </div>
                                            <div className={"inline-flex w-full absolute"+(over_count > under_count ? " flex-row-reverse": "")}>
                                                <div className={"z-10 rounded-full "+(over_count > under_count ? "bg-red-500": "bg-blue-500")} style={{ width: (over_count > under_count ? over_count_percentage: under_count_percentage)+'%'}}>&nbsp;</div>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                                <div className="circle-container w-[5%] mt-2">
                                    <div className={" text-white rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto text-[0.5rem] " + ((over_count > under_count) ? 'bg-red-500': 'bg-[#7a6c5e]')}>
                                        오버
                                    </div>
                                </div>
                            </div> 
                        </div>
                        {/* 2nd progress bar container */}
                        <div className="bg-[#eeeeee] pt-2 pb-2 my-2 mx-2 rounded-[2rem] border-solid border-black border-2 flex flex-col h-full">

                            {/* Header */}
                            <div className="border-b-2 border-black pl-5 inline-flex">
                                <div>일반볼</div>
                                <div className={"w-3 h-3 rounded-full self-center ml-1 border-solid border-[0.1rem] border-black bg-yellow-600"}>
                                    &nbsp;
                                </div>
                                <div className={"w-3 h-3 rounded-full self-center ml-1 border-solid border-[0.1rem] border-black bg-red-600"}>
                                    &nbsp;
                                </div>
                                <div className={"w-3 h-3 rounded-full self-center ml-1 border-solid border-[0.1rem] border-black bg-blue-600"}>
                                    &nbsp;
                                </div>
                                <div className={"w-3 h-3 rounded-full self-center ml-1 border-solid border-[0.1rem] border-black bg-green-600"}>
                                    &nbsp;
                                </div>
                            </div>
                            {/* Row 1 */}
                            <div className="inline-flex py-3 px-2">
                                <div className="circle-container w-[5%] mt-2">
                                    <div className={" text-white rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto text-[0.5rem] " + ((normalball_even_count >  normalball_odd_count) ? 'bg-[#7a6c5e]': 'bg-blue-500')}>
                                        홀
                                    </div>
                                </div>
                                <div className="progress-bar w-[94%] inline-flex text-white mt-2">
                                    <div className={"h-7 -p-1 rounded-2xl w-[100%] border-solid border-[0.1rem] border-black bg-[#7a6c5e]"}>
                                        <div className="flex flex-row -p-1 relative">
                                            <div className="w-1/2 z-20 pl-1">
                                                { normalball_even_count } ({normalball_even_count_percentage}%)
                                            </div>
                                            <div className="w-1/2 z-20 text-right pr-1">
                                                { normalball_odd_count } ({normalball_odd_count_percentage}%)
                                            </div>
                                            <div className={"inline-flex w-full absolute"+(normalball_even_count >  normalball_odd_count ? " flex-row-reverse ": " ")}>
                                                <div className={"z-10 rounded-full "+(normalball_even_count >  normalball_odd_count ? "bg-red-500": "bg-blue-500")} style={{ width: (normalball_even_count >  normalball_odd_count ? normalball_odd_count_percentage: normalball_even_count_percentage)+'%'}}>&nbsp;</div>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                                <div className="circle-container w-[5%] mt-2">
                                    <div className={" text-white rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto text-[0.5rem] " + ((normalball_even_count >  normalball_odd_count) ? 'bg-red-500': 'bg-[#7a6c5e]')}>
                                        짝
                                    </div>
                                </div>
                                
                            </div>
                            {/* Row 2 */}
                            <div className="inline-flex py-3 px-2">
                                <div className="circle-container w-[5%] mt-2">
                                    <div className={" text-white rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto text-[0.5rem] " + ((normalball_over_count > normalball_under_count) ? 'bg-[#7a6c5e]': 'bg-blue-500')}>
                                        언더
                                    </div>
                                </div>
                                <div className="progress-bar w-[94%] inline-flex text-white mt-2">
                                    <div className={"h-7 -p-1 rounded-2xl w-[100%] border-solid border-[0.1rem] border-black bg-[#7a6c5e]"}>
                                        <div className="flex flex-row -p-1 relative">
                                            <div className="w-1/2 z-20 pl-1">
                                                { normalball_under_count } ({ normalball_under_count_percentage }%)
                                            </div>
                                            <div className="w-1/2 z-20 text-right pr-1">
                                                { normalball_over_count } ({normalball_over_count_percentage}%)
                                            </div>
                                            <div className={"inline-flex w-full absolute"+(normalball_over_count > normalball_under_count ? " flex-row-reverse": "")}>
                                                <div className={"z-10 rounded-full "+(normalball_over_count > normalball_under_count ? "bg-red-500": "bg-blue-500")} style={{ width: (normalball_over_count > normalball_under_count ? normalball_over_count_percentage: normalball_under_count_percentage)+'%'}}>&nbsp;</div>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                                <div className="circle-container w-[5%] mt-2">
                                    <div className={" text-white rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto text-[0.5rem] " + ((normalball_over_count > normalball_under_count) ? 'bg-red-500': 'bg-[#7a6c5e]')}>
                                        오버
                                    </div>
                                </div>
                            </div>
                            
                        </div>
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