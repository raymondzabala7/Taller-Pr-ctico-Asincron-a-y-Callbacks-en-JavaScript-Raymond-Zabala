# Taller-Pr-ctico-Asincron-a-y-Callbacks-en-JavaScript-Raymond-Zabala
Parte 1. Callbacks Básicos
¿Qué ventaja tiene enviar una función como parámetro? 
Aporta flexibilidad y reutilización de código. Permite que una función principal (realizarOperacion) defina la estructura del flujo, mientras que el comportamiento específico (sumar, restar, etc.) se decide dinámicamente al momento de llamarla.

¿Qué ocurre si enviamos una función diferente como callback? 
La función principal la ejecutará exactamente igual, siempre y cuando la nueva función acepte los mismos parámetros esperados. El resultado final cambiará según la lógica de esa nueva función.

¿La función principal necesita conocer qué operación matemática se ejecutará? 
No, a la función principal solo le importa que el parámetro recibido sea una función y que pueda ejecutarla pasándole los dos números. Delega la responsabilidad por completo.

Parte 2. Comprendiendo la Asincronía
Análisis
¿Coincidió tu predicción con el resultado?
Si coincidio, porque sabía que setTimeout es asíncrono. JavaScript no se queda esperando los 2 segundos a que termine la tarea; la deja corriendo en segundo plano y pasa directo a imprimir "Fin del programa.". Ya cuando se cumple el tiempo, ejecuta lo que faltaba.

¿Por qué el mensaje "Fin del programa" aparece antes que "Tarea completada"? 
Porque JavaScript maneja un modelo asíncrono y no bloqueante. Cuando se encuentra con una tarea que toma tiempo, no se queda esperando a que termine; la delega y continúa ejecutando las líneas de código siguientes inmediatamente.

¿Qué papel cumple setTimeout() en este comportamiento? 
Actúa como una API del navegador (o entorno Node.js) que saca la función del hilo principal de ejecución y la programa en un temporizador de fondo. Al expirar el tiempo, coloca el callback en la "cola de tareas" para que se ejecute cuando el hilo principal esté libre.

Parte 3. Simulación de Procesos Reales
Orden  Tarea
1     leer
2     reproducir
3	    solicitarJSON
¿Cuál terminó primero? 
leerSensor

¿Cuál terminó último? 
solicitarJSON 

¿Por qué el orden de finalización es diferente al orden de ejecución? 
Porque cada función tiene un tiempo de espera asíncrono distinto. Como JavaScript no bloquea el código, las tres tareas se inician casi en paralelo; por ende, las que requieren menos tiempo responden antes, independientemente del orden en que fueron invocadas.

Parte 4. Diseñando tu Propia Operación Asíncrona
Paso 1: Se llama a la función simularDescarga pasando el string "manual.pdf" y una función anónima como callback. Inmediatamente se imprime en consola el mensaje de inicio.

Paso 2: El intérprete encuentra el setTimeout. Configura un temporizador de 4000 milisegundos (4 segundos) en el navegador o sistema y "mueve" la función interna a la espera.

Paso 3: Pasados los 4 segundos, el temporizador expira. Se ejecuta el bloque interno que imprime que la descarga ha finalizado.

Paso 4: Justo después de ese mensaje, se invoca a callback(), lo que dispara la función externa original que muestra "Archivo listo para abrir.".

Parte 5. Análisis del Callback Hell
Describe el problema visual que presenta el código: 
El código tiende a acumular espacios hacia la derecha, formando una estructura triangular o en forma de pirámide invertida (también conocida como "Pirámide de la Perdición").

Explica qué es el Callback Hell: 
Es una situación que ocurre en JavaScript cuando se anidan múltiples callbacks dentro de otros callbacks de forma sucesiva para controlar flujos asíncronos secuenciales.

¿Por qué dificulta el mantenimiento de aplicaciones grandes? 
Legibilidad nula: Es muy complejo seguir el flujo visual del código.

Manejo de errores tedioso: Habría que gestionar los errores en cada nivel de anidación individualmente.

Dificultad para refactorizar: Mover o cambiar una de las funciones del medio puede romper toda la cadena fácilmente.

Alternativas modernas investigadas:

Promesas (Promises): Permiten encadenar métodos usando .then() y .catch(), transformando la estructura piramidal en una estructura vertical y limpia.

Async / Await: Una envoltura sintáctica sobre las Promesas que permite escribir código asíncrono con una apariencia completamente síncrona y secuencial usando bloqu
