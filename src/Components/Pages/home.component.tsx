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
import PBDrawPanelComponent from '../Partials/pb_draw_popup_panel.component'
import PBTimer from '../Partials/timers/pb_timer.component'

function Home() {

    const [isBettingFormVisible, setIsBettingFormVisible] = useState(false)

    const [timerStatus, setTimerStatus] = useState('open_betting')

    const toggleBettingForm = () => {
        setIsBettingFormVisible(!isBettingFormVisible)
    }

    const [isBettingCLose, setIsBettingClose] = useState(false)

    const handleBetting = () => {
        
        setIsBettingClose(!isBettingCLose)
    }

    const handleParentTimerStatusOnChange = (tStatus) => {
        setTimerStatus(tStatus)
    }

    
  return (
    <div className="flex justify-center w-full">
        <div className="flex-col w-3/5 mt-2 rounded-lg p-5">
            <PBHomeHeader />
            <div className="w-full flex flex-col bg-slate-700 rounded-t-lg">
                {/* betting open timer .. apply conditional rendering based on this timer */}
                {timerStatus == 'open_betting' && <PBTimer handleChildTimerStatusChange={ handleParentTimerStatusOnChange } ParentTimerStatus={timerStatus} time_limit_in_seconds={ 180 }/>}
                    
                {timerStatus == 'closed_betting' && <PBTimer handleChildTimerStatusChange={ handleParentTimerStatusOnChange } ParentTimerStatus={timerStatus}  time_limit_in_seconds={ 70 }/>}

                {timerStatus == 'draw_results' && <PBTimer handleChildTimerStatusChange={ handleParentTimerStatusOnChange } ParentTimerStatus={timerStatus}  time_limit_in_seconds={ 15 }/>}   
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
                            <div className={"absolute h-[50rem] w-full ease-in-out duration-300 "+ (timerStatus !== 'open_betting' ? "my-[-142%] opacity-100" : "my-[-12%] opacity-0")}>
                                <PBDrawPanelComponent />
                            </div>          

                        </div> 
                    </div>

                    <div className="w-full flex flex-col p-1 gap-2">
                        <PBGameContainerComponent timerStatus={isBettingCLose} ParentTimerStatus={timerStatus}/>
                        <PBLeaderBoardComponent />
                        <PBGameStatsHistoryComponent />
                    </div>
                </div>
            </div>
            <PBHomeFooterComponent />
        </div>
    </div>
  )
}

export default Home