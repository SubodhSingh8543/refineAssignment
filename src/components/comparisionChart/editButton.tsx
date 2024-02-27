import { useEffect, useRef, useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import DropDownMenu from "./dropDownMenu/DropDownMenu";

export const OutsideClickHandler = ({ children, onOutsideClick }: { children: React.ReactNode, onOutsideClick: () => void }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                // Click occurred outside the button
                onOutsideClick();
            }
        };
        // Attach the event listener
        document.addEventListener("click", handleClickOutside);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [onOutsideClick]);

    return <div ref={wrapperRef}>{children}</div>;
};

const EditButton = () => {
    const [editHov, setEditHov] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [activemenu, setactiveMenu] = useState("Conversion rate");

    return (
        <OutsideClickHandler onOutsideClick={() => setShowMenu(false)} >
            <div onMouseLeave={() => setEditHov(false)}
                onMouseOver={() => setEditHov(true)}
                onClick={() => setShowMenu(!showMenu)}
                className={`${showMenu ? "bg-[#CBC8C8]" : ""} hover:bg-[#CBC8C8] w-[23px] h-[23px] p-[3px] rounded-[5px] flex justify-center items-center cursor-pointer relative`}>
                <MdModeEditOutline className="text-[#666464] h-[20px] w-[20px]" />
                {showMenu && <DropDownMenu showMenu={showMenu} setShowMenu={setShowMenu} activemenu={activemenu} setactiveMenu={setactiveMenu} />}
            </div>
        </OutsideClickHandler>

    )
}

export default EditButton;