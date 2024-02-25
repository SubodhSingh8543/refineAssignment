

export const ToolTip = ({ headding, message }: { headding: String, message: String }): any => {

    return (
        <div className="shadow-md h-[76px] w-[356px] absolute mt-[30px] bg-[white] z-[1] rounded-[10px] pt-[15px] pb-[15px] pl-[10px] pr-[10px] flex justify-between flex-col">
            <p className="font-[600] text-[14px]">{headding}</p>
            <p className="font-[400] text-[13px]">{message}</p>
        </div>
    )
}