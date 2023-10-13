import React from 'react'

export const EditarComponent = ({peli}) => {
    const tituloComponente = 'Editar Pelicula';
  return (
    <div className='edit_form'>
        <h3 className='title'>{tituloComponente}</h3>
        <form>
            <input type='text' name='titulo' className='titulo_editado' defaultValue={peli.titulo} />
            <textarea name='description' defaultValue={peli.descripcion} className='descripcion_editada' />
            <input type='submit' className='editar' value='Actualizar' />
        </form>
    </div>
  )
}
