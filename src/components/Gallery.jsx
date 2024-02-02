import man from "../assests/man-clothes.jpg";
import woman from "../assests/women-clothes.jpg";
import elec from "../assests/electronics.jpg";
import jewels from "../assests/jewellery.jpg";
import { Link } from "react-router-dom";

export default function Gallery() {
    return (
        <div id="gallery" className="mt-10 extralarge:mx-28 mx-5 small:mx-1">
            <h1 className="w-fit h-12 text-3xl font-bold flex items-center px-5 border-2 bg-slate-200 border-solid border-slate-500 mx-auto mb-10 small:text-2xl">Gallery</h1>
            <div className="grid medium:grid-cols-grid1 small:grid-cols-grid1 grid-cols-grid2 gap-5">
                <div className="border-solid border-15 border-slate-200 w-full h-96 hover:animate-flash overflow-hidden">
                    <Link to="/"><img src={man} alt="men clothes" className="w-full h-full hover:scale-125 hover:rotate-6 duration-300" /></Link>
                </div>
                <div className="border-solid border-15 border-slate-200 w-full h-96 hover:animate-flash overflow-hidden">
                    <Link to="/"><img src={woman} alt="women clothes" className="w-full h-full hover:scale-125 hover:rotate-6 duration-300" /></Link>
                </div>
                <div className="border-solid border-15 border-slate-200 w-full h-96 hover:animate-flash overflow-hidden">
                    <Link to="/"><img src={jewels} alt="jewellery" className="w-full h-full hover:scale-125 hover:rotate-6 duration-300" /></Link>
                </div>
                <div className="border-solid border-15 border-slate-200 w-full h-96 hover:animate-flash overflow-hidden">
                    <Link to="/"><img src={elec} alt="electronics" className="w-full h-full hover:scale-125 hover:rotate-6 duration-300" /></Link>
                </div>

            </div>
        </div>
    )
}
