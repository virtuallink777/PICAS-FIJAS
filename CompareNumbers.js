import Tables from './Tables'
console.log(Tables())

export default function CompareNumbers( {submittedValue, history} ) {
    const moves = history.map((submittedValue, move) => {
        if(move<=10){

            const arrayA=   submittedValue.split("").map(Number);
            const arrayB=Tables();
            let countPICAS = 0;
            let countFIJAS = 0;

            const comparations = arrayA.map((numA, index) => {
                return {
                    numA,
                        PICAS: arrayB.includes(numA),
                        FIJAS: arrayB.includes(numA) && arrayB.indexOf(numA) === index
                };
            });
        
            comparations.forEach((compare) => {
                if (compare.PICAS && !compare.FIJAS) {
                    countPICAS++;
                } else if (compare.PICAS && compare.FIJAS) {
                    countFIJAS++;
                }
            });

        let description = ` Para el número: ${submittedValue}, 
        tiene ${countPICAS} ${countPICAS === 1 ? "PICA" : "PICAS"} 
        y tiene: ${countFIJAS} ${countFIJAS === 1 ? "FIJA" : "FIJAS"}`;

            return(
                <li key={move}>
                <button>{description}</button>
                </li>
            )
            }else{
                return <h3>Maximo 10 intentos permitidos</h3>
            }});


  return (
    <div>
        <ol>
        {moves}
        </ol>
    </div>
  )
}
