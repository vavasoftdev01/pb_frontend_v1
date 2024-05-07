import React, { useEffect, useState, useRef } from "react";

function PBTimer (props) {
    const time_limit = props.time_limit_in_seconds
 
    const [timer, setTimer] = useState(time_limit) // Init 1 min..

    const [progressBar, setProgressBar] = useState(100)

    const total_time = useRef(time_limit)

    const [timerMessage, setTimerMessage] = useState('배팅하세요')

    const [progressColors, setProgressColors] = useState('')

    const t_status = props.ParentTimerStatus


    const timerStart = () => {

        const progress = ((total_time.current - timer) / total_time.current) * 100

        console.log(timer)

        setTimer((prevTimer) => prevTimer - 1)
        setProgressBar(progress)

        setLoaderColor() 
    }

    const setLoaderColor = () => {
        switch (t_status) {
            case 'open_betting':
                setOpenBettingLoaderColor()  
            break;

            case 'closed_betting':
                setProgressColors('bg-[#525e98]')    
            break;

            case 'draw_results':
                setProgressColors('bg-slate-800')   
            break;
        
            default:
                setProgressColors('bg-green-600')
                
            break;
        }
    }

    const setOpenBettingLoaderColor = () => {
        if(progressBar > 0) {
            setProgressColors('bg-green-600')
        }

        if(progressBar > 55) {
            setProgressColors('bg-orange-600')
        }


        if(progressBar > 85) {
            setProgressColors('bg-red-600')
        }   
    }


    const timerStop = () => {
        // props.getTimer()
        setTimer(total_time.current)
        setProgressBar(100)
        handleStatusOnChange()
    }

    const handleStatusOnChange = () => {
        switch (t_status) {
            case 'open_betting':
                props.handleChildTimerStatusChange('closed_betting')
            break;
            case 'closed_betting':
                props.handleChildTimerStatusChange('draw_results')
            break;
            case 'draw_results':
                props.handleChildTimerStatusChange('open_betting')
            break;
            default:
                props.handleChildTimerStatusChange('open_betting')
            break;
        }
    }

    const padZero = (n) => {
        return (n < 10 ? "0": "") + n
    }

    useEffect(() => {

        let exec = setTimeout(() => {
            timerStart()
        }, 1000);
        
        if(timer < 0) {
            clearTimeout(exec)
            timerStop()
        }

    })

    return(
        <>
            <div className="relative mb-6 w-full">
                <div className="w-full rounded-t-lg">
                    <span className={"flex absolute "+ progressColors } style={{ width: progressBar+'%', transition: '0.2s', transitionTimingFunction: 'ease-in'}}>&nbsp;</span>
                    <span className="absolute bottom-0 left-0 right-0 top-1 grid place-items-center text-white text-xs">{ timerMessage } - 00:{ padZero(timer) } </span>
                </div>
                
            </div>
        </>
    )
}


export default PBTimer;