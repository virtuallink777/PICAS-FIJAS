const numRandom=[];


export default function Tables() {
    while(numRandom.length<4){
        let numLet = Math.floor(Math.random()*10)
        if(!numRandom.includes(numLet)){
            numRandom.push(numLet)
        }
    }
  return (
    numRandom
  )
}
