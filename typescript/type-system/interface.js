var currentMovie = {
    title: "dune",
    date: new Date(2021, 9, 24),
    rating: 8.2,
    genre: ["action", "adventure", "dream"],
    report: function () {
        return "Title: ".concat(this.title);
    },
};
var logMovie = function (movie) {
    //   console.log(`Title: ${movie.title}`);
    //   console.log(`Date: ${movie.date}`);
    //   console.log(`rating: ${movie.rating}`);
    //   console.log(`Genre: ${movie.genre.join(", ")}`);
    console.log(movie.report());
};
logMovie(currentMovie);
