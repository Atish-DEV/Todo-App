import { useEffect } from "react";
import { useState } from "react";
import noteMock from '../../sample-mock/task-mock.json';

function AllTaskView() {
    const [loading,setLoading]=useState(true);
    const [AllTask,setAlltask]=useState(null);
    useEffect(()=>{
        (()=>{
            const {notes}=noteMock;
            setAlltask(notes);
            setLoading(false);
        })()
    },[])
    if(loading){
        return(<div>Loading...</div>)
    }
    return (<div className="flex flex-wrap m-auto justify-center">
        {AllTask?.map((note)=>{
            return(
            <div className="border-2 p-2 w-[31%] max-h-[31%] m-2 rounded-lg">
                <h2 className="font-bold text-xl border-b-2">{note?.title}</h2>
                <div className="pt-2">{note?.body}</div>
            </div>
            )
        })}
    </div>);
}

export default AllTaskView;