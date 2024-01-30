

export default function Greet(){
    return(
        <>
        <h1>Hola Bienvenido al juego de Picas y Fijas</h1>
        <h2>las reglas son:</h2>
        <ol>
            <li>El Objetivo es adivinar el numero escondido de 4 cifras</li>
            <li>Tienes que ingresar un numero de 4 cifras incluyendo el cero
                NO repetidos
            </li>
            <li>Cada vez que adivines una cifra que 
                corresponde al mismo puesto, se denomina FIJA</li>
            <li>Cada vez que adivines una cifra pero que no corresponde
                al mismo puesto se denomina PICA
            </li>
            <li>Tienes 10 intentos</li>       
        </ol>
        </>
    )
}
