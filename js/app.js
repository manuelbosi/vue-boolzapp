// CREAZIONE ISTANZA VUE JS
const app = new Vue({
  el: "#app-container",
  data: {

    // STRUTTURA DATI
    // Array chatList di oggetti
    // Tutti gli oggetti avranno le stesse proprietà
    // immagine, nome, messaggi ricevuti, messaggi inviati, data ultimo messaggio, ultimo messaggio
    // Messaggi ricevuti: array di stringhe
    // Messaggi inviati: array di stringhe
    chatList: [
      { 
        profilePic: "img/avatar_1.jpg", 
        nome: "Michele",
        messaggi: [ 
          { testo: "messaggio per Michele", mioMessaggio: true, date: "01/01/2020 15:30:55" },
          { testo: "risposta da Michele", mioMessaggio: false, date: "02/01/2020 15:30:55"}
        ]
      },
      {
        profilePic: "img/avatar_2.jpg", 
        nome: "Fabio",
        messaggi: [ 
          { testo: "messaggio per Fabio", mioMessaggio: true, date: "03/01/2020 15:30:55" },
          { testo: "risposta da Fabio", mioMessaggio: false, date: "04/01/2020 15:30:55" }
        ]
      },
      {
        profilePic: "img/avatar_3.jpg", 
        nome: "Samuele",
        messaggi: [ 
          { testo: "messaggio per Samuele", mioMessaggio: true, date: "05/01/2020 15:30:55" },
          { testo: "risposta da Samuele", mioMessaggio: false, date: "06/01/2020 15:30:55" }
        ]      
      },
      {
        profilePic: "img/avatar_4.jpg", 
        nome: "Luisa",
        messaggi: [ 
          { testo: "messaggio per Luisa", mioMessaggio: true, date: "07/01/2020 10:30:55" },
          { testo: "risposta da Luisa", mioMessaggio: false, date: "08/01/2020 15:30:55" },
          { testo: "risposta da Luisa Due", mioMessaggio: false, date: "09/01/2020 15:30:55" }
        ]
      }
    ],
    isActiveChat: false,
    indexActive: 5, // altrimenti mi seleziona di default index 0
    lastMsgIndex: 1 // indice ultimo msg come faccio?
  },
  methods: {
    // Al click su ogni chat cambia la chat corrente
    changeChat(i) {
      console.log("INDEX", i);
      
      // CAMBIO VALORI USERBAR
      this.activeUser = this.chatList[i].nome;
      this.activePic = this.chatList[i].profilePic;
      this.activeLastMsgDate = this.chatList[i].lastMessageDate;
      // Cambio variabile per mostrare schermata chat cliccata
      this.isActiveChat = true;

      // Cambio l'indice attivo
      // e assegno il valore di indexChat riga 60 html
      this.indexActive = i
      console.log(this.chatList[this.indexActive].messaggi[this.chatList[this.indexActive].messaggi.length-1].date);
    }
  }
});