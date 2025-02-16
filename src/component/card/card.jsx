import cardStar from "../../assets/svg/cardStar.svg";
import cardPdfIcon from "../../assets/svg/cardPdfIcon.svg";
import cardAudioIcon from "../../assets/svg/cardAudioIcon.svg";

export const ProductCard = ({ img, name, title, type, status }) => {
    if (status === "new") {
        return (
            <div className="flex flex-col justify-between">
                <div>
                    <img className='border-radius-[14px] w-[239px] h-[336px] ' src={img} alt='card img' />
                </div>
                <div className="w-[222px] flex flex-col pb-[17px]">
                    <h3 className="font-(family-name:<Cairo>) font-bold text-xl text-[#11142d] pt-[10px] pb-[10px] truncate w-full overflow-hidden text-ellipsis whitespace-nowrap">{name}</h3>
                    <p className="font-normal text-sm text-[#3f51b5]">{title}</p>
                </div>
                <div className="flex justify-between">
                    <img src={cardStar} alt="icon" />
                    <div>
                        <TypeIcon type={type} />
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

const TypeIcon = ({ type }) => {
    return (
        <div className="flex gap-[16px]">
           {type.includes("audio") && <img src={cardAudioIcon} alt="icon" />}
           {type.includes("pdf") && <img src={cardPdfIcon} alt="icon" />}
        </div>
    )

}