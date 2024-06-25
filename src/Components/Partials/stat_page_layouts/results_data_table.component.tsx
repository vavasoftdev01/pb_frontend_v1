import React, { useEffect, useRef, useState, useMemo } from "react";
import { io } from 'socket.io-client';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function ResultsDataTableComponent() {
    
    
    const limit = 10
    const results = useRef([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [params, setParams] = useState({ offset: 1, limit: 10 });
    
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        
        const websocket = socketEmitter();
        let skip = (limit * page)-limit;
        setParams({ offset: skip, limit: limit })
        websocket.emit('getPaginatedResults', params, (response) => {
            setPage(value);
            results.current = response.results; 
        });
    };

    const socketEmitter = () => {
        const socket = io();
        const results_socket = io(`${import.meta.env.VITE_SOCKET_IO_URL}`);
        return results_socket.connect();
    }

    useEffect(() => {
        const websocket = socketEmitter();
        websocket.emit('getPaginatedResults', params, (response) => {
            results.current = response.results;
            setTotal(response.total_results);
        });

        return (() => {
            websocket.disconnect();
        })

    }, [total, results.current]);

    return(
        <>
            <div className="border border-b-amber-700 flex flex-col w-auto">
                <div className="table-main text-center border border-slate-500 border-collapse mx-2 rounded-md flex flex-col">
                    {/* Headers */}
                    <div className="flex flex-row w-full">
                        <div className="w-[20%] border-r border-slate-500 flex justify-center items-center bg-[#F4F0F0]">
                            <span className="align-middle text-[0.8rem] text-gray-400">회차</span>
                        </div>

                        <div className="w-[30%] border-r border-slate-500 flex flex-col text-[0.6rem] content-center">
                            <Typography className="text-gray-400 p-1 bg-[#F4F0F0]">파워볼</Typography>
                            <div className="pb-header flex flex-row w-full">
                                <div className="border-t border-b border-slate-500 w-full p-2 font-semibold text-gray-400">결과</div>
                                <div className="border-t border-b border-l border-slate-500 w-full p-2 font-semibold text-gray-400">구간</div>
                                <div className="border-t border-b border-l border-slate-500 w-full p-2 font-semibold text-gray-400">홀/짝</div>
                                <div className="border-t border-b border-l border-slate-500 w-full p-2 font-semibold text-gray-400">언더/오버</div>
                            </div>
                        </div>

                        <div className="w-[50%]">
                            <Typography className="text-gray-400 p-1 bg-[#F4F0F0]">일반볼</Typography>
                            <div className="pb-header flex flex-row w-full">
                                <div className="border-t border-b  border-slate-500 w-[60%] p-2 text-[0.6rem] content-center">결과</div>
                                <div className="border-t border-b border-l border-slate-500 w-[20%] p-2 text-[0.6rem] content-center">합</div>
                                <div className="border-t border-b border-l border-slate-500 w-[20%] p-2 text-[0.6rem] content-center">구간</div>
                                <div className="border-t border-b border-l border-slate-500 w-[20%] p-2 text-[0.6rem] content-center">범위</div>
                                <div className="border-t border-b border-l border-slate-500 w-[20%] p-2 text-[0.6rem] content-center">홀/짝</div>
                                <div className="border-t border-b border-l border-slate-500 w-[20%] p-2 text-[0.6rem] content-center">언더/오버</div>
                            </div>
                        </div>
                    </div>
                    {/* Body */}
                    {results.current.map((row, index) => (
                        <div className="flex flex-row w-full" key={row['id']}>
                            <div className="w-[20%] border-t border-r border-slate-500 flex flex-col justify-center items-center ">
                                <span className="align-middle font-bold px-2 -pt-2 text-[13px] content-center">
                                    { row['round'] }
                                </span>
                                <span className="align-middle font-bold px-2 text-[13px] -pt-1 content-center">
                                    ({ row['idx'] })
                                </span>
                                
                            </div>

                            <div className="w-[30%] flex flex-col">
                                
                                <div className="pb-header flex flex-row w-full h-full">
                                    <div className="border-b border-r border-slate-500 w-full p-2 text-[0.7rem] font-semibold content-center">{ row['pb'] }</div>
                                    <div className="border-b border-r border-slate-500 w-full p-2 text-[0.7rem] font-semibold content-center">
                                        <div className="border border-black text-black rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto">
                                            { row['pb_section'] }
                                        </div>    
                                    </div>
                                    <div className="border-b border-r border-slate-500 w-full p-2 text-[0.7rem] font-semibold content-center">
                                        <div className={"text-white rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto "+(row['pb_odd'] == 'E' ? ' bg-red-700 ': ' bg-blue-700') }>
                                            { (row['pb_odd'] == 'E') ? '짝': '홀' }
                                        </div>
                                    </div>
                                    <div className={"border-b border-r border-slate-500 w-full p-2 text-[0.6rem] font-semibold content-center"}>
                                        <div className={" rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto border "+(row['is_pb_under'] == 'over' ? ' text-red-700 border-red-700 ': ' text-blue-700 border-blue-700 ') }>
                                            { (row['is_pb_under'] == 'over') ? '오버': '언더' }
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="w-[50%] ">
                            
                                <div className="pb-header flex flex-row w-full h-full">
                                    <div className="border-b border-r border-slate-500 w-[60%] p-2 font-semibold text-[0.7rem] content-center">
                                        { row['num1'] } { row['num2'] } { row['num3'] } { row['num4'] } { row['num5'] }
                                    </div>
                                    <div className="border-b border-r border-slate-500 w-[20%] p-2 font-semibold text-[0.7rem] content-center text-black">
                                        <div className={" rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto border border-black"}>
                                            { row['num_sum'] }
                                        </div>
                                    </div>
                                    <div className="border-b border-r border-slate-500 w-[20%] p-2 font-semibold text-[0.7rem] content-center">
                                        <div className={" rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto border border-black"}>
                                            { row['normal_ball_section'] }
                                        </div>
                                    </div>
                                    <div className="border-b border-r border-slate-500 w-[20%] p-2 font-semibold text-[0.7rem] content-center">

                                        { row['num_sum_sec'] == 'S' && <div className={" rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto border border-green-700 text-green-700"}>
                                            소
                                        </div> }

                                        { row['num_sum_sec'] == 'M' && <div className={" rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto border border-blue-700 text-blue-700"}>
                                            중
                                        </div> }

                                        { row['num_sum_sec'] == 'L' && <div className={" rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto border border-red-700 text-red-700"}>
                                            대
                                        </div> }
                                        
                                    </div>
                                    <div className="border-b border-r border-slate-500 w-[20%] p-2 font-semibold text-[0.7rem] content-center">
                                        <div className={"text-white rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto "+(row['num_sum_odd'] == 'E' ? ' bg-red-700 ': ' bg-blue-700') }>
                                            { (row['num_sum_odd'] == 'E') ? '짝': '홀' }
                                        </div>
                                    </div>
                                    <div className="border-b  border-slate-500 w-[20%] p-2 font-semibold text-[0.6rem] content-center">
                                        <div className={"rounded-full -p-1 w-7 h-7 flex items-center justify-center mx-auto border "+(row['is_num_sum_under'] == 'over' ? ' text-red-700 border-red-700 ': ' text-blue-700 border-blue-700 ') }>
                                            { (row['is_num_sum_under'] == 'over') ? '오버': '언더' }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                
                <div className="mx-auto mt-2">
                    <Stack spacing={2}>
                        {/* <Typography>Page: {page}</Typography> */}
                        <Pagination count={total} page={page} onChange={handleChange} />
                    </Stack>
                </div>
                
            </div>
        </>
    );
}

export default ResultsDataTableComponent;