var utente;

var cognomi = [ "Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi" ];

var lowercased = cognomi.map(name => name.toLowerCase());

// Chiedi all'utente il cognome
 utente = prompt("inserisci il tuo cognome")
 document.getElementById('posizione').innerHTML += utente;
 // inseriscilo in un array di altri cognomi
 lowercased.push(utente.toLowerCase());

 // stampa la lista ordinata alfabeticamente
 lowercased.sort();

// stampa la nuova posizione dove si trova l'utente

for (var i = 0; i < lowercased.length; i++) {

  if (utente == lowercased[i]) {
    var umana = ++i;
    // console.log(umana);
    document.getElementById('scelto').innerHTML += umana ;
  }
}
// console.log(lowercased);
document.getElementById('lista_cognomi').innerHTML += "<li>" + lowercased + "</li>";
