export default function FeatureCard(props) {
    return (
        <div className="flex flex-col items-center justify-start h-fit gap-10 border border-solid border-slate-300 bg-slate-100 pb-10">
            <div className="relative before:absolute before:content-[''] before:duration-300 before:h-full before:top-0 before:left-0 before:bg-blue-500/50 before:w-0 hover:before:w-full">
                <img src={props.img} alt="features" className="w-full" />
            </div>
            <h1 className="font-bold text-2xl text-slate-900 w-fit border-b-5 border-solid border-slate-600">{props.title}</h1>
            <p className="text-center text-slate-700 text-lg px-10">{props.paragraph}</p>
            <button className="border-3 border-blue-500 rounded-lg border-solid w-fit h-fit px-5 py-2.5 bg-slate-100 text-slate-700 text-xl font-semibold hover:bg-blue-500 hover:text-slate-100 duration-300 cursor-pointer">More</button>
        </div>
    )
}
