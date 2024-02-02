import { FaCartShopping } from "react-icons/fa6";
import { useSelector , useDispatch} from "react-redux"
import CartProductsCard from "./CartProductsCard";
import Swal from "sweetalert2"
import { clearCart } from "../rtk/slices/cart-slice";
import { Link } from "react-router-dom";

export default function Cart() {
    const cartProducts = useSelector((state)=> state.cart)
    const dispatch = useDispatch()

    return (
        <>
            <h1 className="w-fit h-12 text-3xl font-bold flex items-center px-5 border-2 bg-slate-200 border-solid border-slate-500 mx-auto my-10 small:text-2xl">Your Cart <span className="w-fit h-fit ml-2.5 text-slate-700"><FaCartShopping/></span></h1>
            <div className={`${cartProducts.length === 0 ? "h-80" : ""} flex flex-col mx-5 small:mx-1 mb-20 small:my-5 gap-10 small:gap-5 extralarge:mx-28`}>
                <div className={`${cartProducts.length !== 0 ? "mt-20 grid xxxlarge:grid-cols-grid2 small:grid-cols-grid1 gap-5 small:gap-2.5" : "h-full"}`}>
                    {
                        cartProducts.length !== 0 ? 
                        (cartProducts.map((product)=> <CartProductsCard key={product.id} {...product}/>))
                        : (
                            <div className="text-3xl flex gap-2 text-slate-700 self-center h-full items-center w-fit mx-auto">
                                <FaCartShopping className="w-10 h-10" />
                                <span>Your Cart is Empty</span>
                            </div>
                        )
                    } 
                </div>
            </div>
            <div className="flex w-fit mx-auto gap-10 mb-10 small:gap-5">
                <button className={`${cartProducts.length > 0 ? "flex" : "hidden"} items-center w-fit h-14 rounded-lg bg-red-500 
                text-white text-lg font-semibold hover:bg-red-700 duration-300 cursor-pointer px-5 small:px-4 small:h-12`} onClick={()=>{
                    Swal.fire({
                        title: "Are you sure to clear your cart?",
                        showCancelButton: true,
                        confirmButtonText: "Sure",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            dispatch(clearCart())
                            Swal.fire("Your cart is cleared successfully!", "", "success");
                        }
                    });
                }}
                >Clear Cart</button>
                <Link to="/cart/checkout" className={`${cartProducts.length > 0 ? "flex" : "hidden"} items-center w-fit h-14 rounded-lg bg-slate-100 text-slate-700 text-lg font-semibold hover:bg-blue-500 duration-300 cursor-pointer px-5 small:px-4 
                small:h-12 border-2 border-solid border-blue-500 hover:text-slate-100`}>Checkout</Link>
            </div>
        </>
    )
}
