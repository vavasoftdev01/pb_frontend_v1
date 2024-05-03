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
            <div className="bg-white h-full flex flex-col border-solid border-2 border-black rounded-lg">
                <div className="header bg-[#525e98] border-sold border-b-2 border-black text-center text-white">내 배팅</div>
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