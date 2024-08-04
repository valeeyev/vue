const app = Vue.createApp({
  data() {
    return {
      showBook: true,

      books: [
        {
          author: "Fyodr Dostoevskiy",
          book: "Jinoyat va jazo",
          img: "assets/jinoyatvajazo.webp",
        },
        {
          author: "O'tkir Hoshimov",
          book: "Ikki eshik orasi",
          img: "assets/ikki-eshik-orasi.jpg",
        },
        {
          author: "Fyodr Dostoevskiy",
          book: "Telba",
          img: "assets/telba.jpg",
        },
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
