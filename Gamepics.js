import { useState } from "react";
import "../App.css"
import CompareNumbers from "./CompareNumbers";
import Greet from "./Greet"
import EnterNumber from "./EnterNumber";
import Tables from "./Tables";


export default function Gamepics(){
  const [submittedValue, setSubmittedValue] = useState("");
  const [history, setHistory] = useState([]);  // Agrega un estado para el historial de intentos
  const [attempts, setAttempts] = useState(0); // Agrega un estado para el número de intentos

  const handleSubmittedValue = (value) =>{
    setAttempts((prevAttems)=>prevAttems+1);
    if(attempts<10){
    setSubmittedValue(value);
    setHistory((prevHistory)=>[...prevHistory, value])}// Agrega el nuevo intento al historial

    else{
     
      alert(`Has alcanzado el límite de 10 intentos. El juego ha terminado. Mi número era:   ${Tables()} `);
    }
    
    const arraySub = value.split("").map(Number); // Usamos el valor directo de 'value' aquí
    const tableValues = Tables(); // Llamamos a Tables() solo una vez para evitar llamadas múltiples
  
    if (arraySub.join("") === tableValues.join("")) {
      alert(`Eres un GANADOR. Mi número era:   ${tableValues.join("")}`);
    }
    
  };

return(
  <>
  <Greet/>
  <EnterNumber 
  onSubmittedValue={handleSubmittedValue}
  />
  <CompareNumbers
  submittedValue={submittedValue}
  history={history}
  />
 
  </>
)
}
