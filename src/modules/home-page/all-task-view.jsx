import { useEffect } from "react";
import { useState } from "react";
import noteMock from '../../sample-mock/task-mock.json';
import CardSkeleton from "../components/skeleton/cards-skeleton";
import Card from "../components/card";
import { useAutoAnimate } from '@formkit/auto-animate/react'

function AllTaskView() {
    const [animationParent] = useAutoAnimate()
    const [loading,setLoading]=useState(true);
    const [AllTask,setAlltask]=useState(null);
    useEffect(()=>{
        (()=>{
            const interval=setTimeout(()=>{
                const {notes}=noteMock;
                setAlltask(notes);
                setLoading(false);
            },[3000])
            return(()=>{
                clearInterval(interval)
            })
        })()
    },[])
    return (
    <div className="flex flex-wrap m-auto justify-center" ref={animationParent}>
        {loading ?
            Array(12)?.
            fill(0)?.
            map((_,i)=><CardSkeleton key={i}/>)
        :AllTask?.map((task,i)=><Card note={task} key={i}/>)}
    </div>);
}

export default AllTaskView;