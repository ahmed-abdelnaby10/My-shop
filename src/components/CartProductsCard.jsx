import { useState } from "react"
import { removeFromCart } from "../rtk/slices/cart-slice"
import { useDispatch } from 'react-redux';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export default function CartProductsCard(props) {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    return (
        <div className="rounded-xl bg-slate-100 shadow-2xl border-solid border-2 border-slate-200 flex items-center justify-between gap-5 
        py-1 pl-1 pr-5 select-none small:flex-col small:items-center small:pr-1 small:gap-2 small:pb-2.5">
            <div className="flex gap-5 items-center small:flex-col">
                <img
                    src={props.image}
                    alt={props.title}
                    width={100}
                    height={200}
                    className="rounded-xl"
                />
                <div className="h-full small:w-fit flex items-center w-1/2 small:grow">
                    <h1 className="text-xl font-medium w-fit">{props.title}</h1>
                </div>
            </div>
            <div className="flex gap-5 small:items-end small:justify-between my-2.5 items-center small:w-full">
                <div className="border-2 border-solid border-slate-200 rounded-lg w-24 h-16 small:w-20 small:h-12 flex justify-between items-center px-2.5 small:ml-2.5">
                    <div className="text-xl font-semibold">{quantity}</div>
                    <div className="flex flex-col h-full w-5">
                        <FaAngleUp className="w-full h-1/2 cursor-pointer" onClick={()=>setQuantity(quantity + 1)}/>
                        <FaAngleDown className="w-full h-1/2 cursor-pointer" onClick={()=>setQuantity(quantity - 1)}/>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-5 small:mr-2.5">
                    <p className="font-bold text-2xl"><span id="price">{props.price * quantity}</span>$</p>
                    <button className="items-center w-fit h-12 rounded-lg bg-red-500 text-white text-lg font-semibold hover:bg-red-700 duration-300 cursor-pointer px-4 small:h-12" onClick={()=>{
                        dispatch(removeFromCart({...props}))
                    }}>Remove</button>
                </div>
            </div>
        </div>
    )
}
