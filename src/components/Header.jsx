import React from 'react';
import { useState } from "react";
// import { useNavigate } from 'react-router-dom';

import MobileMenu from "./MobileMenu";

import Logo from "../assets/images/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {

    // const navigate = useNavigate();

    const [showmenu, setShowMenu] = useState(false);
    const handleMobileMenu = () => {setShowMenu(true);}
    const closeMenu = () => {setShowMenu(false);}

    // const toHeadline = () => {navigate("./Hero.jsx")}; 
    // const toProductMedia = () => {navigate("./ProductMedia.jsx")};
    // const toproductPrice = () => {navigate("./ProductPrice.jsx")};
    // const toWhySection = () => {navigate("./WhySection.jsx")};
    // const toCompanySection = () => {navigate("./CompanySection.jsx")};
    // const toFooter = () => {navigate("./Footer.jsx")};

    return(
        <div className="xl:py-6 px-6 xl:px-24 flex flex-row justify-between items-center">
            <div className="w-1/2 xl:w-1/4">
                <a href="./Hero.jsx">
                    <img src={Logo} alt="logo-isibangunan" className="w-35"/>
                </a>
            </div>
            
            <div className="hidden xl:flex w-1/2 flex-row justify-between items-center px-16 4xl:px-32">
                <button 
                    onClick={() => document.getElementById('Headline').scrollIntoView({behavior: 'smooth'})} 
                    className='text-primary text-lg font-normal hover:bg-primary/8 hover:px-4 hover:py-1 hover:rounded-md focus:animate-glow cursor-pointer'>
                            Headline
                </button>
                <button 
                    onClick={() => document.getElementById('ProductMedia').scrollIntoView({behavior: 'smooth'})} 
                    className='text-primary text-lg font-normal hover:bg-primary/8 hover:px-4 hover:py-1 hover:rounded-md focus:animate-glow cursor-pointer'>
                            Produk
                </button>
                <button 
                    onClick={() => document.getElementById('ProductPrice').scrollIntoView({behavior: 'smooth'})} 
                    className='text-primary text-lg font-normal hover:bg-primary/8 hover:px-4 hover:py-1 hover:rounded-md focus:animate-glow cursor-pointer'>
                            Harga
                </button>
                <button 
                    onClick={() => document.getElementById('WhySection').scrollIntoView({behavior: 'smooth'})} 
                    className='text-primary text-lg font-normal hover:bg-primary/8 hover:px-4 hover:py-1 hover:rounded-md focus:animate-glow cursor-pointer'>
                            Keunggulan
                </button>
                <button 
                    onClick={() => document.getElementById('CompanySection').scrollIntoView({behavior: 'smooth'})} 
                    className='text-primary text-lg font-normal hover:bg-primary/8 hover:px-4 hover:py-1 hover:rounded-md focus:animate-glow cursor-pointer'>
                            Klien
                </button>
                <button 
                    onClick={() => document.getElementById('Footer').scrollIntoView({behavior: 'smooth'})} 
                    className='text-primary text-lg font-normal hover:bg-primary/8 hover:px-4 hover:py-1 hover:rounded-md focus:animate-glow cursor-pointer'>
                            Kontak
                </button>
            </div>

            <div className="hidden w-1/4 xl:flex justify-end items-center">
                <button>
                    <a href="https://wa.me/62811158309?text=Halo,%20Saya%20tertarik%20dengan%20produk%20Food%20Tray" className='bg-white border-1 rounded-full px-6 py-2 border-primary text-primary font-bold text-lg hover:bg-primary hover:text-white focus:shadow-2xl'>
                        Hubungi Kami
                    </a>
                </button>
            </div>


            <div className="py-6 flex flex-row justify-between items-center xl:hidden">
                <button onClick={handleMobileMenu} className="">
                    <HiMenuAlt3 className="size-10"/>
                </button>             
            </div>

            {showmenu && 
                (
                    <div className="absolute top-0 w-full">
                        <MobileMenu closeMenu={closeMenu}/>
                    </div>           
                )
            }   
        </div>
    )
}

export default Header;