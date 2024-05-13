import React from "react";

function AverageStatsTableComponent(props) {

    const average_daily_data = props.data

    console.log(average_daily_data)

    // const rendered = average_daily_data.map(data => 
    //     <li>{data}</li>
    // )



    return(
        <>
            <div className="avg-stats-24hrs border-[0.1rem] border-solid border-gray-400 mt-[1rem] rounded-md p-2 mx-2 flex flex-col">
                <div className="flex flex-row">
                    <div className="flex flex-col w-full">
                        <div className="w-full inline-flex">
                            <div>
                                <span className="circle bg-blue-800 px-[0.4rem] py-[0.3rem] rounded-full text-xs text-white">홀</span>
                            </div>
                            <div className="ml-3 flex flex-col">
                                <text className="text-sm">
                                    <text className="font-bold">708&nbsp;</text>
                                    번 (49.17%)
                                </text>
                                <text className="text-gray-300 text-xs">9 연속 회</text>
                            </div>  
                        </div>
                        <div className="w-full inline-flex mt-2">
                            <div>
                                <span className="circle bg-red-800 px-[0.4rem] py-[0.3rem] rounded-full text-xs text-white">짝</span>
                            </div>
                            <div className="ml-3 flex flex-col">
                                <text className="text-sm">
                                    <text className="font-bold">732&nbsp;</text>
                                    번 (50.83%)
                                </text>
                                <text className="text-gray-300 text-xs">11 연속 회</text>
                            </div>  
                        </div>
                    </div>
                    
                    <div className="flex flex-col w-full">
                        <div className="w-full inline-flex justify-end">
                            <div>
                                <span className="circle bg-[#40c] px-[0.3rem] py-[0.5rem] rounded-full text-[0.5rem] text-white">퐁당</span>
                            </div>
                            <div className="ml-3 flex flex-col">
                                <text className="text-sm">
                                <text className="font-bold">382&nbsp;</text>  
                                번</text>
                            </div>
                        </div>
                        <div className="w-full mt-2 inline-flex justify-end">
                            <div>
                                <span className="circle bg-slate-800 px-[0.3rem] py-[0.5rem] rounded-full text-[0.5rem] text-white">꺽음</span>
                            </div>
                            <div className="ml-3 flex flex-col">
                                <text className="text-sm">
                                    <text className="font-bold">719&nbsp;</text>
                                    번
                                </text>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className="h-[50%]">
                    <div className="bg-slate-100">

                        {/* API Data here.. for horizontal table */}
                        <ul>
                            
                        </ul>
                        <table className="table table-auto border border-solid border-gray-500 text-center tracking-tight">
                            <thead>
                                <tr className="text-[0.5rem] font-bold">
                                    <td className="border border-solid border-gray-500 p-1 text-red-500 h-[0.4rem] w-[2rem]">짝수</td>
                                    <td className="border border-solid border-gray-500 p-1 text-blue-500 h-[0.4rem] w-[2rem]">홀수</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-[0.7rem] tracking-tight">
                                    <td className="border border-solid border-gray-500 h-[2rem]">
                                        <span className="circle bg-red-700 px-[0.2rem] py-[0.4rem] rounded-full text-[0.5rem] text-white">1455</span>
                                        
                                    </td>
                                    <td className="border border-solid border-gray-500 h-2">
                                        <span className="circle bg-blue-700 px-[0.2rem] py-[0.4rem] rounded-full text-[0.5rem] text-white">1445</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AverageStatsTableComponent