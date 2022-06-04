const formulario = document.getElementById('agregar-gasto'); 


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

        //Inserta los gastos a la lista
        agregarGastoListado(nombre, cantidad){

             const gastosListado = document.querySelector('#gastos ul');  

             //crear un li
             const li = document.createElement('li');
             li.className = 'list-group-item d-flex justify-content-between align-items-center';
             //insertar el gasto
             li.innerHTML = `
                 ${nombre}
                <span class="badge badge-primary badge-pill"> $ ${cantidad} </span>`;
             //insertar el html
             gastosListado.appendChild(li);

        }

 }

formulario.addEventListener('submit',function(e){

      e.preventDefault();

      //leer del formulario de gastos
      const nombreGasto = document.querySelector('#gasto').value;
      const cantidadGasto = document.querySelector('#cantidad').value;

      //instanciar la interfaz
      const ui = new Interfaz();

      //comprobar que los campos no esten vacios
      if(nombreGasto === '' || cantidadGasto === ''){
         
         //2 parametros: mensaje y tipo
         ui.imprimirMensaje('Hubo un error','error');

      }else{
        
          //insertar en el HTML
          ui.imprimirMensaje('Correcto','correcto');
          ui.agregarGastoListado(nombreGasto,cantidadGasto);
      }
});