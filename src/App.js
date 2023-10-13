import { useState } from "react";
import { BuscadorComponente } from "./components/BuscadorComponente";
import CrearComponente from "./components/CrearComponente";
import { ListadoComponente } from "./components/ListadoComponente";

function App() {

    const [listadostate, setListaPeli] = useState([]);
  return (
      <div className="layout">
      <header className="header">
          <div className="logo">
              <div className="play"></div>
          </div>
          <h1>Mis Películas</h1>
      </header>

      <nav className="nav">
          <ul>
              <li><a href="/#">Inicio</a></li>
              <li><a href="/#">Películas</a></li>
              <li><a href="/#">Blog</a></li>
              <li><a href="/#">Contacto</a></li>
          </ul>
      </nav>

      <section className="content">
          <ListadoComponente listadostate={listadostate} setListaPeli={setListaPeli}/>
      </section>

      {/*Barra lateral*/}
      <aside className="lateral">
         <BuscadorComponente/>
          <CrearComponente setListaPeli={setListaPeli}/>
      </aside>
      {/*Pie de página*/}
      <footer className="footer">
          &copy; Master en Javascript - <a href="https://www.linkedin.com/in/carlos-cardona-buitrago/">Carlos Eduardo Cardona</a>
      </footer>
  </div>
  );
}

export default App;
