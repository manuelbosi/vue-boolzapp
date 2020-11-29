// CREAZIONE ISTANZA VUE JS
const app = new Vue({
  el: "#app-container",
  data: {

    // STRUTTURA DATI
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
          { testo: "risposta da Luisa Due", mioMessaggio: false, date: "25/01/2020 15:30:55" },
          { testo: "messaggio per Luisa Due", mioMessaggio: true, date: "31/01/2020 10:30:55" }
        ]
      }
    ],
    isActiveChat: false,
    indexActive: null,
    yourMessage: "",
    searchInput: "",
    dropdownIndex: null,
    dropdownIconIndex: null,
    randomQuestions: ["Ok", "Va Bene", "Certo", "Nessun problema", "A domani", "Non ci provare", "Sei fortunato", "Impossibile"],
    contactList: ["Giovanni", "Luca", "Fabrizio", "Andrea"]
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
      // console.log(this.chatList[this.indexActive].messaggi[this.chatList[this.indexActive].messaggi.length-1].date);

      // Assegno un valore nullo altrimenti rimane aperto al cambio chat
      this.dropdownIndex = null
    },
    sendMessage() {

      // Creo un nuovo oggetto messaggio da inserire
      let newMessage = {
        testo: this.yourMessage,
        mioMessaggio: true,
        date: this.getCurrentDate()
      };

      // Pusho il nuovo messaggio nella chat attiva
      this.chatList[this.indexActive].messaggi.push(newMessage);

      // Ripulisco l'input
      this.yourMessage = "";

      let autoReponse = {
        testo: this.getRandomQuestion(),
        mioMessaggio: false,
        date: this.getCurrentDate()
      }

      // Faccio partire un timer di 1 secondo che esegue la funzione
      // Con la funziona normale non va con l'arrow function sì
      setTimeout(() => {
        // Pusho la risposta automatica nella chat attiva
        this.chatList[this.indexActive].messaggi.push(autoReponse);
      }, 1000);
    },
    getCurrentDate() {
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth();
      let year = date.getFullYear();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
    },
    openDropdown(i) {
      this.dropdownIndex = i
    },
    removeMessage(i) {
      this.chatList[this.indexActive].messaggi.splice(i, 1);
    },
    getRandomQuestion() {
      return this.randomQuestions[Math.floor(Math.random() * this.randomQuestions.length) + 1]
    },
    addChat() {
      
      let randomChat = this.contactList[Math.floor(Math.random() * this.contactList.length) + 1]

      let newChatItem = {
        profilePic: "img/avatar_5.jpg", 
        nome: randomChat,
        messaggi: [ 
          { testo: this.getRandomQuestion(), mioMessaggio: true, date: this.getCurrentDate() }
        ]
      };

      this.chatList.push(newChatItem);
    }
  },
  // updated: function () {
  //   // Scroll ogni nuovo messaggio
  //   let container = document.querySelector(".current-chat");
  //   let scrollHeight = container.scrollHeight;
  //   container.scrollTop = scrollHeight;
  // }
});