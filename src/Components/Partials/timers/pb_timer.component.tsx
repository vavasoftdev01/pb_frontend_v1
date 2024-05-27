import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

function PBTimer (props) {
    const [timerMessage, setTimerMessage] = useState('배팅하세요');
    const [progressColors, setProgressColors] = useState('bg-green-600');
    const [serverTimer, setServerTimer] = useState();
    const [timerStatus, setTimerStatus] = useState('');
    const [progressBar, setProgressBar] = useState(100);


    const setLoaderColor = () => {
        switch (timerStatus) {
            case 'betting_open':
                setOpenBettingLoaderColor();  
            break;

            case 'betting_closed':
                setProgressColors('bg-[#525e98]');
                setTimerMessage('종료된 배팅, 곧시작합니다.');
            break;

            case 'draw_result':
                setProgressColors('bg-slate-800');
                setTimerMessage('드로우');
            break;
        
            default:
                setProgressColors('bg-green-600');
            break;
        }
    }

    const setOpenBettingLoaderColor = () => {
        
        if(progressBar >= 5) {
            setProgressColors('bg-red-600');
        }

        if(progressBar >= 25) {
            setProgressColors('bg-orange-600');
            setTimerMessage('배팅 종료전')
        }

        if(progressBar >= 50) {
            setProgressColors('bg-green-600');
            setTimerMessage('배팅하세요');
        }   
    }

    useEffect(() => {
        const timer_socket = io(`${import.meta.env.VITE_SOCKET_IO_URL}/timer`);
        timer_socket.connect();
        timer_socket.on('timerStart', (response) => {
            setServerTimer(response.formatted_time);
            let progress_bar_width = 100 - ((response.time_limit - response.timer) / response.time_limit) * 100
            setProgressBar(progress_bar_width);
            setTimerStatus(response.timer_status);
            setLoaderColor();

            // TODO: For refactor.. Reset width
            if(progressBar == 0) {
                setProgressBar(100);
            }
        });

        

        

        return () => {
            timer_socket.disconnect();
        }

    })

    return(
        <>
            <div className="relative mb-6 w-full">
                <div className="w-full rounded-t-lg">
                    <span className={"flex absolute overflow-x-hidden "+ progressColors } style={{ width: progressBar+'%', transition: '1s', transitionTimingFunction: 'ease-in'}}>&nbsp;</span>
                    <span className="absolute bottom-0 left-0 right-0 top-1 grid place-items-center text-white text-xs">{ timerMessage } - { serverTimer } </span>
                </div>
                
            </div>
        </>
    )
}


export default PBTimer;