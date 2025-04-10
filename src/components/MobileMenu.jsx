import { IoMdCloseCircle } from "react-icons/io";

const MobileMenu = ({closeMenu}) => {
    return(
        <div className="bg-blue-500 min-h-screen w-full px-10">
            <button onClick={closeMenu}>
                <IoMdCloseCircle className="size-10"/>
            </button>
        </div>
    )
}

export default MobileMenu;