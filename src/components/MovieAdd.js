import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap'

function MovieAdd({add}) {
    const [newM, setNewM] = useState([]);
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (event) => {
      let  {name,value}=event.target;
            setNewM(el=>({...el,[name]:value}))

    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ display:'flex', flexDirection:'column'}} >
          Title :<input name='title' onChange={handleChange} />
          Description :<input name='description' onChange={handleChange}/>
          PosterUrl :<input name='posterUrl' onChange={handleChange} />
          Rate :<input name='rate' onChange={handleChange}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={(newMovie)=>add(newM)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

export default MovieAdd
