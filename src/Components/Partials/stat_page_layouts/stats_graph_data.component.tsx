import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

function StatsGraphData(props) {
    
    const graphData = props;

    const odd_count = graphData.data?.[0].results_count - graphData.data?.[0].even_count;

    const even_count_percentage = Math.abs((100 * graphData.data?.[0].even_count) / graphData.data?.[0].results_count).toFixed(2);

    const odd_count_percentage = Math.abs((100 * odd_count) / graphData.data?.[0].results_count).toFixed(2);

    const under_count = graphData.data?.[0].under_count;

    const over_count = graphData.data?.[0].under_count;

    const under_count_percentage = Math.abs((100 * under_count) / graphData.data?.[0].results_count).toFixed(2);

    const over_count_percentage = Math.abs((100 * over_count) / graphData.data?.[0].results_count).toFixed(2);

    const normalball_odd_count = graphData.data?.[0].normal_ball_results.normal_ball_odd_count;

    const normalball_even_count = graphData.data?.[0].normal_ball_results.normal_ball_even_count;

    const normalball_even_count_percentage = Math.abs((100 * normalball_odd_count) / graphData.data?.[0].results_count).toFixed(2);

    const normalball_odd_count_percentage = Math.abs((100 * normalball_even_count) / graphData.data?.[0].results_count).toFixed(2);

    const normalball_under_count = graphData.data?.[0].normal_ball_results.normal_ball_under_count;

    const normalball_under_count_percentage = Math.abs((100 * normalball_under_count) / graphData.data?.[0].results_count).toFixed(2);

    const normalball_over_count = graphData.data?.[0].normal_ball_results.normal_ball_over_count;

    const normalball_over_count_percentage = Math.abs((100 * normalball_over_count) / graphData.data?.[0].results_count).toFixed(2);

    const [normalBallStreak, setNormalBallStreak] = useState({});

    const [normalBallDataSet, setNormalBallDataSet] = useState({});

    let large_streak = graphData.data?.[0].streak.normal_ball_large_streak_count.length;

    let medium_streak = graphData.data?.[0].streak.normal_ball_medium_streak_count.length;

    let small_streak = graphData.data?.[0].streak.normal_ball_small_streak_count.length;

    ChartJS.register(ArcElement, Tooltip, Legend);

    // Chart config
      useEffect(() => {
        const normalball_streak = (graphData.data?.[0]) ? graphData.data?.[0].streak: []; 
        setNormalBallStreak(normalball_streak)

        const normalball_data_set = (graphData.data?.[0]) ? graphData.data?.[0].normal_ball_results: {}; 
        setNormalBallDataSet(normalball_data_set);

        renderChart();
      });


      const renderChart = () => {
        let normal_balls_small_count = (normalBallDataSet['normal_ball_small_count']) ? normalBallDataSet['normal_ball_small_count']: 0;
        let normal_balls_medium_count = (normalBallDataSet['normal_ball_medium_count']) ? normalBallDataSet['normal_ball_medium_count']: 0;
        let normal_balls_large_count = (normalBallDataSet['normal_ball_large_count']) ? normalBallDataSet['normal_ball_large_count']: 0;

        let data = {
            labels: [],
            datasets: [
                {
                label: '# of streak',
                data: [normal_balls_large_count, normal_balls_medium_count, normal_balls_small_count],
                backgroundColor: [
                    'rgb(170, 45, 55)',
                    'rgb(47, 140, 67)',
                    'rgb(5, 90, 187)',
                ],
                borderColor: [
                    'rgb(170, 45, 55)',
                    'rgb(47, 140, 67)',
                    'rgb(5, 90, 187)',
                ],
                borderWidth: 1,
                },
            ],
        };

        return <Pie data={data} />
      }

    return(
        <>
            <div className="w-full mb-10 p-2">
               <div className="flex flex-row main">

                    <div className="w-auto flex flex-col">
                        <div className="bg-[#eeeeee] pt-2 pb-2 my-2 mx-2 rounded-[2rem] border-solid border-black border-2 flex flex-col h-full w-[50rem]">

                            {/* Header */}
                            <div className="border-b-2 border-black pl-5 inline-flex">
                                <div>파워볼</div>
                                <div className={"w-3 h-3 rounded-full self-center ml-1 border-solid border-[0.1rem] border-black bg-slate-600"}>
                                    &nbsp;
                                </div>
                            </div>
                            {/* Row 1 */}
                            <div className="inline-flex mt-5 px-2">
                                <div className="circle-container w-[5%] mt-1">
                                    <div className={" text-white rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto text-[0.5rem] " + ((graphData.data?.[0].even_count <  odd_count) ? 'bg-[#7a6c5e]': 'bg-[#055abb]')}>
                                        홀
                                    </div>
                                </div>
                                <div className="progress-bar w-[94%] inline-flex text-white -mt-1">
                                    <div className={"h-7 -p-1 rounded-2xl w-[100%] border-solid border-[0.1rem] border-black bg-[#7a6c5e]"}>
                                        <div className="flex flex-row -p-1 relative">
                                            <div className="w-1/2 z-20 pl-1">
                                                { graphData.data?.[0].even_count } ({even_count_percentage}%)
                                            </div>
                                            <div className="w-1/2 z-20 text-right pr-1">
                                                { odd_count } ({odd_count_percentage}%)
                                            </div>
                                            <div className={"inline-flex w-full absolute"+(odd_count < graphData.data?.[0].even_count ? " ": " flex-row-reverse")}>
                                                <div className={"z-10 rounded-full "+(odd_count < graphData.data?.[0].even_count ? "bg-[#055abb]": "bg-[#aa2d37]")} style={{ width: (odd_count > graphData.data?.[0].even_count ? odd_count_percentage: even_count_percentage)+'%'}}>&nbsp;</div>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                                <div className="circle-container w-[5%] -mt-1">
                                    <div className={" text-white rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto text-[0.5rem] " + ((graphData.data?.[0].even_count <  odd_count) ? 'bg-[#aa2d37]': 'bg-[#7a6c5e]')}>
                                        짝
                                    </div>
                                </div>
                            </div>
                            {/* Row 2 */}
                            <div className="inline-flex py-3 px-2">
                                <div className="circle-container w-[5%] -mt-1">
                                    <div className={" text-white rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto text-[0.5rem] " + ((over_count > under_count) ? 'bg-[#7a6c5e]': 'bg-[#055abb]')}>
                                        언더
                                    </div>
                                </div>
                                <div className="progress-bar w-[94%] inline-flex text-white -mt-1">
                                    <div className={"h-7 -p-1 rounded-2xl w-[100%] border-solid border-[0.1rem] border-black bg-[#7a6c5e]"}>
                                        <div className="flex flex-row -p-1 relative">
                                            <div className="w-1/2 z-20 pl-1">
                                                { under_count } ({ under_count_percentage }%)
                                            </div>
                                            <div className="w-1/2 z-20 text-right pr-1">
                                                { over_count } ({over_count_percentage}%)
                                            </div>
                                            <div className={"inline-flex w-full absolute"+(over_count > under_count ? " flex-row-reverse": "")}>
                                                <div className={"z-10 rounded-full "+(over_count > under_count ? "bg-[#aa2d37]": "bg-[#055abb]")} style={{ width: (over_count > under_count ? over_count_percentage: under_count_percentage)+'%'}}>&nbsp;</div>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                                <div className="circle-container w-[5%] -mt-1">
                                    <div className={" text-white rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto text-[0.5rem] " + ((over_count > under_count) ? 'bg-[#aa2d37]': 'bg-[#7a6c5e]')}>
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
                            <div className="inline-flex mt-5 px-2">
                                <div className="circle-container w-[5%] mt-1">
                                    <div className={" text-white rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto text-[0.5rem] " + ((normalball_even_count >  normalball_odd_count) ? 'bg-[#7a6c5e]': 'bg-[#055abb]')}>
                                        홀
                                    </div>
                                </div>
                                <div className="progress-bar w-[94%] inline-flex text-white -mt-1">
                                    <div className={"h-7 -p-1 rounded-2xl w-[100%] border-solid border-[0.1rem] border-black bg-[#7a6c5e]"}>
                                        <div className="flex flex-row -p-1 relative">
                                            <div className="w-1/2 z-20 pl-1">
                                                { normalball_even_count } ({normalball_even_count_percentage}%)
                                            </div>
                                            <div className="w-1/2 z-20 text-right pr-1">
                                                { normalball_odd_count } ({normalball_odd_count_percentage}%)
                                            </div>
                                            <div className={"inline-flex w-full absolute"+(normalball_even_count >  normalball_odd_count ? " flex-row-reverse ": " ")}>
                                                <div className={"z-10 rounded-full "+(normalball_even_count >  normalball_odd_count ? "bg-[#aa2d37]": "bg-[#055abb]")} style={{ width: (normalball_even_count >  normalball_odd_count ? normalball_odd_count_percentage: normalball_even_count_percentage)+'%'}}>&nbsp;</div>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                                <div className="circle-container w-[5%] -mt-1">
                                    <div className={" text-white rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto text-[0.5rem] " + ((normalball_even_count >  normalball_odd_count) ? 'bg-[#aa2d37]': 'bg-[#7a6c5e]')}>
                                        짝
                                    </div>
                                </div>
                                
                            </div>
                            {/* Row 2 */}
                            <div className="inline-flex py-3 px-2">
                                <div className="circle-container w-[5%] -mt-1">
                                    <div className={" text-white rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto text-[0.5rem] " + ((normalball_over_count > normalball_under_count) ? 'bg-[#7a6c5e]': 'bg-[#055abb]')}>
                                        언더
                                    </div>
                                </div>
                                <div className="progress-bar w-[94%] inline-flex text-white -mt-1">
                                    <div className={"h-7 -p-1 rounded-2xl w-[100%] border-solid border-[0.1rem] border-black bg-[#7a6c5e]"}>
                                        <div className="flex flex-row -p-1 relative">
                                            <div className="w-1/2 z-20 pl-1">
                                                { normalball_under_count } ({ normalball_under_count_percentage }%)
                                            </div>
                                            <div className="w-1/2 z-20 text-right pr-1">
                                                { normalball_over_count } ({normalball_over_count_percentage}%)
                                            </div>
                                            <div className={"inline-flex w-full absolute"+(normalball_over_count > normalball_under_count ? " flex-row-reverse": "")}>
                                                <div className={"z-10 rounded-full "+(normalball_over_count > normalball_under_count ? "bg-[#aa2d37]": "bg-[#055abb]")} style={{ width: (normalball_over_count > normalball_under_count ? normalball_over_count_percentage: normalball_under_count_percentage)+'%'}}>&nbsp;</div>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                                <div className="circle-container w-[5%] -mt-1">
                                    <div className={" text-white rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto text-[0.5rem] " + ((normalball_over_count > normalball_under_count) ? 'bg-[#aa2d37]': 'bg-[#7a6c5e]')}>
                                        오버
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="graph w-[30%] flex flex-col">
                        <div className="ml-2 h-[80%] w-full">
                            { graphData && <div className="ml-4 h-[80%]">
                                { renderChart() }
                            </div>}
                        </div>
                        <div className="caption-data mx-10 h-[40%] ml-7 flex flex-col gap-2 justify-evenly text-sm -mt-[1.8rem]">
                                <div className="flex flex-row h-full">
                                    <div className="bg-[#aa2d37] w-[2rem] h-[1.6rem] m-1 rounded-full"></div>
                                    <div className="w-full">
                                        <span className=" font-semibold">
                                            대:   
                                        </span> { normalBallDataSet['normal_ball_large_count'] } 번 ({ Math.abs((100 * normalBallDataSet['normal_ball_large_count']) / graphData.data?.[0].results_count).toFixed(2) }%)<br/>
                                        <span className="font-thin text-gray-500">{ large_streak } 연속 회</span>
                                    </div>
                                </div>
                                <div className="flex flex-row h-full">
                                    <div className="bg-[#055abb] w-[2rem] h-[1.6rem] m-1 rounded-full"></div>
                                    <div className="w-full">
                                        <span className="font-semibold">
                                            중:   
                                        </span> { normalBallDataSet['normal_ball_medium_count'] } 번 ({ Math.abs((100 * normalBallDataSet['normal_ball_medium_count']) / graphData.data?.[0].results_count).toFixed(2) }%)<br/>
                                        <span className=" font-thin text-gray-500">{ medium_streak } 연속 회</span>
                                    </div>
                                </div>
                                <div className="flex flex-row h-full">
                                    <div className="bg-[#2F8C43] w-[2rem] h-[1.6rem] m-1 rounded-full"></div>
                                    <div className="w-full">
                                        <span className="font-semibold">
                                            소:   
                                        </span> { normalBallDataSet['normal_ball_small_count'] } 번 ({ Math.abs((100 * normalBallDataSet['normal_ball_small_count']) / graphData.data?.[0].results_count).toFixed(2) }%)<br/>
                                        <span className=" font-thin text-gray-500">{ small_streak} 연속 회</span>
                                    </div>
                                </div>
                        </div>
                    </div>
               </div>
            </div>
        </>
    )
}

export default StatsGraphData