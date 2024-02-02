export default function Reviewer(props) {
    return (
        <div className="flex flex-col items-start p-5 relative bg-slate-100 border border-solid border-slate-300 rounded-xl">
            <h1 className="text-xl text-slate-900 font-semibold mb-5">{props.name}</h1>
            <p className="text-base text-slate-700">{props.job}</p>
            <p className="text-3xl text-yellow-300">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p className="text-base text-slate-700">{props.review}</p>
            <div className="overflow-hidden w-24 h-24 rounded-full border-10 border-solid border-white absolute z-20 -top-10 -right-2">
                <img src={props.img} alt="avatar" />
            </div>
        </div>
    )
}
