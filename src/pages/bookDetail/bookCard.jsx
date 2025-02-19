import { bookData } from "../../data/bookData";

export const BookCard = ({ bookData }) => {

    return (
        <div className="flex gap-[24px] ">
            <div className="w-[300px] h-auto">
                <img className="w-[300px] h-auto flex-shrink-0" src={bookData.img} alt="book photo" />
            </div>
            <div className="flex-1 overflow--y-auto ">
                <div>
                    <h1 className="text-3xl font-bold text-[#11142d]">{bookData.about.name}</h1>
                </div>
                <p className="text-sm text-[#3f51b5]">{bookData.about.janr}</p>
                <p className="text-sm leading-[171%] py-[16px]">{bookData.about.title}</p>
                <div>
                    <ul className="flex gap-[70px]">
                        <li className="flex flex-col justify-between">
                            <p className="font-normal text-sm text-[#aaa]">Муаллиф</p>
                            <p className="text-lg">{bookData.about.author}</p>
                        </li>
                        <li className="flex flex-col justify-between">
                            <p className="font-normal text-sm text-[#aaa]">Нашриёт</p>
                            <p className="text-lg">{bookData.about.publishing}</p>
                        </li>
                        <li className="flex flex-col justify-between">
                            <p className="font-normal text-sm text-[#aaa]">Йил</p>
                            <p className="font-semibold text-lg text-[#11142d]">{bookData.about.published_date[0]}</p>
                        </li>
                    </ul>
                    <div class="w-full border-t border-gray-400 rounded-lg mt-[20px] mb-[25px] border-dotted "></div>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}