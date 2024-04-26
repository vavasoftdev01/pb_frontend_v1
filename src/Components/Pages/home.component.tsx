import React, { useEffect, useState } from 'react'
import PBSingleComponent from '../Partials/betting_buttons_layouts/pb_single.component'
import PBTimer from '../Partials/pb_timer.component'
import PBHomeHeader from '../Partials/pb_home_header.component'
import PBRegularBallComponent from '../Partials/betting_buttons_layouts/pb_regular_ball_layout.component'
import PBRegularBallComboComponent from '../Partials/betting_buttons_layouts/pb_regular_ball_combo_layout.component'
import PBHomeFooterComponent from '../Partials/pb_home_footer.component'
import BConfig from '../../PB_config/button_layout_contents.json'
import PBBettingFormComponent from '../Partials/pb_betting_form.component'
import PBGameContainerComponent from '../Partials/game_layouts/pb_game_container.component'
import PBLeaderBoardComponent from '../Partials/game_layouts/pb_leader_board.component'
import PBGameStatsHistoryComponent from '../Partials/game_layouts/pb_game_stats_history.component'


function Home() {

    const [isBettingFormVisible, setIsBettingFormVisible] = useState(false)

    const toggleBettingForm = () => {
        setIsBettingFormVisible(!isBettingFormVisible)
    }


    
  return (
    <div className="flex justify-center w-full">
        <div className="flex-col w-3/5 mt-2 rounded-lg p-5">
            <PBHomeHeader />
            <div className="w-full flex flex-col bg-slate-700 rounded-t-lg">
                <PBTimer />
            </div>
            <div className="bg-gradient-to-b from-slate-500 to-slate-100 p-2">
                <div className="flex flex-row">
                    <div className="w-full flex flex-col p-2 flex-wrap">
                        <div className="dynamic-panel relative">
                            <div className={(isBettingFormVisible == true ? 'blur-sm': '') }>
                                <PBSingleComponent config={ BConfig.pbSingle } onPlaceBet={ toggleBettingForm } />
                                <PBSingleComponent config={ BConfig.pbSingle } onPlaceBet={ toggleBettingForm } />
                                <PBSingleComponent config={ BConfig.pbSingle } onPlaceBet={ toggleBettingForm } />
                                <PBRegularBallComponent config= { BConfig.regularBall } onPlaceBet={ toggleBettingForm } />
                                <PBRegularBallComboComponent config = { BConfig.regularBallCombo } onPlaceBet={ toggleBettingForm } />
                            </div>
                            { isBettingFormVisible ? <div className="my-[-45rem] absolute"><PBBettingFormComponent onPlaceBet={ toggleBettingForm } /></div> : '' }
                        </div>
                        {/* TODO: Show this panel when timer stop.. */}
                        {/* <div className="grid grid-cols bg-red-300 h-full">
                            Draw starts..
                        </div> */}                 
                    </div>

                    <div className="w-full flex flex-col p-1 gap-2">
                        <PBGameContainerComponent />
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