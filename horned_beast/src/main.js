import HornedBeast from "./hornedbeast";
import Data from "./data.json";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

//this function passes data through the hornedbeast component it should render an image with a title and description of each image

function Main(props) {

    const [filterSelection, setfilterSelection] = useState("0")

    function filter(event) {
        setfilterSelection(event.target.value)
    }

    let thisVariable = [];

    if (filterSelection !== "0") {
        thisVariable = Data.filter((element) => {
            if (filterSelection === element.horns.toString()) {
                return true
            }
            else {
                return false
            }
        });
    }

    else {
        thisVariable = Data
    }

    return (
        <Container>

            <Form.Select aria-label="Filter beasts by # of horns" onChange={filter}>
                <option value="0">Filter beasts by # of horns</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>
            </Form.Select>

            <div>
                {thisVariable.map((value, index) => {

                    return <HornedBeast key={index} title={value.title}
                        description={value.description}
                        image={value.image_url} displaySelection={props.displaySelection} setclickedBeast={props.setclickedBeast} setdisplaySelection={props.setdisplaySelection} value={value} />
                })}

            </div>

        </Container>
    );
}


export default Main;