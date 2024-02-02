import { useState } from "react";
import { Link } from "react-router-dom";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon"

function NavBar() {
    let [isClicked, setIsClicked] = useState(false);
    let [remove, setRemove] = useState(false);
    const handle = ()=>{
        setIsClicked((prev)=>!prev);
        setRemove(true);
        setTimeout(() => {
            setRemove(false);
        }, 1000);
    };
    return (
        <div className="flex items-center justify-between px-5 h-20 bg-slate-300">
            <h1 className="text-blue-500 text-3xl font-bold">My Shop</h1>
            <Bars3Icon className="w-16 h-16 cursor-pointer moreThanLarge:hidden small:w-10 small:h-10" onClick={()=>{
                    setRemove(false)
                    setIsClicked(true)                    
                }}/>
            <ul className={`${isClicked? "showSideNav" : ""} ${remove? "removeSideNav" : ""} side-nav h-full w-fit gap-5 smallerThanLarge:gap-0 flex items-center justify-between list-none`}>
                <div className="flex items-center justify-center gap-20 p-5 w-full moreThanLarge:hidden border-b border-solid border-slate-300">
                    <h1 className="text-blue-500 text-2xl font-bold">My Shop</h1>
                    <button className="bg-white w-10 h-10 border border-solid border-red-600 text-slate-700 rounded-lg flex items-center justify-center font-bold text-2xl hover:bg-red-600 hover:text-slate-200 duration-300" onClick={handle}>X</button>
                </div>
                <li className="h-full w-fit flex items-center justify-center px-5 bg-gray-400/0 hover:bg-gray-400/100 duration-300 smallerThanLarge:w-full border-b border-solid border-slate-300">
                    <Link to="/" className="text-xl text-slate-900 font-semibold hover:text-slate-500 duration-300" onClick={handle}>Home</Link>
                </li>
                <li className="h-full w-fit flex items-center justify-center px-5 bg-gray-400/0 hover:bg-gray-400/100 duration-300 smallerThanLarge:w-full border-b border-solid border-slate-300">
                    <Link to="/products" className="text-xl text-slate-900 font-semibold hover:text-slate-500 duration-300" onClick={handle}>Products</Link>
                </li>
                <li className="h-full w-fit flex items-center justify-center px-5 bg-gray-400/0 hover:bg-gray-400/100 duration-300 smallerThanLarge:w-full border-b border-solid border-slate-300">
                    <Link to="/about" className="text-xl text-slate-900 font-semibold hover:text-slate-500 duration-300" onClick={handle}>About Us</Link>
                </li>
                <li className="h-full w-fit flex items-center justify-center px-5 bg-gray-400/0 hover:bg-gray-400/100 duration-300 smallerThanLarge:w-full border-b border-solid border-slate-300">
                    <Link to="/contact" className="text-xl text-slate-900 font-semibold hover:text-slate-500 duration-300" onClick={handle}>Contact Us</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;