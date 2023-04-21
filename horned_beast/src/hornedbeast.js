// this component renders a title, decription, and image of a horned animal
import {useState} from "react"
function HornedBeast(props) {
    const [favorite, setFavorite] = useState(0)
    function increment (){
        setFavorite(favorite + 1)
    }
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src={props.image} alt={props.description} onClick = {increment}/>
            <p> &#9829; {favorite} </p>
        </div>
    );
}

export default HornedBeast;