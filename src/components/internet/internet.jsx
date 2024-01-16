import React from "react";
import { useDispatch } from "react-redux";
import { toggleInternet, minimizeInternet } from "../../redux/actions";
import flecha1 from "../logos/flechas1.jpg";
import flecha2 from "../logos/flechas2.jpg";
import internet from "../logos/logo2.png";

import js from "../logos/tecnologos/JavaScript-logo.png"
import ts from "../logos/tecnologos/Typescript.png"
import css from "../logos/tecnologos/css.png"
import node from "../logos/tecnologos/node.png"
import express from "../logos/tecnologos/express.png"
import html from "../logos/tecnologos/HTML5.png"
import react from "../logos/tecnologos/react.png"
import redux from "../logos/tecnologos/Redux.png"
import clou from "../logos/tecnologos/Cloudinary.png"
import vue from "../logos/tecnologos/vue.png"
import next from "../logos/tecnologos/next.png"
import "./internet.css";

function Internet() {
  const dispatch = useDispatch();


  const handlerMinimizeInternet = () => {
    dispatch(minimizeInternet(false));
  };

  const closeInternet = () => {
    dispatch(toggleInternet(false));
    dispatch(minimizeInternet(false));
  };


  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert(`¡${text} copiado al portapapeles!`);
      })
      .catch(() => {
        alert(`No se pudo copiar ${text} al portapapeles.`);
      });
  };

  return (
    <div className="internet-contain">
      <div className="barrasuperior">
        <div className="juegos">
          <img className="internet-logo" src={internet} alt="internet" /> Internet
        </div>
        <div className="barra">
          <div>
            <img className="flecha1" src={flecha1} alt="flecha1" />
            <img className="flecha2" src={flecha2} alt="flecha2" />
          </div>
          <div className="barrita">https://portfolio.com/?developer=hector-cardoso</div>
        </div>
        <div className="botones">
          <button onClick={handlerMinimizeInternet}>_</button>
          <button>□</button>
          <button className="cerrar" onClick={closeInternet}>X</button>
        </div>
        <div className="favoritos">
        <h2>Favoritos</h2>
        <h2>Marcadores</h2>
        </div>
      </div>
     

      <div className="internet-data">
        <div className="data-container">
        <div className="inter-btn">
          <button>SOBRE MI</button>
          <button>PROYECTOS</button>
          <button>CONTACTO</button>
        </div>
        <div className="inter-about">
          <div className="about">
          <h1>Hola, mi nombre es Hector Cardoso ✌️</h1>
          <p>Soy un desarrollador Full Stack con enfoque en tecnologías web y muchas 
            ganas de aprender y crecer en el mundo de la programación. Me especializo
             en crear soluciones innovadoras y funcionales que satisfacen las necesidades de los usuarios.</p>

          </div>

            <img src="https://1.bp.blogspot.com/-XxSEWb_CvZU/VKmhUuJ0qdI/AAAAAAAAAdE/cZL-xCFIe5w/s1600/soyprogramador.gif" alt="programador gif"></img>
        </div>


        <div className="inter-proyectos-container">
          <div className="inter-proyectos">

          </div>
        </div>



        <div className="inter-tecnologias-container">
          <h1>Habilidades tecnicas 😎</h1>
          <div className="inter-tecnologias">
            <img className="hackimg" src="https://media1.giphy.com/media/3knKct3fGqxhK/giphy.gif" alt=""/>
            <div className="tecnologias-container">
              <div className="tecnologia"><img src={js} alt=""/>
              <p>JavaScript</p></div>
              <div className="tecnologia"><img src={ts} alt=""/>
              <p>TypeScript</p></div>
              <div className="tecnologia"><img src={css} alt=""/>
              <p>CSS</p></div>
              <div className="tecnologia"><img src={next} alt=""/>
              <p>Next.js</p></div>
              <div className="tecnologia"><img src={express} alt=""/>
              <p>Express.js</p></div>
              <div className="tecnologia"><img src={vue} alt=""/>
              <p>Vue.js</p></div>
              <div className="tecnologia"><img src={node} alt=""/>
               <p>Node.js</p></div>
              <div className="tecnologia"><img src={clou} alt=""/>
               <p>Cloudinary</p></div>
              <div className="tecnologia"><img src={html} alt=""/>
               <p>HTML</p></div>
              <div className="tecnologia"><img src={react} alt=""/>
               <p>React</p></div>
              <div className="tecnologia"><img src={redux} alt=""/>
               <p>Redux</p></div>

            </div>

          </div>
        </div>



      <div className="inter-contactos-container">
        <h2>Puedes contactarme por:</h2>
        <div className="inter-contactos">

        <button className="contatos" onClick={() => copyToClipboard('+54 3437 516370')}>
        📞Mensaje o llamada
        </button>
        <a href="mailto:hectorcardoso18@outlook.com" >
        <div className="contatos" >
        ✉️Correo
        </div></a>
        <a href="https://www.linkedin.com/in/hector-cardoso-503531264/" target="_blank" rel="noopener noreferrer">
        <div className="contatos">
        🔗Visita mi Linkedin
        </div></a>

        </div>
      </div>
</div>

      </div>
    </div>
  );
}

export default Internet;
