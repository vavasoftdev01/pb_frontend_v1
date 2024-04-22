import React, { useEffect, useState } from 'react'
import PbSingleComponent from '../Partials/betting_buttons_layouts/pb_single.component'

function Home() {
    const pbSingle = {
        'title': '파워볼',
        'btn_group_blue': [
            {'id': 1, 'caption': '홀', 'bet_value': '1.95' },
            {'id': 2, 'caption': '언더  (4.5)', 'bet_value': '1.95' }
        ],
        'btn_group_red': [
            {'id': 3, 'caption': '짝', 'bet_value': 1.95 },
            {'id': 4, 'caption': '오버  (4.5)', 'bet_value': '1.95' }
        ]
    }

    const combo1 = {
        'title': '파워볼 콤보',
        'btn_group_blue': [
            {'id': 1, 'caption': '홀 + 언더 (4.5)', 'bet_value': '4.50' },
            {'id': 2, 'caption': '짝 + 언더 (4.5)', 'bet_value': '3.00' }
        ],
        'btn_group_red': [
            {'id': 3, 'caption': '홀 + 오버', 'bet_value': '3.00' },
            {'id': 4, 'caption': '짝 + 언더 - (4.5)', 'bet_value': '4.50' }
        ]
    }

    const powerballNormal = {
        'title': '파워볼 + 일반',
        'btn_group_blue': [
            {'id': 1, 'caption': '파워볼 홀 + 일반볼 홀', 'bet_value': '3.20' },
            {'id': 2, 'caption': '파워볼 홀 + 일반볼 짝', 'bet_value': '3.20' }
        ],
        'btn_group_red': [
            {'id': 3, 'caption': '파워볼 짝 + 일반볼 홀', 'bet_value': '3.20' },
            {'id': 4, 'caption': '파워볼 짝 + 일반볼 짝 (4.5)', 'bet_value': '3.20' }
        ]
    }

    const [timer, setTimer] = useState(100) // Init 1 min..

    


    const [progressColors, setProgressColors] = useState('rgb(22 163 74)')

    const timerStart = () => {
        

        setTimeout(() => {
            setTimer((timer) => timer - 1)

            
        }, 100);

        // times up
        if(timer <= 0) {
            timerStop()
        }
        
    }

    const timerStop = () => {
       setTimer((timer) => 100)
       console.log('timer stop')

    }

    useEffect(() => {

        timerStart()
    })


    

  return (
    <div className="flex justify-center w-full">
        <div className="flex-col w-2/3 mt-2 rounded-lg">
            <div className="flex flex-row text-center font-bold text-white flex-nowrap">
                <div className="bg-red-600 w-1/4 overflow-visible hover:cursor-pointer hover:underline p-4 hover:bg-red-700">
                    <a>
                        도움말
                    </a>
                </div>

                <div className="w-full hover:cursor-pointer hover:underline">
                    <img src="./images/gameplay_top.png" className="object-stretch w-full h-full"></img>
                    <a className="absolute h-10 w-50 inset-x-30 top-8 ">
                        파워볼(1분)
                    </a>
                </div>

                <div className="bg-blue-600 w-1/4 hover:cursor-pointer hover:underline p-4 hover:bg-blue-700">
                    설정
                </div>

            </div>
            <div className="w-full flex flex-col bg-slate-700">
                <div className="bg-slate-800 relative mb-6">
                    <span className="flex absolute" style={{ width: timer+'%', transition: '0.1s', transitionTimingFunction: 'linear', backgroundColor: progressColors }}>&nbsp;</span>
                    <span className="absolute bottom-0 left-0 right-0 top-0 grid place-items-center text-white">배팅하세요 - 00:{timer}</span>
                </div>
            </div>
            <div className="flex flex-row bg-gray-100">
                <div className="w-full flex flex-col gap-3 p-2">
                    <PbSingleComponent config = { pbSingle } />
                    <PbSingleComponent config = { combo1 } />
                    <PbSingleComponent config = { powerballNormal } />
                    <PbSingleComponent config = { combo1 } />
                    <PbSingleComponent config = { powerballNormal } />
                </div>
                <div className="w-full flex flex-col p-1 gap-2">
                    <div className="bg-slate-600 rounded-lg h-2/5">PB IFrame - TODO</div>
                    <div className="border-solid border-2 border-b-4 border-black rounded-lg h-1/3">Leader boards - TODO</div>
                    <div className="border-solid border-2 border-b-4 border-black rounded-lg h-1/6">btn jumbotron - TODO</div>
                </div>
            </div>
            <footer className="flex flex-col p-1 bg-slate-200">
                TODO
                <div className="">
                    파워볼 (1분) ₩1천 - ₩500만
                </div>
                <div className="">
                보유잔액 ₩914,300.00
                </div>
            </footer>
        </div>
    </div>
    
  )
}

export default Home