function AppHeader() {
    return (
    <div className="p-1">
        <div className="bg-secondary rounded-lg p-4">
            <div className="flex justify-between items-center">
                <div>
                    Search Option
                </div>
                <div className="flex">
                    <div className="m-1">
                        Account info
                    </div>
                    <div className="m-1">
                        Theme Change
                    </div>
                </div>
            </div>
        </div>
    </div> 
    );
}

export default AppHeader;