import AppHeader from "../header";

function MainPage({children}) {
    return (<div className="text-white w-full">
    <AppHeader/>
    <div className="p-4 mx-1 rounded-lg bg-secondary">
        {children}
    </div>
    </div>);
}

export default MainPage;