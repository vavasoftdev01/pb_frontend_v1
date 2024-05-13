import React from "react";

function StatsBySelectionComponent(props) {

    return(
        <>
            <div className="border-solid border-gray-400 border-[0.1rem] m-2 rounded-md">
                <p className="text-center my-3 font-semibold">선택에 의한 통계</p>
                <div className="flex flex-col">
                    <select className="border-solid border-2 border-[#939ed2] rounded-md h-10 mx-2 p-5 mb-3 cursor-pointer">
                        <option selected>행 1개</option>
                        <option>행 2개</option>
                        <option>행 3개</option>
                        <option>행 4개</option>
                    </select>

                    <select className="border-solid border-2 border-[#939ed2] rounded-md h-10 mx-2 p-5 cursor-pointer text-black">
                        <option>파워볼 홀/짝</option>
                        <option>파워볼 언더/오버</option>
                        <option>일반볼 홀/짝</option>
                        <option>일반볼 언더/오버</option>
                    </select>

                    <div className="flex flex-col my-2 h-[10rem] border-b-[0.1rem] border-t-[0.1rem] bg-gray-300 border-solid border-gray-400 overflow-auto">

                    </div>
                </div>
            </div>
        </>
    )
}

export default StatsBySelectionComponent