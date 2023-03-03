import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalComponent from './ModalComponent';
import CapitalizeWords from '../utils/capitalizeWords'

const FeriadoComponent = () => {
  //setear los hooks useState
  const [ feriados, setFeriados ] = useState([])

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
    const URL = process.env.REACT_APP_ENDPOINT_BASE+'feriados/';

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setFeriados(data.data)
  }
  
   useEffect( ()=> {
    showData()
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

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
                {feriados?feriados.map( (user,index) => (
                    <tr key={index}>
                        <td>{CapitalizeWords(user?.tipo)}</td>
                        <td>{user.motivo}</td>
                        <td><Button variant="primary" 
                                    onClick={() =>{
                                        handleShow();
                                        setDayOff(user);
                          }}>Ver</Button>
                        </td>
                    </tr>                    
                )):'Cargando...'}
            </tbody>
        </table>
        {ModalComponent(Modal, Button, show,handleClose,handleShow,dayOff)}
    </div>
  )
}
export default FeriadoComponent