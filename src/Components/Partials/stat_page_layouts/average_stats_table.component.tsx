import React, { useEffect, useMemo, useRef, useState } from "react";
import AverageStatData from "./average_stat_data.component";
import _ from "lodash";

function AverageStatsTableComponent(props) {
    
    let statistics = props.statistics;
    let filters = props.filters.type;
    let even_over_count = 0;
    let odd_under_count = 0;
    let odd_percentage = Math.abs((odd_under_count * 100) / statistics?.[0].results_count).toFixed(2);
    let even_percentage = Math.abs((statistics?.[0].even_count * 100) / statistics?.[0].results_count).toFixed(2);
    let streak_odd_count = (statistics?.[0].streak.odd_streak_count[0]) ? statistics?.[0].streak.odd_streak_count[0].length: 0;
    let streak_even_count = (statistics?.[0].streak.even_streak_count[0]) ? statistics?.[0].streak.even_streak_count[0].length: 0;
    
    if(filters == 'pb_odd') {
        even_over_count = statistics?.[0].even_count;
        odd_under_count = statistics?.[0].results_count - statistics?.[0].even_count;
    }

    if(filters == 'is_pb_under') {
        even_over_count = statistics?.[0].results_count - statistics?.[0].over_count;
        odd_under_count = statistics?.[0].results_count - statistics?.[0].under_count;
    }

    switch (filters) {
        case 'is_pb_under':
            even_over_count = statistics?.[0].over_count;
            odd_under_count = statistics?.[0].under_count;
            break;

        case 'num_sum_odd':
            even_over_count = statistics?.[0].normal_ball_results.normal_ball_even_count;
            odd_under_count = statistics?.[0].normal_ball_results.normal_ball_odd_count;
            break;

        case 'is_num_sum_under':
            even_over_count = statistics?.[0].normal_ball_results.normal_ball_over_count;
            odd_under_count = statistics?.[0].normal_ball_results.normal_ball_under_count;
            break;
    
        default:
            even_over_count = statistics?.[0].even_count;
            odd_under_count = statistics?.[0].results_count - statistics?.[0].even_count;
            break;
    }

    odd_percentage = Math.abs((odd_under_count * 100) / statistics?.[0].results_count).toFixed(2);
    even_percentage = Math.abs((even_over_count * 100) / statistics?.[0].results_count).toFixed(2);

    console.log(props.filters)
    const renderDataTable = () => {

        return<>
            <div className="grid grid-flow-col">
                {/* { JSON.stringify(statistics?.[0].results) } */}
                { statistics?.[0].results.map((value, key, iteration) => (
                    
                    // STREAK
                    <div className="grid grid-flow-row">
                        <>
                            <div className="grid grid-flow-row row-start-1">
                                <div className="container" key={key}>
                                
                                    {/* { JSON.stringify(value?.EVEN)}
                                    { _.size(value.EVEN)} */}
                                    { filters == 'pb_odd'&& <div className="header">
                                        {  value['EVEN'] && <div className="border-[0.05rem] border-solid border-gray-300 p-1 text-red-500 text-[0.5rem] text-center">짝수</div> }
                                        {  value['ODD'] && <div className="border-[0.05rem] border-solid border-gray-300 p-1 text-blue-500 text-[0.5rem] text-center">홀수</div> }
                                    </div>}

                                    { filters === 'num_sum_odd' && <div className="nm-header">
                                        {  value['NM_EVEN'] && <div className="border-[0.05rem] border-solid border-gray-300 p-1 text-red-500 text-[0.5rem] text-center">짝수</div> }
                                        {  value['NM_ODD'] && <div className="border-[0.05rem] border-solid border-gray-300 p-1 text-blue-500 text-[0.5rem] text-center">홀수</div> }
                                    </div>}

                                    { filters === 'is_pb_under' && <div className="nm-header">
                                        {  value['OVER'] && <div className="border-[0.05rem] border-solid border-gray-300 p-1 text-red-500 text-[0.5rem] text-center">오버</div> }
                                        {  value['UNDER'] && <div className="border-[0.05rem] border-solid border-gray-300 p-1 text-blue-500 text-[0.5rem] text-center">언더</div> }
                                    </div>}

                                    { filters === 'is_num_sum_under' && <div className="nm-header">
                                        {  value['OVER'] && <div className="border-[0.05rem] border-solid border-gray-300 p-1 text-red-500 text-[0.5rem] text-center">오버</div> }
                                        {  value['UNDER'] && <div className="border-[0.05rem] border-solid border-gray-300 p-1 text-blue-500 text-[0.5rem] text-center">언더</div> }
                                    </div>}
                                    
                                    {/* Table container  */}
                                    { filters == 'pb_odd' && <div className="even-container">
                                        {  _.size(value.EVEN) > 1 && value.EVEN.map((col, i, {length}) => (
                                            
                                            <>
                                            
                                                { col.pb_odd == 'E' &&
                                                    
                                                    <div>
                                                        <div className=" border-[0.05rem] border-solid border-gray-300 text-[0.5rem] p-1 w-full text-center">
                                                            <div className="bg-red-700 text-white rounded-full -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.5rem]">
                                                                { col.round }
                                                            </div>      
                                                        </div>

                                                        {/* last element for padding */}
                                                        { i + 1 == length && <>
                                                                { autoPadding( length).map(item => (
                                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem]">&nbsp;</div>
                    
                                                                ))}

                                                                <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem] mx-auto text-[0.5rem]">
                                                                    <div className="text-gray-500 -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.8rem]">
                                                                        { _.size(value.EVEN) }
                                                                    </div>
                                                                </div>
                                                               
                                                            </>
                                                        }
                                                    </div>

                                                }

                                            </>
                                            
                                        ))}

                                    </div>}

                                    { filters == 'pb_odd' && <div className="even-container">
                                        {  _.size(value.ODD) > 1 && value.ODD.map((col, i, {length}) => (
                                            
                                            <>
                                            
                                                { col.pb_odd == 'O' &&
                                                    
                                                    <div>
                                                        <div className=" border-[0.05rem] border-solid border-gray-300 text-[0.5rem] p-1 w-full text-center">
                                                            <div className="bg-[#055abb] text-white rounded-full -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.5rem]">
                                                                { col.round }
                                                            </div>      
                                                        </div>

                                                        {/* last element for padding */}
                                                        { i + 1 == length && <>
                                                                { autoPadding( length).map(item => (
                                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem]">&nbsp;</div>
                    
                                                                ))}

                                                                <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem] mx-auto text-[0.5rem]">
                                                                    <div className="text-gray-500 -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.8rem]">
                                                                        { _.size(value.ODD) }
                                                                    </div>
                                                                </div>
                                                               
                                                            </>
                                                        }
                                                    </div>

                                                }

                                            </>
                                            
                                        ))}

                                    </div>}
                                    
                                    { filters == 'num_sum_odd' && <div className="even-nm-container">
                                        {  _.size(value.NM_EVEN) > 1 && value.NM_EVEN.map((col, i, {length}) => (
                                            
                                            <>
                                            
                                                { col.num_sum_odd == 'E' &&
                                                    
                                                    <div>
                                                        <div className=" border-[0.05rem] border-solid border-gray-300 text-[0.5rem] p-1 w-full text-center">
                                                            <div className="bg-red-700 text-white rounded-full -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.5rem]">
                                                                { col.round }
                                                            </div>      
                                                        </div>

                                                        {/* last element for padding */}
                                                        { i + 1 == length && <>
                                                                { autoPadding( length).map(item => (
                                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem]">&nbsp;</div>
                    
                                                                ))}

                                                                <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem] mx-auto text-[0.5rem]">
                                                                    <div className="text-gray-500 -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.8rem]">
                                                                        { _.size(value.NM_EVEN) }
                                                                    </div>
                                                                </div>
                                                               
                                                            </>
                                                        }
                                                    </div>

                                                }

                                            </>
                                            
                                        ))}

                                    </div>}

                                    { filters == 'num_sum_odd' && <div className="odd-nm-container">
                                        {  _.size(value.NM_ODD) > 1 && value.NM_ODD.map((col, i, {length}) => (

                                            <>
                                                { col.num_sum_odd == 'O' &&
                                                    
                                                    <div>
                                                        <div className=" border-[0.05rem] border-solid border-gray-300 text-[0.5rem] p-1 w-full text-center">
                                                            <div className="bg-[#055abb] text-white rounded-full -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.5rem]">
                                                                { col.round }
                                                            </div>       
                                                        </div>
                                                        
                                                        {/* last element for padding */}
                                                        { i + 1 == length && <>
                                                                { autoPadding( length).map(item => (
                                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem]">&nbsp;</div>
                    
                                                                ))}

                                                                <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem] mx-auto text-[0.5rem]">
                                                                    <div className="text-gray-500 -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.8rem]">
                                                                        { _.size(value.NM_ODD) }
                                                                    </div>
                                                                </div>
                                                                
                                                            </>
                                                        }
                                                    </div>
                                                    
                                                }

                                            </>

                                        
                                        ))}

                                    

                                    </div>}

                                    { filters == 'is_pb_under' && <div className="even-nm-container">
                                        {  _.size(value.UNDER) > 1 && value.UNDER.map((col, i, {length}) => (     
                                            <>     
                                                { col.is_pb_under == 'Y' &&                   
                                                    <div>
                                                        <div className=" border-[0.05rem] border-solid border-gray-300 text-[0.5rem] p-1 w-full text-center">
                                                            <div className="bg-[#055abb] text-white rounded-full -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.5rem]">
                                                                { col.round }
                                                            </div>      
                                                        </div>

                                                        {/* last element for padding */}
                                                        { i + 1 == length && <>
                                                                { autoPadding( length).map(item => (
                                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem]">&nbsp;</div>
                    
                                                                ))}

                                                                <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem] mx-auto text-[0.5rem]">
                                                                    <div className="text-gray-500 -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.8rem]">
                                                                        { _.size(value.UNDER) }
                                                                    </div>
                                                                </div>
                                                            </>
                                                        }
                                                    </div>
                                                }
                                            </> 
                                        ))}

                                    </div>}

                                    { filters == 'is_pb_under' && <div className="even-nm-container">
                                        {  _.size(value.OVER) > 1 && value.OVER.map((col, i, {length}) => (     
                                            <>     
                                                { col.is_pb_under == 'N' &&                   
                                                    <div>
                                                        <div className=" border-[0.05rem] border-solid border-gray-300 text-[0.5rem] p-1 w-full text-center">
                                                            <div className="bg-red-700 text-white rounded-full -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.5rem]">
                                                                { col.round }
                                                            </div>      
                                                        </div>

                                                        {/* last element for padding */}
                                                        { i + 1 == length && <>
                                                                { autoPadding( length).map(item => (
                                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem]">&nbsp;</div>
                    
                                                                ))}

                                                                <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem] mx-auto text-[0.5rem]">
                                                                    <div className="text-gray-500 -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.8rem]">
                                                                        { _.size(value.OVER) }
                                                                    </div>
                                                                </div>
                                                            </>
                                                        }
                                                    </div>
                                                }
                                            </> 
                                        ))}

                                    </div>}
                                    
                                    {/* num_sum_under */}

                                    { filters == 'is_num_sum_under' && <div className="even-nm-container">
                                        {  _.size(value.UNDER) > 1 && value.UNDER.map((col, i, {length}) => (     
                                            <>     
                                                { col.is_num_sum_under == 'Y' &&                   
                                                    <div key={col.idx}>
                                                        <div className=" border-[0.05rem] border-solid border-gray-300 text-[0.5rem] p-1 w-full text-center">
                                                            <div className="bg-[#055abb] text-white rounded-full -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.5rem]">
                                                                { col.round }
                                                            </div>      
                                                        </div>

                                                        {/* last element for padding */}
                                                        { i + 1 == length && <>
                                                                { autoPadding( length).map(item => (
                                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem]">&nbsp;</div>
                    
                                                                ))}

                                                                <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem] mx-auto text-[0.5rem]">
                                                                    <div className="text-gray-500 -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.8rem]">
                                                                        { _.size(value.UNDER) }
                                                                    </div>
                                                                </div>
                                                            </>
                                                        }
                                                    </div>
                                                }
                                            </> 
                                        ))}

                                    </div>}

                                    { filters == 'is_num_sum_under' && <div className="even-nm-container">
                                        {  _.size(value.OVER) > 1 && value.OVER.map((col, i, {length}) => (     
                                            <>     
                                                { col.is_num_sum_under == 'N' &&                   
                                                    <div>
                                                        <div className=" border-[0.05rem] border-solid border-gray-300 text-[0.5rem] p-1 w-full text-center">
                                                            <div className="bg-red-700 text-white rounded-full -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.5rem]">
                                                                { col.round }
                                                            </div>      
                                                        </div>

                                                        {/* last element for padding */}
                                                        { i + 1 == length && <>
                                                                { autoPadding( length).map(item => (
                                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem]">&nbsp;</div>
                    
                                                                ))}

                                                                <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem] mx-auto text-[0.5rem]">
                                                                    <div className="text-gray-500 -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.8rem]">
                                                                        { _.size(value.OVER) }
                                                                    </div>
                                                                </div>
                                                            </>
                                                        }
                                                    </div>
                                                }
                                            </> 
                                        ))}

                                    </div>}
                                    
                                    {/* Non-Streak */}
                                    <>

                                        {  filters == 'pb_odd' && _.size(value.EVEN) == 1 && value.EVEN &&
                                            <>
                                                <div className="grid grid-flow-row row-start-1">
                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-1">
                                                        <div className="bg-red-700 text-white rounded-full -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.5rem]">
                                                            { value.EVEN[0]['round'] }
                                                        </div>
                                                    </div>

                                                </div>

                                                { autoPadding( _.size(value.EVEN)).map(item => (
                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem]">&nbsp;</div>
    
                                                ))}

                                                <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem] mx-auto text-[0.5rem]">
                                                    <div className="text-gray-500 -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.8rem]">
                                                        1
                                                    </div>
                                                </div>
                                               
                                            </>

                                        }

                                        { filters == 'pb_odd' && _.size(value.ODD) == 1 && value.ODD &&
                                            <>
                                                <div className="grid grid-flow-row row-start-1">
                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-1">
                                                        <div className="bg-[#055abb] text-white rounded-full -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.5rem]">
                                                            { value.ODD[0]['round'] }
                                                        </div>
                                                    </div>
                                                    

                                                </div>
                                                
                                                { autoPadding( _.size(value.ODD)).map(item => (
                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem]">&nbsp;</div>
    
                                                ))}

                                                <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem] mx-auto text-[0.5rem]">
                                                    <div className="text-gray-500 -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.8rem]">
                                                        1
                                                    </div>
                                                </div>
                                                
                                            </>
                                        }

                                        { filters == 'num_sum_odd' && _.size(value.NM_EVEN) == 1 && value.NM_EVEN &&
                                            <>
                                                <div className="grid grid-flow-row row-start-1">
                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-1">
                                                        <div className="bg-red-700 text-white rounded-full -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.5rem]">
                                                            { value.NM_EVEN[0]['round'] }
                                                        </div>
                                                    </div>

                                                </div>

                                                { autoPadding( _.size(value.NM_EVEN)).map(item => (
                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem]">&nbsp;</div>
    
                                                ))}

                                                <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem] mx-auto text-[0.5rem]">
                                                    <div className="text-gray-500 -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.8rem]">
                                                        1
                                                    </div>
                                                </div>
                                               
                                            </>
                                        }

                                        { filters == 'num_sum_odd' &&  _.size(value.NM_ODD) == 1 && value.NM_ODD &&
                                            <>
                                                <div className="grid grid-flow-row row-start-1">
                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-1">
                                                        <div className="bg-[#055abb] text-white rounded-full -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.5rem]">
                                                            { value.NM_ODD[0]['round'] }
                                                        </div>
                                                    </div>
                                                    

                                                </div>
                                                
                                                { autoPadding( _.size(value.NM_ODD)).map(item => (
                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem]">&nbsp;</div>
    
                                                ))}

                                                <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem] mx-auto text-[0.5rem]">
                                                    <div className="text-gray-500 -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.8rem]">
                                                        1
                                                    </div>
                                                </div>
                                                
                                            </>
                                        }

                                        { filters == 'is_pb_under' && _.size(value.OVER) == 1 && value.OVER &&
                                            <>
                                                <div className="grid grid-flow-row row-start-1">
                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-1">
                                                        <div className="bg-red-700 text-white rounded-full -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.5rem]">
                                                            { value.OVER[0]['round'] }
                                                        </div>
                                                    </div>

                                                </div>

                                                { autoPadding( _.size(value.OVER)).map(item => (
                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem]">&nbsp;</div>
    
                                                ))}

                                                <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem] mx-auto text-[0.5rem]">
                                                    <div className="text-gray-500 -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.8rem]">
                                                        1
                                                    </div>
                                                </div>
                                               
                                            </>
                                        }

                                        { filters == 'is_pb_under' &&  _.size(value.UNDER) == 1 && value.UNDER &&
                                            <>
                                                <div className="grid grid-flow-row row-start-1">
                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-1">
                                                        <div className="bg-[#055abb] text-white rounded-full -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.5rem]">
                                                            { value.UNDER[0]['round'] }
                                                        </div>
                                                    </div>
                                                    

                                                </div>
                                                
                                                { autoPadding( _.size(value.UNDER)).map(item => (
                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem]">&nbsp;</div>
    
                                                ))}

                                                <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem] mx-auto text-[0.5rem]">
                                                    <div className="text-gray-500 -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.8rem]">
                                                        1
                                                    </div>
                                                </div>
                                                
                                            </>
                                        }

                                        { filters == 'is_num_sum_under' && _.size(value.OVER) == 1 && value.OVER &&
                                            <>
                                                <div className="grid grid-flow-row row-start-1">
                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-1">
                                                        <div className="bg-red-700 text-white rounded-full -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.5rem]">
                                                            { value.OVER[0]['round'] }
                                                        </div>
                                                    </div>

                                                </div>

                                                { autoPadding( _.size(value.OVER)).map(item => (
                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem]">&nbsp;</div>
    
                                                ))}

                                                <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem] mx-auto text-[0.5rem]">
                                                    <div className="text-gray-500 -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.8rem]">
                                                        1
                                                    </div>
                                                </div>
                                               
                                            </>
                                        }

                                        { filters == 'is_num_sum_under' &&  _.size(value.UNDER) == 1 && value.UNDER &&
                                            <>
                                                <div className="grid grid-flow-row row-start-1">
                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-1">
                                                        <div className="bg-[#055abb] text-white rounded-full -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.5rem]">
                                                            { value.UNDER[0]['round'] }
                                                        </div>
                                                    </div>
                                                    

                                                </div>
                                                
                                                { autoPadding( _.size(value.UNDER)).map(item => (
                                                    <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem]">&nbsp;</div>
    
                                                ))}

                                                <div className="border-[0.05rem] border-solid border-gray-300 p-[0.12rem] mx-auto text-[0.5rem]">
                                                    <div className="text-gray-500 -p-1 w-5 h-5 flex items-center justify-center mx-auto text-[0.8rem]">
                                                        1
                                                    </div>
                                                </div>
                                                
                                            </>
                                        }

                                        {/* under/over */}
                                        
                                    </>
                                </div>
                            </div>
                            <div className="border-[0.09rem] border-solid border-gray-300 p-[0.12rem] mx-auto text-[0.5rem] w-full">
                                <div className="text-gray-500 -p-1 w h-5 flex items-center justify-center mx-auto text-[0.8rem]">
                                    { key + 1 }
                                </div>
                            </div>
                        </>
                    </div>
                    
                ))}
            </div> 
        </>    
    }

    const autoPadding = (count) => {
        const highest_streak = (streak_odd_count > streak_even_count) ? streak_odd_count: streak_even_count;

        let pad = 0;
        for (let index = count; index <= highest_streak-1; index++) {
           pad += 1
            
        }
        return Array.from({ length: pad }, (_, index) => index); 
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
                                <span className="text-sm">
                                    <span className="font-bold">{ odd_under_count }&nbsp;</span>
                                    번 ({ odd_percentage }%)
                                   
                                </span>
                                <span className="text-gray-400 font-medium  text-xs">{ streak_odd_count }&nbsp;연속 회</span>
                            </div>  
                        </div>
                        <div className="w-full inline-flex mt-2">
                            <div>
                                <span className="circle bg-red-800 px-[0.4rem] py-[0.3rem] rounded-full text-xs text-white">짝</span>
                            </div>
                            <div className="ml-3 flex flex-col">
                                <span className="text-sm">
                                    <span className="font-bold">{ even_over_count  }&nbsp;</span>
                                    번 ({ even_percentage }%)
                                    
                                </span>
                                <span className="text-gray-400 font-medium text-xs">{ streak_even_count }&nbsp;연속 회</span>
                            </div>  
                        </div>
                    </div>
                    
                    <div className="flex flex-col w-full">
                        <div className="w-full inline-flex justify-end">
                            <div>
                                <span className="circle bg-[#40c] px-[0.3rem] py-[0.5rem] rounded-full text-[0.5rem] text-white">퐁당</span>
                            </div>
                            <div className="ml-3 mb-4 flex flex-col">
                                <span className="text-sm">
                                <span className="font-bold">{ statistics?.[0].streak.streak_count }&nbsp;</span>  
                                    번
                                </span>
                            </div>
                        </div>
                        <div className="w-full mt-2 inline-flex justify-end">
                            <div>
                                <span className="circle bg-slate-800 px-[0.3rem] py-[0.5rem] rounded-full text-[0.5rem] text-white">꺽음</span>
                            </div>
                            <div className="ml-3 flex flex-col">
                                <span className="text-sm">
                                    <span className="font-bold">{ statistics?.[0].streak.non_streak_count }&nbsp;</span>
                                    번
                                </span>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className="h-[100%]">
                    <div className="bg-slate-100 h-full overflow-x-scroll overflow-y-scroll">
                        { renderDataTable() }
                    </div>
                </div>
            </div>
            <span className="mx-auto mt-3 mb-5 text-sm"><b>지난 24시</b>간동안의 평균 통계</span>
        </>
    )
}

export default AverageStatsTableComponent