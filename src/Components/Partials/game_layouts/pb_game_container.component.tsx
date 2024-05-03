import React, { useEffect, useState } from "react";

function PBGameContainerComponent(props) {

    const isDraw = props.timerStatus

    const ballColors = ['./images/pballs/red.png', './images/pballs/green.png', './images/pballs/blue.png', './images/pballs/yellow.png']

    const[b1, setB1] = useState({
        color: ballColors[Math.floor(Math.random() * ballColors.length)],
        number: 0,
        style: 'opacity-0'
    })

    const[b2, setB2] = useState({
        color: ballColors[Math.floor(Math.random() * ballColors.length)],
        number: 0,
        style: 'opacity-0'
    })

    const[b3, setB3] = useState({
        color: ballColors[Math.floor(Math.random() * ballColors.length)],
        number: 0,
        style: 'opacity-0'
    })

    const[b4, setB4] = useState({
        color: ballColors[Math.floor(Math.random() * ballColors.length)],
        number: 0,
        style: 'opacity-0'
    })

    const[b5, setB5] = useState({
        color: ballColors[Math.floor(Math.random() * ballColors.length)],
        number: 0,
        style: 'opacity-0'
    })

    const[b6, setB6] = useState({
        color: './images/pballs/black.png',
        number: 0,
        style: 'opacity-0'
    })

    const drawBalls = () => {
        
        setTimeout(() => {
            setB1({
                color: ballColors[Math.floor(Math.random() * ballColors.length)],
                number: Math.floor(Math.random() * 100),
                style: 'mt-[12.5rem] ease-in-out duration-300 opacity-100'
            })
        }, 1000)

        setTimeout(() => {
            setB2({
                color: ballColors[Math.floor(Math.random() * ballColors.length)],
                number: Math.floor(Math.random() * 100),
                style: 'mt-[12.5rem] ease-in-out duration-300'
            })
        }, 2000)

        setTimeout(() => {
            setB3({
                color: ballColors[Math.floor(Math.random() * ballColors.length)],
                number: Math.floor(Math.random() * 100),
                style: 'mt-[12.5rem] ease-in-out duration-300'
            })
        }, 3000)

        setTimeout(() => {
            setB4({
                color: ballColors[Math.floor(Math.random() * ballColors.length)],
                number: Math.floor(Math.random() * 100),
                style: 'mt-[12.5rem] ease-in-out duration-300'
            })
        }, 4000)

        setTimeout(() => {
            setB5({
                color: ballColors[Math.floor(Math.random() * ballColors.length)],
                number: Math.floor(Math.random() * 100),
                style: 'mt-[12.5rem] ease-in-out duration-300'
            })
        }, 5000)

        setTimeout(() => {
            setB6({
                color: ballColors[Math.floor(Math.random() * ballColors.length)],
                number: Math.floor(Math.random() * 100),
                style: 'mt-[12.5rem] ease-in-out duration-300'
            })
        }, 6000)

        console.log(b1.color)
       
    }

    const setDefault = () => {
        
        setB1({
            color: ballColors[Math.floor(Math.random() * ballColors.length)],
            number: 0,
            style: 'opacity-0'
        })

        setB2({
            color: ballColors[Math.floor(Math.random() * ballColors.length)],
            number: 0,
            style: 'opacity-0'
        })

        setB3({
            color: ballColors[Math.floor(Math.random() * ballColors.length)],
            number: 0,
            style: 'opacity-0'
        })

        setB4({
            color: ballColors[Math.floor(Math.random() * ballColors.length)],
            number: 0,
            style: 'opacity-0'
        })


        setB5({
            color: ballColors[Math.floor(Math.random() * ballColors.length)],
            number: 0,
            style: 'opacity-0'
        })

        setB6({
            color: ballColors[Math.floor(Math.random() * ballColors.length)],
            number: 0,
            style: 'opacity-0'
        })
 
    }

    useEffect(() => {

        if(isDraw) {
            drawBalls()
        }
        
        setDefault()
    }, [props])


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
                            <div className="draw-results-container w-full h-full relative">
                                <div className={"absolute w-full mt-[3rem] inline-flex space-x-1"}>
                                    <div className="bcont1">
                                        <div className="binder relative">
                                            <img  src={b1.color} className={"relative w-11 h-11 ml-1 z-10 "+ b1.style} alt="" />
                                        </div>     
                                    </div>

                                    <div className="bcont1">
                                        <div className="binder relative">
                                            <img  src={b2.color} className={"relative w-11 h-11 ml-1 z-10 "+ b2.style} alt="" />
                                        </div>     
                                    </div>

                                    <div className="bcont1">
                                        <div className="binder relative">
                                            <img  src={b3.color} className={"relative w-11 h-11 ml-1 z-10 "+ b3.style} alt="" />
                                        </div>     
                                    </div>

                                    <div className="bcont1">
                                        <div className="binder relative">
                                            <img  src={b4.color} className={"relative w-11 h-11 ml-1 z-10 "+ b4.style} alt="" />
                                        </div>     
                                    </div>

                                    <div className="bcont1">
                                        <div className="binder relative">
                                            <img  src={b5.color} className={"relative w-11 h-11 ml-1 z-10 "+ b5.style} alt="" />
                                        </div>     
                                    </div>

                                    <div className="bcont1">
                                        <div className="binder relative">
                                            <img  src="./images/pballs/black.png" className={"relative w-11 h-11 ml-1 z-10 "+ b6.style} alt="" />
                                        </div>     
                                    </div>
                                     
                                     {/* <img src="./images/pballs/blue.png" className="relative w-12 h-12" alt="" />
                                     <img src="./images/pballs/yellow.png" className="relative w-12 h-12" alt="" />
                                     <img src="./images/pballs/green.png" className="relative w-12 h-12" alt="" />
                                     <img src="./images/pballs/red.png" className="relative w-12 h-12" alt="" />
                                     <img src="./images/pballs/black.png" className="relative w-12 h-12" alt="" /> */}
                                </div>

                                <div className={"absolute w-full " + (isDraw ? "mt-[15rem] opacity-100 ease-in-out duration-300": "mt-[25rem] opacity-0 ease-in-out duration-300")}>
                                     <img src="./images/BallsMachine_result.webp" className="relative" alt="" />
                                </div> 
                                
                                
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