import React, { useEffect, useState } from 'react'
import { EditarComponent } from './EditarComponent';

export const ListadoComponente = ({listadostate, setListaPeli}) => {

  //const [listadostate, setListaPeli] = useState([]);

  const [editar, setEditar] = useState(0);

  //Como regla de react es bueno tener los hook antes de las funciones, por esto el useEffect y e useState los colocamos aqui arriba
  useEffect(()=>{
    conseguirPeliculas();
    //console.log('Componente de lista de pelis cargado!!');
    //cuando al useEffect le asignamos el array vacío aqui abajo lo que hace es llamar los métodos en su interior
    //cuando se cargue la página
  }, []);

  const conseguirPeliculas = async() =>{
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListaPeli(peliculas);
    // console.log("1: " + listadostate);
    // console.log("2: " + JSON.stringify(peliculas));
    return peliculas;
  }

  const borrarPeli = async (idPeli) => {
    console.log('La película a borrar es: ' + idPeli);
    let pelisStorage = await conseguirPeliculas();
    console.log('Lista de pelis antes del borrado: ' + JSON.stringify(pelisStorage));
    let nuevoListadoPeliculas = Object.values(pelisStorage).filter(peli => peli.id !== parseInt(idPeli))
    console.log('El nuevo array de películas es: ' + JSON.stringify(nuevoListadoPeliculas));

    setListaPeli(nuevoListadoPeliculas);
    localStorage.setItem('pelis', JSON.stringify(nuevoListadoPeliculas))
  }

  return (
    <>
      { listadostate != null ? listadostate.map(peli =>{
            return(
              <article key={peli.id} className="art-pelis">
                <h3 className="title">{ peli.titulo }</h3>
                <p className="description">{ peli.descripcion }</p>

                <button className="edit" onClick={ () => setEditar(peli.id)}>Editar</button>
                <button className="delete" onClick={ () => borrarPeli(peli.id)}>Borrar</button>

              {
                //Si se cumple esta condición se muestra el componente editar. Esto quiere decir que con el botón editar arrastro el ID del producto y lo comparo con el ID de la caja donde estoy parado
                editar === peli.id && (
                  // <h1>FORMULARIO</h1>
                  <EditarComponent peli={peli}
                    conseguirPeliculas={conseguirPeliculas}
                    setEditar = {setEditar}
                    setlistadoState = {setListaPeli} 
                  />
                )
              }


              </article>
            )
          })
          : <h2>No hay peliculas para mostrar</h2>
        //  <article className="art-pelis">
        //       <h3 className="title">prueba</h3>
        //       <p className="description">prueba</p>

        //       <button className="edit">Editar</button>
        //       <button className="delete">Borrar</button>
        //     </article>

    }
    </>
  )
}
