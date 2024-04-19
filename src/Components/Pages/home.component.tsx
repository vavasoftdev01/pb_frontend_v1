import React from 'react'
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

  return (
    <div className="flex justify-center w-full">
        <div className="flex-col w-2/3 mt-2 rounded-lg">
            <div className="flex flex-row gap-1 text-center font-bold text-white">
                <div className="bg-red-600 w-full hover:cursor-pointer hover:underline p-4 hover:bg-red-700">
                    <a>
                        도움말
                    </a>
                </div>
                <div className="bg-violet-600 w-full hover:cursor-pointer hover:underline p-4 hover:bg-violet-700">
                    <a>
                        파워볼(1분)
                    </a>
                </div>
                <div className="bg-blue-600 w-full hover:cursor-pointer hover:underline p-4 hover:bg-blue-700">
                    설정
                </div>
            </div>
            <div className="bg-amber-500">
                <h1>Timer - TODO </h1>
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