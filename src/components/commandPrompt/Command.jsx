import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommandLogo from "../logos/command.jpg";
import { toggleCommand } from "../../redux/actions";
import { minimizeCommand } from "../../redux/actions";
import "./Command.css";

function Command() {

  const dispatch = useDispatch();

  const [commandHistory, setCommandHistory] = useState([
    "Microsoft Windows [Versión 6.1.9600]",
    "Copyright <c> 2009 Microsoft Corporation. Todos los derechos reservados",
  ]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [commandResult, setCommandResult] = useState("");
  const commandPromptRef = useRef(null);

  const commandVisible = useSelector((state) => state.commandVisible);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 40, y: 10 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const offsetX = e.clientX - dragStart.x;
        const offsetY = e.clientY - dragStart.y;

        // Obtén el tamaño de la ventana y las coordenadas máximas
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const maxX = windowWidth - 800; // Ajusta según el tamaño del componente
        const maxY = windowHeight - 560; // Ajusta según el tamaño del componente

        // Calcula las nuevas coordenadas asegurándote de que no se salgan de los límites
        const newX = Math.max(0, Math.min(position.x + offsetX, maxX));
        const newY = Math.max(0, Math.min(position.y + offsetY, maxY));

        setPosition({ x: newX, y: newY });
        setDragStart({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart, position.x, position.y]);

  const handleMouseDown = (e) => {
    const boundingBox = e.currentTarget.getBoundingClientRect();
    const isClickOnTop = e.clientY - boundingBox.top < 30; // Ajusta el valor 30 según tu preferencia para la zona superior

    if (isClickOnTop) {
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };




  useEffect(() => {
    // Desplazar automáticamente hacia abajo al agregar un nuevo comando
    if (commandPromptRef.current) {
      commandPromptRef.current.scrollTop = commandPromptRef.current.scrollHeight;
    }
  }, [commandHistory]);


  const HandleMinimizeCommand = () => {
    dispatch(minimizeCommand(!commandVisible));
  };


  const executeCommand = (command) => {
    switch (command.toLowerCase()) {
      case "help":
        return "List of commands: <br /> - help: Show this help message <br /> - date: Display the current date and time <br /> - clear: Clear the command history <br /> - echo [text]: Display text <br /> - contact: Show contact information <br /> - about: Show information about me <br /> <br /> <br />";
      case "date":
        return new Date().toLocaleString();
      case "clear":
        setCommandHistory([]);
        return "Command history cleared. <br /> <br /> <br />";
      case "echo":
        return "Please provide text to echo, e.g., 'echo Hello World!' <br /> <br /> <br />";
      case "contact":
        return "Contact Information: <br /> Phone: +54 3437516379 <br /> Email: hectorcardoso18@outlook.com <br /> <br /> <br />";
      case "about":
        return "¡Hola! Soy el creador de esta página. Esta es una simulación de una PC al estilo de Windows 7. ¡Espero que disfrutes explorando y probando los comandos! <br /><br /> <br />";
      default:
        if (command.startsWith("echo ")) {
          return command.slice(5); // Extract text after "echo "
        }
        return `"${command}" no se reconoce como un comando interno o externo, programa o archivo por lotes ejecutable. <br /> <br /> <br />`;
    }
  };
  
  
  

  const handleInputChange = (event) => {
    setCurrentCommand(event.target.value);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      const result = executeCommand(currentCommand);
      setCommandHistory([...commandHistory, currentCommand]);
      setCommandResult(result);
      setCurrentCommand("");
    }
  };

  const handleCloseCommand = () =>{
    dispatch(toggleCommand(false));
  }

  return (
    <div className="command-container"       onMouseDown={handleMouseDown}
    style={{ left: `${position.x}px`, top: `${position.y}px` }}>
      
      <div className="coomand-sup" >
        <img className="command-logo" src={CommandLogo} alt="" />
        <p>C:\Windows\System32\cmd.exe</p>
        <div className="command-buttons">
          <button onClick={HandleMinimizeCommand}>_</button>
          <button>□</button>
          <button className="command-close" onClick={handleCloseCommand}>X</button>
        </div>
      </div>
      <div className="command-prompt" ref={commandPromptRef}>
        {commandHistory.map((command, index) => (
          <p key={index}>{command}</p>
        ))}
        <div className="command-input-container">
          <span>C:\User\Usuario&gt;</span>
          <input
            type="text"
            className="command-input"
            value={currentCommand}
            onChange={handleInputChange}
            onKeyPress={handleEnterKeyPress}
          />
        </div>
        <div className="command-output" dangerouslySetInnerHTML={{ __html: commandResult }}></div>
      </div>
    </div>
  );
}

export default Command;
