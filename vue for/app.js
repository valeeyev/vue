const app = Vue.createApp({
  data() {
    return {
      showBook: true,

      books: [
        { author: "George Orwell", book: "1984" },
        { author: "O'tkir Hoshimov", book: "Ikki eshik orasi" },
        { author: "Fyodr Dostoevskiy", book: "Telba" },
      ],
    };
  },
  methods: {
    toggle() {
      this.showBook = !this.showBook;
    },
  },
});

app.mount("#main");
