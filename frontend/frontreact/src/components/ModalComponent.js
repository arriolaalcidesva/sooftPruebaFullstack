import Nav from 'react-bootstrap/Nav';
import CapitalizeWords from '../utils/capitalizeWords'

const ModalComponent = (Modal, Button,show,handleClose,handleShow, dayOff) =>{
    const dateFormat = dayOff?.dia+'/'+dayOff?.mes+'/'+dayOff?.anio
    return (
      <>  
        <Modal
          show={show}
          onHide={handleClose}
          zIndex={100}
        >
          <Modal.Header closeButton>
            <Modal.Title>{CapitalizeWords(dayOff?.tipo)}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <h3>{dayOff?.motivo}</h3>
              <p><b>Fecha:</b> {dateFormat}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-success" onClick={handleClose}>
                <Nav.Link href={dayOff?.info} target="_blank" onClick={handleClose}><b>Ir a la página</b></Nav.Link>
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default ModalComponent