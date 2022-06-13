const formulario = document.getElementById('agregar-gasto'); 
var nombres = [];
var gastos = [];
var montos = [];
var total = 0;
var dividir = 0;


//clase de Interfaz maneja todo lo relacionado al HTML

 class Interfaz{

        imprimirMensaje(mensaje,tipo){

              const divMensaje = document.createElement('div');
              divMensaje.classList.add('text-center','alert');
              if(tipo === 'error'){

                 divMensaje.classList.add('alert-danger');

              }else{
               
                 divMensaje.classList.add('alert-success');
              }

              divMensaje.appendChild(document.createTextNode(mensaje));
              //insertar  en el DOM
              document.querySelector('.primario').insertBefore(divMensaje, formulario);

              //Quitar el alert despues de 3 segundos 
              setTimeout(function(){

                 document.querySelector('.primario .alert').remove();
                 formulario.reset();

              },3000);
        }
        //Sumar los Montos
         Calcular() {
            total = 0;
            for (let i = 0; i < montos.length; i++) {
               total += parseFloat(montos[i]);              
            }
            dividir = parseFloat(total / montos.length);
           
        }

        //Inserta los gastos a la lista
        agregarGastoListado(nombre, gasto, cantidad){
            
            nombres.push(nombre);
            gastos.push(gasto);
            montos.push(cantidad);
            this.Calcular();
           

             const gastosListado = document.querySelector('#gastos ul');  
             const nuevo = document.querySelector('#total'); 

             //crear un li
             const li = document.createElement('li');
             li.className = 'list-group-item d-flex justify-content-between align-items-center';
             //insertar el gasto
             li.innerHTML = `   
                   
                <span class="badge badge-primary badge-pill">  ${nombre}    </span>  
                <span> $  ${cantidad} </span>    
                <span class="badge badge-primary badge-pill">  ${gasto} </span>
                `;
                nuevo.innerHTML = `
                <p class="alert alert-danger"> El total es $ ${total} </p>
                <p class="alert alert-success" > Debe pagar cada uno $ ${dividir} </p>
                `;
             //insertar el html
             gastosListado.appendChild(li);

        }

        

 }

formulario.addEventListener('submit',function(e){

      e.preventDefault();

      //leer del formulario de gastos
      const nombrePersona = document.querySelector('#nombre').value;
      const nombreGasto = document.querySelector('#gasto').value;
      const cantidadGasto = document.querySelector('#cantidad').value;

      //instanciar la interfaz
      const ui = new Interfaz();

      //comprobar que los campos no esten vacios
      if(nombrePersona === '' ||nombreGasto === '' || cantidadGasto === ''){
         
         //2 parametros: mensaje y tipo
         ui.imprimirMensaje('Hubo un error','error');

      }else{
        
          //insertar en el HTML
          ui.imprimirMensaje('Correcto','correcto');
          ui.agregarGastoListado(nombrePersona,nombreGasto,cantidadGasto);
      }
}
);
    
    