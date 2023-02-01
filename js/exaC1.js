//document.querySelector('#mostrar').addEventListener('click', traerDatos());
const btnmostrar = document.getElementById('mostrar').addEventListener('click',function(){
    traerDatos();
});
const btnLmipiar = document.getElementById("limpiar").addEventListener('click', function(){
    Limpiar();
});


function traerDatos(){
    const http = new XMLHttpRequest();
    
    http.open('GET','alumnos.json', true);


    http.send();
    http.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4){
            const datos =JSON.parse(this.responseText);
           
            let cant=0;
            let conteo=0;
            const res=document.querySelector('#res');
            res.innerHTML="";

            for(let item of datos){

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
}
function Limpiar(){
    location. reload()
}