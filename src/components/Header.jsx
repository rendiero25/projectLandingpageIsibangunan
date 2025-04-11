import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import MobileMenu from "./MobileMenu";

import Logo from "../assets/images/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
    const navigate = useNavigate();

    const [showmenu, setShowMenu] = useState(false);
    const handleMobileMenu = () => {setShowMenu(true);}
    const closeMenu = () => {setShowMenu(false);}

    const toHeadline = () => {navigate("./Hero.jsx")}; 
    const toProductMedia = () => {navigate("./ProductMedia.jsx")};
    const toproductPrice = () => {navigate("./ProductPrice.jsx")};
    const toWhySection = () => {navigate("./WhySection.jsx")};
    const toCompanySection = () => {navigate("./CompanySection.jsx")};
    const toFooter = () => {navigate("./Footer.jsx")};

    return(
        <div className="py-6 px-6 xl:px-24 flex flex-row justify-between items-center">
            <div className="w-1/2 xl:w-1/4">
                <img src={Logo} alt="logo-isibangunan" className="w-35"/>
            </div>
            
            <div className="hidden xl:flex w-1/2 flex-row justify-between items-center px-16">
                <button 
                    onClick={toHeadline} 
                    className='text-primary text-lg font-normal hover:bg-primary/8 hover:px-4 hover:py-1 hover:rounded-md focus:animate-glow'>
                            Headline
                </button>
                <button 
                    onClick={toProductMedia} 
                    className='text-primary text-lg font-normal hover:bg-primary/8 hover:px-4 hover:py-1 hover:rounded-md focus:animate-glow'>
                            Produk
                </button>
                <button 
                    onClick={toproductPrice} 
                    className='text-primary text-lg font-normal hover:bg-primary/8 hover:px-4 hover:py-1 hover:rounded-md focus:animate-glow'>
                            Harga
                </button>
                <button 
                    onClick={toWhySection} 
                    className='text-primary text-lg font-normal hover:bg-primary/8 hover:px-4 hover:py-1 hover:rounded-md focus:animate-glow'>
                            Keunggulan
                </button>
                <button 
                    onClick={toCompanySection} 
                    className='text-primary text-lg font-normal hover:bg-primary/8 hover:px-4 hover:py-1 hover:rounded-md focus:animate-glow'>
                            Klien
                </button>
                <button 
                    onClick={toFooter} 
                    className='text-primary text-lg font-normal hover:bg-primary/8 hover:px-4 hover:py-1 hover:rounded-md focus:animate-glow'>
                            Footer
                </button>
            </div>

            <div className="w-1/4 flex justify-end items-center">
                <button>
                    <a href="" className='bg-white border-1 rounded-full px-6 py-2 border-primary text-primary font-bold text-lg '>
                        Hubungi Kami
                    </a>
                </button>
            </div>


            <div className="py-6 px-6 flex flex-row justify-between items-center xl:hidden">
                
                <button onClick={handleMobileMenu} className="">
                    <HiMenuAlt3 className="size-10"/>
                </button> 

                {showmenu && 
                    (
                        <div className="absolute top-0 w-full">
                            <MobileMenu closeMenu={closeMenu}/>
                        </div>           
                    )
                }               
            </div>
        </div>
    )
}

export default Header;