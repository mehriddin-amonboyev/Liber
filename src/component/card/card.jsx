import './card.css';
import cardStar from "../../assets/svg/cardStar.svg";
import cardAudioBookIcon from "../../assets/svg/cardAudioBookIcon.svg";
import cardAudioIcon from "../../assets/svg/cardAudioIcon.svg"
function Card({ img, name, title, type }) {

    const cardLeft = (type==="Audio") ? cardAudioIcon : cardAudioBookIcon; 
    return (
        <>
            <div className="card">
                <div className="card__image">
                    <img className='card__img' src={img} alt="card img" />
                </div>
                <h3 className="card__name">{name}</h3>
                <p className="card__title">{title}</p>
                <div className="card__stat">
                    <img src={cardStar} alt="icon" />
                    <img src={cardLeft} alt="icon" />
                </div>
            </div>
        </>
    )
}

export default Card;