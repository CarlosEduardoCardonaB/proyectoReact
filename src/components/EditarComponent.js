import React from 'react'

export const EditarComponent = ({peli, conseguirPeliculas}) => {
    const tituloComponente = 'Editar Pelicula';

    const guardarEdicion = async (e, idPeli) => {
      e.preventDefault();
        
      //conseguir target del evento
      let target = e.target;

      const pelisAlmacenadas = await conseguirPeliculas();

      const indice = pelisAlmacenadas.findIndex(peli => peli.id === idPeli);

      //Crear objeto con ese índice
      let peli_actualizada = {
        idPeli,
        titulo: target.titulo.value,
        descripcion: target.descripcion.value
      }

      //Actualizar la película con ese índice

      pelisAlmacenadas[indice] = peli_actualizada

      console.log(pelisAlmacenadas);
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
