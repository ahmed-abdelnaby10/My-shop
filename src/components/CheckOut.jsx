import { FaRegFileLines } from "react-icons/fa6";
import visa from "../assests/visa.jpg"
import fawry from "../assests/fawry.png"
import paymob from "../assests/paymob.jpeg"
import masterCard from "../assests/masterCard.png"

export default function CheckOut() {
    return (
        <>
            <h1 className="w-fit h-12 text-3xl font-bold flex items-center px-5 border-2 bg-slate-200 border-solid border-slate-500 
            mx-auto my-10 small:text-2xl">Checkout</h1>
            <div className="mx-5 small:mx-1 extralarge:mx-28 flex items-start justify-between extralarge:gap-10 gap-5 smallerThanLarge:flex-col smallerThanLarge:items-center smallerThanLarge:justify-start my-20 smallerThanLarge:my-10">
                <div className="flex flex-col items-start justify-between gap-5 p-5 h-fit smallerThanLarge:w-full rounded-lg border-2 border-solid border-slate-200 shadow-xl bg-slate-100 w-2/5">
                    <h1 className="text-xl font-semibold text-slate-900 border-b border-solid border-blue-300 pb-5 flex items-center 
                    justify-between w-full">Your Check
                    <FaRegFileLines className="text-3xl text-blue-500"/></h1>
                    <p className="text-lg font-semibold text-slate-900 border-b border-solid border-slate-300 pb-5 flex items-center 
                    justify-between w-full">Subtotal: <span className="text-slate-700 font-normal">400$</span></p>
                    <p className="text-lg font-semibold text-slate-900 border-b border-solid border-slate-300 pb-5 flex items-center 
                    justify-between w-full">Shipping: <span className="text-slate-700 font-normal">20$</span></p>
                    <p className="text-lg font-semibold text-slate-900 flex items-center justify-between w-full">Total: <span className="text-slate-700 font-normal">420$</span></p>
                </div>
                <div className="flex flex-col items-start justify-between gap-5 p-5 h-fit smallerThanLarge:w-full rounded-lg border-2 border-solid border-slate-200 shadow-xl bg-slate-100 w-3/5">
                    <h1 className="text-xl font-semibold text-slate-900">Payment Process</h1>
                    <p className="text-slate-700 text-lg">Apply Copon to receive a 25% discount</p>
                    <form className="flex flex-col items-start w-full gap-5" onSubmit={(e)=>e.preventDefault()}>
                        <div className="flex items-center justify-start gap-1">
                            <div className="relative w-fit h-fit flex">
                                <input id="visa" type="radio" name="visa" className="appearance-none absolute top-0 left-0 w-full h-full border-3 border-solid border-slate-200 rounded-lg checked:border-blue-500" />
                                <label htmlFor="visa" className="p-1"><img src={visa} alt="payment" className="w-14 h-10 rounded-lg" /></label>
                            </div>
                            <div className="relative w-fit h-fit flex">
                                <input id="masterCard" type="radio" name="masterCard" className="appearance-none absolute top-0 left-0 w-full h-full border-3 border-solid border-slate-200 rounded-lg checked:border-blue-500" />
                                <label htmlFor="masterCard" className="p-1"><img src={masterCard} alt="payment" className="w-14 h-10 rounded-lg" /></label>
                            </div>
                            <div className="relative w-fit h-fit flex">
                                <input id="paymob" type="radio" name="paymob" className="appearance-none absolute top-0 left-0 w-full h-full border-3 border-solid border-slate-200 rounded-lg checked:border-blue-500" />
                                <label htmlFor="paymob" className="p-1"><img src={paymob} alt="payment" className="w-14 h-10 rounded-lg" /></label>
                            </div>
                            <div className="relative w-fit h-fit flex">
                                <input id="fawry" type="radio" name="fawry" className="appearance-none absolute top-0 left-0 w-full h-full border-3 border-solid border-slate-200 rounded-lg checked:border-blue-500" />
                                <label htmlFor="fawry" className="p-1"><img src={fawry} alt="payment" className="w-14 h-10 rounded-lg" /></label>
                            </div>
                        </div>
                        <p className="text-lg font-semibold text-slate-500">* required</p>
                        <div className="border-2 border-solid border-slate-300 w-full">
                            <input id="number" name="number" type="text" placeholder="* Card Number" className=" placeholder:text-slate-500 bg-transparent w-full focus:outline-none px-2.5 py-2.5" maxLength={19}/>
                            <input id="name" name="name" type="text" placeholder="Name on Card" className=" placeholder:text-slate-500 bg-transparent w-full focus:outline-none px-2.5 py-2.5 border-y-2 border-solid border-slate-300" autoComplete="hhh"/>
                            <div className="flex justify-between">
                                <input id="exp-date" name="exp-date" type="text" placeholder="* mm/yy" className=" placeholder:text-slate-500 bg-transparent w-1/5 small:w-1/2 focus:outline-none px-2.5 p-2.5 border-r-2 border-solid border-slate-300" maxLength={5} />
                                <input id="cvv" name="cvv" type="text" placeholder="* CVV" className=" placeholder:text-slate-500 bg-transparent w-20 small:w-1/2 small:border-none focus:outline-none px-2.5 p-2.5 border-l-2 border-solid border-slate-300" maxLength={3}/>
                            </div>
                            <div className="border-t-2 border-solid border-slate-300 w-full">
                                <input id="copon" name="copon" type="text" placeholder="Copon" className=" placeholder:text-slate-500 bg-transparent w-1/5 focus:outline-none px-2.5 p-2.5 border-r-2 border-solid border-slate-300 small:w-full small:border-none" maxLength={5} />
                            </div>
                        </div>
                        <input id="submit" name="submit" type="submit" value="Deposite" className="items-center w-fit h-14 rounded-lg bg-slate-100 text-slate-700 text-lg font-semibold hover:bg-blue-500 duration-300 cursor-pointer px-5 small:px-4 
                        small:h-12 border-2 border-solid border-blue-500 hover:text-slate-100" />
                    </form>
                </div>
            </div>
        </>
    )
}
