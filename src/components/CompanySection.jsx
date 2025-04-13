import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

import Company1 from "../assets/images/airnav.webp";
import Company2 from "../assets/images/jaksa-agung.webp";
import Company3 from "../assets/images/kementerian-pertahanan.webp";
import Company4 from "../assets/images/kementrian-kelautan.webp";
import Company5 from "../assets/images/kementrian-pendidikan.webp";
import Company6 from "../assets/images/kementrian-perindustrian.webp";
import Company7 from "../assets/images/kementrian-pu.webp";
import Company8 from "../assets/images/pertamina.webp";
import Company9 from "../assets/images/rs-gatot-subroto.webp";
import Company10 from "../assets/images/rs-hkbp-balige.webp";
import Company11 from "../assets/images/rs-imc.webp";
import Company12 from "../assets/images/rs-pagelaran.webp";
import Company13 from "../assets/images/rs-siloam.webp";
import Company14 from "../assets/images/sofrecom.webp";
import Company15 from "../assets/images/telkom.webp";
import Company16 from "../assets/images/toto.webp";
import Company17 from "../assets/images/transjakarta.webp";

const CompanySection = () => {

    return(
        <div id='CompanySection' className="px-6 xl:px-24 pt-5 pb-20 xl:py-20">
            <div className="flex flex-col justify-center items-center gap-8 3xl:gap-16">
                <div className="flex flex-col xl:flex-row justify-between items-center xl:items-end gap-4 w-full">
                    <h2 className="font-semibold text-center xl:text-left text-4xl 4xl:text-5xl text-black 2xl:leading-[3rem] 4xl:leading-[3.5rem] xl:max-w-md">
                        Siapa yang Sudah Pakai Produk Kami?
                    </h2>             
                    <p className="font-medium text-sm sm:text-lg 4xl:text-xl text-center xl:text-left text-gray xl:max-w-md 2xl:max-w-full 4xl:max-w-3xl">
                        Kami telah memasok ribuan food tray ke Rumah Sakit Negeri & Swasta, 
                        Catering Perusahaan, Sekolah & Pondok Pesantren, Kementerian & Instansi Pemerintah
                    </p>
                </div>

                <div className='w-screen'>
                    <div className='px-6 xl:px-24'>
                        <Swiper
                            slidesPerView={1}
                            breakpoints={{1280: {slidesPerView: 6}}}
                            spaceBetween={0}
                            loop={true}
                            autoplay={{delay:5000}}
                            freeMode={true}
                            modules={[FreeMode, Autoplay]}
                            className='mySwiper'>
                                <SwiperSlide><div className='flex justify-center items-center'><img src={Company1} alt="logo-airnav" className='w-1/2 xl:w-[15rem] xl:-mt-10'/></div></SwiperSlide>
                                <SwiperSlide><div className='flex justify-center items-center'><img src={Company2} alt="logo-jaksaagung" className="xl:w-[10rem]"/></div></SwiperSlide>
                                <SwiperSlide><div className='flex justify-center items-center'><img src={Company3} alt="logo-kemenpertahanan" className="xl:w-[10rem]"/></div></SwiperSlide>
                                <SwiperSlide><div className='flex justify-center items-center'><img src={Company4} alt="logo-kemenkelautan" className="xl:w-[10rem]"/></div></SwiperSlide>
                                <SwiperSlide><div className='flex justify-center items-center'><img src={Company5} alt="logo-kemenpendidikan" className="xl:w-[10rem]"/></div></SwiperSlide>
                                <SwiperSlide><div className='flex justify-center items-center'><img src={Company6} alt="logo-kemenperindustrian" className="xl:w-[14rem] xl:-mt-9"/></div></SwiperSlide>
                                <SwiperSlide><div className='flex justify-center items-center'><img src={Company7} alt="logo-kemenpu" className="xl:w-[10rem]"/></div></SwiperSlide>
                                <SwiperSlide><div className='flex justify-center items-center'><img src={Company8} alt="logo-pertamina" className='w-1/2 xl:w-[15rem] xl:-mt-10'/></div></SwiperSlide>
                                <SwiperSlide><div className='flex justify-center items-center'><img src={Company9} alt="logo-rsgatots" className="xl:w-[10rem]"/></div></SwiperSlide>
                                <SwiperSlide><div className='flex justify-center items-center'><img src={Company10} alt="logo-rshkbp" className="xl:w-[10rem]"/></div></SwiperSlide>
                                <SwiperSlide><div className='flex justify-center items-center'><img src={Company11} alt="logo-rsimc" className="xl:w-[10rem]"/></div></SwiperSlide>
                                <SwiperSlide><div className='flex justify-center items-center'><img src={Company12} alt="logo-rspagelaran" className="xl:w-[10rem]"/></div></SwiperSlide>
                                <SwiperSlide><div className='flex justify-center items-center'><img src={Company13} alt="logo-rssiloam" className="xl:w-[10rem]"/></div></SwiperSlide>
                                <SwiperSlide><div className='flex justify-center items-center'><img src={Company14} alt="logo-sofrecom" className='w-1/2 xl:w-[10rem]'/></div></SwiperSlide>
                                <SwiperSlide><div className='flex justify-center items-center'><img src={Company15} alt="logo-telkom" className='w-1/2 xl:w-[10rem]'/></div></SwiperSlide>
                                <SwiperSlide><div className='flex justify-center items-center'><img src={Company16} alt="logo-toto" className='w-1/2 xl:w-[10rem]'/></div></SwiperSlide>
                                <SwiperSlide><div className='flex justify-center items-center'><img src={Company17} alt="logo-transjakarta" className='w-1/2 xl:w-[9rem]'/></div></SwiperSlide>
                        </Swiper>
                    </div>            
                </div>
            </div>
        </div>
    )
}

export default CompanySection;