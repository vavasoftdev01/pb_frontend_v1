import React, { useEffect, useState } from "react";

function PBGameContainerComponent(props) {

    const isDraw = props.timerStatus

    const ballColors = ['./images/pballs/red.png', './images/pballs/green.png', './images/pballs/blue.png', './images/pballs/yellow.png']

    const ballTransition = 'mt-[12.5rem] ease-in-out duration-300 opacity-100'

    const ballDefaultStyle = 'opacity-0' 

    const t_status = props.ParentTimerStatus

    const [results, setResults] = useState([])


    const[b1, setB1] = useState({
        color: ballColors[Math.floor(Math.random() * ballColors.length)],
        style: ballDefaultStyle
    })

    const[b2, setB2] = useState({
        color: ballColors[Math.floor(Math.random() * ballColors.length)],
        style: ballDefaultStyle
    })

    const[b3, setB3] = useState({
        color: ballColors[Math.floor(Math.random() * ballColors.length)],
        style: ballDefaultStyle
    })

    const[b4, setB4] = useState({
        color: ballColors[Math.floor(Math.random() * ballColors.length)],
        style: ballDefaultStyle
    })

    const[b5, setB5] = useState({
        color: ballColors[Math.floor(Math.random() * ballColors.length)],
        style: ballDefaultStyle
    })

    const[b6, setB6] = useState({
        color: './images/pballs/black.png',
        style: ballDefaultStyle
    })

    const[balls, setBalls] = useState([
        {
            id: 'ball_1',
            color: ballColors[Math.floor(Math.random() * ballColors.length)],

            style: ballDefaultStyle
        },
        {
            id: 'ball_2',
            color: ballColors[Math.floor(Math.random() * ballColors.length)],

            style: ballDefaultStyle
        },
        {
            id: 'ball_3',
            color: ballColors[Math.floor(Math.random() * ballColors.length)],

            style: ballDefaultStyle
        },
        {
            id: 'ball_4',
            color: ballColors[Math.floor(Math.random() * ballColors.length)],

            style: ballDefaultStyle
        },
        {
            id: 'ball_5',
            color: ballColors[Math.floor(Math.random() * ballColors.length)],

            style: ballDefaultStyle
        },
        {
            id: 'ball_6',
            color: ballColors[Math.floor(Math.random() * ballColors.length)],

            style: ballDefaultStyle
        }
        
    ])

    const drawBalls = () => {
        // TODO..
        const newBalls = balls.map((ball) => {
            return { ...ball, style: ballTransition, number: Math.floor(Math.random() * 99) + 1 }
        })

       setTimeout(() => {
            for (let b = 0; b < balls.length; b++) {
                setTimeout(() => {
                    setBalls((prevBalls) => newBalls)
                },2000)
            }
       },3000)
        setBalls((prevBalls) => newBalls)
        

        setTimeout(() => {
            setB1({
                color: ballColors[Math.floor(Math.random() * ballColors.length)],
                style: ballTransition
            })
        }, 1000)

        setTimeout(() => {
            setB2({
                color: ballColors[Math.floor(Math.random() * ballColors.length)],
                style: ballTransition
            })
        }, 2000)

        setTimeout(() => {
            setB3({
                color: ballColors[Math.floor(Math.random() * ballColors.length)],
                style: ballTransition
            })
        }, 3000)

        setTimeout(() => {
            setB4({
                color: ballColors[Math.floor(Math.random() * ballColors.length)],
                style: ballTransition
            })
        }, 4000)

        setTimeout(() => {
            setB5({
                color: ballColors[Math.floor(Math.random() * ballColors.length)],
                style: ballTransition
            })
        }, 5000)

        setTimeout(() => {
            setB6({
                color: ballColors[Math.floor(Math.random() * ballColors.length)],
                style: ballTransition
            })
        }, 6000)   
    }

    const setDefault = () => {
        
        setB1({
            color: ballColors[Math.floor(Math.random() * ballColors.length)],

            style: ballDefaultStyle
        })

        setB2({
            color: ballColors[Math.floor(Math.random() * ballColors.length)],

            style: ballDefaultStyle
        })

        setB3({
            color: ballColors[Math.floor(Math.random() * ballColors.length)],

            style: ballDefaultStyle
        })

        setB4({
            color: ballColors[Math.floor(Math.random() * ballColors.length)],

            style: ballDefaultStyle
        })


        setB5({
            color: ballColors[Math.floor(Math.random() * ballColors.length)],

            style: ballDefaultStyle
        })

        setB6({
            color: ballColors[Math.floor(Math.random() * ballColors.length)],

            style: ballDefaultStyle
        })

    }

    const randomNumberGenerator = () => {
       let temp_ball_cont : number[] = []
        
       for (let t = 0; t < 6; t++) {
            temp_ball_cont.push(Math.floor(Math.random() * 94) + t)

            for (let v = 0; v < temp_ball_cont.length; v++) {
                if(temp_ball_cont.includes(temp_ball_cont[v])) {
                    temp_ball_cont.pop()
                    temp_ball_cont.push(Math.floor(Math.random() * 94) + v)
                }
            }
       }
       setResults(temp_ball_cont)
    }

    useEffect(() => {
        if(t_status == 'closed_betting' || t_status == 'draw_results') {
            randomNumberGenerator()
        }
        
        if(t_status == 'draw_results') {
            
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
                            <div className={"beam-loader h-full w-full absolute flex flex-row "+(t_status == 'draw_results' ? "hidden": "")}>
                                <div className="w-1/2">
                                    <img src="./images/beam_g2.gif" className="relative h-64 -ml-2 -skew-x-6 -mt-3" alt="" />
                                </div>
                                <div className="w-1/2 ">
                                    <img src="./images/beam_g2.gif" className="relative h-64 ml-2 -mt-1 skew-x-24 -scale-x-100" alt="" />
                                </div>
                            </div>
                            <img src="./images/BallsMachine_case.webp" className="object-cover absolute"/>
                            <img src="./images/BallsMachine_mx.webp" className="object-cover absolute" />
                            <div className="draw-results-container w-full h-full relative">
                                <div className={"absolute w-full mt-[3rem] inline-flex space-x-1"}>
                                    <div className="bcont1">
                                        <div className={"relative w-11 h-11 ml-1 z-10 "+ b1.style}>
                                            <p className="text-white absolute z-20 mx-4 my-2 text-md font-bold">{ results[0] }</p>
                                            <img  src={b1.color} className={"relative w-11 h-11 ml-1 z-10 "+ b1.style} alt="" />
                                        </div>     
                                    </div>

                                    <div className="bcont1">
                                        <div className={"relative w-11 h-11 ml-1 z-10 "+ b2.style}>
                                        <p className="text-white absolute z-20 mx-4 my-2 text-md font-bold">{ results[1] }</p>
                                            <img  src={b2.color} className={"relative w-11 h-11 ml-1 z-10 "+ b2.style} alt="" />
                                        </div>     
                                    </div>

                                    <div className="bcont1">
                                        <div className={"relative w-11 h-11 ml-1 z-10 "+ b3.style}>
                                        <p className="text-white absolute z-20 mx-4 my-2 text-md font-bold">{ results[2] }</p>
                                            <img  src={b3.color} className={"relative w-11 h-11 ml-1 z-10 "+ b3.style} alt="" />
                                        </div>     
                                    </div>

                                    <div className="bcont1">
                                        <div className={"relative w-11 h-11 ml-1 z-10 "+ b4.style}>
                                        <p className="text-white absolute z-20 mx-4 my-2 text-md font-bold">{ results[3] }</p>
                                            <img  src={b4.color} className={"relative w-11 h-11 ml-1 z-10 "+ b4.style} alt="" />
                                        </div>     
                                    </div>

                                    <div className="bcont1">
                                        <div className={"relative w-11 h-11 ml-1 z-10 "+ b5.style}>
                                            <p className="text-white absolute z-20 mx-4 my-2 text-md font-bold">{ results[4] }</p>
                                            <img  src={b5.color} className={"relative w-11 h-11 ml-1 z-10 "+ b5.style} alt="" />
                                        </div>     
                                    </div>

                                    <div className="bcont1">
                                        <div className={"relative w-11 h-11 ml-1 z-10 "+ b6.style}>
                                            <p className="text-white absolute z-20 mx-3 my-2 text-md font-bold">{ results[5] }</p>
                                            <img  src="./images/pballs/black.png"  alt="" className="relative" />
                                        </div>     
                                    </div>
                                     
                                     {/* <img src="./images/pballs/blue.png" className="relative w-12 h-12" alt="" />
                                     <img src="./images/pballs/yellow.png" className="relative w-12 h-12" alt="" />
                                     <img src="./images/pballs/green.png" className="relative w-12 h-12" alt="" />
                                     <img src="./images/pballs/red.png" className="relative w-12 h-12" alt="" />
                                     <img src="./images/pballs/black.png" className="relative w-12 h-12" alt="" /> */}
                                </div>

                                <div className={"absolute w-full " + (t_status == 'draw_results' ? "mt-[15rem] opacity-100 ease-in-out duration-300": "mt-[25rem] opacity-0 ease-in-out duration-300")}>
                                     <img src="./images/rect_res.gif" className="relative" alt="" />
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