import {useState} from "react"
import Modal from  'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function SelectedBeast (props) {
    const [visibility, setVisibility] = useState(false);

    const handleVisibility = () => setVisibility(true);

    function handleClose() {
        setVisibility(false);
    }

  

    return (
        <div>
            <Modal show={visibility} onHide={() => {handleClose()}}>
            <img src=""/>
            </Modal>
            <Modal.Header closeButton>
                <Modal.Title>Selected Beast</Modal.Title>
            </Modal.Header>

            
        </div>
    )
}

export default SelectedBeast;