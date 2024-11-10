function Card({note}) {
    return (
    <div className="hover:bg-slate-600 cursor-pointer card-shadow p-2 w-[31%] max-h-[31%] m-2 rounded-lg">
        <h2 className="font-bold text-xl border-b-2">{note?.title}</h2>
        <div className="pt-2">{note?.body}</div>
    </div>);
}

export default Card;