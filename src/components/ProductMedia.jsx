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

    const contentStyle = {
        margin: 0,
        height: 'auto', //160px 
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    const contentStyle2 = {
        margin: 0,
        height: '150', //160px 
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return(
        <div className="px-6 py-10">
            <div className="flex flex-col justify-between items-center gap-8">
                <div className="flex flex-col xl:flex-row justify-between items-center gap-4">
                    <h2 className="font-semibold text-center xl:text-left text-4xl 3xl:text-5xl text-black 2xl:leading-[3rem] 3xl:leading-[3.5rem] 3xl:max-w-3xl">
                        Lihat Sendiri Kualitas & Skala Produksi Food Tray Kami – Bukti Nyata dari Pabrik Langsung & Produk Asli</h2>
                    <p className="font-medium text-sm sm:text-lg 3xl:text-2xl text-center xl:text-left text-gray xl:max-w-md 2xl:max-w-full">
                        Kami bukan hanya bicara soal kualitas—kami tunjukkan langsung lewat video produksi ribuan food tray stainless setiap hari, 
                        serta lihat koleksi lengkap food tray kami yang telah digunakan oleh rumah sakit, instansi pemerintah, dan penyedia catering 
                        besar. Semua produk ini siap kirim, harga langsung dari pabrik, dan memenuhi standar badan gizi nasional.</p>
                </div>
                <div className="flex flex-col xl:flex-row justify-between items-center gap-4">
                    <div className="w-screen">
                        <div className='px-6'>
                            <Carousel arrows infinite={false}>
                                <div>
                                    <video style={contentStyle} src={Video1} controls className='rounded-3xl'></video>
                                </div>
                                <div>
                                    <video style={contentStyle} src={Video2} controls className='rounded-3xl'></video>
                                </div>
                                <div>
                                    <video style={contentStyle} src={Video3} controls className='rounded-3xl'></video>
                                </div>
                                <div>
                                    <video style={contentStyle} src={Video4} controls className='rounded-3xl'></video>
                                </div>
                                <div>
                                    <video style={contentStyle} src={Video5} controls className='rounded-3xl'></video>
                                </div>
                                <div>
                                    <video style={contentStyle} src={Video6} controls className='rounded-3xl'></video>
                                </div>
                            </Carousel>
                        </div>
                    </div>

                    <div className="w-screen">
                        <div className='px-6'>
                            <Carousel arrows infinite={false}>                        
                                <div>
                                    <img style={contentStyle} src={Image1} alt="foodtray-image1" className='rounded-3xl'/>
                                </div>
                                <div>
                                    <img style={contentStyle} src={Image2} alt="foodtray-image2" className='rounded-3xl'/>
                                </div>
                                <div>
                                    <img style={contentStyle} src={Image3} alt="foodtray-image3" className='rounded-3xl'/>
                                </div>
                                <div>
                                    <img style={contentStyle} src={Image4} alt="foodtray-image4" className='rounded-3xl'/>
                                </div>
                                <div>
                                    <img style={contentStyle} src={Image5} alt="foodtray-image5" className='rounded-3xl'/>
                                </div>                         
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductMedia;