const app = Vue.createApp({
  data() {
    return {
      showBook: true,

      books: [
        {
          author: "Fyodr Dostoevskiy",
          book: "Jinoyat va jazo",
          img: "assets/jinoyatvajazo.webp",
          liFav: true,
        },
        {
          author: "O'tkir Hoshimov",
          book: "Ikki eshik orasi",
          img: "assets/ikki-eshik-orasi.jpg",
          liFav: true,
        },
        {
          author: "Fyodr Dostoevskiy",
          book: "Telba",
          img: "assets/telba.jpg",
          liFav: true,
        },
      ],
    };
  },
  methods: {
    toggle() {
      this.showBook = !this.showBook;
    },
    Favbook(i) {
      i.liFav = !i.liFav;
    },
  },

  computed: {
    FilteredBooks() {
      return this.books.filter((book) => book.liFav);
    },
  },
});

app.mount("#main");
