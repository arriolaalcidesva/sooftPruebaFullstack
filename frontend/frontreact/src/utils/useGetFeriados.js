import { useState, useEffect } from 'react';

function useGetFeriados() {
    const [ feriadods, setFeriados ] = useState([])

    const URL = process.env.REACT_APP_ENDPOINT_BASE+'feriados/';

    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setFeriados(data.data)
      }
      
       useEffect( ()=> {
        showData()
      }, [])// eslint-disable-line react-hooks/exhaustive-deps

  return feriadods;
}

export default useGetFeriados