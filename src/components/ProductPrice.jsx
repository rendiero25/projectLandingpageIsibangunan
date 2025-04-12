import Image5 from "../assets/images/image5.png";
import IconFire from "../assets/images/fire.png";
import ArrowRight from "../assets/images/arrow-right.png";

const ProductPrice = () => {
    return(
        <div className="px-6 py-10 bg-bggray">
            <div className="flex flex-col xl:flex-row justify-center items-center gap-12">
                <div className="flex flex-col justify-center items-center xl:items-start gap-4">
                    <h2 className="font-semibold text-center xl:text-left text-4xl 3xl:text-5xl text-black 2xl:leading-[3rem] 3xl:leading-[3.5rem] 3xl:max-w-3xl">
                            Harga Food Tray Langsung dari Pabrik</h2>
                    
                    <p className="font-medium text-sm sm:text-lg 3xl:text-2xl text-center xl:text-left text-gray xl:max-w-md 2xl:max-w-full">
                        Tidak pakai Calo, tidak pakai distributor mahal. Harga langsung dari pabrik kami.</p>
                    
                    <div className="flex flex-col justify-center items-center xl:items-start">
                        <h3 className="font-normal text-3xl text-black">Rp. 25.000,- /Pcs</h3>
                        <p className="font-medium text-sm sm:text-lg 3xl:text-2xl text-center xl:text-left text-gray xl:max-w-md 2xl:max-w-full">
                            (Harga bisa lebih hemat, untuk pembelian grosir)
                        </p>
                    </div>
                    
                    <div className="flex flex-row gap-2 3xl:gap-4 items-center">
                        <p className="font-bold text-sm sm:text-xl 3xl:text-3xl text-black">Hubungi kami sekarang sebelum kehabisan stok!</p>
                        <img src={IconFire} alt="boxes-image" className="size-5 3xl:size-7"/>
                    </div>

                    <a href="https://wa.me/62811158309?text=Halo,%20Saya%20tertarik%20dengan%20produk%20Food%20Tray" 
                        className='bg-primary rounded-full px-6 xl:px-7 3xl:px-14 py-2 xl:py-3 3xl:py-4 text-white font-medium text-md 3xl:text-xl flex flex-row items-center gap-6 mt-6'>
                            Pesan Sekarang <span><img src={ArrowRight} alt="arrowright-icon" className="size-4 xl:size-5 3xl:size-6"/></span>
                    </a>
                </div>
                
                <div className="flex justify-center">
                    <img src={Image5} alt="image-hargafoodtray" className="w-3/4 rotate-5 shadow-2xl"/>
                </div>
            </div>
        </div>
    )
}

export default ProductPrice;