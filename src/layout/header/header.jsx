import { Button } from "../../component/ui/button";
import { HeaderSearch } from "./header-search";
import { UserIcon } from "../../assets/svg/icon/userIcon";


export const Header = () => {
    return (
        <>
            <div className="py-[21px] gap-[64px] container flex">
                <HeaderSearch />
                <div>
                    <Button
                        // className={"hover:text-red-400"}

                        startIcon={<UserIcon />}
                        variant={"birinchi"}>
                        Kirish
                    </Button>
                    <Button
                        startIcon={<UserIcon />}
                        variant={"ikkinchi"}>
                        Kirish
                    </Button>
                </div>
            </div>
        </>
    )
}; 