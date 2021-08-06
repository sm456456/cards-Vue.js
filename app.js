let vm = Vue.createApp({
  data() {
    return {
      people: [
        {
          name: "Johny",
          message: "I'm selling opel corsa from 2005."
        },
        {
          name: "Sarah",
          message:
            "I would like to sell Ford fiesta in good condition from 2015."
        },
        {
          name: "Natalia",
          message: "Seat ibiza for sale. Just 2 years old."
        },
        {
          name: "Timi",
          message: "My favourite car so far; Volvo v40 from 2016. Buy it now!"
        }
      ]
    }
  }
}).mount("#app")
