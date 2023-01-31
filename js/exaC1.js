document.querySelector('#boton').addEventListener('click', traerDatos());



function traerDatos(){
    const http = new XMLHttpRequest();
    
    http.open('GET','alumnos.json', true);


    http.send();
    http.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4){
            const datos =JSON.parse(this.responseText);
           
            let cant=0;
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
                <td>${total = item.preciovta*item.preciocompra*item.cantidad}</td>
                
            </tr>
            `
            let numero = parseInt(total);
            cant = cant + numero;
           
            console.log(cant);

            }
            
            document.getElementById('total').value = "$"+cant;
 
            
        }
    }
}