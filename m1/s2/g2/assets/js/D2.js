/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.

1) Dato Stringa che indica sia il singolo carattere che la sequenza finita di caratteri per esempio ('Mario')
2) Dato numerico (num)
3) Dato booleano (true oppure false)
4) Null che segnala l'assenza intenzionale di un oggetto, nella logica booleana indica condizione false.
5) Undefined e' una proprieta' che indica che una variabile non ha un valore assegnato oppure non e' definita.

*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

 var name = 'Luqman';

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/


let a = 10
let b = 5
let somma = a + b;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

var name = 'Mohammad';
const ABC = 1;

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

x -= 4;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john';
let name2 = 'John';

/*if (name1.toLowerCase() == name2.toLowerCase()) {
  alert ('Errore i nomi inseriti sono uguali')
}else if (name1 == name2){
  alert('Errore i nomi inseriti sono uguali')
}else{
  alert('I nomi sono stati inseriti correttamente')
}*/



//name1 == name2 ? alert('Errore, I nomi inseriti sono uguali') : alert ('i nomi sono stati inseriti correttamente');

 name1.toLowerCase() == name2.toLowerCase() ? alert('Errore i nomi inseriti sono uguali') : alert ('i nomi sono stati inseriti correttamente');