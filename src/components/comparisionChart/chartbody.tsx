import { useEffect, useState } from "react";
import { MetricPill } from "./MetricPill"
import { DataItem } from "../../interfaces";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import CustomLineChart, { Year1Int, Year2Int } from "./CampChart";
import ChartRange from "./ChartRange";
import MetriPillLoading from "./SclateronComponents/MetricPillLoading";
import ChartLoading from "./SclateronComponents/ChartLoading";
import jsonchartData from "../../../chartData.json";

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
    const [loading, setLoading] = useState(true);
    const [showChart, setShowChart] = useState(true);
    const [firstYear, setFirstYear] = useState([]);
    const [secondYear,setSecondYear] = useState([]);
    const [years,setYears] = useState(["2023","2020"]);

    const filtFirstYear = () => {
        const data = jsonchartData.data.find((el,i) => el.year == years[0]);
        const newData: any = data?.data.map((el,i) => {return  {"name1":el.year,"value1":el.value}})
        setFirstYear(newData);
    }

    const filtSecondYear = () => {
        const data = jsonchartData.data.find((el,i) => el.year == years[1]);
        const newData: any = data?.data.map((el,i) => {return  {"name2":el.year,"value2":el.value}})
        setSecondYear(newData);
    }

    useEffect(() => {
        let id = setTimeout(() => {
            setLoading(false);
        }, 1000)
        return () => clearTimeout(id);
    }, []);

    useEffect(() => {
        filtFirstYear();
        filtSecondYear();
    },[years])

    // console.log(firstYear,secondYear);
    

    return (
        <>
            <div className="w-[100%] bg-[#FFFFFF] p-[10px] rounded-[10px] shadow-lg">
                <div className="flex justify-between items-center">
                    {loading && Array(4).fill(0).map((el, i) => {
                        return <MetriPillLoading />
                    })}
                    {!loading && matFill.map((el, i) => <MetricPill index={i} MatData={el} active={active} setActive={setActive} />)}
                    {showChart ? <IoIosArrowDown onClick={() => setShowChart(!showChart)} /> : <IoIosArrowUp onClick={() => setShowChart(!showChart)} />}
                </div>
                {showChart && !loading &&
                    <div className="h-[200px]">
                        <CustomLineChart year1={firstYear} year2={secondYear} />
                    </div>
                }
                {showChart && loading && <ChartLoading />}
                {showChart && !loading &&   <div className="w-[100%] h-[32px] pt-[5px] pb-[5px] flex justify-end items-center gap-[10px]">
                    <>
                        <ChartRange main={true} date={"Oct 1, 2022 - Feb 21, 2024"} setYears={setYears} first={true} years={years} />
                        <ChartRange main={false} date={"Oct 1, 2022 - Feb 21, 2024"} setYears={setYears} first={false} years={years} />
                    </>

                </div>}
            </div>
        </>
    )
}