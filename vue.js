Vue.createApp({
  data() {
    return {
      books: [
        {
          title: "In Search of Lost Time",
          author: "Marcel Proust",
          price: "$200",
          img: "images/book1.jpeg",
          isFavorite: true,
        },
        {
          title: "Ulysses",
          author: "James Joyce",
          price: "$200",
          img: "images/book2.jpeg",
          isFavorite: true,
        },
        {
          title: "Don Quixote",
          author: "Miguel de Cervantes",
          price: "$200",
          img: "images/book3.jpeg",
          isFavorite: true,
        },
        {
          title: "One Hundred Years of Solitude",
          author: "Gabriel Garcia Marquez",
          price: "$200",
          img: "images/book4.jpeg",
          isFavorite: false,
        },
        {
          title: "The Great Gatsby",
          author: "F.Scott Fitzgerald",
          price: "$200",
          img: "images/book5.jpeg",
          isFavorite: false,
        },
        {
          title: "Moby Dick",
          author: "Herman Melville",
          price: "$200",
          img: "images/book6.jpeg",
          isFavorite: false,
        },
        {
          title: "War and Peace",
          author: "Leo Tolstoy",
          price: "$200",
          img: "images/book7.jpeg",
          isFavorite: false,
        },
        {
          title: "Hamlet",
          author: "William Shakespeare",
          price: "$200",
          img: "images/book8.jpeg",
          isFavorite: false,
        },
        {
          title: "The Odyssey",
          author: "Homer",
          price: "$200",
          img: "images/book9.jpeg",
          isFavorite: true,
        },
        {
          title: "Madame Bovary",
          author: "Gustave Flaubert",
          price: "$200",
          img: "images/book10.jpeg",
          isFavorite: true,
        },
      ],
    };
  },
}).mount("#app");
