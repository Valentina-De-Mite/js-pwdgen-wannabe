/* Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console) il risultato, che va formattato in questo modo: nomecognomecolorepreferito23 */

// chiedere il nome utente
const userName = prompt("Inserisci il tuo nome");
// chiedere il cognome utente
const userSurname = prompt("Inserisci il tuo cognome");

// chiedere il colore preferito dell'utente
const userColour = prompt("Inserisci il tuo colore preferito");

// selezionare i tag tramite i loro id e inserire il risultato
//
const result = document.getElementById("result");
// stampare il risultato in console
console.log(userName + userSurname + userColour + "23");
// stampare il risultato in pagina +23

result.innerHTML = userName + userSurname + userColour + "23";

/* Strumenti

- prompt per il nome
- prompt per il cognome
- prommt per il colore preferito
- document.getElementById
- console.log 


*/
