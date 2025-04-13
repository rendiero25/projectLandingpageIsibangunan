import logoBCA from "../assets/images/bca.webp";
import logoVisa from "../assets/images/visa.webp";
import logoMasterCard from "../assets/images/mastercard.webp";
import logoGopay from "../assets/images/gopay.webp";
import logoCod from "../assets/images/cod.webp";
import logoMidtrans from "../assets/images/midtrans.webp";
import logoFb from "../assets/images/fb.png";
import logoIg from "../assets/images/ig.png";
import logoX from "../assets/images/x.png";

const Footer = () => {

    return(
        <div id="Footer" className="realtive xl:px-24 pt-20 -mt-20 bg-bggray">
            <div className="px-6 xl:px-0 pb-20 flex flex-col xl:flex-row justify-between items-center xl:items-start gap-8">
                <div className="flex flex-col justify-center items-center xl:items-start gap-2 text-lg">
                    <p className="font-semibold text-xl mb-4">Isi Bangunan</p>
                    <a href="https://isibangunan.com/about-us" className="font-normal text-md text-black">Tentang Kami</a>
                    <a href="https://isibangunan.com/contact-us" className="font-normal text-md text-black">Kontak Kami</a>
                    <a href="https://isibangunan.com/our-project" className="font-normal text-md text-black">Projek Kami</a>
                    <a href="https://isibangunan.com/blog" className="font-normal text-md text-black">Berita Kami</a>
                    <a href="https://isibangunan.com/f-a-q" className="font-normal text-md text-black">FAQ</a>
                    <a href="https://isibangunan.com/kebijakan-privasi" className="font-normal text-md text-black">Kebijakan Privasi</a>
                    <a href="https://isibangunan.com/syarat-dan-ketentuan" className="font-normal text-md text-black">Syarat dan Ketentuan</a>
                    <a href="https://isibangunan.com/kebijakan-pengembalian-barang" className="font-normal text-md text-black">Kebijakan Pengembalian</a>
                    <a href="https://isibangunan.com/pusat-bantuan" className="font-normal text-md text-black">Pusat Bantuan</a>
                </div>

                <div className="flex flex-col justify-center items-center xl:items-start gap-2 text-lg xl:max-w-[15rem]">
                    <p className="font-semibold text-xl mb-1">Metode Pembayaran</p>
                    <div className="flex flex-row xl:flex-wrap justify-center xl:justify-start items-center gap-2">
                        <img src={logoBCA} alt="logoBca" className="w-15"/>
                        <img src={logoVisa} alt="logoVisa" className="w-15"/>
                        <img src={logoMasterCard} alt="logoMastercard" className="w-15"/>
                        <img src={logoGopay} alt="logoGopay" className="w-15"/>
                        <img src={logoCod} alt="logoMidtrans" className="w-15"/>
                    </div>

                    <div className="flex flex-col justify-center items-center xl:items-start gap-2 text-lg xl:mt-6">
                        <p className="font-semibold text-xl mb-1">Telah Diverifikasi</p>
                        <img src={logoMidtrans} alt="logoBca" className="w-15"/>
                    </div>
                </div>  

                <div className="flex flex-col justify-center items-center xl:items-start gap-2 text-lg xl:max-w-[25rem]">
                    <p className="font-semibold text-xl mb-1">Kontak Kami</p>
                    <div className="flex flex-row items-center gap-2">
                        <img src={logoFb} alt="logoFacebook" className="w-5"/>
                        <img src={logoIg} alt="logoInstagram" className="w-15"/>
                        <img src={logoX} alt="logoX" className="w-9"/>
                    </div>
                    <p className="font-normal text-md text-black">helo@isibangunan.com</p>
                    <p className="font-normal text-md text-black">Jakarta : 0811-891-929</p>
                    <p className="font-normal text-md text-black">Kalimalang : 0811-111-279</p>
                    <p className="font-normal text-md text-black">Cibubur : 0811-1158-309</p>
                    <p className="font-normal text-md text-black">Tangerang : 0811-1058-586</p>
                    <p className="font-normal text-md text-black">Bandung : 0811-952-246</p>
                    <p className="font-normal text-md text-black">Medan : 0811-934-808</p>
                </div>
                
                <div className="flex flex-col justify-center items-center gap-4 text-lg xl:max-w-xs 4xl:max-w-xl">
                    <p className="font-semibold text-xl mb-1">IsiBangunan Store</p>
                    <p className="font-normal text-md text-black text-center">Jakarta : Jl. Pahlawan Revolusi No.888, Pondok Bambu - Jakarta Timur
                        Tangerang : Jalan Raya Serpong No.5 Kel.Pakualam Kec.Serpong Tangerang Selatan
                    </p>
                    <a href="https://isibangunan.com/contact-us" className="underline font-semibold text-md text-black text-center">Lihat Kantor Cabang Lainnya</a>
                    <p className="font-normal text-md text-black text-center">08.00 - 17.00 <br /> (Hari Sabtu Tutup) <br /><br /> Head Office <br /> Holland Village Office Tower Lantai 26, 
                        Jl. Letjen Suprapto Kav. 60 No. 1 <br /> Jakarta Pusat, DKI Jakarta</p>
                </div>
            </div>

            <div className="absolute w-full -ml-24 py-4 bg-primary text-white font-normal text-xs flex justify-center items-center">
                <div className="max-w-2xl flex flex-row flex-wrap justify-center items-center gap-2">
                    <p>Copyright 2025</p>
                    <span>|</span>
                    <a href="http://www.isibangunan.com" className="font-medium">isibangunan</a>
                    <span>|</span>
                    <p>All Rights Reserved</p>
                    <span>|</span>
                    <p>Developed by <span><a href="http://www.rendiero.dev" className="font-semibold">Rendiero</a></span></p>
                </div>
            </div>
        </div>
    )
}

export default Footer;