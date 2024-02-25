import { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import { DataItem } from "../../interfaces";
import { ToolTip } from "./ToolTip";

export const MetricPill = ({ MatData, active, index ,setActive }: { MatData: DataItem, active: number, index: number, setActive : (val:number) => void }): any => {
    const [hovered, setHovered] = useState(false);
    const [editHov, setEditHov] = useState(false);
    const [ShowToolTip,setShowTool] = useState(false);

    return (
        <>
            <div key={index}
                onClick={() => setActive(index)}
                onMouseLeave={() => setHovered(false)}
                onMouseOver={() => setHovered(true)}
                className={`${hovered || (active == index) ? "bg-[#F1F1F1]" : ""} relative w-[24%] h-[4rem] pt-[5px] pb-[5px] pl-[10px] pr-[10px] rounded-lg flex justify-between flex-col`} >
                <div className="flex justify-between item-center">
                    <p onMouseOver={() => setShowTool(true)} onMouseLeave={() => setShowTool(false)} className="text-[12px] border-b border-dashed border-[#CCCCCC]" >{MatData.headding}</p>
                    <div onMouseLeave={() => setEditHov(false)}
                        onMouseOver={() => setEditHov(true)}
                        className={`${editHov ? "bg-[#CBC8C8]" : ""} w-[23px] h-[23px] p-[3px] rounded-[5px] flex justify-center items-center cursor-pointer`}>
                        <MdModeEditOutline className="text-[#666464] h-[20px] w-[20px]" />
                    </div>
                </div>
                <div className="flex items-center" >
                    <p className="text-[15px] font-semibold" >{MatData.value}</p>
                    <span className="flex items-center gap-[2px] text-[10px] font-[400] text-[#616161]">
                        {MatData.rise ? <RiArrowUpSFill className="text-[12px]" /> : <RiArrowDownSFill className="text-[12px]" />}
                        {MatData.valuePer}%
                    </span>
                </div>
               {ShowToolTip && <ToolTip headding={"Online stores sessions"} message={"Your online store’s traffic volume, shown in sessions."}/>}
            </div>
        </>
    )
}