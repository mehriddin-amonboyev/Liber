import "./department.css"

import headerMeny from "../../assets/svg/headerMenu.svg";
import headerMenyScrol from "../../assets/svg/headerMenuScrol.svg";

export const Department = () => {
    return (
        <>
            <div className="depart_block">
                <div className="depart">
                    <img src={headerMeny} alt="headerIcon" />
                    <h3 className="depart_title">Рукнлар</h3>
                    <img src={headerMenyScrol} alt="headerIcon" />
                </div>
                <div className="search">
                    <form action="">
                        <input type="text" placeholder="Қидириш" />
                    </form>
                </div>
            </div>
        </>
    )
}

