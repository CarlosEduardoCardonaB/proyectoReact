import React, { useState } from 'react'

export const BuscadorComponente = ({listadostate, setListaPeli}) => {

  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) =>{
    //Crear estado y actualizarlo
    setBusqueda(e.target.value)
    //console.log(busqueda);

    //El listado completo de las peliculas    

    //Filtrar para buscar coincidencias
    let pelis_encontradas = listadostate.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase())
    });

    if(busqueda.length <= 1 || pelis_encontradas <= 0){
      pelis_encontradas = JSON.parse(localStorage.getItem('pelis'));
      setNoEncontrado(true);
    }else{
      setNoEncontrado(false);
    }

    //console.log(pelis_encontradas);
    //Dar valor de todo en localstorage

    //Actualiar listado ppal con lo filtrado

    setListaPeli(pelis_encontradas);

  }

  return (
    <div className="search">
    <h3 className="title">Buscador: {busqueda}</h3>
    {(noEncontrado == true && busqueda.length > 1 ) &&(
      <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
    )}
    
    <form>
        <input type="text"
          id="search_field"
          name = 'busqueda'
          autoComplete='off'
          value = {busqueda}
          onChange={buscarPeli}
        />
        <button>Buscar</button>
    </form>
</div>
  )
}
