import React, { useEffect, useState } from 'react'
import PBSingleComponent from '../Partials/betting_buttons_layouts/pb_single.component'
import PBHomeHeader from '../Partials/pb_home_header.component'
import PBRegularBallComponent from '../Partials/betting_buttons_layouts/pb_regular_ball_layout.component'
import PBRegularBallComboComponent from '../Partials/betting_buttons_layouts/pb_regular_ball_combo_layout.component'
import PBHomeFooterComponent from '../Partials/pb_home_footer.component'
import BConfig from '../../PB_config/button_layout_contents.json'
import PBBettingFormComponent from '../Partials/pb_betting_form.component'
import PBGameContainerComponent from '../Partials/game_layouts/pb_game_container.component'
import PBLeaderBoardComponent from '../Partials/game_layouts/pb_leader_board.component'
import PBGameStatsHistoryComponent from '../Partials/game_layouts/pb_game_stats_history.component'
import PBDrawPanelComponent from '../Pages/pb_draw_popup_panel.component'
import PBTimer from '../Partials/timers/pb_timer.component'
import PBStatsPanelComponent from '../Pages/pb_stats_panel.component'
import { io } from 'socket.io-client'

function Home() {
    const [isBettingFormVisible, setIsBettingFormVisible] = useState(false)
    const [timerStatus, setTimerStatus] = useState('') // TODO: Enum type (betting_open, betting_closed, draw_result)
    const [isMyBettingPanelVisible, setIsMyBettingPanelVisible] = useState(false)
    const [isStatPanelVisible, setIsStatPanelVisible] = useState(false)
    const [isBettingCLose, setIsBettingClose] = useState(false)
    const [results, setResults] = useState();

    const socket = io()

    console.log(import.meta.env.VITE_SOCKET_IO_URL)

    const toggleBettingForm = () => {
        setIsBettingFormVisible(!isBettingFormVisible);
    }

    const handleBetting = () => {
        
        setIsBettingClose(!isBettingCLose);
    }

    const toggleBettingHistoryPanel = () => {
        setIsStatPanelVisible(false);
        setIsMyBettingPanelVisible(!isMyBettingPanelVisible);
    }

    const toggleStatsPanel = () => {
        setIsStatPanelVisible(!isStatPanelVisible)
        setIsMyBettingPanelVisible(false);
        console.log(isStatPanelVisible)
    }

    useEffect(() => {
        const timer_socket = io(`${import.meta.env.VITE_SOCKET_IO_URL}/timer`);
        const results_socket = io(`${import.meta.env.VITE_SOCKET_IO_URL}/results`);

        timer_socket.connect();

        timer_socket.on('timerStart', (response) => {
            setTimerStatus(response.timer_status);
            //console.log(response)
        });
        
        
        results_socket.on('send', (response) => {
            setResults(response);
        });

        //console.log(results)
        

        return () => {
            timer_socket.disconnect();
            results_socket.disconnect();
        }
    });

    
  return (
    <div className="w-[100rem] mx-auto static h-[100%]">
        <div className="flex justify-center h-full w-2/3 mx-auto">
            
            <div className="flex justify-center flex-col w-full rounded-lg">
                <PBHomeHeader />
                <div className="w-full flex flex-col bg-slate-700 rounded-t-lg">
                    <PBTimer />
                </div>
                <div className="bg-gradient-to-b from-slate-500 to-slate-100 p-2">
                    <div className="flex flex-row">
                        <div className="w-[80rem] flex flex-col p-2 flex-wrap">
                            <div className="dynamic-panel relative">
                                <div className={(isBettingFormVisible == true || isBettingCLose == true ? 'blur-sm pointer-events-none': '') }>
                                    <PBSingleComponent config={ BConfig.pbSingle_195 } onPlaceBet={ toggleBettingForm } />
                                    <PBSingleComponent config={ BConfig.pbSingle_3_450 } onPlaceBet={ toggleBettingForm } />
                                    <PBSingleComponent config={ BConfig.pbSingle_320 } onPlaceBet={ toggleBettingForm } />
                                    <PBRegularBallComponent config= { BConfig.regularBall } onPlaceBet={ toggleBettingForm } />
                                    <PBRegularBallComboComponent config = { BConfig.regularBallCombo } onPlaceBet={ toggleBettingForm } />
                                </div>
                                
                                <div className={"absolute ease-in-out duration-300 "+ (isBettingFormVisible == true ? "my-[-22rem] opacity-100": "my-[-3rem] opacity-0")}>
                                    <PBBettingFormComponent onPlaceBet={ toggleBettingForm } />
                                </div>

                                {/* TODO: Show this panel when timer stop.. */}
                                <div className={"absolute h-full w-full ease-in-out duration-300 "+ (timerStatus !== 'betting_open' ? "my-[-149%] opacity-100" : "my-[-12%] opacity-0")}>
                                    <PBDrawPanelComponent />
                                </div> 
                            </div> 
                        </div>

                        <div className="w-full flex flex-col p-1 gap-2">
                            <PBGameContainerComponent timerStatus={isBettingCLose} ParentTimerStatus={timerStatus} Results={results}/>
                            <PBLeaderBoardComponent />
                            <PBGameStatsHistoryComponent toggleBettingHistoryForm={toggleBettingHistoryPanel} toggleResultStatsPanel={toggleStatsPanel}/>
                        </div>
                    </div>
                </div>
                <PBHomeFooterComponent />
            </div>
            <div className={"history-stats-cont absolute w-[67rem] h-full "+(isMyBettingPanelVisible ||  isStatPanelVisible ? " transition delay-75 duration-75 ease-linear opacity-100": "-mr-[300rem] transition delay-75 duration-75 ease-linear opacity-0 ")}>
            
                <div className="{z-[20] h-full absolute}">
                    {isMyBettingPanelVisible && <PBDrawPanelComponent toggleMyBetHistoryPanel={toggleBettingHistoryPanel}/>}

                    {isStatPanelVisible && <PBStatsPanelComponent toggleStatsPanelChild={toggleStatsPanel}/>}
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Home