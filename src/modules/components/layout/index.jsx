import MainPage from "./main";
import SideBar from "./sidebar";

function AppLayout({children}) {
    return (
    <div className="flex bg-black">
        <SideBar/>
        <MainPage>
            {children}
        </MainPage>
    </div>);
}

export default AppLayout;