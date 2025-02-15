import { MenuIcon } from '../../assets/svg/icon/menuIcon';
import { SearchIcon } from '../../assets/svg/icon/search';
import logo from '../../assets/svg/liberLogo.svg'


export const HeaderSearch = () => {
    return (
        <div className='flex items-center grow gap-[46px]'>

            <a href="#">
                <img src={logo} alt="header logo" />
            </a>

            <div className='flex gap-[4px] grow items-center'>
                <div className='relative'>
                    <MenuIcon className='absolute left-[24px] top-[50%] translate-y-[-50%]'/>
                    <select className='outline-none border border-[#e1e1e1] py-[9px] pl-[60px] pr-[50px] text-left rounded-l-[14px] appearance-none cursor-pointer' name="category">
                        <option value="all">Ruknlar</option>
                        <option value="world">Jahon adabiyoti</option>
                        <option value="uzbek">O'zbek adabiyoti</option>
                    </select>
                </div>

                <div className='border relative w-full py-[9px] pl-[29px] rounded-r-[14px] border-[#e1e1e1]'>
                    <input className='outline-none w-full' type="text" placeholder='Qidirish' />
                    <button className='cursor-pointer absolute right-0 py-[9px] pl-[19px] pr-[27px] border-l-2 border-[#e1e1e1] top-0'>
                        <SearchIcon />
                    </button>
                </div>
            </div>
        </div>

    );
};