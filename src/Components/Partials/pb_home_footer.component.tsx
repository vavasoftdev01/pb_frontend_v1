import React, { useEffect, useRef, useState } from "react";


function PBHomeFooterComponent(props) {
    const [results, setResults] = useState(props.ResultsIcon);
    const ballColors = ['bg-red-600', 'bg-green-600', 'bg-blue-600', 'bg-yellow-600'];
    
    const randomColorGenerator = () => {
        return ballColors[Math.floor(Math.random() * ballColors.length)];
    }

    const timer_status = props.ParentTimerStatus;

    useEffect(() => {

        if(timer_status == 'draw_result') {
            setResults(props.ResultsIcon)
        }
        
        console.log(results)
    });


    return(
        <>
            <footer className="flex flex-row p-1 w-full bg-slate-200">
                <div className=" w-full flex-col text-sm font-medium">
                    <div className="w-1/2">
                        <span className="title">파워볼 (1분)</span>
                    </div>
                    <div className="w-1/2">
                        <span className="">보유잔액&nbsp;</span>
                        <b className="balance">₩914,300.00</b>
                    </div>
                    <div className="w-1/2">
                        <div className="ball-result-casing bg-[#FCE6D2] h-5 border-2 border-solid border-[#c27c3a]  rounded-2xl flex flex-row px-2 text-xs font-semibold w-1/2 my-2">
                            <div className={`${ randomColorGenerator() } rounded-full w-4 h-4 text-[0.6rem] mx-0.5  text-center text-white`}>{ results && results.num1 }</div>
                            <div className={`${ randomColorGenerator() } rounded-full w-4 h-4 text-[0.6rem] mx-0.5  text-center text-white`}>{ results && results.num2 }</div>
                            <div className={`${ randomColorGenerator() } rounded-full w-4 h-4 text-[0.6rem] mx-0.5  text-center text-white`}>{ results && results.num3 }</div>
                            <div className={`${ randomColorGenerator() } rounded-full w-4 h-4 text-[0.6rem] mx-0.5  text-center text-white`}>{ results && results.num4 }</div>
                            <div className={`${ randomColorGenerator() } rounded-full w-4 h-4 text-[0.6rem] mx-0.5  text-center text-white`}>{ results && results.num5 }</div>
                            <div className="bg-slate-600 rounded-full w-4 h-4 text-[0.6rem] mx-0.5  text-center text-white ">{ results && results.pb }</div>
                        </div>
                    </div>

                </div>
                <div className="w-full flex flex-col text-sm font-medium">
                    <span className="stage-id self-end">#1023 (1327048) ID:4958764505 17:02</span>
                    <span className="self-end">총 베팅 ₩0.00</span>
                </div>
            </footer>
        </>
    )
}

export default PBHomeFooterComponent