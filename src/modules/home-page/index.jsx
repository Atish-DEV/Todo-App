import AddNewNoteButton from "../components/button/AddNewNoteButton";
import AppLayout from "../components/layout";
import AllTaskView from "./all-task-view";

function HomePage() {
  return (
    <AppLayout>
      <AllTaskView/>
      <AddNewNoteButton className="fixed bottom-11 right-11" />
    </AppLayout>
  );
}

export default HomePage;
