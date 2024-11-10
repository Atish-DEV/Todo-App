function CardSkeleton() {
    return ( 
    <div className="animate-pulse p-2 card-shadow w-[31%] max-h-[31%] m-2 rounded-lg">
        <h2 className="font-bold text-xl border-b-2 w-full h-8">
            <div className="w-full h-6 bg-slate-600 rounded-lg"></div>
        </h2>
        <div className="pt-2">
            <div className="bg-slate-600 w-full h-9 mt-1 rounded-lg"></div>
        </div>
    </div>);
}

export default CardSkeleton;