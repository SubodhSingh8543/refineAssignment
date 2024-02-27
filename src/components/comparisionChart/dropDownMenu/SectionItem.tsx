
const SectionItem = ({el,activemenu,menuHover,i,setactiveMenu,setMenuHover}:{el:any,activemenu:String,menuHover:number,i:number,setactiveMenu: (str:String)=>void,setMenuHover: (val:any) => void}) => {

    return (
        <div onClick={() => { setactiveMenu(el.title) }} onMouseOver={() => setMenuHover(i)} onMouseLeave={() => setMenuHover(null)} key={i} className={`h-[22px] flex justify-left gap-[10px] pl-[10px] pr-[10px] pt-[5px] pb-[5px] items-center text-[10px] rounded-[3px] ${el.title == activemenu ? "bg-[#F1F1F1]" : null} hover:bg-[#F1F1F1]`}>
            {el.leftLogo}
            <p className="w-[142px]">{el.title}</p>
            {(el.title == activemenu || menuHover == i) && el.rightLogo}
        </div>
    )
}

export default SectionItem