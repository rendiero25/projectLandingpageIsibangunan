import Icon1 from "../assets/icons/certificate.svg";
import Icon2 from "../assets/icons/cubes.svg";
import Icon3 from "../assets/icons/star.svg";
import Icon4 from "../assets/icons/money.svg";
import Icon5 from "../assets/icons/thumbs-up.svg";


const WhySection = () => {
    return(
        <div className="px-6 xl:px-24 py-20">
            <div className="flex flex-col justify-center items-center xl:items-start gap-8 3xl:gap-16">
                <div className="flex flex-col justify-center items-center xl:items-start gap-4">
                    <h2 className="font-semibold text-center xl:text-left text-4xl 4xl:text-5xl text-black 2xl:leading-[3rem] 4xl:leading-[3.5rem] 4xl:max-w-3xl">
                        Kenapa Harus di isibangunan.com?
                    </h2>             
                    <p className="font-medium text-sm sm:text-lg 4xl:text-2xl text-center xl:text-left text-gray xl:max-w-md 2xl:max-w-full">
                        Keunggulan Kami Sebagai Importir & Pabrik Food Tray
                    </p>
                </div>
                
                <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-8">
                    <div className="flex flex-col justify-between items-center gap-2 xl:h-[12rem]">
                        <div className="flex flex-col gap-2 items-center">
                            <div className="flex flex-col items-center">
                                <img src={Icon1} alt="icon-certificate" className="size-14"/>
                            </div>
                            <p className="font-semibold text-lg text-center">Importir & Produsen Resmi</p>
                        </div>
                        <p className="font-medium text-sm sm:text-lg 4xl:text-2xl text-center text-gray xl:max-w-md 2xl:max-w-full">Jaminan ketersediaan & harga terbaik</p>
                    </div>
                    <div className="flex flex-col justify-between items-center gap-2 xl:h-[12rem]">
                        <div className="flex flex-col gap-2 items-center">
                            <div className="flex flex-col items-center">
                                <img src={Icon2} alt="icon-certificate" className="size-14"/>
                            </div>
                            <p className="font-semibold text-lg">Stok Selalu Ready</p>
                        </div>
                        <p className="font-medium text-sm sm:text-lg 4xl:text-2xl text-center text-gray xl:max-w-md 2xl:max-w-full">Cocok untuk project besar atau repeat order</p>
                    </div>
                    <div className="flex flex-col justify-between items-center gap-2 xl:h-[12rem]">
                        <div className="flex flex-col gap-2 items-center">
                            <div className="flex flex-col items-center">
                                <img src={Icon3} alt="icon-certificate" className="size-14"/>
                            </div>
                            <p className="font-semibold text-lg">Kualitas Terjamin</p>
                        </div>
                        <p className="font-medium text-sm sm:text-lg 4xl:text-2xl text-center text-gray xl:max-w-md 2xl:max-w-full">Terbuat dari stainless steel food grade</p>
                    </div>
                    <div className="flex flex-col justify-between items-center gap-2 xl:h-[12rem]">
                        <div className="flex flex-col gap-2 items-center">
                            <div className="flex flex-col items-center">
                                <img src={Icon4} alt="icon-certificate" className="size-14"/>
                            </div>
                            <p className="font-semibold text-lg text-center">Pengalaman Sejak 2015</p>
                        </div>
                        <p className="font-medium text-sm sm:text-lg 4xl:text-2xl text-center text-gray xl:max-w-md 2xl:max-w-full">Dipercaya oleh ratusan perusahaan</p>
                    </div>
                    <div className="flex flex-col justify-between items-center gap-2 xl:h-[12rem]">
                        <div className="flex flex-col gap-2 items-center">
                            <div className="flex flex-col items-center">
                                <img src={Icon5} alt="icon-certificate" className="size-14"/>
                            </div>
                            <p className="font-semibold text-lg text-center">Harga Food Tray Lebih Murah</p>
                        </div>
                        <p className="font-medium text-sm sm:text-lg 4xl:text-2xl text-center text-gray xl:max-w-md 2xl:max-w-full">Karena langsung dari pabrik</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhySection;