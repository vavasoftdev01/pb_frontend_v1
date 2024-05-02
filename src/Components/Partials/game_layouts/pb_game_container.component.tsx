import React, { useEffect, useState } from "react";

function PBGameContainerComponent(props) {
    const colors = ['bg-green-600', 'bg-red-600', 'bg-yellow-600', 'bg-blue-600']

    const [isDraw1, setIsDraw1] = useState('mt-[15rem] opacity-5')
    const [isShow1, setIsShow1] = useState('')

    const [isDraw2, setIsDraw2] = useState('mt-[15rem] opacity-5')
    const [isShow2, setIsShow2] = useState('')

    const [isDraw3, setIsDraw3] = useState('mt-[15rem] opacity-5')
    const [isShow3, setIsShow3] = useState('')

    const [isDraw4, setIsDraw4] = useState('mt-[15rem] opacity-5')
    const [isShow4, setIsShow4] = useState('')

    const [isDraw5, setIsDraw5] = useState('mt-[15rem] opacity-5')
    const [isShow5, setIsShow5] = useState('')

    const [isDraw6, setIsDraw6] = useState('mt-[15rem] opacity-5')
    const [isShow6, setIsShow6] = useState('')

    const [result1, setResult1] = useState(Math.floor(Math.random() * 100))
    const [result2, setResult2] = useState(Math.floor(Math.random() * 100))
    const [result3, setResult3] = useState(Math.floor(Math.random() * 100))
    const [result4, setResult4] = useState(Math.floor(Math.random() * 100))
    const [result5, setResult5] = useState(Math.floor(Math.random() * 100))
    const [result6, setResult6] = useState(Math.floor(Math.random() * 100))

    const [color1, setColor1] = useState(colors[Math.floor(Math.random() * colors.length)])
    const [color2, setColor2] = useState(colors[Math.floor(Math.random() * colors.length)])
    const [color3, setColor3] = useState(colors[Math.floor(Math.random() * colors.length)])
    const [color4, setColor4] = useState(colors[Math.floor(Math.random() * colors.length)])
    // Change state to normal variables

    const isDraw = props.timerStatus
   

    const draw = () => {

        setTimeout(() => {
            setIsDraw1('mt-[1.5rem] ease-in-out duration-700 opacity-100 scale-y-100')
            setTimeout(() => {
                setIsShow1('rotate-[-120deg] ml-10 mt-10 ease-in-out duration-700')
                setIsDraw1('mt-[7rem] ease-in-out duration-700 opacity-100')
            }, 1000)
        }, 2000);

        setTimeout(() => {
            setIsDraw2('mt-[1.5rem] ease-in-out duration-700 opacity-100 scale-y-100')
            setTimeout(() => {
                setIsShow2('rotate-[-60deg] ml-8 mt-6 ease-in-out duration-700')
                setIsDraw2('mt-[7rem] ease-in-out duration-700 opacity-100')     
            }, 2000)
        }, 3000);

        setTimeout(() => {
            setIsDraw3('mt-[1.5rem] ease-in-out duration-700 opacity-100 scale-y-100')
            setTimeout(() => {
                setIsShow3('rotate-[-10deg] ml-8 mt-[0.8rem] ease-in-out duration-300')
                setIsDraw3('mt-[7rem] ease-in-out duration-300 opacity-100')     
            }, 3000)
        },4000)

        setTimeout(() => {
            setIsDraw4('mt-[1.5rem] ease-in-out duration-300 opacity-100 scale-y-100')
            setTimeout(() => {
                setIsShow4('rotate-[-40deg] ease-in-out duration-300')
                setIsDraw4('mt-[7rem] ease-in-out duration-300 opacity-100')     
            }, 4000)
        },5000)

        setTimeout(() => {
            setIsDraw5('mt-[1.5rem] ease-in-out duration-300 opacity-100 scale-y-100')
            setTimeout(() => {
                setIsShow5('rotate-[-30deg] ease-in-out duration-300')
                setIsDraw5('mt-[7rem] ease-in-out duration-300 opacity-100')     
            }, 5000)
        },4000)

        setTimeout(() => {
            setIsDraw6('mt-[1.5rem] ease-in-out duration-300 opacity-100 scale-y-100')
            setTimeout(() => {
                setIsShow6('rotate-[90deg] ease-in-out duration-300')
                setIsDraw6('mt-[7rem] ease-in-out duration-300 opacity-100')     
            }, 4500)
        },5000)
    }

    useEffect(() => {
        setTimeout(() => {
            //draw()
        }, 1000)
        
    }, [])


    return(
        <>
            <div className="pb-bg-main_container bg-slate-600 rounded-lg h-80 flex relative w-full border-[0.3rem] border-solid border-slate-900">
               <div className="pb-bg w-full h-full relative flex bg-green-200">
                    <div className="ball-machine w-80 h-full bg-slate-900 mx-auto border-[0.3rem] border-solid border-black rounded-xl">
                        <div className="h-full relative">
                            {/* Conditional rendering  after timer stop */}
                            <div className={"beam-loader h-full w-full absolute flex flex-row "+(isDraw ? "hidden": "")}>
                                <div className="w-1/2">
                                    <img src="./images/beam_g2.gif" className="relative h-64 -ml-2 -skew-x-6 -mt-3" alt="" />
                                </div>
                                <div className="w-1/2 ">
                                    <img src="./images/beam_g2.gif" className="relative h-64 ml-2 -mt-1 skew-x-24 -scale-x-100" alt="" />
                                </div>
                            </div>
                            <img src="./images/BallsMachine_case.webp" className="object-cover absolute"/>
                            <img src="./images/BallsMachine_mx.webp" className="object-cover absolute" onClick={() => draw()}/>
                            <div className="draw-results-container w-full h-2/3 relative ">
                            {/* Conditional rendering draw starts.. */}
                            {/* hover:rotate-[90deg] */}
                                {/* <div className={"mx-auto w-7 h-full bg-purple-500 z-10 p-0 "+ isShow}>
                                    <div id="results_container" className={"ball_up "+ isDraw}>
                                        <span className={"ball_init bg-red-600 w-5 h-5 rounded-2xl p-1 text-white "}>69</span>
                                    </div>
                                </div> */}

                                {/* 
                                    Create 5x divs for every draw 
                                    Set intervals after every draw
                                    Set specific css alignments for every draw
                                    Add randominity
                                */}
                                <div id="cont1" className={"left-0 right-0 mx-auto w-7 h-full  z-10 p-0 absolute "+ isShow1}>
                                    <div className={"ball_up "+ isDraw1}>
                                        <span className={"ball_init w-3 h-3 rounded-full p-2 text-white "+ color1}>{ result1 }</span>
                                    </div>
                                </div>
                                <div id="cont2" className={"left-0 right-0 mx-auto w-7 h-full  z-10 p-0 absolute "+ isShow2}>
                                    <div className={"ball_up "+ isDraw2}>
                                        <span className={"ball_init w-3 h-3 rounded-full p-2 text-white "+ color2}>{ result2 }</span>
                                    </div>
                                </div>
                                <div id="cont3" className={"left-0 right-0 mx-auto w-7 h-full  z-10 p-0 absolute "+ isShow3}>
                                    <div className={"ball_up "+ isDraw3}>
                                        <span className={"ball_init w-3 h-3 rounded-full p-2 text-white "+ color3}>{ result3 }</span>
                                    </div>
                                </div>
                                {/* 
                                <div id="cont3" className={"left-0 right-0 mx-auto w-7 h-full  z-10 p-0 absolute "+ isShow3}>
                                    <div className={"ball_up "+ isDraw3}>
                                        <span className={"ball_init w-5 h-5 rounded-2xl p-2 text-white "+ color3}>{ result3 }</span>
                                    </div>
                                </div>
                                <div id="cont4" className={"left-0 right-0 mx-auto w-7 h-full  z-10 p-0 absolute "+ isShow4}>
                                    <div className={"ball_up "+ isDraw4}>
                                        <span className={"ball_init w-5 h-5 rounded-2xl p-2 text-white "+ color1}>{ result4 }</span>
                                    </div>
                                </div>
                                <div id="cont5" className={"left-0 right-0 mx-auto w-7 h-full  z-10 p-0 absolute "+ isShow5}>
                                    <div className={"ball_up "+ isDraw5}>
                                        <span className={"ball_init w-5 h-5 rounded-2xl p-2 text-white "+ color3}>{ result5 }</span>
                                    </div>
                                </div>
                                <div id="cont6" className={"left-0 right-0 mx-auto w-7 h-full  z-10 p-0 absolute "+ isShow6}>
                                    <div className={"ball_up "+ isDraw6}>
                                        <span className={"ball_init w-5 h-5 rounded-2xl p-2 text-white bg-black"}>{ result6 }</span>
                                    </div>
                                </div> */}
                               

                               {/* Layout ref */}
                                



                                {/* 
                                <div className="results_container_zoomed relative h-full">
                                    <div className="con h-1/4 bg-green-400 mt-[20rem] absolute w-full">
                                        
                                    </div>
                                </div> 
                                */}
                                
                                {/* Append div into the container for results, add fadeIn effects */}
                                
                            </div>
                        </div>
                    </div>
               </div> 
            </div>
        </>
    )
}

export default PBGameContainerComponent