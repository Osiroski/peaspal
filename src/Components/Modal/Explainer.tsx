import { Modal, Button } from "react-bootstrap";
import Code from "./Code";

interface Iprops {
    title: string,
    show: boolean,
    hide: () => void
}

const Explainer = (props: Iprops) => {
    const { hide, ...rest } = props
    return (

        <Modal
            {...rest}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={props.hide}>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Code title={props.title}/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.hide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Explainer
