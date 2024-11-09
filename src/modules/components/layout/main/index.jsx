import AppHeader from "../header";

function MainPage({children}) {
    return (<div className="text-white w-full flex flex-col max-h-screen">
    <AppHeader/>
    <main className="p-4 mx-1 my-1 rounded-lg bg-secondary grow overflow-y-auto">
        {children}
    </main>
    </div>);
}

export default MainPage;