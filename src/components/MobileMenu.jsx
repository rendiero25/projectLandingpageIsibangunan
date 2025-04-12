import React from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from "../assets/images/logo.png";

import { IoMdCloseCircle } from "react-icons/io";

const MobileMenu = ({closeMenu}) => {

    const navigate = useNavigate();

    const toHeadline = () => {navigate("./Hero.jsx")}; 
    const toProductMedia = () => {navigate("./ProductMedia.jsx")};
    const toproductPrice = () => {navigate("./ProductPrice.jsx")};
    const toWhySection = () => {navigate("./WhySection.jsx")};
    const toCompanySection = () => {navigate("./CompanySection.jsx")};
    const toFooter = () => {navigate("./Footer.jsx")};

    return(
        <div className="bg-white h-auto w-full px-10 pt-10 pb-20 shadow-2xl">
            <div className="flex flex-col justify-between gap-10 items-center">
                <button onClick={closeMenu} className="self-end">
                    <IoMdCloseCircle className="size-10"/>
                </button>

                <div className="w-1/2 xl:w-1/4 self-start">
                    <img src={Logo} alt="logo-isibangunan" className="w-35"/>
                </div>

                <div className='flex flex-col items-start self-start gap-4'>
                    <button 
                        onClick={toHeadline} 
                        className='text-primary text-5xl font-bold hover:bg-primary/8 hover:px-4 hover:py-1 hover:rounded-md focus:animate-glow'>
                                Headline
                    </button>
                    <button 
                        onClick={toProductMedia} 
                        className='text-primary text-5xl font-bold hover:bg-primary/8 hover:px-4 hover:py-1 hover:rounded-md focus:animate-glow'>
                                Produk
                    </button>
                    <button 
                        onClick={toproductPrice} 
                        className='text-primary text-5xl font-bold hover:bg-primary/8 hover:px-4 hover:py-1 hover:rounded-md focus:animate-glow'>
                                Harga
                    </button>
                    <button 
                        onClick={toWhySection} 
                        className='text-primary text-5xl font-bold hover:bg-primary/8 hover:px-4 hover:py-1 hover:rounded-md focus:animate-glow'>
                                Keunggulan
                    </button>
                    <button 
                        onClick={toCompanySection} 
                        className='text-primary text-5xl font-bold hover:bg-primary/8 hover:px-4 hover:py-1 hover:rounded-md focus:animate-glow'>
                                Klien
                    </button>
                    <button 
                        onClick={toFooter} 
                        className='text-primary text-5xl font-bold hover:bg-primary/8 hover:px-4 hover:py-1 hover:rounded-md focus:animate-glow'>
                                Footer
                    </button>
                </div>

                <div className="self-start items-center">
                    <button>
                        <a 
                            href="https://wa.me/62811158309?text=Halo,%20Saya%20tertarik%20dengan%20produk%20Food%20Tray" 
                            className='bg-white border-1 rounded-full px-12 py-4 border-primary text-primary font-bold text-2xl '>
                                Hubungi Kami
                        </a>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default MobileMenu;