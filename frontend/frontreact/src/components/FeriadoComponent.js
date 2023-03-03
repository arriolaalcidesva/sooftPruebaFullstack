import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalComponent from './ModalComponent';
import CapitalizeWords from '../utils/capitalizeWords'

const FeriadoComponent = () => {
  //setear los hooks useState
  const [ users, setUsers ] = useState([])

  const [show, setShow] = useState(false);
  const [dayOff, setDayOff] = useState({
                                        "motivo": "",
                                        "tipo": "",
                                        "info": "",
                                        "dia": 0,
                                        "mes": 0,
                                        "id":"",
                                        "anio":0,
                                        "dateImported":""});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const year = new Date().getFullYear();

  //función para traer los datos de la API
    const URL = 'http://localhost:3002/api/v2/feriados/'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    //console.log(data)
    setUsers(data.data)
  }
  
   useEffect( ()=> {
    showData()
  }, [])
  
  return (
    <div>
        <h3 className='text-center'>{year}</h3>
        <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr className='bg-curso text-white text-center'>
                    <th>TIPO</th>
                    <th>MOTIVO</th>
                    <th>DETALLE</th>
                </tr>
            </thead>
            <tbody className='text-center'>
                { users.map( (user,index) => (
                    <tr key={index}>
                        <td>{CapitalizeWords(user.tipo)}</td>
                        <td>{user.motivo}</td>
                        <td><Button variant="primary" 
                                    onClick={() =>{
                                        handleShow();
                                        setDayOff(user);
                          }}>Ver</Button>
                        </td>
                    </tr>                    
                ))}
            </tbody>
        </table>
        {ModalComponent(Modal, Button, show,handleClose,handleShow,dayOff)}
    </div>
  )
}
export default FeriadoComponent