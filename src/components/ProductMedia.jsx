import React from 'react';
import { Carousel } from 'antd';

import Video1 from "../assets/videos/video1.mp4";
import Video2 from "../assets/videos/video2.mp4";
import Video3 from "../assets/videos/video3.mp4";
import Video4 from "../assets/videos/video4.mp4";
import Video5 from "../assets/videos/video5.mp4";
import Video6 from "../assets/videos/video6.mp4";

import Image1 from "../assets/images/image1.jpeg";
import Image2 from "../assets/images/image2.jpeg";
import Image3 from "../assets/images/image3.jpeg";
import Image4 from "../assets/images/image4.jpeg";
import Image5 from "../assets/images/image5.png";

const ProductMedia = () => {

    return(
        <div className="px-6 xl:px-24 pt-10 pb-20">
            <div className="flex flex-col justify-between items-center gap-8 4xl:gap-12">
                <div className="flex flex-col xl:flex-row justify-between items-center gap-4">
                    <h2 className="w-full xl:w-1/2 font-semibold text-center xl:text-left text-4xl 4xl:text-5xl text-black 2xl:leading-[3rem] 4xl:leading-[3.5rem]">
                        Lihat Sendiri Kualitas & Skala Produksi Food Tray Kami – Bukti Nyata dari Pabrik Langsung & Produk Asli</h2>
                    <p className="w-full xl:w-1/2 font-medium text-sm sm:text-lg 4xl:text-2xl text-center xl:text-left text-gray">
                        Kami bukan hanya bicara soal kualitas—kami tunjukkan langsung lewat video produksi ribuan food tray stainless setiap hari, 
                        serta lihat koleksi lengkap food tray kami yang telah digunakan oleh rumah sakit, instansi pemerintah, dan penyedia catering 
                        besar. Semua produk ini siap kirim, harga langsung dari pabrik, dan memenuhi standar badan gizi nasional.</p>
                </div>

                <div className="flex flex-col justify-between items-center gap-10">
                    <div className='flex flex-col xl:flex-row justify-between items-center gap-5 xl:gap-8 4xl:gap-7'>
                        <video src={Video1} controls className='rounded-3xl w-full xl:w-[12rem] 2xl:w-[15.2rem] 3xl:w-[12.9rem] 4xl:w-[20.1rem]'></video>
                        <video src={Video2} controls className='rounded-3xl w-full xl:w-[12rem] 2xl:w-[15.2rem] 3xl:w-[12.9rem] 4xl:w-[20.1rem]'></video>
                        <video src={Video3} controls className='rounded-3xl w-full xl:w-[12rem] 2xl:w-[15.2rem] 3xl:w-[12.9rem] 4xl:w-[20.1rem]'></video>
                        <video src={Video4} controls className='rounded-3xl w-full xl:w-[12rem] 2xl:w-[15.2rem] 3xl:w-[12.9rem] 4xl:w-[20.1rem]'></video>
                        <video src={Video5} controls className='rounded-3xl w-full xl:w-[12rem] 2xl:w-[15.2rem] 3xl:w-[12.9rem] 4xl:w-[20.1rem]'></video>
                    </div>
                    
                    <div className='flex flex-col xl:flex-row justify-between items-center gap-4'>
                        <div className='flex flex-col xl:flex-row justify-between items-center'>
                            <div className='w-full xl:w-1/2'>
                                <img src={Image1} alt="produk1-image" />
                            </div>
                            <div className='w-full xl:w-1/2'>
                                <img src={Image2} alt="produk2-image" />
                            </div>
                        </div>
                        <div className='flex flex-col xl:flex-row justify-between items-center'>
                            <div className='w-full xl:w-1/2 flex justify-center'>
                                <img src={Image3} alt="produk3-image" className='w-[20rem] sm:w-[32rem] xl:w-[40rem]' />
                            </div>
                            <div className='w-full xl:w-1/2'>
                                <img src={Image4} alt="produk4-image" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProductMedia;