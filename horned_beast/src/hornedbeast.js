
function HornedBeast(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src={props.image} alt={props.description}></img>
        </div>
    );
}

export default HornedBeast;