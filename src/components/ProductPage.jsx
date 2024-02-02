import { addToCart } from "../rtk/slices/cart-slice"; 
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"

export default function ProductPage() {
    const { productID } = useParams()
    const productsData = useSelector((state)=> state.products)
    const dispatch = useDispatch()
    const product = productsData.filter((prod)=> prod.id === +productID)[0]
    return (
        <>
            <h1 className="text-slate-900 text-2xl w-1/2 mx-auto mt-10 font-bold">{product.title}</h1>
            <div className="rounded-lg bg-slate-100 py-2.5 px-10 large:px-1 meduim:px-1 small:px-2.5 flex small:flex-col gap-5 justify-between items-center border border-solid border-slate-300 shadow-3xl mx-10 smallerThanLarge:mx-1 my-10 basis-2/5">
                <div className="w-fit h-fit rounded-xl shadow-3xl">
                    <img
                        src={product.image}
                        alt={product.title}
                        width={100}
                        height={200}
                        style={{
                            height: "400px",
                            width: "350px"
                        }}
                        className="rounded-xl"
                    />
                </div>
                <div className="flex flex-col items-start justify-start gap-5 smallerThanLarge:gap-2.5 basis-3/5">
                    <p className="text-slate-700"><span className="text-xl font-semibold text-slate-900">Category</span>: {`${product.category}`}</p>
                    <p className="text-slate-700"><span className="text-xl font-semibold text-slate-900">Description</span>: {product.description}</p>
                    <p className="text-slate-700 font-semibold"><span className="text-xl font-semibold text-slate-900">Quantity</span>: {`${product.rating.count}`}</p>
                    <p className="text-slate-700 font-semibold flex items-center justify-start"><span className="text-xl font-semibold text-slate-900">Rate</span>: {`${product.rating.rate}`}
                    <span className="text-2xl ml-2.5 text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</span></p>
                    <p className="text-slate-700 font-semibold"><span className="text-xl font-semibold text-slate-900">Price</span>: {`${product.price}$`}</p>
                    <div className="flex items-center gap-5">
                        <button className="w-fit h-fit px-3 py-1 bg-slate-100 text-slate-700 text-lg font-semibold rounded-lg hover:bg-blue-500 hover:text-slate-200 border-2 border-solid border-blue-500 duration-300 small:self-center" onClick={()=>{
                            dispatch(addToCart(product))
                        }}>Add to Cart</button>
                        <button className="w-fit h-fit px-3 py-1 bg-slate-100 text-slate-700 text-lg font-semibold rounded-lg hover:bg-blue-500  hover:text-slate-200 border-2 border-solid border-blue-500 duration-300 small:self-center">Buy Now</button>
                    </div>    
                </div>
            </div>
        </>
    )
}
