

function traerDatos(){
    const url = "alumnos.json";

    axios
    .get(url)
    .then((res) =>{
        mostrar(res.data);
    }).catch((err)=>{
        console.log("Surgio un error" + err);
    })

    function mostrar(data){
        let conteo=0;
        let cant=0;

        for(item of data){

                res.innerHTML += `
                <tr>
                <td>${item.id}</td>
                <td>${item.matricula}</td>
                <td>${item.nombre}</td>
                <td>${item.matematicas}</td>
                <td>${item.quimica}</td>
                <td>${item.fisica}</td>
                <td>${item.geografia}</td>
                <td>${total = (item.matematicas+item.quimica+item.fisica+item.geografia)/4}</td>
            </tr>
            `
            conteo=conteo+1;
            let numero = parseInt(total);
            cant = cant + numero;
           
            console.log(cant);

            }
            let final = cant/conteo;
            
            document.getElementById('total').value = final.toFixed(2);
 
            
        }
    }
//document.querySelector('#mostrar').addEventListener('click', traerDatos());
const btnmostrar = document.getElementById('mostrar').addEventListener('click',function(){
    traerDatos();
});
const btnLmipiar = document.getElementById("limpiar").addEventListener('click', function(){
    Limpiar();
});

function Limpiar(){
    location. reload()
}