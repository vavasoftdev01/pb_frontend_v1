import React, { useState } from "react";

function PBGameContainerComponent(props) {

    const [isDraw, setIsDraw] = useState('mt-[15rem] opacity-5')
    const [isShow, setIsShow] = useState('')


    const draw = () => {
       
        setIsDraw('mt-[1.5rem] ease-in-out duration-300 opacity-100')
        showResults()
        setTimeout(() => {
            setIsShow('rotate-[-90deg] ease-in-out duration-300')
            setIsDraw('mt-[7rem] ease-in-out duration-300 opacity-100')
        }, 500)

      
        for (let index = 0; index < 5; index++) {
            setInterval(() => {
                console.log(index+" settt")
            }, 5000);
            
            
        }

        // TODO REFACTOR AND ONEBYONE RENDERING RESULTS

        // for (let index = 1; index < 7; index++) {

        //     setTimeout(() => {
        //         setIsDraw('mt-[1.5rem] ease-in-out duration-300 opacity-100')
        //         var iDiv = document.createElement('div');
        //         iDiv.id = 'block-id_'+index;
        //         iDiv.className = 'ball_init bg-red-600 w-5 h-5 rounded-2xl text-white text-center text-sm';
                
        //         iDiv.innerHTML = String(index);
        //         document.getElementById('results_container')?.appendChild(iDiv);
        //         console.log(iDiv.innerHTML)
                
        //     }, 300);

        //     setTimeout(() => {
        //         setIsShow('rotate-[-90deg] ease-in-out duration-300')
                
        //     }, 500)


        // }
        
    }

    const showResults = () => {
        setTimeout(() => {
            setIsShow('rotate-[-90deg] ease-in-out duration-300')
            
        }, 500)

        setTimeout(() => {
            //setIsDraw('mt-[10rem] opacity-25')
        }, 1000)

    }


    return(
        <>
            <div className="pb-bg-main_container bg-slate-600 rounded-lg h-3/5 flex relative w-full border-[0.3rem] border-solid border-slate-900">
               <div className="pb-bg w-full h-full relative flex bg-green-200">
                    <div className="ball-machine w-1/2 h-full bg-slate-900 mx-auto border-[0.3rem] border-solid border-black rounded-xl">
                        <div className="h-full relative">
                            {/* Conditional rendering  after timer stop */}
                            <div className="beam-loader h-full w-full absolute flex flex-row">
                                <div className="w-1/2">
                                    <img src="./images/beam_g2.gif" className="relative h-64 -ml-1 -skew-x-12 -mt-2" alt="" />
                                </div>
                                <div className="w-1/2 ">
                                    <img src="./images/beam_g2.gif" className="relative h-64 ml-2 -mt-1 skew-x-24 -scale-x-100" alt="" />
                                </div>
                            </div>
                            <img src="./images/BallsMachine_case.webp" className="object-cover absolute"/>
                            <img src="./images/BallsMachine_mx.webp" className="object-cover absolute" onClick={() => draw()}/>
                            <div className="draw-results-container flex flex-row w-full h-full">
                            {/* Conditional rendering draw starts.. */}
                            {/* hover:rotate-[90deg] */}
                                <div className={"mx-auto w-7 h-full cursor-pointer z-10 p-0 "+ isShow}>
                                    <div id="results_container" className={"ball_up "+ isDraw}>
                                    <span className={"ball_init bg-red-600 w-5 h-5 rounded-2xl p-1 text-white "}>69</span>
                                        {/* <span className="ball_init bg-red-600 w-5 h-5 rounded-2xl p-1 text-white ">69</span>
                                        <span className="ball_init bg-red-600 w-5 h-5 rounded-2xl p-1 text-white ">69</span> */}
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
               </div> 
            </div>
        </>
    )
}

export default PBGameContainerComponent