import React, { useState } from "react";
import { AiOutlineLineChart, AiOutlineQuestionCircle } from "react-icons/ai";
import { LuLineChart } from "react-icons/lu";
import SectionItem from "./SectionItem";

interface DropDownInterface {
    leftLogo: React.ReactNode,
    title: String,
    rightLogo: React.ReactNode
}

const menuData: DropDownInterface[] = [
    {
        leftLogo: <LuLineChart className="w-[10px] h-[10px] text-[#616161]" />,
        title: "Average Order Value",
        rightLogo: <AiOutlineQuestionCircle />
    },
    {
        leftLogo: <LuLineChart className="w-[10px] h-[10px] text-[#616161]" />,
        title: "Conversion rate",
        rightLogo: <AiOutlineQuestionCircle />
    },
    {
        leftLogo: <LuLineChart className="w-[10px] h-[10px] text-[#616161]" />,
        title: "Gross Sales",
        rightLogo: <AiOutlineQuestionCircle />
    },
    {
        leftLogo: <LuLineChart className="w-[10px] h-[10px] text-[#616161]" />,
        title: "Net return value",
        rightLogo: <AiOutlineQuestionCircle />
    },
    {
        leftLogo: <LuLineChart className="w-[10px] h-[10px] text-[#616161]" />,
        title: "Store search conversion",
        rightLogo: <AiOutlineQuestionCircle />
    },
    {
        leftLogo: <LuLineChart className="w-[10px] h-[10px] text-[#616161]" />,
        title: "Return rate",
        rightLogo: <AiOutlineQuestionCircle />
    }
]

const DropDownMenu = ({ activemenu, setactiveMenu, showMenu, setShowMenu }: { activemenu: String, setactiveMenu: (el: any) => void, showMenu: Boolean, setShowMenu: (el: any) => void }) => {
    const [menu, setMenu] = useState(menuData)
    const [menuHover, setMenuHover] = useState<any>(null);

    return (
        <div className="w-[212px] h-[176px] p-[5px] absolute mt-[215px] ml-[190px] z-[1] shadow-md bg-[white] rounded-[5px] flex flex-col gap-[5px]">
            {menu.map((el, i) => {
                return <SectionItem el={el} activemenu={activemenu} menuHover={menuHover} i={i} setactiveMenu={setactiveMenu} setMenuHover={setMenuHover} />
            })}
        </div>
    )
}

export default DropDownMenu;