import React, { useEffect, useState } from 'react'
import PBSingleComponent from '../Partials/betting_buttons_layouts/pb_single.component'
import PBTimer from '../Partials/pb_timer.component'
import PBHomeHeader from '../Partials/pb_home_header.component'
import PBRegularBallComponent from '../Partials/betting_buttons_layouts/pb_regular_ball_layout.component'
import PBRegularBallComboComponent from '../Partials/betting_buttons_layouts/pb_regular_ball_combo_layout.component'
import PBHomeFooterComponent from '../Partials/pb_home_footer.component'
import BConfig from '../../PB_config/button_layout_contents.json'


function Home() {
    
  return (
    <div className="flex justify-center w-full">
        <div className="flex-col w-2/4 mt-2 rounded-lg p-5">
            {/* 3 lg buttons */}
            <PBHomeHeader />
            <div className="w-full flex flex-col bg-slate-700 rounded-t-lg">
                {/* Timer */}
                <PBTimer />
            </div>
            <div className="bg-gradient-to-b from-slate-500 to-slate-100 p-2">

                {/* TODO: Refactor these to separate components respectively.. */}
                <div className="flex flex-row">
                    <div className="w-full flex flex-col gap-3 p-2">
                        <PBSingleComponent config = { BConfig.pbSingle } />
                        <PBSingleComponent config = { BConfig.pbSingle } />
                        <PBSingleComponent config = { BConfig.pbSingle } />
                        <PBRegularBallComponent config = { BConfig.regularBall } />
                        <PBRegularBallComboComponent config = { BConfig.regularBallCombo } />
                    </div>

                    <div className="w-full flex flex-col p-1 gap-2">
                        <div className="bg-slate-600 rounded-lg h-2/5">PB IFrame - TODO</div>
                        <div className="border-solid border-2 border-b-4 border-black rounded-lg h-1/3">Leader boards - TODO</div>
                        <div className="border-solid border-2 border-b-4 border-black rounded-lg h-1/6">btn jumbotron - TODO</div>
                    </div>
                </div>

            </div>
            
            <PBHomeFooterComponent />
        </div>
    </div>
    
  )
}

export default Home