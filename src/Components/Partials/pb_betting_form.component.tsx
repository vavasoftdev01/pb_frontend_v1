import React from "react";

function PBBettingFormComponent(props) {


    return(
        <>
            <div className="bg-slate-100 border-solid border-2 border-black rounded-lg flex flex-col sm:w-auto md:w-[33rem] max-md:lg:w-auto lg:max-xl:w-fit">
                <div className="bet_btn_blue flex flex-row text-white border-solid border-b-2 border-black">
                    <span className="w-full text-xs p-1">#1200(1328665) ID:4959389405</span>
                    <span className="w-full">배팅 슬립</span>
                </div>
                <div className="w-full flex flex-grow-1 p-1">
                    <div className="bg-[#F9D8A0] w-full rounded-md border-solid border-b-4 border-2 border-black flex flex-row p-1">
                        <div className="w-full text-start p-1 text-sm">
                            파워볼 홈
                        </div>
                        <div className="w-full flex flex-row justify-end gap-1">
                            <span className="bg-slate-600 w-1/4 text-center rounded-md text-white p-1">1.95</span>
                            <button className="rounded-full bg-slate-200" onClick={ (e) => props.onPlaceBet(e) }>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="34" height="34" rx="17" fill="#00020A" fillOpacity="0.3"></rect><path d="M18.7971 17.0311L23.6962 12.132C24.1843 11.6439 24.1843 10.8525 23.6962 10.3644C23.208 9.87633 22.4167 9.87633 21.9286 10.3644L17.0295 15.2635L12.1304 10.3644C11.6423 9.87633 10.851 9.87633 10.3628 10.3644C9.8747 10.8525 9.8747 11.6439 10.3628 12.132L15.2619 17.0311L10.3628 21.9302C9.8747 22.4182 9.8747 23.2097 10.3628 23.6977C10.851 24.1858 11.6423 24.1858 12.1304 23.6977L17.0295 18.7986L21.9286 23.6977C22.4167 24.1858 23.208 24.1858 23.6962 23.6977C24.1843 23.2097 24.1843 22.4182 23.6962 21.9302L18.7971 17.0311Z" fill="white"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <p className="text-xs text-gray-500 pl-2">예상 상금 : ₩0</p>
                {/* 3 Buttons layout - start */}
                <div className="flex flex-row p-1.5 w-full gap-1.5 h-14">
                    <button className="rounded-md basis-14 bg-[#fce6d2]">
                        <span className="">
                            <svg width="100%" height="100%" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" data-gtm="Undo"><rect x="1" y="1" width="41.9998" height="41.9997" rx="7.00003" fill="var(--bet-slip-input-background-color)"></rect><path d="M31.9724 20.8972C31.4593 16.249 27.6291 12.5014 22.9719 12.0778C19.8423 11.7932 16.9765 12.9519 14.9643 14.9641L13.1828 13.1826C12.9309 12.9306 12.5 13.1091 12.5 13.4655V19.0998C12.5 19.3207 12.6791 19.4998 12.9 19.4998H18.5343C18.8907 19.4998 19.0691 19.0689 18.8171 18.8169L17.0889 17.0887L17.088 17.0875C18.6517 15.524 20.9499 14.6946 23.414 15.1676C26.1516 15.6932 28.3621 17.8938 28.8976 20.6294C29.7731 25.1024 26.3549 29.0351 22.0353 29.0351C20.5344 29.0351 19.1421 28.5603 18.0011 27.7528C17.4212 27.3425 16.6193 27.4512 16.117 27.9535C15.4536 28.6169 15.5628 29.7154 16.333 30.251C17.9505 31.3758 19.916 32.0351 22.0353 32.0351C27.9331 32.0351 32.6383 26.9296 31.9724 20.8972Z" fill="#000" fillOpacity="0.75"></path><rect x="1" y="1" width="41.9998" height="41.9997" rx="7.00003" stroke="#C56C07" strokeWidth="2.00001"></rect>
                            </svg>
                        </span>
                    </button>
                    <div className="rounded-md w-full bg-[#fce6d2] border-solid border-2 border-[#C56C07] flex flex-row p-1">
                        <div className="basis-1/6 flex">
                            <span className="p-2 font-semibold place-self-center">₩</span>
                        </div>
                        <div className="w-full p-1">
                            <input type="text" className="bg-inherit border-none outline-none w-full"></input>
                        </div>
                    </div>
                    <button className="rounded-md basis-14 bg-[#fce6d2] border-solid border-2 border-[#C56C07]">
                        <p className="font-bold">2x</p>
                    </button>
                </div>
                {/* 3 Buttons layout - end */}
                <p className="text-sm text-yellow-700 pl-2">
                    최소: <span className="underline">₩1,000</span> 최대: <span className="underline">₩5,000,000</span>
                </p>
                {/* 4x2 Button layout - start */}
                <div className="flex flex-row gap-1 p-1 flex-wrap">
                    <button type="button" data-bet="all" className="btn-bet basis-1/5">
                        <div className="text-xs text-gray-500">
                            올인<br />
                            <span>₩ 914,300</span>
                        </div>
                    </button>

                    <button type="button" data-bet="1000" className="btn-bet basis-1/5">
                        <span>₩ 1천</span>
                    </button>

                    <button type="button" data-bet="5000" className="btn-bet basis-1/5">
                        <span>₩ 5천</span>
                    </button>

                    <button type="button" data-bet="10000" className="btn-bet basis-1/5">
                        <span>₩ 1만</span>
                    </button>

                    <button type="button" data-bet="50000" className="btn-bet basis-1/5">
                        <span>₩ 5만</span>
                    </button>

                    <button type="button" data-bet="100000" className="btn-bet basis-1/5">
                        <span>₩ 10만</span>
                    </button>

                    <button type="button" data-bet="500000" className="btn-bet basis-1/5">
                        <span>₩ 50만</span>
                    </button>

                    <button type="button" data-bet="1000000" className="btn-bet basis-1/5">
                        <span>₩ 100만</span>
                    </button>

                </div>
                {/* 4x2 Button layout - end */}
                <div className="p-3">
                    <button type="button" className="bet_btn_blue w-full p-3 rounded-xl border-solid border-2 border-b-8 border-black text-white">
                        배팅확인
                    </button>
                </div>
                                
            </div>
        </>
    )
}

export default PBBettingFormComponent