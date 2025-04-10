import { useState } from "react";

import MobileMenu from "./MobileMenu";

import Logo from "../assets/images/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {

    const [showmenu, setShowMenu] = useState(false);

    const handleMobileMenu = () => {
        setShowMenu(true);
    }

    const closeMenu = () => {
        setShowMenu(false);
    }

    return(
        <div>
            {/* DESKTOP HEADER */}
            <div className="">

            </div>

            {/* MOBILE HEADER */}
            <div className="py-6 px-6 flex flex-row justify-between items-center xl:hidden">
                <img src={Logo} alt="logo-isibangunan" className="w-35"/>
                <button onClick={handleMobileMenu}>
                    <HiMenuAlt3 className="size-10"/>
                </button> 

                {showmenu && 
                    (
                        <div className="absolute top-0 w-full">
                            <MobileMenu closeMenu={closeMenu}/>
                        </div>           
                    )
                }               
            </div>
        </div>
    )
}

export default Header;