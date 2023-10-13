import React, { useState } from 'react'
import { saveInStorage } from '../helpers/saveInStorage';

export default function CrearComponente({setListaPeli}) {

    const tituloComponente = "Añadir película";
    const [pelistate, setPelistate] = useState({
        titulo: "",
        descripcion: ""
    })

    //En este caso se desestructura el objeto "pelistate" y se sacan sus variables del json, o sea que después de esto se 
    //puede llamar el valor de la variable asi "titulo" y no asi "pelistate.titulo"
    const {titulo, descripcion} = pelistate


    const conseguirDatos = e =>{
        e.preventDefault();
        let target1 = e.target;
        let titulo = target1.titulo.value;
        let descripcion = target1.descripcion.value;
        //alert (titulo + " " + descripcion);

        let peli ={
            id: new Date().getTime(),
            titulo,
            descripcion
          }
            //asignar el valor a los valores del objeto asi de esta manera arriba realizada es lo mismo que hacer lo siguiente:
            // let peli ={
            //     id: new Date().getTime(),
            //     titulo: titulo,
            //     descripcion: descripcion               
            // }
        
        
        setPelistate(peli);

        //Actualizar el estado del listado principal
        setListaPeli(elementos =>{
          return [peli, ...elementos]
          //También se puede asi: "return [...elementos, peli]""
        })
        saveInStorage('pelis',peli);
        console.log([peli]);
        // Guardar en localStorage. Esta validación se debe retirar cuando descubra por que se debe dar doble click 
        //if (pelistate.titulo !== ''){ saveInStorage(pelistate); } 
        

    }

    

  return (
    <div className="add">
              <h3 className="title">{ tituloComponente }</h3>
              <strong>
                {//Eta es una condición IF. Se valida si existe un titulo y una descripción y muestra el título
                //Antes de la desestructuración del objeto de pliState
                //(pelistate.titulo && pelistate.descripcion) && pelistate.titulo
                  (titulo && descripcion) && "Creaste la película " + titulo}
               </strong>
              <form onSubmit = { conseguirDatos }>
                  <input 
                    type="text"
                    id = "titulo"
                    name = "titulo" 
                    placeholder="Titulo"/>
                  <textarea
                    id = "descripcion"
                    name = "descripcion" 
                    placeholder="Descripción"></textarea>
                  <input type="submit" value="Guardar"/>
              </form>
          </div>
  )
}
