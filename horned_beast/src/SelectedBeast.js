
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function SelectedBeast(props) {

    function handleClose() {
        props.setdisplaySelection(false)
    }



    return (
        <div>
            <Modal show={props.displaySelection} onHide={() => { handleClose() }}>
                <img src= {props.clickedBeast.image_url} />
                <Modal.Header closeButton>
                    <Modal.Title>{props.clickedBeast.Title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.clickedBeast.description}</Modal.Body>
            </Modal>
        </div>
    )
}

export default SelectedBeast;