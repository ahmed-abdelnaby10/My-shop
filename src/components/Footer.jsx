import React from 'react'
import { Link } from 'react-router-dom'
import {FaTwitter} from "react-icons/fa6"
import {FaFacebookF} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa6"
import {FaTiktok} from "react-icons/fa6"
export default function Footer() {
    return (
        <div className="flex items-center flex-col py-5 bg-slate-300 small:gap-2.5">
            <div className="flex items-center justify-between w-full extralarge:px-28 px-10 small:px-1 small:flex-col small:gap-2.5">
                <Link to="/" className="text-blue-500 text-3xl font-bold">My Shop</Link>
                <div className='flex items-center h-full w-fit gap-5'>
                    <Link>
                        <FaTwitter className=' text-blue-400'/>
                    </Link>
                    <Link>
                        <FaFacebookF className="text-blue-600"/>
                    </Link>
                    <Link>
                        <FaInstagram className='text-rose-500'/>
                    </Link>
                    <Link>
                        <FaTiktok className='text-slate-800'/>
                    </Link>
                </div>
            </div>
            <p className="text-slate-700 text-base text-center">Copyright &#169; 2024 My Shop by Ahmed Abdelnaby</p>
        </div>
    )
}
