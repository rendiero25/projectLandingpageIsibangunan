import BannerBg from "../assets/images/banner-bg.png";
import ArrowRight from "../assets/images/arrow-right-black.png";

const BannerCTA = () => {
    return(
        <div className="px-6 xl:px-24 -mt-20 pb-20 bg-bggray">
            <div 
                className="bg-cover bg-center w-full rounded-2xl 4xl:rounded-3xl" 
                style={{backgroundImage: `url(${BannerBg})`, backgroundSize:'cover'}}>
                    <div className="flex flex-col gap-8 xl:flex-row items-center justify-between px-10 xl:px-20 4xl:px-30 py-10 2xl:py-12 4xl:py-16">
                        <p className="font-medium text-4xl 2xl:text-5xl 4xl:text-6xl text-center text-white">Siap Order? Langsung Hubungi Kami</p>
                        <a href="https://wa.me/62811158309?text=Halo,%20Saya%20tertarik%20dengan%20produk%20Food%20Tray" 
                            className='bg-white rounded-full px-2 xl:px-7 4xl:px-12 py-2 xl:py-3 4xl:py-3 text-black font-medium text-md 4xl:text-lg flex flex-row justify-center items-center gap-6 hover:bg-gradient-to-l from-white to-primary focus:shadow-2xl'>
                                Pesan Sekarang <span><img src={ArrowRight} alt="arrowright-icon" className="size-4 xl:size-5 4xl:size-6 "/></span>
                        </a>
                    </div>
                </div>
        </div>
    )
}

export default BannerCTA;