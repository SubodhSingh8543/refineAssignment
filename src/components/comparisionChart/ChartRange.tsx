import { useState } from "react";
import { OutsideClickHandler } from "./editButton";
import YearsDrop from "./yearsDropDown";


const ChartRange = ({ main, date, setYears, first, years }: { main: boolean, date: string, setYears: (val: any) => void, first: boolean, years: String[] }) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <OutsideClickHandler onOutsideClick={() => setShowMenu(false)}>
            <div className="relative" onClick={() => setShowMenu(true)} >
                <div className="w-[189px] h-[22px] pt-[5px] pb-[5px] pl-[10px] pr-[10px] flex justify-between items-center rounded-[2px] bg-[#F6F6F7]">
                    <div className={`w-[10px] ${main ? "gradient-border" : "gradient-border2"} rounded-[50px]`}></div>
                    <p className="w-[149px] h-[12px] text-[10px] font-[400] text-[#70707A] flex justify-start items-center">{`Jan 1, ${first ? years[0]:years[1]} - Dec 21, ${first ? years[0]:years[1]}`}</p>
                </div>
                {showMenu && <YearsDrop setYears={setYears} first={first} years={years} />}
            </div>
        </OutsideClickHandler>
    )
}

export default ChartRange;