export const saveInStorage = (key, elemento) =>{

    /*Conseguir los elementos del localstorage */
    let elements = JSON.parse(localStorage.getItem(key))
  console.log(elements);
    //validamos si es un array lo que tenemos en el local storage
    if(Array.isArray(elements)){
      //añadimos el elemento entrante al array existente
      console.log('ingrese al array');
      elements.push(elemento)
    }else{
      //Crear un array con la nueva peli
      elements = [elemento];
    }

    //Almacenamos en el local storage
   localStorage.setItem(key, JSON.stringify(elements))

   return elemento;
  }