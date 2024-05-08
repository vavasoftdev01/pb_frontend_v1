import React, { useEffect, useState, useRef } from "react";

function PBTimer (props) {
    const time_limit = props.time_limit_in_seconds
 
    const [timer, setTimer] = useState(time_limit)

    const [progressBar, setProgressBar] = useState(100)

    const total_time = useRef(time_limit)

    const [timerMessage, setTimerMessage] = useState('배팅하세요')

    const [progressColors, setProgressColors] = useState('')

    const t_status = props.ParentTimerStatus


    const timerStart = () => {
        const progress = 100 - ((total_time.current - timer) / total_time.current) * 100
        setTimer((prevTimer) => prevTimer - 1)
        setProgressBar((prevProgressBar) => prevProgressBar = progress)
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
        if(progressBar >= 5) {
            setProgressColors('bg-red-600')
        }

        if(progressBar >= 25) {
            setProgressColors('bg-orange-600')
        }


        if(progressBar >= 50) {
            setProgressColors('bg-green-600')
        }   
    }


    const timerStop = () => {
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

    const formattedTime = () => {
        return new Date(timer * 1000).toISOString().substring(14, 19)
    }

    useEffect(() => {

        let exec = setTimeout(() => {
            timerStart()
        }, 900);
        
        if(timer < 0) {
            clearTimeout(exec)
            timerStop()
        }

    })

    return(
        <>
            <div className="relative mb-6 w-full">
                <div className="w-full rounded-t-lg">
                    <span className={"flex absolute "+ progressColors } style={{ width: progressBar+'%', transition: '0.4s', transitionTimingFunction: 'ease-in'}}>&nbsp;</span>
                    <span className="absolute bottom-0 left-0 right-0 top-1 grid place-items-center text-white text-xs">{ timerMessage } - { formattedTime() } </span>
                </div>
                
            </div>
        </>
    )
}


export default PBTimer;