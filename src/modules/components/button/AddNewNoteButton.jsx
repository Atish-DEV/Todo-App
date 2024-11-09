function AddNewNoteButton({className}) {
    return (<>
    <button className={`border-2 text-black font-medium  p-3 rounded-lg bg-button_add_new ${className ?? ""}`}>
        Add New Task
    </button>
    </>);
}

export default AddNewNoteButton;