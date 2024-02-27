import { useState } from "react";

const YearsDrop = ({ setYears, first, years }: { setYears: (val: any) => void, first: boolean, years: String[] }) => {
    const [currentYear, setCurrentYear] = useState(["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023",])

    return (
        <div className="w-[150px] p-[10px] absolute z-[1] bg-[white] rounded-[10px] shadow-md ">
            <div className="h-[100px] overflow-scroll flex gap-[5px] flex-col">
            {currentYear.map((el, i) => (
                <div onClick={() => setYears((arr: any) => {
                    let data = [...arr]
                    if (first) {
                        data[0] = el
                    } else {
                        data[1] = el
                    }
                    return data
                })} className={`${first && el == years[0] ? "bg-[#F1F1F1]" : ""} ${!first && el == years[1] ? "bg-[#F1F1F1]" : ""} w-[100%] h-[20px] flex justify-start items-center p-[5px]  rounded-[5px] cursor-pointer hover:bg-[#F1F1F1] text-[10px]`}>
                    {el}
                </div>
            ))}
            </div>
            
        </div>
    )
}

export default YearsDrop;