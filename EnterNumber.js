import { useState } from "react";



export default function EnterNumber({onSubmittedValue}){
    const [inputValue, setInputValue] = useState("")
    const [error, setError] = useState("")
   
   
     const handleSubmit= (e)=>{
       e.preventDefault()
        // Verificamos si la longitud es exactamente 4 y si no hay dígitos repetidos
       if(inputValue.length===4){
         const isUnique = Array.from(new Set(inputValue.split(""))).length === inputValue.length;
         if(isUnique){
           // Actualizamos el estado con el valor ingresado al enviar el formulario
           onSubmittedValue(inputValue);
           // Se actualiza el valor del input:
           setInputValue("")
           // Limpiamos mensaje de error
           setError("")
         } else{
           // mostramos mensajes de error 
           setError("Por favor, ingresa un número sin dígitos repetidos.")
         }
       }else{
         //Mostramos mensaje de error si la longitud no es 4
         setError("Por favor, ingresa un número de 4 dígitos")
       }
     };
   
     return(
       <>
       <form onSubmit={handleSubmit}>
         <h3>Ingresa un numero de 4 digitos</h3>
         <input
         value={inputValue}
         onChange={(e)=>setInputValue(e.target.value)}
         className="contenedor"
         type="text"
         maxLength={4}
         pattern="[0-9]*"
         />
         <button type="submit" >Enviar</button>
       </form>
             {/* Renderizamos el valor ingresado después de enviar el formulario */}
   
             {<h2>Número Ingresado: {inputValue}</h2>}
   
              {/* Mostramos el mensaje de error si hay uno */}
              {error && <p style={{color:"red"}}>{error}</p>}
       </>
     )
   }
