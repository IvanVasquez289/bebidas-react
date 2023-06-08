import { Modal } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"
const ModalBebida = () => {
  const {modal,handleClickModal} = useBebidas()
  return (
    <Modal
        show={modal}
        onHide={handleClickModal}
    >
        <Modal.Body>
            Hola mundo
        </Modal.Body>

    </Modal>
  )
}

export default ModalBebida