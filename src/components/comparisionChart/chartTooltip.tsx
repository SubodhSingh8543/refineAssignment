import { GrLineChart } from "react-icons/gr";
import { PiChartLineDownBold } from "react-icons/pi";

const ChartTooltip = ({ payload, active }: any) => {
    if (active && payload && payload.length) {

        return (
            <div className="h-[62px] w-[180px] shadow-md rounded-[10px] bg-[#FFFFFF] p-[5px] flex justify-between gap-[5px] flex-col">
                <div className="w-[170px] h-[25px] rounded-[2px] flex justify-left items-center pl-[10px] pr-[10px] pt-[5px] pb-[5px] gap-[10px]">
                    <div className="w-[10px] gradient-border rounded-[50px]"></div>
                    <div className="h-[12px] text-[10px] font-[400] flex justify-center items-center whitespace-nowrap">{payload[0].payload.name1}</div>
                    <div className="h-[12px] text-[10px] font-[400] flex justify-center items-center">{payload[0].payload.value1}</div>
                    <div className="h-[15px] text-[10px] font-[400] flex justify-center items-center text-[#616161]">
                        {Math.floor(((payload[0]?.payload?.value1 - payload[0]?.payload?.value2) / payload[0]?.payload?.value1) * 100) <= 0 ? <PiChartLineDownBold className="w-[12px] h-[10px] text-[10px]" /> : <GrLineChart className="w-[12px] h-[10px] text-[10px]" />}
                        {Math.floor(((payload[0]?.payload?.value1 - payload[0]?.payload?.value2) / payload[0]?.payload?.value1) * 100) <= 0 ? <p className="w-[15px] h-[15px] text-[10px] font-[400]">{-Math.floor(((payload[0]?.payload?.value1 - payload[0]?.payload?.value2) / payload[0]?.payload?.value1) * 100)}%</p> : <p className="w-[15px] h-[15px] text-[10px] font-[400]">{Math.floor(((payload[0]?.payload?.value1 - payload[0]?.payload?.value2) / payload[0]?.payload?.value1) * 100)}%</p>}
                    </div>
                </div>
                <div className="w-[170px] h-[25px] rounded-[2px] flex justify-left items-center pl-[10px] pr-[10px] pt-[5px] pb-[5px] gap-[10px]">
                    <div className="w-[10px] gradient-border2 rounded-[50px]"></div>
                    <div className="h-[12px] text-[10px] font-[400] flex justify-center items-center whitespace-nowrap">{payload[0].payload.name2}</div>
                    <div className="h-[12px] text-[10px] font-[400] flex justify-center items-center">{payload[0].payload.value2}</div>
                </div>
            </div>
        )

    }
}

export default ChartTooltip;