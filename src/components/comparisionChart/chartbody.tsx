import { useState } from "react";
import { MetricPill } from "./MetricPill"
import { DataItem } from "../../interfaces";

let arr: DataItem[] = [
    {
        rise: true,
        valuePer: 9,
        value: "255,581",
        headding: "Online store sessions"
    },
    {
        rise: false,
        valuePer: 14,
        value: "-$15,07.44",
        headding: "Net return value"
    },
    {
        rise: true,
        valuePer: 2,
        value: "10,511",
        headding: "Total orders"
    },
    {
        rise: true,
        valuePer: 7,
        value: "3.18%",
        headding: "Conversion rate"
    }
]

export const ChartBody = () => {
    const [matFill, setMatFill] = useState<DataItem[]>(arr);
    const [active, setActive] = useState<number>(0);

    return (
        <>
            <div className="border-[1px] border-[red] w-[100%] bg-[#FFFFFF] p-[10px]">
                <div className="p-[5px] border-[1px] border-[yellow] flex justify-around">
                    {matFill.map((el, i) => (
                        <MetricPill index={i} MatData={el} active={active} setActive={setActive} />
                    ))}
                </div>
                <div className="border-[1px] border-[red] h-[300px]">

                </div>
            </div>
        </>
    )
}