import React from 'react'

export const EditarComponent = ({peli, conseguirPeliculas, setEditar, setlistadoState}) => {
    const tituloComponente = 'Editar Pelicula';

    const guardarEdicion = async (e, id) => {
      e.preventDefault();
        
      //conseguir target del evento
      let target = e.target;

      const pelisAlmacenadas = await conseguirPeliculas();

      const indice = pelisAlmacenadas.findIndex(peli => peli.id === id);

      //Crear objeto con ese índice
      let peli_actualizada = {
        id,
        titulo: target.titulo.value,
        descripcion: target.descripcion.value
      }

      //Actualizar la película con ese índice

      pelisAlmacenadas[indice] = peli_actualizada

      //Guardar el nuevo array de objetos en el localstorage
      localStorage.setItem('pelis', JSON.stringify(pelisAlmacenadas));


      //Actualizamos los estados de las películas
      setlistadoState(pelisAlmacenadas);
      setEditar(0)
      //console.log(pelisAlmacenadas);
    }

  return (
    <div className='edit_form'>
        <h3 className='title'>{tituloComponente}</h3>
        <form onSubmit={ e => guardarEdicion(e, peli.id)}>
            <input type='text' name='titulo' className='titulo_editado' defaultValue={peli.titulo} />
            <textarea name='descripcion' defaultValue={peli.descripcion} className='descripcion_editada' />
            <input type='submit' className='editar' value='Actualizar' />
        </form>
    </div>
  )
}
