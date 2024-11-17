import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import noteMock from '../../../../sample-mock/task-mock.json';

function AppHeader() {
    const [showDropDownForSetting,setShowDropDownForSetting]=useState(false);
    const [suggestedNotesArray,setSuggestedNotesArray]=useState([]);
    const {notes}=noteMock;
    const SIZE=5;
    function handleOnSearch(val){
        if(val){
            const tempArray=notes?.filter((note)=>note?.title?.toLowerCase()?.startsWith(val?.toLowerCase()));
            setSuggestedNotesArray([...tempArray]);
        }
        else{
            setSuggestedNotesArray([]);
        }
    }
    return (
    <div className="p-1">
        <div className="bg-secondary rounded-lg p-4">
            <div className="flex justify-between items-center">
                <div className="flex-[0.8]">
                    <input type="text" 
                        className="w-full shadow-lg p-2 rounded-lg text-black outline-none" 
                        placeholder="Search any notes..."
                        onChange={(e)=>{
                            handleOnSearch(e.target.value);
                        }}
                    />
                    {suggestedNotesArray?.length>0 && <div className="relative">
                        <div className="bg-white h-auto overflow-y-auto w-full text-black p-2 absolute z-50 top-2 rounded-lg cursor-pointer">
                            {suggestedNotesArray?.slice(0, SIZE)?.map((note)=><div>{note?.title}</div>)}
                        </div>
                    </div>}
                </div>
                <div className="flex">
                    <div className="m-1">
                        <div 
                            className="w-10 h-10 bg-stone-700 flex justify-center items-center rounded-full cursor-pointer">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>
                    <div className="m-1 relative">
                        <div className="w-10 h-10 bg-stone-700 hover:bg-slate-600 flex justify-center items-center rounded-full cursor-pointer"
                        onClick={()=>{
                            setShowDropDownForSetting(!showDropDownForSetting)
                        }}>
                            <FontAwesomeIcon icon={faGear}/>

                            {showDropDownForSetting && (
                                <div className="w-28 bg-white text-black absolute top-12 right-1 p-1 z-20 rounded-lg flex flex-col">
                                    <div className="hover:bg-slate-500 p-1 hover:text-white">List View</div>
                                    <div className="hover:bg-slate-500 p-1 hover:text-white">Light Mode</div>
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    );
}

export default AppHeader;