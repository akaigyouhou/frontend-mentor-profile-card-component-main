import "./card.css";
import User from '../user.json';
import Item from './Item';

function Card() {
    console.log(User);
    return (
        <main className="card">
            <div className="container">
                <div className="top"></div>
                <img className="avatar" src={User.avatar} alt="victor"></img>
                <div className="info">
                    <h1>{User.name}<span>{User.age}</span></h1>
                    <p>{User.city}</p>
                </div>
            </div>
            <div className="detail">
                <Item number={User.followers} title="followers" />
                <Item number={User.likes} title="likes" />
                <Item number={User.photos} title="photos" />
            </div>
        </main>
    )
}


export default Card;