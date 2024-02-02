import { Link } from "react-router-dom"
import land from "../assests/landing-image.png"
import ChevronDoubleDown from "@heroicons/react/24/solid/ChevronDoubleDownIcon"
import Gallery from "./Gallery"
import Features from "./Features"
import Testimonials from "./Testimonials"

export default function Home() {
    return (
        <div className="">
            <div className="flex medium:flex-col medium:text-center small:flex-col small:text-center p-10 justify-center gap-20 items-center relative before:absolute before:content-[''] before:w-full before:h-full before:-z-10 before:left-0 before:-top-10 before:-skew-y-6 before:origin-top-left before:bg-slate-100 h-land">
                <div className="w-2/5 flex flex-col items-start gap-10 medium:flex-row medium:w-full small:w-full">
                    <h1 className="text-slate-900 text-4xl font-bold medium:basis-3/5">Welcome To My Shop</h1>
                    <p className="text-lg text-slate-700 medium:basis-2/5">Here Iam gonna show you everthing you need from A to Z. Clothes, Electronics, Jewelaries, ...etc</p>
                </div>
                <div className="w-2/5 animate-land relative small:hidden">
                    <img src={land} alt="landing" className="w-full h-full"/>
                </div>
                <Link to='#gallery' className="w-10 h-10 absolute left-1/2 -translate-x-1/2 bottom-0 animate-up-down text-blue-500 
                hover:text-blue-700 duration-300"><ChevronDoubleDown/></Link>
            </div>
            <Gallery />
            <Features />
            <Testimonials />
        </div>
    )
}
