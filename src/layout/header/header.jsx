import "./header.css";
import headerLogo from "../../assets/svg/liberIcon.svg";
import headerMenyScrol from "../../assets/svg/headerMenuScrol.svg";
import UZB from "../../assets/svg/flagUZB.svg"
import { Department } from "../../component/department/department";
export const Header = () => {
    return (
        <section className="header">
            <div className="container">
                <div className="header__block">
                    <div className="header__logo">
                        <img src={headerLogo} alt="header logotipi" />
                    </div>
                    <Department />
                    <div className="header__lang">
                        <div className="header__lang_img">
                            <img src={UZB} alt="Flag uzb" />
                        </div>
                        <h4 className="header__lang_title">Ўз</h4>
                        <img src={headerMenyScrol} alt="" />
                    </div>
                </div>

            </div>
        </section>
    )
};