import React, { useEffect, useRef, useState } from "react";
import StatsData from './../../PB_config/stats_sample_data.json'
import AverageStatsTableComponent from "../Partials/stat_page_layouts/average_stats_table.component";
import StatsBySelectionComponent from "../Partials/stat_page_layouts/stats_by_selection.component";
import { io } from 'socket.io-client';

function PBStatsPanelComponent(props) {
    const [pbFilter, setPbFilter] = useState('powerball_form');// pb_form & daily_analysis_form
    const [dateFilterFormVisible, setDateFilterFormVisible] = useState(false);
    const [checkboxByDateOrPeriod, setcheckboxByDateOrPeriod] = useState(false);
    const [averageStatsData, setAverageStatsData] = useState();

    const [stats, setStats] = useState();
    
    const socket = io();

    const handleFilter1FormToggle = (e) => {
        setPbFilter(e.target.value)

        if(e.target.value == 'powerball_form') {
            setDateFilterFormVisible(false)
        }
    }

    useEffect(() => {
        const stats_socket = io(`${import.meta.env.VITE_SOCKET_IO_URL}/statistics`);

        stats_socket.connect();

        
        stats_socket.emit('getDailyPBStatistics', (response) => {
            setStats(response);
        });


        
        

        return () => {
            stats_socket.disconnect();
        }
    });

    return(
        <>
            <div className="bg-white h-full flex flex-col border-solid border-2 border-black rounded-lg z-[50] relative">
                <div className="header bg-[#525e98] border-sold border-b-2 border-black text-center text-white flex w-full">
                    <span className="mx-auto my-1">
                        통계
                    </span>
                    <div className={(!props.toggleStatsPanelChild) ? "hidden":""}>
                        <button type="button" className="btn-close" onClick={props.toggleStatsPanelChild}>
                            <svg className="h-8" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="34" height="34" rx="17" fill="" fillOpacity="0.3"></rect>
                                <path d="M18.7971 17.0311L23.6962 12.132C24.1843 11.6439 24.1843 10.8525 23.6962 10.3644C23.208 9.87633 22.4167 9.87633 21.9286 10.3644L17.0295 15.2635L12.1304 10.3644C11.6423 9.87633 10.851 9.87633 10.3628 10.3644C9.8747 10.8525 9.8747 11.6439 10.3628 12.132L15.2619 17.0311L10.3628 21.9302C9.8747 22.4182 9.8747 23.2097 10.3628 23.6977C10.851 24.1858 11.6423 24.1858 12.1304 23.6977L17.0295 18.7986L21.9286 23.6977C22.4167 24.1858 23.208 24.1858 23.6962 23.6977C24.1843 23.2097 24.1843 22.4182 23.6962 21.9302L18.7971 17.0311Z" fill="white">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Content goes here... Filters*/}
                <div className="relative">
                    <div className="inline-flex w-full">
                        <select className={"filter-1 border-2 border-solid border-amber-600 rounded-md px-2 py-1 mt-2 mx-1 flex flex-col bg-[#fce6d2] ml-2 "+(pbFilter == 'powerball_form' ? "w-[48%]":"w-[95%]")} onChange={(e) =>handleFilter1FormToggle(e)}>
                            <option value="powerball_form">파워볼</option>
                            <option value="daily_analysis_form">일별분석</option>
                        </select>

                        <button className={"border-2 border-solid border-[#939ed2] rounded-md h-[2.2rem] p-1 mt-auto "+(pbFilter == 'powerball_form' ? "hidden": "")} onClick={() => setDateFilterFormVisible(!dateFilterFormVisible)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Icons/Filter"><path id="Vector" d="M19.9895 2H4.01055C3.16473 2 2.69456 2.96997 3.22297 3.62468L9.98098 11.9969V21.5993C9.98098 21.9361 10.3754 22.1222 10.639 21.9095L13.8667 19.3066C13.9609 19.2306 14.0156 19.1167 14.0156 18.9963V12.0242L20.7778 3.62359C21.305 2.96876 20.8347 2 19.9895 2Z" fill="#000"></path></g></svg>
                        </button>

                        <select className={"filter-1 w-[49%] border-2 border-solid border-[#939ed2] rounded-md px-2 py-1 mt-2 mx-1 flex flex-col bg-[#eeeeee] "+(pbFilter == 'daily_analysis_form' ? "hidden": "")}>
                            <option value="pb_odd-even">파워볼 홀/짝</option> 
                            <option value="pb_over-under">파워볼 언더/오버</option>
                            <option value="normalball_odd-even">파워볼 홀/짝</option>
                            <option value="normalball_over-under">파워볼 언더/오버</option>
                        </select>
                    </div>
                    
                    <div className={"w-[98%] ml-3 mt-2  flex flex-col border-2 border-solid border-[#939ed2] rounded-md absolute bg-white "+(dateFilterFormVisible ? "h-[10rem]": "h-[0rem] hidden")}>
                        <div className="checkbox-container">
                            <div className="checkbox-1 w-full">
                                <div className="inline-flex m-3">
                                    <input type="radio" name="radio" className="w-[1.6rem] h-[1.6rem]" onClick={() => setcheckboxByDateOrPeriod(!checkboxByDateOrPeriod)}/>
                                    <p className="ml-2">하루씩 보기</p>
                                </div>

                                <div className="inline-flex">
                                    <input type="radio" name="radio" className="w-[1.6rem] h-[1.6rem]" onClick={() => setcheckboxByDateOrPeriod(!checkboxByDateOrPeriod)}/>
                                    <p className="ml-2">기간으로 보기</p>
                                </div>
                            </div>
                        </div>
                        {/* Dynamic Panel */}
                        <div className="w-full h-full">
                            <div className="flex flex-row">
                                <div className={"binder "+(checkboxByDateOrPeriod)+(checkboxByDateOrPeriod == true ? " opacity-100": " opacity-0")}>
                                    <button className="w-[5rem] bg-[#c5cced] p-2 m-2 rounded-xl">오늘</button>
                                    <input type="date" value="2017-06-01" className="border-2 border-solid border-[#939ed2] rounded-md w-[10rem] h-[2.5rem] mt-2"/>
                                </div>
                                <div className={"binder "+(checkboxByDateOrPeriod == false ? "opacity-100": "opacity-0")}>
                                    <button className=" bg-[#c5cced] p-2 m-2 rounded-lg border-2 border-solid border-[#939ed2]">
                                        {/* Dummy data */}
                                        <p className=" font-bold">
                                            2023-05-10 ~ 2024-05-10
                                        </p>
                                    </button>
                                    {/* Day Filters */}
                                    <button className="bg-[#c5cced] p-3 text-[1rem] m-2 rounded-full border-2 border-solid border-[#939ed2]">
                                        <p className=" ">
                                            2일
                                        </p>
                                    </button>
                                    <button className="p-3 text-[1rem] m-2 rounded-full border-2 border-solid border-[#939ed2]">
                                        <p className=" ">
                                            4일
                                        </p>
                                    </button>
                                    <button className="p-3 text-[1rem] m-2 rounded-full border-2 border-solid border-[#939ed2]">
                                        <p className=" ">
                                            7일
                                        </p>
                                    </button>
                                    <button className="p-3 text-[1rem] m-2 rounded-full border-2 border-solid border-[#939ed2]">
                                        <p className="">
                                            15일
                                        </p>
                                    </button>
                                    <button className="p-3 text-[1rem] m-2 rounded-full border-2 border-solid border-[#939ed2]">
                                        <p className=" ">
                                            30일
                                        </p>
                                    </button>
                                    <button className="p-3 text-[1rem] m-2 rounded-full border-2 border-solid border-[#939ed2]">
                                        <p className=" ">
                                            전체
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    {/* <div className="filter-1 w-[48%] border-2 border-solid border-amber-600 rounded-md px-2 py-1 mt-2 mx-1 flex flex-col bg-[#fce6d2] absolute ml-2" onClick={toggleFilter1}>
                        <div className="relative filter1-cont">
                            
                            <div className="r1 flex flex-row justify-between w-full p-1 cursor-pointer hover:text-white">
                                <span className="" onClick={() => handleFilter1FormToggle()}>파워볼</span>
                                <button className={(filter1 ? " rotate-180":" rotate-0")}>
                                    <svg width="15" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.54 14.6404C20.54 15.0626 20.3627 15.4848 20.0082 15.7861C19.3988 16.3039 18.4683 16.1897 17.9029 15.6243L12.0361 9.75807L6.09179 15.7024C5.50585 16.2884 4.55663 16.2884 3.9707 15.7024C3.38477 15.1165 3.38476 14.1673 3.9707 13.5813L11.329 6.22213C11.7195 5.83156 12.3527 5.83155 12.7433 6.22211L20.1006 13.5799C20.3936 13.8728 20.54 14.2566 20.54 14.6404Z" fill="#000"></path></svg>
                                </button>
                            </div>
                            
                            <div className={"r1 flex flex-row justify-between w-full border-solid border-t-2 border-slate-300 cursor-pointer hover:text-white "+(filter1 ? "hidden":"p-1")} onClick={() => handleFilter1FormToggle()}>
                                <span className="">일별분석</span>
                            </div>
                        </div>
                    </div>

                    <div className="filter-1 w-[49%] border-2 border-solid border-[#939ed2] rounded-md px-2 py-1 mt-2 mx-1 flex flex-col bg-[#eeeeee] absolute ml-[33.3rem]" onClick={toggleFilter2}>
                        <div className="relative filter2-cont">
                            <div className="r1 flex flex-row justify-between w-full p-1 cursor-pointer hover:text-white">
                                <span className="">파워볼 홀/짝</span>
                                <button className={(filter2 ? " rotate-180":" rotate-0")}>
                                    <svg width="15" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.54 14.6404C20.54 15.0626 20.3627 15.4848 20.0082 15.7861C19.3988 16.3039 18.4683 16.1897 17.9029 15.6243L12.0361 9.75807L6.09179 15.7024C5.50585 16.2884 4.55663 16.2884 3.9707 15.7024C3.38477 15.1165 3.38476 14.1673 3.9707 13.5813L11.329 6.22213C11.7195 5.83156 12.3527 5.83155 12.7433 6.22211L20.1006 13.5799C20.3936 13.8728 20.54 14.2566 20.54 14.6404Z" fill="#000"></path></svg>
                                </button>
                            </div>

                            <div className={"r1 flex flex-row justify-between w-full border-solid border-t-2 border-slate-300 cursor-pointer hover:text-white "+(filter2 ? "hidden":"p-2")}>
                                <span className="">파워볼 언더/오버</span>
                            </div>
                            <div className={"r1 flex flex-row justify-between w-full border-solid border-t-2 border-slate-300 cursor-pointer hover:text-white "+(filter2 ? "hidden":"p-2")}>
                                <span className="">일반볼 홀/짝</span>
                            </div>
                            <div className={"r1 flex flex-row justify-between w-full border-solid border-t-2 border-slate-300 cursor-pointer hover:text-white "+(filter2 ? "hidden":"p-2")}>
                                <span className="">일반볼 언더/오버</span>
                            </div>
                        </div>
                    </div> */}
                </div>

                <AverageStatsTableComponent statistics={stats}/>
                <StatsBySelectionComponent />

                <p>지난 24시간동안의 평균 통계</p>
            </div>
        </>
    )
}

export default PBStatsPanelComponent