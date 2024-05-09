import React from "react";

function PBStatsPanelComponent(props) {

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
                {/* Content goes here... */}
                <div className="inline-flex">
                    <select className="w-full border-2 border-solid border-amber-600 rounded-md p-2 mt-2 mx-1">
                        <option className="p-2 hover:bg-transparent">test</option>
                        <option className="p-2 hover:bg-transparent">test</option>
                    </select>
                    <select className="w-full border-2 border-solid border-amber-600 rounded-md p-2 mt-2 mx-1">
                        <option className="p-2 hover:bg-transparent">test</option>
                        <option className="p-2 hover:bg-transparent">test</option>
                    </select>
                </div>

                <div className="avg-stats-24hrs border-[0.1rem] border-solid border-gray-400 mt-2 rounded-md p-2 mx-2 flex flex-col">
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
                    지난 24시간동안의 평균 통계
                </div>
            </div>
        </>
    )
}

export default PBStatsPanelComponent