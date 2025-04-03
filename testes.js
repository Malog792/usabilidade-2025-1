
/*
for(let i=0; i<10; i++){
    console.log("oi povo")
    console.log("oi turma")
}
    
let idade = 20

console.log("valor da idade "+idade);
*/

/*   let idade = 20

    console.log("idade ", idade);

    function fazAlgo() {
        console.log("Estou realizando a tarefa...")
        console.log("Estou realizando a tarefa...")
    }

    console.log(fazAlgo())
    fazAlgo()
    */

    let contador = 1

    

   
    let id = setInterval(function() {
        contador++
        console.log(contador)
    }, 1000)

    //console.log("id",id)

    
    setTimeout(function () {
        clearInterval(id)
    },4000)

    server.get("/", (req,res) =>{
        
    })