import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtk/slices/products-slice';
import { addToCart } from '../rtk/slices/cart-slice';
import { Link } from 'react-router-dom';
import {FaCartShopping, FaFilter} from "react-icons/fa6";

function Products() {
    const productsData = Array.from(useSelector((state)=> state.products))
    const cartProducts = useSelector((state)=> state.cart)
    const dispatch = useDispatch()
    const [filter, setFilter] = useState(false)
    const [category, setCategory] = useState("")
    const [products, setProducts] = useState(productsData)
    const showFilter = () => {
        setFilter(prev=> !prev)
    }
    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])
    const cates = Array.from(new Set(Array.from(productsData).map((product)=>{
        return product.category
    })))
    return (
        <>
            <h1 className="w-fit h-12 text-3xl font-bold flex items-center px-5 border-2 bg-slate-200 border-solid border-slate-500 
            mx-auto my-10 small:text-2xl">Our Products</h1>
            <div className='mb-10 relative flex items-center justify-between extralarge:mx-28 mx-5 small:mx-1'>
                <FaFilter className='text-4xl text-blue-500 cursor-pointer hover:text-blue-700 duration-300' onClick={showFilter}/>
                <Link to="/products/cart" className='relative w-fit h-fit'>
                    <FaCartShopping className='text-5xl text-blue-500 cursor-pointer hover:text-blue-700 duration-300'/>
                    <span className='absolute -top-6 left-3 -z-10 w-8 h-8 rounded-full bg-rose-500 text-white text-xl font-semibold flex items-center justify-center'>{cartProducts.length}</span>
                </Link>
                <ul className={`${filter? "flex" : "hidden"} absolute flex-col list-none items-start h-fit gap-5 w-fit px-5 pt-5 top-10 rounded-lg left-0 bg-slate-200 z-10`}>
                    <li className='text-lg text-slate-600 w-full pb-5 cursor-pointer hover:text-slate-900 
                    duration-300 font-semibold' onClick={()=>{
                        setProducts(productsData)
                    }}>All</li>
                    {
                        cates.map((cate)=>{
                            return (
                                <li key={cate} className='text-lg text-slate-600 w-full pb-5 cursor-pointer hover:text-slate-900 
                                duration-300 font-semibold' onClick={()=>{
                                    // eslint-disable-next-line array-callback-return
                                    const filteredProducts = productsData.filter((product)=>{
                                        if (product.category === cate) {
                                            return product
                                        }
                                    })
                                    setProducts(filteredProducts)
                                    setCategory(cate)
                                }}>{cate}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='grid grid-cols-grid4 large:grid-cols-grid3 medium:grid-cols-grid2 small:grid-cols-grid1 gap-5 small:gap-2.5 extralarge:mx-28 mx-5 small:mx-1 mb-10'>
                {
                    category === "" ?
                    productsData.map((product)=>{
                        return(
                            <div key={product.id} className='border border-solid border-slate-300 pt-5 px-5 rounded-lg flex flex-col items-center justify-between gap-2.5'>
                                <Link to={`/products/${product.id}`}><img style={{ height: '300px' }} alt='product' src={product.image} /></Link>
                                <h1 className='text-lg font-semibold text-slate-900 px-5 text-center'>{product.title.slice(0, 25)}...</h1>
                                <p className='text-lg text-slate-700'>{product.price}$</p>
                                <button className='	justify-self: end border-2 border-solid border-blue-500 text-slate-700 text-xl 
                                font-semibold rounded-lg w-fit h-fit px-5 py-2.5 hover:bg-blue-500 duration-300 mb-5' 
                                onClick={()=>{dispatch(addToCart(product))}}>Add To Cart
                                </button>
                            </div>
                        )
                    })
                    : products.map((product)=>{
                        return(
                            <div key={product.id} className='border border-solid border-slate-300 pt-5 px-5 rounded-lg flex flex-col items-center justify-between gap-2.5'>
                                <Link to={`/products/${product.id}`}><img style={{ height: '300px' }} alt='product' src={product.image} /></Link>
                                <h1 className='text-lg font-semibold text-slate-900 px-5 text-center'>{product.title.slice(0, 25)}...</h1>
                                <p className='text-lg text-slate-700'>{product.price}$</p>
                                <button className='	justify-self: end border-2 border-solid border-blue-500 text-slate-700 text-xl 
                                font-semibold rounded-lg w-fit h-fit px-5 py-2.5 hover:bg-blue-500 duration-300 mb-5' 
                                onClick={()=>{dispatch(addToCart(product))}}>Add To Cart
                                </button>
                            </div>
                        )
                    }) 
                }
            </div>
        </>
    );
}

export default Products;