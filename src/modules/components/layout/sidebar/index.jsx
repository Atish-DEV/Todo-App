import SideCardOptions from "./options";

function SideBar() {
    return (
        <div className="w-1/5 h-screen bg-black text-white p-1">
            <div className="bg-secondary h-full rounded-lg">
                <div className="flex flex-col p-3 h-full">
                    <div className="text-center text-2xl font-logo">MY KEEP</div>
                        <SideCardOptions/>
                </div>
            </div>
        </div>
    );
}

export default SideBar;