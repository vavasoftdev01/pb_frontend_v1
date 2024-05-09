import React, { useState } from "react"

function PBDrawPopupPanelComponent(props) {
    
    const [isPanelVisible, setIsPanelVisible] = useState(true)

    const togglePanel = () => {
        // TODO..
        console.log(isPanelVisible)
        setIsPanelVisible(!isPanelVisible)
    }

    return(
        <>
            <div className="bg-white h-full flex flex-col border-solid border-2 border-black rounded-lg z-[50] relative">
                <div className="header bg-[#525e98] border-sold border-b-2 border-black text-center text-white flex w-full">
                    <span className="mx-auto my-1">
                        내 배팅
                    </span>
                    <div className={(!props.toggleMyBetHistoryPanel) ? "hidden":""}>
                        <button type="button" className="btn-close" onClick={props.toggleMyBetHistoryPanel}>
                            <svg className="h-8" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="34" height="34" rx="17" fill="" fillOpacity="0.3"></rect>
                                <path d="M18.7971 17.0311L23.6962 12.132C24.1843 11.6439 24.1843 10.8525 23.6962 10.3644C23.208 9.87633 22.4167 9.87633 21.9286 10.3644L17.0295 15.2635L12.1304 10.3644C11.6423 9.87633 10.851 9.87633 10.3628 10.3644C9.8747 10.8525 9.8747 11.6439 10.3628 12.132L15.2619 17.0311L10.3628 21.9302C9.8747 22.4182 9.8747 23.2097 10.3628 23.6977C10.851 24.1858 11.6423 24.1858 12.1304 23.6977L17.0295 18.7986L21.9286 23.6977C22.4167 24.1858 23.208 24.1858 23.6962 23.6977C24.1843 23.2097 24.1843 22.4182 23.6962 21.9302L18.7971 17.0311Z" fill="white">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col bg-[#FCE6D2] w-[95%] h-[8rem] mx-auto mt-2 rounded-xl">
                    <div className="my-2 flex flex-row">
                        <div className="h-[2rem] w-1/3 flex flex-col text-xs pl-2">
                            <p>
                                #6969
                            </p>
                            <p>
                                1316969
                            </p>
                        </div>
                        <div className="h-auto w-full flex flex-row py-1">    
                            <div className="ball-result-casing w-auto h-5 border-2 border-solid border-slate-400 bg-slate-200 rounded-2xl flex flex-row px-2 text-xs font-semibold">
                                <div className="bg-red-600 rounded-full w-4 h-4 text-[0.6rem] mx-0.5  text-center text-white ">1</div>
                                <div className="bg-green-600 rounded-full w-4 h-4 text-[0.6rem] mx-0.5  text-center text-white ">32</div>
                                <div className="bg-blue-600 rounded-full w-4 h-4 text-[0.6rem] mx-0.5  text-center text-white ">69</div>
                                <div className="bg-yellow-600 rounded-full w-4 h-4 text-[0.6rem] mx-0.5  text-center text-white ">45</div>
                                <div className="bg-green-600 rounded-full w-4 h-4 text-[0.6rem] mx-0.5  text-center text-white ">6</div>
                                <div className="bg-slate-600 rounded-full w-4 h-4 text-[0.6rem] mx-0.5  text-center text-white ">55</div>
                            </div>
                            <div className="w-full">
                                <p className="text-sm text-start mx-2 font-semibold">
                                    2024.05.02 02:39
                                </p>
                            </div>
                            <div className="w-1/6">
                                <button type="button" className="btn-up">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.54 14.6404C20.54 15.0626 20.3627 15.4848 20.0082 15.7861C19.3988 16.3039 18.4683 16.1897 17.9029 15.6243L12.0361 9.75807L6.09179 15.7024C5.50585 16.2884 4.55663 16.2884 3.9707 15.7024C3.38477 15.1165 3.38476 14.1673 3.9707 13.5813L11.329 6.22213C11.7195 5.83156 12.3527 5.83155 12.7433 6.22211L20.1006 13.5799C20.3936 13.8728 20.54 14.2566 20.54 14.6404Z" fill="#000"></path></svg>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="bg-white border-solid border-2 border-b-4 p-2 border-black rounded-lg h-[50%] w-[95%] mx-auto flex flex-row">
                        <div className="flex flex-col text-start w-1/2 text-sm">
                            <p>파워볼홀</p>
                            <p>
                                <span className="font-bold text-orange-700 mr-2">₩1,000</span> 
                                배당 : 1.95
                            </p>
                        </div>
                        <div className="flex flex-col text-end w-1/2 my-auto">
                            <button className="bg-green-200 w-1/2 self-end p-1 rounded-lg text-green-700">₩ 1,950.00</button>
                            
                        </div>
                       
                    </div>
                </div>
                <div className="flex flex-col bg-[#FCE6D2] w-[95%] h-[8rem] mx-auto mt-2 rounded-xl">
                    <div className="my-2 flex flex-row">
                        <div className="h-[2rem] w-1/3 flex flex-col text-xs pl-2">
                            <p>
                                #6955
                            </p>
                            <p>
                                1696969
                            </p>
                        </div>
                        <div className="h-auto w-full flex flex-row py-1">    
                            <div className="ball-result-casing w-auto h-5 border-2 border-solid border-slate-400 bg-slate-200 rounded-2xl flex flex-row px-2 text-xs font-semibold">
                                <div className="bg-red-600 rounded-full w-4 h-4 text-[0.6rem] mx-0.5  text-center text-white ">55</div>
                                <div className="bg-green-600 rounded-full w-4 h-4 text-[0.6rem] mx-0.5  text-center text-white ">33</div>
                                <div className="bg-blue-600 rounded-full w-4 h-4 text-[0.6rem] mx-0.5  text-center text-white ">26</div>
                                <div className="bg-yellow-600 rounded-full w-4 h-4 text-[0.6rem] mx-0.5  text-center text-white ">45</div>
                                <div className="bg-red-600 rounded-full w-4 h-4 text-[0.6rem] mx-0.5  text-center text-white ">5</div>
                                <div className="bg-slate-600 rounded-full w-4 h-4 text-[0.6rem] mx-0.5  text-center text-white ">69</div>
                            </div>
                            <div className="w-full">
                                <p className="text-sm text-start mx-2 font-semibold">
                                    2024.05.02 02:39
                                </p>
                            </div>
                            <div className="w-1/6">
                                <button type="button" className="btn-up" onClick={ togglePanel }>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.54 14.6404C20.54 15.0626 20.3627 15.4848 20.0082 15.7861C19.3988 16.3039 18.4683 16.1897 17.9029 15.6243L12.0361 9.75807L6.09179 15.7024C5.50585 16.2884 4.55663 16.2884 3.9707 15.7024C3.38477 15.1165 3.38476 14.1673 3.9707 13.5813L11.329 6.22213C11.7195 5.83156 12.3527 5.83155 12.7433 6.22211L20.1006 13.5799C20.3936 13.8728 20.54 14.2566 20.54 14.6404Z" fill="#000"></path></svg>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="bg-white border-solid border-2 border-b-4 p-2 border-black rounded-lg h-[50%] w-[95%] mx-auto flex flex-row">
                        <div className="flex flex-col text-start w-1/2 text-sm">
                            <p>파워볼홀</p>
                            <p>
                                <span className="font-bold text-orange-700 mr-2">₩1,000</span> 
                                배당 : 1.95
                            </p>
                        </div>
                        <div className="flex flex-col text-end w-1/2 my-auto">
                            <button className="bg-green-200 w-1/2 self-end p-1 rounded-lg text-green-700">₩ 1,950.00</button>
                            
                        </div>
                       
                    </div>
                </div>
            </div>
        </> 
    )
}

export default PBDrawPopupPanelComponent