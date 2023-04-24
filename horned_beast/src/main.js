import HornedBeast from "./hornedbeast";
import Data from "./data.json"
import Container from "react-bootstrap/Container"

//this function passes data through the hornedbeast component it should render an image with a title and description of each image



function Main() {
       return (
       <Container> 

        <div>
            {Data.map(value => {

            return <HornedBeast title = {value.title}
            description = {value.description}
            image = {value.image_url} />})}

        </div>
        </Container>
    );
}


export default Main;