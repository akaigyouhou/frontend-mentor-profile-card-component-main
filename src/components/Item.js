import './item.css';

function Item({ number, title }) {
    return (
        <div className="item">
            <div className="number">{number}</div>
            <div className="title">{title}</div>
        </div>
    );
}

export default Item;