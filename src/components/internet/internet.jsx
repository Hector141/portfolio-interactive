import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { toggleInternet, minimizeInternet } from "../../redux/actions";
import flecha1 from "../logos/flechas1.jpg";
import flecha2 from "../logos/flechas2.jpg";
import internet from "../logos/logo2.png";
import facilM from "../logos/facilmarket.png";
import contries from "../logos/piContries.png";
import linken from "../logos/linkenima.png";
import git from "../logos/git.png";
import gmail from "../logos/gmail.png";
import react from "../logos/tecnologos/react.png";
import typescript from "../logos/tecnologos/Typescript.png";
import javascript from "../logos/tecnologos/JavaScript-logo.png";
import redux from "../logos/tecnologos/Redux.png";
import express from "../logos/tecnologos/express.png";
import cloudy from "../logos/tecnologos/Cloudinary.png";
import html from "../logos/tecnologos/HTML5.png";
import css from "../logos/tecnologos/css.png";
import node from "../logos/tecnologos/node.png";
import "./internet.css";

function Internet() {
  const dispatch = useDispatch();
  const tecnologiasRef = useRef(null);
  const proyectosRef = useRef(null)

  const handlerMinimizeInternet = () => {
    dispatch(minimizeInternet(true));
  };

  const closeInternet = () => {
    dispatch(toggleInternet(false));
    dispatch(minimizeInternet(true));
  };

  const scrollToTecnologias = () => {
    tecnologiasRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProyectos = () => {
    proyectosRef.current.scrollIntoView({ behavior: "smooth" });
  };

 
  return (
    <div className="internet-contain">
      <div className="barrasuperior">
        <div className="juegos">
          <img className="internet-logo" src={internet} alt="internet" />{" "}
          Internet
        </div>
        <div className="barra">
          <div>
            <img className="flecha1" src={flecha1} alt="flecha1" />
            <img className="flecha2" src={flecha2} alt="flecha2" />
          </div>
          <div className="barrita">
            https://portfolio.com/?developer=hector-cardoso
          </div>
        </div>
        <div className="botones">
          <button onClick={handlerMinimizeInternet}>_</button>
          <button>□</button>
          <button className="cerrar" onClick={closeInternet}>
            X
          </button>
        </div>
      </div>
      <div className="favoritos">
        <div className="primerdiv">Favoritos</div>
        <div>Marcadores</div>
      </div>
      <div className="internet-data">
      <div className="datos-contacto">
        <div className="links">
        <a href="https://github.com/Hector141" target="_blank" rel="noopener noreferrer">
        <img className='link' src={git} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/hector-cardoso-503531264/" target="_blank" rel="noopener noreferrer">
        <img className='link' src={linken} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/hector-cardoso-503531264/" target="_blank" rel="noopener noreferrer">
        <img className='link' src={gmail} alt="" />
          </a>
        </div>
        </div>
        <div className="pestañas">
          <div className="pestaña">About</div>
          <div className="pestaña" onClick={scrollToProyectos}>Proyectos</div>
          <div className="pestaña">Contactame</div>
          <div className="pestaña" onClick={scrollToTecnologias}>Tecnologias</div>
        </div>
        <div className="datos-about">
          <h3>Hola, mi nombre es</h3>
          <h2>
            Hector Cardoso.
            <br />
            construyo cosas para la web
          </h2>
          <p>
            Soy un desarrollador Full Stack con enfoque en tecnologías web y
            muchas ganas de aprender y crecer en el mundo de la programación. Me
            especializo en crear soluciones innovadoras y funcionales que
            satisfacen las necesidades de los usuarios.
          </p>
        </div>

        <div className="internet-proyectos" ref={proyectosRef}>
          <h2 className="proyectos-titulos">Mis Proyectos</h2>
          <div className="datos-proyectos">
            <a
              href="https://github.com/Hector141/facil-market-proyect"
              rel="noreferrer"
              target="_blank"
              className="proyecto2"
            >
              <img className="facilM" src={facilM} alt="facilM" />
              <div className="proyect-info">
                <h2>Facil Market</h2>
                <p>
                  facil market es un proyecto que Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Sint, maiores eaque, eveniet
                  quis assumenda aliquid totam voluptatibus possimus sed aut
                  corporis. Dolorum laboriosam modi reprehenderit quia ad
                  recusandae rem blanditiis!
                </p>
                <div className="tecnologias-cont">
                  <div className="tecnologias">React</div>
                  <div className="tecnologias">PostgreSQL</div>
                  <div className="tecnologias">Sequelize</div>
                  <div className="tecnologias">Node.js</div>
                  <div className="tecnologias">Scss</div>
                  <div className="tecnologias">TypeScript</div>
                  <div className="tecnologias">Express</div>
                  <div className="tecnologias">Redux-ToolKit</div>
                </div>
              </div>
            </a>
            <a
              href="https://github.com/Hector141/PI-Countries-FT37a-CardosoHector"
              rel="noreferrer"
              target="_blank"
              className="proyecto2"
            >
              <img className="facilM" src={contries} alt="contries" />
              <div className="proyect-info">
                <h2>PI Henry - Countries</h2>
                <p>
                  facil market es un proyecto que Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Sint, maiores eaque, eveniet
                  quis assumenda aliquid totam voluptatibus possimus sed aut
                  corporis. Dolorum laboriosam modi reprehenderit quia ad
                  recusandae rem blanditiis!
                </p>
                <div className="tecnologias-cont">
                  <div className="tecnologias">React</div>
                  <div className="tecnologias">PostgreSQL</div>
                  <div className="tecnologias">Sequelize</div>
                  <div className="tecnologias">Node.js</div>
                  <div className="tecnologias">JavaScript</div>
                  <div className="tecnologias">Express</div>
                  <div className="tecnologias">Redux</div>
                </div>
              </div>
            </a>
          </div>
        </div>



        <div className="cont" >
          </div><h2 className="tecno-title" ref={tecnologiasRef} >Las tecnologias que se usar</h2>
      <div className="about-tecnologias">
      
      <div className="logo_tecno"><img  src={git} alt="" />
        <p>GitHub es una plataforma en línea que se utiliza principalmente para alojar y colaborar en proyectos de desarrollo de 
          software utilizando el sistema de control de versiones Git. Proporciona un espacio de almacenamiento en la nube para 
          repositorios de código fuente, lo que permite a los desarrolladores colaborar en el desarrollo de aplicaciones y proyectos de software</p>
      </div>

      <div className="logo_tecno"><img  src={react} alt="" />
        <p>React es una biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y reutilizables. Permite crear 
          componentes UI de forma modular, lo que facilita el desarrollo y el mantenimiento de aplicaciones web. React utiliza un enfoque basado en 
          componentes y actualiza eficientemente la interfaz de usuario cuando los datos cambian.</p>
      </div>

      <div className="logo_tecno"><img  src={express} alt="" />
        <p>Express es un marco de aplicaciones web para Node.js. Proporciona una capa de abstracción sobre el servidor HTTP de Node.js, lo que facilita 
          la creación de API y la implementación de rutas, manejo de solicitudes y respuestas, middleware, autenticación y otras funcionalidades comunes en aplicaciones web.</p>
      </div>

      <div className="logo_tecno"><img  src={redux} alt="" />
        <p>Redux es una biblioteca de administración de estado para aplicaciones JavaScript, especialmente aquellas construidas con React. Proporciona 
          un flujo de datos unidireccional predecible, lo que facilita el seguimiento y la gestión del estado de la aplicación. 
          Redux se basa en tres principios fundamentales: un solo origen de verdad, estado inmutable y cambios realizados mediante funciones puras.</p>
      </div>

      <div className="logo_tecno"><img  src={cloudy} alt="" />
        <p>Cloudinary es un servicio en la nube que proporciona almacenamiento y manipulación de imágenes y videos. Permite cargar, almacenar, optimizar y entregar medios en línea,
           además de ofrecer funcionalidades como recorte, redimensionamiento, generación de miniaturas, transformaciones de imágenes y almacenamiento en caché, entre otras.</p>
      </div>

      <div className="logo_tecno"><img  src={css} alt="" />
        <p>CSS (Cascading Style Sheets) es un lenguaje de hojas de estilo utilizado para describir la presentación y el diseño de un documento HTML. Permite controlar la apariencia visual de los elementos HTML, 
          como el color, la tipografía, el tamaño, el espaciado, la posición y otros aspectos de diseño. CSS se utiliza para crear estilos coherentes y atractivos en las páginas web.</p>
      </div>

      <div className="logo_tecno"><img  src={javascript} alt="" />
        <p> JavaScript es un lenguaje de programación interpretado y orientado a objetos ampliamente utilizado en el desarrollo web. Permite agregar interactividad y comportamiento dinámico a las páginas web, manipular elementos HTML, interactuar con servicios web, realizar
           validaciones de formularios y muchas otras tareas. JavaScript se ejecuta en el navegador del cliente y también se puede utilizar en el lado del servidor con Node.js.</p>
      </div>

      
      <div className="logo_tecno"><img  src={typescript} alt="" />
        <p> TypeScript es un superconjunto de JavaScript que agrega características de tipado estático y otras funcionalidades avanzadas al lenguaje. Permite detectar errores de programación durante la fase de desarrollo, mejora la escalabilidad y el mantenimiento del código,
           y proporciona herramientas de autocompletado y verificación de tipos. TypeScript se compila a JavaScript y es ampliamente utilizado en proyectos grandes y complejos.</p>
      </div>
      
      
      <div className="logo_tecno"><img  src={node} alt="" />
        <p>Node.js es un entorno de tiempo de ejecución de JavaScript basado en el motor V8 de Google Chrome. Permite ejecutar código JavaScript en el lado del servidor, lo que lo convierte en una opción popular para construir aplicaciones web escalables y de 
          alto rendimiento. Node.js proporciona acceso a API del sistema operativo y bibliotecas de terceros, lo que lo hace adecuado para desarrollar aplicaciones de red y servidores.</p>
      </div>

      <div className="logo_tecno"><img  src={html} alt="" />
        <p> HTML (HyperText Markup Language) es el lenguaje de marcado utilizado para crear y estructurar el contenido de las páginas web. 
          Proporciona elementos y etiquetas predefinidas que permiten dar formato al texto, agregar imágenes,
           enlaces, videos y otros elementos multimedia, crear formularios interactivos y definir la estructura básica de una página web.</p>
      </div>

      </div>
      </div>
    </div>
  );
}

export default Internet;
