import CheckCircle from "../assets/images/check-circle.png";
import Boxes from "../assets/images/boxes.png";
import Phone from "../assets/images/phone.png";
import ArrowRight from "../assets/images/arrow-right.png";
import HeroImage from "../assets/images/hero-image.png";

const Hero = () => {
    return(
        <div id="Headline" className="grow h-100vh flex flex-col xl:flex-row justify-between items-center px-6 xl:px-24 pt-6 pb-12">
            <div className="flex flex-col justify-center items-center xl:items-start gap-10 sm:gap-12 4xl:gap-14 xl:w-1/2">
                <div className="flex flex-col justify-center items-center xl:items-start gap-4 sm:gap-8 xl:gap-4 2xl:gap-8 4xl:gap-6">
                    <h1 className="font-semibold text-center xl:text-left text-4xl 4xl:text-5xl text-black 2xl:leading-[3rem] 4xl:leading-[3.5rem] 4xl:max-w-3xl">Jual Food Tray Harga Langsung Pabrik Termurah se-Indonesia, Kualitas Top 1, Standard Badan Gizi Nasional</h1>
                    <p className="font-medium text-sm sm:text-lg 4xl:text-xl text-center xl:text-left text-gray xl:max-w-md 2xl:max-w-full 4xl:max-w-xl">Butuh Food Tray Stainless Kualitas Terbaik? Kami adalah pabrik dan importir food tray dengan harga termurah se-Indonesia!</p>
                    <div className="flex flex-col justify-center items-start gap-2">
                        <div className="flex flex-row gap-2 4xl:gap-4 items-center">
                            <img src={CheckCircle} alt="checkbox" className="size-6 4xl:size-6"/>
                            <p className="font-medium text-md sm:text-xl 4xl:text-2xl text-black">Kualitas Top</p>
                        </div>
                        <div className="flex flex-row gap-2 4xl:gap-4 items-center">
                            <img src={CheckCircle} alt="checkbox" className="size-6 4xl:size-6"/>
                            <p className="font-medium text-md sm:text-xl 4xl:text-2xl text-black">Bahan Stainless Steel Food Grade</p>
                        </div>
                        <div className="flex flex-row gap-2 4xl:gap-4 items-center">
                            <img src={CheckCircle} alt="checkbox" className="size-6 4xl:size-6"/>
                            <p className="font-medium text-md sm:text-xl 4xl:text-2xl text-black">Sesuai Standar Badan Gizi Nasional</p>
                        </div>
                        <div className="flex flex-row gap-2 4xl:gap-4 items-center">
                            <img src={CheckCircle} alt="checkbox" className="size-6 4xl:size-6"/>
                            <p className="font-medium text-md sm:text-xl 4xl:text-2xl text-black">Pengiriman Cepat ke Seluruh Indonesia</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-2 ">
                        <div className="flex flex-row gap-2 4xl:gap-4 items-center">
                            <p className="font-bold text-sm sm:text-xl 4xl:text-2xl text-black">Ready Stock Ribuan Unit Setiap Hari!</p>
                            <img src={Boxes} alt="boxes-image" className="size-5 4xl:size-7"/>
                        </div>
                        <div className="flex flex-row gap-2 4xl:gap-4 items-center">
                            <p className="font-bold text-sm sm:text-xl 4xl:text-2xl text-black">Hubungi kami sekarang sebelum kehabisan stok!</p>
                            <img src={Phone} alt="boxes-image" className="size-5 4xl:size-7"/>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col xl:flex-row items-center xl:self-start gap-6">
                    <a href="https://wa.me/62811158309?text=Halo,%20Saya%20tertarik%20dengan%20produk%20Food%20Tray" 
                        className='bg-primary rounded-full px-6 xl:px-7 4xl:px-12 py-2 xl:py-3 4xl:py-3 text-white font-medium text-md 4xl:text-lg flex flex-row items-center gap-6 hover:shadow-2xl hover:bg-gradient-to-r from-primary to-[#093567] focus:animate-glow'>
                            Pesan Sekarang <span><img src={ArrowRight} alt="arrowright-icon" className="size-4 xl:size-5 4xl:size-5"/></span>
                    </a>
                    <a href="#product" className="font-normal text-black text-md 4xl:text-xl underline">Cek Katalog Produk</a>
                </div>
            </div>
            
            <div className="hidden xl:flex xl:w-1/2 justify-end">
                <img src={HeroImage} alt="hero-image" className="2xl:w-[39rem] 4xl:w-[48rem]"/>
            </div>
            
        </div>
    )
}

export default Hero;