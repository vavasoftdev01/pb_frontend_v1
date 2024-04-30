import React, { useEffect, useState } from "react";

function PBTimer () {
 
    const [timer, setTimer] = useState(100) // Init 1 min..

    const [timerMessage, setTimerMessage] = useState('배팅하세요')


    const [progressColors, setProgressColors] = useState('rgb(22 163 74)')

    const timerStart = () => {

        setTimeout(() => {
            setTimer((timer) => timer - 1)

            
        }, 100);

        // 1s = 1000,

        if(timer <= 50) {
            // setTimerMessage
            setProgressColors((progressColors) => 'rgb(235 138 28)')
        }

        if(timer <= 10) {
            // setTimerMessage
            setProgressColors((progressColors) => 'red')
        }

        // times up
        if(timer <= 0) {
            timerStop()
        }
        
    }

    const timerStop = () => {

        setProgressColors((progressColors) => 'rgb(22 163 74)')

        setTimer(100)

    //    console.log('timer stop')
    //    console.log(timer)
       
    }

    useEffect(() => {

        timerStart()
    })
    

    return(
        <>
            <div className="relative mb-6">
                <span className="flex absolute rounded-t-lg" style={{ width: timer+'%', transition: '0.1s', transitionTimingFunction: 'ease-in', backgroundColor: progressColors }}>&nbsp;</span>
                <span className="absolute bottom-0 left-0 right-0 top-0 grid place-items-center text-white">{ timerMessage } - 00: { timer.toString().padStart(2, '0')} </span>
            </div>
        </>
    )
}


export default PBTimer;