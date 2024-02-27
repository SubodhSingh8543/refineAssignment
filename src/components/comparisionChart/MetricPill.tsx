import { useState } from "react";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import { DataItem } from "../../interfaces";
import { ToolTip } from "./ToolTip";
import EditButton from "./editButton";

export const MetricPill = ({ MatData, active, index ,setActive }: { MatData: DataItem, active: number, index: number, setActive : (val:number) => void }): any => {
    const [ShowToolTip,setShowTool] = useState(false);

    return (
        <>
            <div key={index}
                onClick={() => setActive(index)}
                className={`${(active == index) ? "bg-[#F1F1F1]" : ""} hover:bg-[#F1F1F1] relative w-[24%] h-[4rem] pt-[5px] pb-[5px] pl-[10px] pr-[10px] rounded-lg flex justify-between flex-col`} >
                <div className="flex justify-between item-center">
                    <p onMouseOver={() => setShowTool(true)} onMouseLeave={() => setShowTool(false)} className="text-[12px] border-b border-dashed border-[#CCCCCC]" >{MatData.headding}</p>
                    <EditButton />
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