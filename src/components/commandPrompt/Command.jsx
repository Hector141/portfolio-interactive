import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CommandLogo from "../logos/command.jpg";
import { toggleCommand } from "../../redux/actions";
import "./Command.css";

function Command() {

  const dispatch = useDispatch();

  const [commandHistory, setCommandHistory] = useState([
    "Microsoft Windows [Versión 6.1.9600]",
    "Copyright <c> 2009 Microsoft Corporation. Todos los derechos reservados",
  ]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [commandResult, setCommandResult] = useState("");

  const executeCommand = (command) => {
    switch (command.toLowerCase()) {
      case "help":
        return "List of commands: <br /> - help: Show this help message <br /> - date: Display the current date and time <br /> - clear: Clear the command history <br /> - echo [text]: Display text <br /> - contact: Show contact information <br /> - about: Show information about me";
      case "date":
        return new Date().toLocaleString();
      case "clear":
        setCommandHistory([]);
        return "Command history cleared.";
      case "echo":
        return "Please provide text to echo, e.g., 'echo Hello World!'";
      case "contact":
        return "Contact Information: <br /> Phone: +54 3437516379 <br /> Email: hectorcardoso18@outlook.com";
      case "about":
        return "¡Hola! Soy el creador de esta página. Esta es una simulación de una PC al estilo de Windows 7. ¡Espero que disfrutes explorando y probando los comandos!";
      default:
        if (command.startsWith("echo ")) {
          return command.slice(5); // Extract text after "echo "
        }
        return `"${command}" no se reconoce como un comando interno o externo, programa o archivo por lotes ejecutable.`;
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
    <div className="command-container">
      <div className="coomand-sup">
        <img className="command-logo" src={CommandLogo} alt="" />
        <p>C:\Windows\System32\cmd.exe</p>
        <div className="command-buttons">
          <button>_</button>
          <button>□</button>
          <button className="command-close" onClick={handleCloseCommand}>X</button>
        </div>
      </div>
      <div className="command-prompt">
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
