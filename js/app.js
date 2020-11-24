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
      lastMessageDate: "01 11 2020 10:52:03",
      lastMessage: "test michele",
      messaggi: [ 
        { testo: "messaggio per Michele", mioMessaggio: true },
        { testo: "risposta da Michele", mioMessaggio: false } ]
      },
      {
      profilePic: "img/avatar_2.jpg", 
      nome: "Fabio",
      lastMessageDate: "02 11 2020 10:52:03",
      lastMessage: "test fabio",
      messaggi: [ 
        { testo: "messaggio per Fabio", mioMessaggio: true },
        { testo: "risposta da Fabio", mioMessaggio: false } ]
      },
      {
      profilePic: "img/avatar_3.jpg", 
      nome: "Samuele",
      lastMessageDate: "03 11 2020 10:52:03",
      lastMessage: "test samuele",
      messaggi: [ 
        { testo: "messaggio per Samuele", mioMessaggio: true },
        { testo: "risposta da Samuele", mioMessaggio: false } ]      
      },
      {
      profilePic: "img/avatar_4.jpg", 
      nome: "Luisa",
      lastMessageDate: "04 11 2020 10:52:03",
      lastMessage: "test luisa",
      messaggi: [ 
        { testo: "messaggio per Luisa", mioMessaggio: true },
        { testo: "risposta da Luisa", mioMessaggio: false },
        { testo: "risposta da Luisa Due", mioMessaggio: false } ]
      }
    ],
    activeUser: "Clicca una chat per visualizzare i messaggi",
    activePic: "img/avatar_8.jpg",
    activeLastMsgDate: "",
    isActiveChat: false,
    indexActive: 0
  },
  methods: {
    // Al click su ogni chat cambia la chat corrente
    changeChat(i) {
      console.log("INDICE ELEMENTO CLICCATO", i);
      
      // CAMBIO VALORI USERBAR
      this.activeUser = this.chatList[i].nome;
      this.activePic = this.chatList[i].profilePic;
      this.activeLastMsgDate = this.chatList[i].lastMessageDate;
      // Cambio variabile per mostrare schermata chat cliccata
      // this.isActiveChat = true;

      // Cambio l'indice attivo
      this.indexActive = i
      
    }
  }
});