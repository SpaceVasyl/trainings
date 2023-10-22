const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  };
  
const tom = Object.create(book);
tom.pages = 643;
for (const key in tom) {
   console.log(key);
}