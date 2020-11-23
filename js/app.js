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
      receivedMessages: ["Ciao", "come ti chiami?"], 
      sentMessages:["Ciao", "mi chiamo Michele"],
      lastMessageDate: "01 11 2020 10:52:03",
      lastMessage: "test michele"
      },
      {
      profilePic: "img/avatar_2.jpg", 
      nome: "Fabio", 
      receivedMessages: ["Ciao Fabio", "come stai?"], 
      sentMessages:["Ciao", "io bene tu?"],
      lastMessageDate: "02 11 2020 10:52:03",
      lastMessage: "test fabio"
      },
      {
      profilePic: "img/avatar_3.jpg", 
      nome: "Samuele", 
      receivedMessages: ["Ciao Samuele", "come stai?"], 
      sentMessages:["Ciao", "male tu?"],
      lastMessageDate: "03 11 2020 10:52:03",
      lastMessage: "test samuele"      
      },
      {
      profilePic: "img/avatar_4.jpg", 
      nome: "Luisa", 
      receivedMessages: ["Ciao Luisa", "perchè hai i baffi"], 
      sentMessages:["Ciao", "cosa ti interessa?"],
      lastMessageDate: "04 11 2020 10:52:03",
      lastMessage: "test luisa"
      }
    ],
    activeUser: "Clicca una chat per visualizzare i messaggi",
    activePic: "img/avatar_8.jpg",
    activeLastMsgDate: "",
    activeSentMsg: [],
    activeReceivedMsg: []
  },
  methods: {
    // Al click su ogni chat cambia la chat corrente
    changeChat(i) {
      console.log("INDICE ELEMENTO CLICCATO", i);
      
      // CAMBIO VALORI USERBAR
      this.activeUser = this.chatList[i].nome
      this.activePic = this.chatList[i].profilePic
      this.activeLastMsgDate = this.chatList[i].lastMessageDate
      this.activeSentMsg = this.chatList[i].sentMessages
      console.log(this.activeSentMsg);
      this.activeReceivedMsg = this.chatList[i].receivedMessages
      console.log(this.activeReceivedMsg);
      
    }
  }
});