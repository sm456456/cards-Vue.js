let vm = Vue.createApp({
  data() {
    return {
      people: [
        {
          name: "Johny",
          message: "I'd like to sell my car."
        }
      ]
    }
  }
}).mount("#app")
