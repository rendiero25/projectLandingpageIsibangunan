import Image5 from "../assets/images/image5.png";
import IconFire from "../assets/images/fire.png";
import ArrowRight from "../assets/images/arrow-right.png";

const ProductPrice = () => {
    return(
        <div id="ProductPrice" className="px-6 xl:px-24 xl:my-20 py-10 bg-bggray">
            <div className="flex flex-col xl:flex-row justify-center items-center gap-12 xl:gap-6">
                <div className="w-full xl:w-1/2 flex flex-col justify-center items-center xl:items-start xl:pl-15 4xl:pl-50 gap-4 2xl:gap-8">
                    <h2 className="font-semibold text-center xl:text-left text-4xl 4xl:text-5xl text-black 2xl:leading-[3rem] 4xl:leading-[3.5rem] xl:max-w-sm 4xl:max-w-lg">
                            Harga Food Tray Langsung dari Pabrik</h2>
                    
                    <p className="font-medium text-sm sm:text-lg 4xl:text-xl text-center xl:text-left text-gray xl:max-w-md 2xl:max-w-full">
                        Tidak pakai Calo, tidak pakai distributor mahal. Harga langsung dari pabrik kami.</p>
                    
                    <div className="flex flex-col justify-center items-center xl:items-start 4xl:gap-2">
                        <h3 className="font-normal text-3xl 2xl:text-4xl 4xl:text-5xl text-black">Rp. 25.000,- /Pcs</h3>
                        <p className="font-medium text-sm sm:text-lg 4xl:text-2xl text-center xl:text-left text-gray xl:max-w-md 2xl:max-w-full">
                            (Harga bisa lebih hemat, untuk pembelian grosir)
                        </p>
                    </div>
                    
                    <div className="flex flex-row gap-2 4xl:gap-4 items-center">
                        <p className="font-bold text-sm sm:text-xl 4xl:text-3xl text-black">Diskon Spesial untuk Order di atas 100 pcs!</p>
                        <img src={IconFire} alt="boxes-image" className="size-5 4xl:size-7"/>
                    </div>

                    <a href="https://wa.me/62811158309?text=Halo,%20Saya%20tertarik%20dengan%20produk%20Food%20Tray" 
                        className='bg-primary rounded-full px-6 xl:px-7 4xl:px-12 py-2 xl:py-3 4xl:py-3 text-white font-medium text-md 4xl:text-lg flex flex-row items-center gap-6 mt-6 hover:shadow-2xl hover:bg-gradient-to-r from-primary to-[#093567] focus:animate-glow'>
                            Pesan Sekarang <span><img src={ArrowRight} alt="arrowright-icon" className="size-4 xl:size-5 4xl:size-6"/></span>
                    </a>
                </div>
                
                <div className="w-full xl:w-1/2 xl:pr-15 4xl:pr-50 flex justify-center ">
                    <img src={Image5} alt="image-hargafoodtray" className="w-3/4 xl:w-1/2 4xl:w-[22rem] rotate-5 shadow-2xl mb-5 3xl:mt-5"/>
                </div>
            </div>
        </div>
    )
}

export default ProductPrice;