import "./about.css"
import nota from "../logos/notepad.png"

function About({onCerrarProyectos}) {

    
    const handleCerrarProyectos = () => {
        onCerrarProyectos();
      };

  return (
<div className="about-contain">
<div className='arriba'>
    <div className='ordenador'><img className='nota' src={nota} alt="nota" />Sobre Mi.txt</div>

   
    
    <div className='botones'><button>_</button><button>□</button><button className='cerrar' onClick={handleCerrarProyectos} >X</button></div></div>

<div className="abajo"> 
<div className='barra2'>
       <div>Archivo</div><div>Editar</div><div>Formato</div><div>Vista</div><div>Ayuda</div>
    </div>
    <div className="about-data">
    <h2>Sobre Mi</h2>
    <p><p>Apasionado desarrollador Full Stack con enfoque en tecnologías web y una muchas ganas por aprender y crecer en el mundo de la programación. Con experiencia en el desarrollo de aplicaciones web y conocimiento de lenguajes como JavaScript, HTML y CSS, me especializo en crear soluciones innovadoras y funcionales que satisfacen las necesidades de los usuarios.</p>

    <p>Mi viaje en el desarrollo de software comenzó con mi amor por la resolución de problemas y la creatividad. Siempre estoy en busca de desafíos emocionantes que me permitan expandir mis habilidades técnicas y explorar nuevas tecnologías. Me encanta trabajar en equipos colaborativos, donde puedo aportar mis ideas y contribuir al éxito del proyecto.</p>

    <p>Me destaco por mi capacidad de adaptación y mi enfoque en la calidad del código y la usabilidad. Siempre busco mejorar continuamente mis habilidades a través de la investigación, la participación en comunidades de desarrolladores y la asistencia a eventos tecnológicos.</p>

    <p>Estoy emocionado por formar parte de un entorno dinámico en el que pueda aplicar mis conocimientos y colaborar en el desarrollo de soluciones innovadoras. Siempre estoy abierto a oportunidades que desafíen mi creatividad y me permitan crecer profesionalmente como desarrollador Full Stack.</p>

<p>
¡Conectemos y comencemos una conversación! Programemos una llamada<br></br>
Email: Hectorcardoso18@outlook.com</p></p>
        </div>
</div>
</div>

  );
}

export default About;
