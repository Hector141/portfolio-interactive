import React, { useState, useEffect, useCallback } from "react";
import {
  toggleInternet,
  minimizeInternet,
  minimizeproyect,
  setPerfilVisible,
  minimizeCommand,
  minimizeCalculadora
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./barra.css";
import windowsLogo from "../logos/logo1.png";
import internetLogo from "../logos/logo2.png";
import carpetaLogo from "../logos/logo3.png";
import repLogo from "../logos/logo4.png";
import calcuLogo from "../logos/calculadora.png";
import commandLogo from "../logos/command.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faWifi } from "@fortawesome/free-solid-svg-icons";

function BarraDeTareas() {
  const dispatch = useDispatch();
  const openInternet = useSelector((state) => state.openInternet);
  const internetVisible = useSelector((state) => state.internetVisible);
  const proyectVisible = useSelector((state) => state.proyectVisible);
  const proyect = useSelector((state) => state.openProyects);
  const logo1Visible = useSelector((state) => state.logo1Visible);
  const [dateTime, setDateTime] = useState(getFormattedDateTime);

  const openCommand = useSelector((state) => state.openCommand);
  const commandVisible = useSelector((state) => state.commandVisible);

  const openCalculadora = useSelector((state) => state.openCalculadora);
  const calculadoraVisible = useSelector((state) => state.calculadoraVisible);
  // Función para obtener la fecha y hora formateada sin segundos
  function getFormattedDateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { timeStyle: "short" });
    const dateString = now.toLocaleDateString();
    return { time: timeString, date: dateString };
  }

  // Función para actualizar la fecha y hora
  const updateDateTime = useCallback(() => {
    setDateTime(getFormattedDateTime());
  }, []);

  // Efecto de uso para ejecutar updateDateTime una vez al cargar la página
  useEffect(() => {
    updateDateTime();
  }, [updateDateTime]);

  // Establecer intervalo para actualizar la fecha y hora cada 1000 ms
  useEffect(() => {
    const intervalId = setInterval(updateDateTime, 1000);

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, [updateDateTime]);

  const handleClickwindows = () => {
    dispatch(setPerfilVisible(!logo1Visible));
  };

  const handleClickInternet = () => {
    dispatch(toggleInternet(true));
    dispatch(minimizeInternet(!internetVisible));
  };

  const handleClickCarpeta = () => {
    dispatch(minimizeproyect(!proyect));
  };

  const handleClickcommand = () => {
    dispatch(minimizeCommand(!commandVisible));
  };

  const handleClickcalculadora = () => {
    dispatch(minimizeCalculadora(!calculadoraVisible));
  };


  return (
    <div className="barra-contain">
      <div
        className={`logo1-contain ${logo1Visible ? "active" : ""}`}
        onClick={handleClickwindows}
      >
        <img className="logo1" src={windowsLogo} alt="Logo 1" />
      </div>
      <div
        className={`logo2-contain ${openInternet ? "internet-active" : ""}`}
        onClick={handleClickInternet}
      >
        <img className={`logo2 `} src={internetLogo} alt="Logo 2" />
      </div>
      <div
        className={`logo3-contain ${proyectVisible ? "proyect-active" : ""}`}
        onClick={handleClickCarpeta}
      >
        <img className={`logo3`} src={carpetaLogo} alt="Logo 3" />
      </div>

      <div className="logo4-contain">
        <img className="logo4" src={repLogo} alt="Logo 4" />
      </div>
      {openCommand && (
        <div className={`logo5-contain`}>
          <img className={`logo5`} src={commandLogo} alt="command logo"  onClick={handleClickcommand}/>
        </div>
      )}

     {openCalculadora && (
        <div className={`logo6-contain`}>
          <img className={`logo6`} src={calcuLogo} alt="calculadora logo"  onClick={handleClickcalculadora}/>
        </div>
      )}
      <div className="right-part">
        <div className="rectangle"></div>
        <div className="time" title={dateTime.date}>
          <p>{dateTime.time}</p>
          <p>{dateTime.date}</p>
        </div>
        <div className="vol" title="Volumen">
          <FontAwesomeIcon icon={faVolumeUp} className="vol-icon" />
        </div>
        <div className="inter" title="Wifi">
          <FontAwesomeIcon className="inter-icon" icon={faWifi} />
        </div>
      </div>
    </div>
  );
}

export default BarraDeTareas;
