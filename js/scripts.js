/** REEMPLAZAR HTML CON JQUERY:_
 * +-En este Ejemplo vamos a usar JQuery para Agregar/Editar/Reemplazar Código y Contenido HTML, en este Ejemplo Reemplazando el Elemento <div id="c1"> que está dentro del Elemento <div id="parent">.
 * *-Para Lograr eso, Llamamos con JQuery al Botón "#button4" para que al Hacerle Click le Apliquemos al Elemento <div id="parent"> el Método ".html(***) dónde Los "***" Representan el Contenido por el que se va a
 *  Reemplazar lo que sea haya estado antes.*/

$("#button4").click(() => $('#parent1').html('<div id="c1">Bye Bye World!.</div>'));

/** AGREGAR HTML CON JQUERY:_
 * AGREGÁNDOLO DESPUÉS DEL PREEXISTENTE:_
 * +-.Aquí NO Reemplazamos el Elemento HTML si nó que le agregamos uno más Después del Elemento ya existente, haciendo Exactamente El Mismo Procedimiento que el Anterior PERO Reemplazando el Método JQuery ".html(***)" 
 * por el Método JQuery ".append(***)".*/

$("#button5").click(() => $('#parent2').append('<div id="c2">Bye Bye World!.</div>'));

/** AGREGÁNDOLO ANTES DEL PREEXISTENTE:_
 * +-Acá agregamos un Elemnto HTML ANTES del Elemento ya existente. Para eso Repetimos el Proceso Anterior PERO En vez de Llamar al Elemento JQuery Contenedor(Que en el Ejemplo Anterior era "#parent2") Llamamos con
 *  JQuery al Elemento Preexistente Al que se le va a poner Antes el Nuevo Elemento, y en vez de usar el Método JQuery ".append(***)" usamos el Método JQuery ".before(***)".*/

$("#button6").click(() => $("#c3").before('<h1>Hello Before!</h1>'));

/** AGREGÁNDOLO DESPUÉS DEL PREEXISTENTE(Otra Forma):_
 * +-Acá agregamos un Elemnto HTML DESPUÉS del Elemento ya existente. Para eso Repetimos el Proceso Anterior PERO en vez de usar el Método JQuery ".before(***)" usamos el Método JQuery ".after(***)".*/

$("#button7").click(() => $("#c4").after('<h1>Hello After!</h1>'));

/** AGREGAR TEXTO NUEVO ANTES DEL PREEXISTENTE EN EL MISMO ELEMENTO:_
 * +-Acá agregamos Texto dentro del Elemento ya existente, pero lo agregamos ANTES del Texto que ya estaba Escrito. Para eso Repetimos el Proceso Anterior PERO en vez de usar el Método JQuery ".after(***)" usamos 
 * el Método JQuery ".prepend(***)".*/

$("#button8").click(() => $("#c5").prepend('Welcome and... '));

/** REEMPLAZAR EL TEXTO DENTRO DE UN ELEMNTO HTML:_
 * +-Acá Reemplazamos el Texto dentro del Elemento ya existente. Para eso Repetimos el Proceso Anterior PERO en vez de usar el Método JQuery ".prepend(***)" usamos 
 * el Método JQuery ".text(***)".*/

$("#button9").click(() => $("#c6").text('I see you later!'));

/** EFECTO TOGGLE Standard(REBOTE EN UNA MISMA ACCIÓN):_
 *+-El Efecto Toggle lo que hace es alterar el Estado del Atributo "display: ***;" de la Clase CSS que tenga el Objeto, los Cuales son "none" cuando NO se Muestra y "lock" cuando SI se Muestra(Es el Por Defecto).
 Para usar el Efecto Toggle le Agregamos a un Elemento el Método JQuery ".toggle()".*/

$("#button10").click(() => $("#parent7").toggle());

/** EFECTO TOGGLE FAST(REBOTE EN UNA MISMA ACCIÓN RÁPIDO):_
 *+-Lo mismo que el Efecto Toggle Standard, pero más Rápido. Para Usar el Efecto Toggle Fast le Agregamos a un Elemento el Método JQuery ".toggle('fast')".*/

$("#button11").click(() => $("#parent8").toggle("fast"));

 
/** EFECTO TOGGLE SLOW(REBOTE EN UNA MISMA ACCIÓN LENTO):_
 *+-Lo mismo que el Efecto Toggle Standard, pero más Lento. Para Usar el Efecto Toggle Slow le Agregamos a un Elemento el Método JQuery ".toggle('slow')".*/

$("#button12").click(() => $("#parent9").toggle("slow"));


/** EFECTO TOGGLE CUSTOM(REBOTE EN UNA MISMA ACCIÓN PERSONALIZADO):_
 *+-Lo mismo que el Efecto Toggle Standard, pero más con la Velocidad Personalizada con un Nº que Representa Milisegundos. Para Usar el Efecto Toggle Custom con Velocidad de Despliegue de 1 Segundo le Agregamos
  a un Elemento el Método JQuery ".toggle(5000)" donde el Nº 5000 (Sin Usar Comillas) Representan Cinco Mil Milisegundos = 5 Segundos.*/

 $("#button13").click(() => $("#parent10").toggle(5000));


