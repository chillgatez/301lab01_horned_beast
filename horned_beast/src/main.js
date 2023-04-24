import HornedBeast from "./hornedbeast";
import Data from "./data.json"
import Container from "react-bootstrap/Container"

//this function passes data through the hornedbeast component it should render an image with a title and description of each image



function Main(props) {
       return (
       <Container> 

        <div>
            {Data.map( (value, index) => {

            return <HornedBeast key ={index} title = {value.title}
            description = {value.description}
            image = {value.image_url} displaySelection={props.displaySelection} setclickedBeast = {props.setclickedBeast} setdisplaySelection ={props.setdisplaySelection} value ={value}/>})}

        </div>
        </Container>
    );
}


export default Main;