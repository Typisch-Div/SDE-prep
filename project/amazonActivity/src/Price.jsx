import "./Price.css"
export default function Price({ OldPrice, NewPrice }) {
    return (
        <div className="price">
            <span className="old-price">{OldPrice}</span>
            &nbsp;
            <span className="new-price">{NewPrice}</span>
        </div>
    );
}