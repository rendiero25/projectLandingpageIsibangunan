import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Person1 from "../assets/images/person1.jpg";
import Person2 from "../assets/images/person2.jpg";
import Person3 from "../assets/images/person3.jpg";
import Person4 from "../assets/images/person4.jpg";
import Person5 from "../assets/images/person5.jpg";
import Person6 from "../assets/images/person6.jpg";

const Testimonial = () => {
    return(
        <div className="px-6 xl:px-24 py-20 mb-20 bg-bggray">
            <div className=''>
                <div className=''>
                    <Swiper
                        slidesPerView={1}     
                        breakpoints={{
                            1920: {slidesPerView:2}
                        }}
                        spaceBetween={0}
                        pagination={{
                            clickable: true, 
                            el: '.custom-pagination',
                        }}
                        loop={true}
                        autoplay={{delay: 7000}}
                        freeMode={true}
                        modules={[FreeMode, Autoplay, Pagination]}
                        className='mySwiper'>

                        <SwiperSlide className="flex">
                            <div className='flex flex-col justify-center items-start gap-4 px-8 self-center'>
                                <div className="flex flex-col justify-start items-start gap-4">
                                    <p className='font-semibold text-xl xl:text-2xl'>“Kami rutin pesan ratusan food tray untuk kebutuhan
                                        pelatihan di lembaga kami. Kualitasnya stabil dan pengirimannya selalu tepat waktu.”</p>
                                    <div className='flex flex-row justify-between items-center gap-4'>
                                        <img src={Person1} alt="persontesti1-image" className='size-10 rounded-full object-cover'/>
                                        <div className='flex flex-col gap-1 justify-center items-start'>
                                            <p className='font-medium text-sm'>Mira Anindita</p>
                                            <p className='font-light text-xs'>Staf Operasional Balai Latihan Kerja Surabaya</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col justify-center items-start gap-4 px-8'>
                                <div className="flex flex-col justify-start items-start gap-4">
                                    <p className='font-semibold text-xl xl:text-2xl'>"Food tray dari IsiBangunan sangat kokoh dan tahan lama. Kami
                                        sudah pakai lebih dari 2 tahun tanpa kendala. Kualitasnya benar-benar standar rumah sakit."</p>
                                    <div className='flex flex-row justify-between items-center gap-4'>
                                        <img src={Person2} alt="persontesti1-image" className='size-10 rounded-full object-cover'/>
                                        <div className='flex flex-col gap-1 justify-center items-start'>
                                            <p className='font-medium text-sm'>dr. Briliant Lekatompessi</p>
                                            <p className='font-light text-xs'>Kepala Instalasi Gizi RSUD Kartini Jepara</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col justify-center items-center gap-4 px-8'>
                                <div className="flex flex-col justify-start items-start gap-4">
                                    <p className='font-semibold text-xl xl:text-2xl'>“Sebagai penyedia catering untuk event besar, kami butuh alat
                                        makan yang tahan banting dan mudah dibersihkan. Food tray dari IsiBangunan jadi solusi yang
                                        tepat, harganya juga paling masuk akal.”</p>
                                    <div className='flex flex-row justify-between items-center gap-4'>
                                        <img src={Person3} alt="persontesti1-image" className='size-10 rounded-full object-cover'/>
                                        <div className='flex flex-col gap-1 justify-center items-start'>
                                            <p className='font-medium text-sm'>Eko Wahyudi</p>
                                            <p className='font-light text-xs'>Owner PT. Nusantara Catering Services</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col justify-center items-center gap-4 px-8'>
                                <div className="flex flex-col justify-start items-start gap-4">
                                    <p className='font-semibold text-xl xl:text-2xl'>“Saya suka dengan pelayanan cepat dan responsif dari tim IsiBangunan.
                                        Order 500 pcs food tray stainless datang tepat waktu dan sesuai spesifikasi.”</p>
                                    <div className='flex flex-row justify-between items-center gap-4'>
                                        <img src={Person4} alt="persontesti1-image" className='size-10 rounded-full object-cover'/>
                                        <div className='flex flex-col gap-1 justify-center items-start'>
                                            <p className='font-medium text-sm'>Yuliana Dewi</p>
                                            <p className='font-light text-xs'>Procurement Officer Dinas Sosial Jawa Tengah</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col justify-center items-center gap-4 px-8'>
                                <div className="flex flex-col justify-start items-start gap-4">
                                    <p className='font-semibold text-xl xl:text-2xl'>“Food tray stainless dari IsiBangunan sangat memudahkan
                                        distribusi makanan di lapangan saat event besar. Praktis, bersih, dan gampang disusun.”</p>
                                    <div className='flex flex-row justify-between items-center gap-4'>
                                        <img src={Person5} alt="persontesti1-image" className='size-10 rounded-full object-cover'/>
                                        <div className='flex flex-col gap-1 justify-center items-start'>
                                            <p className='font-medium text-sm'>Agus Santosa</p>
                                            <p className='font-light text-xs'>Koordinator Logistik Acara Kemenpora RI</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col justify-center items-center gap-4 px-8'>
                                <div className="flex flex-col justify-start items-start gap-4">
                                    <p className='font-semibold text-xl xl:text-2xl'>“Food tray merk J&J sangat bagus, kokok, dan sesuai standar BGN, recommended.”</p>
                                    <div className='flex flex-row justify-between items-center gap-4'>
                                        <img src={Person6} alt="persontesti1-image" className='size-10 rounded-full object-cover'/>
                                        <div className='flex flex-col gap-1 justify-center items-start'>
                                            <p className='font-medium text-sm'>Ir. Hendrik Sitompul, MSc</p>
                                            <p className='font-light text-xs'>Pemilik Dapur MBG</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <div className='custom-pagination mt-15 flex gap-2 justify-center'></div>

                </div>           
            </div>
        </div>
    )
}

export default Testimonial;