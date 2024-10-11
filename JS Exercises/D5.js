/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log('arrey completo', pets) //stampa in console l'arrey completo
console.log('il primo elemento di pets è ', pets[0]) //stampa in console solo l'elemento dell'arrey scelto, quindi 0 = dog
console.log('il secondo elemento di pets è ', pets[1]) //stampa in console solo l'elemento dell'arrey scelto, quindi 1 = cat
console.log('il terzo elemento di pets è ', pets[2]) //stampa in console solo l'elemento dell'arrey scelto, quindi 2 = hamster
console.log('il quarto elemento di pets è ', pets[3]) //stampa in console solo l'elemento dell'arrey scelto, quindi 3 = redfish

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort()
console.log('erray in ordine alfabetico', pets) //stampa in console l'array ordinato

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse()
console.log('erray in ordine invertito', pets) //stampa in console l'array in ordine invertito

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.push(pets.shift())
console.log('erray con il primo elemento spostato in ultima posizione', pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con 
    valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars[0].licensePlate = 'JD453LE'
cars[1].licensePlate = 'DB381RS'
cars[2].licensePlate = 'OS296DE'
console.log('arrey cars con licensePlate', cars) //stampa in console l'arrey con un nuovo elemento in ogni oggetto

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli 
    altri elementi. Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let newCar = {
  brand: 'Opel',
  model: 'Mokka',
  color: 'white',
  trims: ['safety', 'comfort', 'big'],
}
cars.push(newCar)
console.log('arrey cars con un nuovo oggetto', cars) //stampa in console l'arrey cars con il nuovo oggetto aggiunto

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop()
}
console.log('arrey cars con ultimi trims rimossi', cars)
//stampa in console l'arrey cars senza l'ultimo elemento degli arrey trims di ogni oggetto

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto 
    definito.
*/
const justTrims = []
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0])
}
console.log(
  "arrey justTrims con il primo trims di ogni oggetto dell'arrey cars",
  justTrims
) //stampa in console l'arrey justTrims con all'interno il primo elemento degli arrey trims di ogni oggetto

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera
    della proprietà "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color[0] === 'b') {
    console.log('Fizz')
  } else {
    console.log('Buzz')
  }
} //stampa in console Buzz, due Fizz e un Buzz in quanto i color degli oggetti sono Red, Blue, Black e White

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del 
    numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

while (numericArray.length < 32) {
  console.log('DENTRO AL CICLO WHILE, ECCO COUNTER')
}
console.log('USCITI DAL CICLO!')

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni 
    di ogni carattere all'interno dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const positionsArray = [7, 17, 21, 26, 4]
const n = charactersArray.length === positionsArray.length
// charactersArray[1] = positionsArray[1]
// charactersArray[2] = positionsArray[2]
// charactersArray[3] = positionsArray[3]
// charactersArray[4] = positionsArray[4]
const alphabetPositionArrey = []
switch (n) {
  case 'g':
    alphabetPositionArrey.push(positionsArray[0])
    break
  case 'n':
    break
  case 'u':
    break
  case 'z':
    break
  case 'd':
    break
}
console.log(alphabetPositionArrey)
