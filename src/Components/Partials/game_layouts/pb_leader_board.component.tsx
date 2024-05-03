import React from "react";

function PBLeaderBoardComponent(props) {
    return(
        <>
            <div className="border-solid border-2 border-b-8 border-black rounded-xl h-[45%] bg-white flex flex-col w-full">
                <div className="bg-[#525e98] rounded-t-lg p-1 w-full">
                    <div className="flex flex-row mx-auto w-1/4">
                        <svg className="my-auto w-15 h-5 text-white" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0501 2.61893C17.3537 2.43322 17.7018 2.33482 18.0568 2.33434L18.052 2.32949C18.5687 2.32949 19.0641 2.53671 19.4295 2.90557C19.7948 3.27442 20 3.7747 20 4.29635C20 4.81799 19.7948 5.31827 19.4295 5.68712C19.0641 6.05598 18.5687 6.2632 18.052 6.2632C17.9271 6.26287 17.8024 6.25069 17.6797 6.22683C17.5548 6.76523 16.8859 9.67064 16.516 11.3295C16.1089 13.1666 14.9871 13.2697 14.9871 13.2697C14.9871 13.2697 6.58395 13.3109 5.21724 13.2697C3.85053 13.2284 3.58512 11.766 3.58512 11.766L2.30008 6.14437L2.30849 6.11041C2.18966 6.13273 2.06907 6.1441 1.9482 6.14437C1.50789 6.14442 1.08056 5.99385 0.735873 5.71722C0.391189 5.44059 0.14949 5.05421 0.0501885 4.62109C-0.0491133 4.18797 -0.000159822 3.73366 0.189065 3.33224C0.378291 2.93081 0.696625 2.60596 1.09216 2.41064C1.4877 2.21532 1.9371 2.16106 2.36709 2.25672C2.79709 2.35237 3.18231 2.59229 3.45993 2.93735C3.73756 3.28242 3.89122 3.71227 3.89585 4.15681C3.90048 4.60136 3.75581 5.03439 3.48544 5.38527L5.96064 7.40427L9.38702 3.8307C8.94845 3.68146 8.57683 3.37942 8.33873 2.97871C8.10064 2.57799 8.01163 2.10477 8.08765 1.64382C8.16366 1.18287 8.39973 0.764302 8.75357 0.463098C9.10741 0.161895 9.5559 -0.00226479 10.0187 2.3606e-05C10.4815 0.002312 10.9284 0.170899 11.2793 0.475588C11.6302 0.780276 11.8622 1.20116 11.9337 1.66284C12.0053 2.12452 11.9117 2.59683 11.6697 2.99518C11.4277 3.39352 11.0532 3.69186 10.6132 3.83676L13.9567 7.46612L16.4559 5.41801C16.2544 5.12297 16.1365 4.77793 16.115 4.42016C16.0935 4.06239 16.1693 3.7055 16.3341 3.38805C16.4989 3.07059 16.7465 2.80464 17.0501 2.61893Z" fill="currentColor"></path><path d="M4.70127 15.211H15.3467C15.7679 15.211 16.1093 15.5557 16.1093 15.981V17.23C16.1093 17.6553 15.7679 18 15.3467 18H4.70127C4.28009 18 3.93865 17.6553 3.93865 17.23V15.981C3.93865 15.5557 4.28009 15.211 4.70127 15.211Z" fill="currentColor"></path></svg>
                        <p className="text-white mx-auto text-center">리더보드</p>
                    </div>
                </div>

                <div className="my-5 mx-auto w-[85%] h-full flex flex-col text-sm">
                    <div className="flex flex-row">
                        <p className="id-cont w-1/2 my-auto mx-auto">#69(1336369)</p>
                        <div className="date-cont w-1/2 inline-flex">
                            <p className="my-auto mx-auto">2024.05.02 05:08</p>
                            <svg className="cursor-pointer" width="36" height="36" viewBox="0 0 36 36" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                <rect width="36" height="36" rx="8"
                                        fill="#eee"></rect>
                                <path d="M16.3594 20.7108C16.2114 20.8295 15.9895 20.8888 15.6936 20.8888H12.7346C12.5127 20.8888 12.2908 20.8295 12.1429 20.7108C11.9949 20.5922 11.847 20.4142 11.847 20.177L11.847 13.2961H6.89069C6.52082 13.2961 6.22492 13.1775 6.07697 12.8809C5.92902 12.5843 6.003 12.347 6.22492 12.1097L13.5484 6.17795C13.7703 6.05932 13.9922 6 14.2141 6C14.51 6 14.732 6.05932 14.8799 6.17795L22.1294 12.0504C22.4253 12.2877 22.4992 12.5843 22.3513 12.8809C22.2033 13.1775 21.9814 13.2961 21.5376 13.2961H16.5813V20.177C16.5813 20.4142 16.5073 20.5922 16.3594 20.7108Z"
                                        fill="rgba(2, 5, 23, .48)" fillOpacity="1"></path>
                                <path d="M19.6406 15.2892C19.7886 15.1705 20.0105 15.1112 20.3064 15.1112H23.2654C23.4873 15.1112 23.7092 15.1705 23.8571 15.2892C24.0051 15.4078 24.153 15.5858 24.153 15.823V22.7039H29.1093C29.4792 22.7039 29.7751 22.8225 29.923 23.1191C30.071 23.4157 29.997 23.653 29.7751 23.8903L22.4516 29.822C22.2297 29.9407 22.0078 30 21.7859 30C21.49 30 21.268 29.9407 21.1201 29.822L13.8706 23.9496C13.5747 23.7123 13.5008 23.4157 13.6487 23.1191C13.7967 22.8225 14.0186 22.7039 14.4624 22.7039H19.4187V15.823C19.4187 15.5858 19.4927 15.4078 19.6406 15.2892Z"
                                        fill="rgba(2, 5, 23, .48)" fillOpacity="1"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="mt-3 flex flex-row bg-gradient-to-r from-indigo-100">
                        <span className="text-start w-1/2  inline-flex">
                            <p className="bg-[#525e98] w-8 p-1 rounded-md text-center font-semibold text-white border-2 border-solid border-yellow-800">1위</p>
                            <p className="font-bold text-black w-auto ml-2 my-auto">John Doe</p>
                        </span>

                        <div className="text-end w-1/2">
                            <p className="p-1">
                                <span className="p-1 bg-blue-100 border-solid border-2 border-blue-700 rounded-md font-medium">
                                    -685
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="mt-3 flex flex-row bg-gradient-to-r from-indigo-100">
                        <span className="text-start w-1/2  inline-flex">
                            <p className="bg-[#525e98] w-8 p-1 rounded-md text-center font-semibold text-white">2위</p>
                            <p className="font-bold text-black w-auto ml-2 my-auto">Steve Doe</p>
                        </span>

                        <div className="text-end w-1/2">
                            <p className="p-1">
                                <span className="p-1 bg-blue-100 border-solid border-2 border-blue-700 rounded-md font-medium">
                                    -6850
                                </span>
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-3 flex flex-row bg-gradient-to-r from-indigo-100">
                        <span className="text-start w-1/2  inline-flex">
                            <p className="bg-[#525e98] w-8 p-1 rounded-md text-center font-semibold text-white">3위</p>
                            <p className="font-bold text-black w-auto ml-2 my-auto">Anita Max</p>
                        </span>

                        <div className="text-end w-1/2">
                            <p className="p-1">
                                <span className="p-1 bg-blue-100 border-solid border-2 border-blue-700 rounded-md font-medium">
                                    -6850
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PBLeaderBoardComponent