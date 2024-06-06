import React, { useEffect, useMemo, useRef, useState } from "react";
import AverageStatData from "./average_stat_data.component";
import _ from "lodash";

function AverageStatsTableComponent(props) {
    
    const [stats, setStats] = useState(props.statisticalData);
    
    useEffect(() => {
        
        setStats(props.statisticalData);
        
    });

    const table_rows = Array.from({ length: stats?.length }, (_, index) => index);
    const table_columns = Array.from({ length: 9 }, (_, index) => index);

    const renderStats = () => {
        
           return <>

            { stats && <tr>
                    { Object.keys(stats).map(item => (
                        <>
                            
                            { stats[item].length > 1 && stats[item].map(value => (
                                <>
                                    {value.pb_odd == 'E' && <tr>
                                            
                                            <td className="border border-solid border-gray-500 p-1">
                                               
                                                <div className="col-span-1 p-[0.1rem] text-center">
                                                    <div className="bg-red-700 text-white rounded-full -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.5rem]">{ value.idx }</div>
                                                </div>
                                            </td>
                                            
                                    </tr>}
                                    

                                </>

                            ))}

                            <td>
                            { stats[item].length > 1 && stats[item].map(value => (
                                <>
                                    {value.pb_odd == 'O' && <tr className="border border-solid border-gray-500">
                                            
                                            <td className="border border-solid border-gray-500 p-1">
                                                

                                                {/* <span className={"circle px-[0.2rem] py-[0.4rem] rounded-full text-[0.5rem] text-white bg-blue-700"}>
                                                    
                                                </span> */}

                                                <div className="col-span-1 p-[0.1rem] text-center">
                                                    <div className="bg-blue-700 text-white rounded-full -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.5rem]">{ value.idx }</div>
                                                </div>
                                                
                                            </td>
                                            
                                    </tr>}
                                    
                                    {/* continous streak but diff pb_odd value */}

                                </>

                            ))}

                            </td>
                            
                            
                            { stats[item].length == 1 && stats[item][0]['pb_odd'] == 'E' && 
                                <td className="border border-solid border-gray-500 p-1">
                                    <div className="col-span-1 p-[0.1rem] text-center">
                                        <div className="bg-red-700 text-white rounded-full -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.5rem]">{ stats[item][0]['idx'] }</div>
                                    </div>
                                </td> 
                            }

                            { stats[item].length == 1 && stats[item][0]['pb_odd'] == 'O' && 
                                <td className="border border-solid border-gray-500 p-1">
                                    <div className="col-span-1 p-[0.1rem] text-center">
                                        <div className="bg-blue-700 text-white rounded-full -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.5rem]">{ stats[item][0]['idx'] }</div>
                                    </div>
                                </td> 
                            }
                            
                                    
                        </>

                    )) }
                </tr>
            }
                
           </>
        
    }
    
    return(
        <>
            <div className="avg-stats-24hrs border-[0.1rem] border-solid border-gray-400 mt-[1rem] rounded-md p-2 mx-2 flex flex-col">
                <div className="flex flex-row">
                    <div className="flex flex-col w-full">
                        <div className="w-full inline-flex">
                            <div className="">
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
                <div className="h-[100%]">
                    <div className="bg-slate-100 h-full overflow-x-scroll">
                        {/* <AverageStatData /> */}
                       
                        <table className="table table-auto  text-center tracking-tight">
                            {/* { table_rows.map(item => ( */}
            
                                <td className="text-[0.8rem]">
                                        {/* <td className="border border-solid border-gray-500 p-1 text-red-500 ">짝수</td>
                                        <td className="border border-solid border-gray-500 p-1 text-blue-500 ">홀수</td> */}
                                        
                                        {/* { table_columns.map(item => ( */}
                                            <>
                                                { renderStats() }
                                                {/* <td className="border border-solid border-gray-500 p-2">
                                                    <span className={"circle px-[0.2rem] py-[0.4rem] rounded-full text-[0.5rem] text-white bg-red-700"}>
                                                        even 
                                                    </span>
                                                </td>
                                                <td className="border border-solid border-gray-500 p-2">
                                                    <span className={"circle px-[0.2rem] py-[0.4rem] rounded-full text-[0.5rem] text-white bg-blue-700"}>
                                                        odd
                                                    </span>
                                                </td> */}

                                            </>
                                        
                                        {/* ))} */}
                                        {/* { table_columns.map(item => (
                                            <>
                                                <td className="border border-solid border-gray-500 p-1 text-red-500 ">짝수</td>
                                                <td className="border border-solid border-gray-500 p-1 text-blue-500 ">홀수</td>
                                                
                                                
                                                    <tr className="text-[0.7rem] tracking-tight"> 
                                                        

                                                    </tr>
                                            </>
                                            
                                            

                                        ))} */}
                                       

                                    
                                    
                                </td>
                             {/* ))} */}
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AverageStatsTableComponent