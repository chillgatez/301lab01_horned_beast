// this component renders a title, decription, and image of a horned animal
import { useState } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function HornedBeast(props) {
    const [favorite, setFavorite] = useState(0)
    function increment() {
        setFavorite(favorite + 1)
    }
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img onClick={() => {props.setdisplaySelection(true); props.setclickedBeast(props.value)}} src={props.image} alt={props.description}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Button onClick={increment}> &#9829; {favorite} </Button>
            </Card.Body>
        </Card>
    );
}

export default HornedBeast;