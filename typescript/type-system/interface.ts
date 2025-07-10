interface Movie {
  title: string;
  date: Date;
  rating: number;
  genre: string[];
  report(): string;
}

const currentMovie = {
  title: "dune",
  date: new Date(2021, 9, 24),
  rating: 8.2,
  genre: ["action", "adventure", "dream"],
  report(): string {
    return `Title: ${this.title}`;
  },
};

const logMovie = (movie: Movie): void => {
//   console.log(`Title: ${movie.title}`);
//   console.log(`Date: ${movie.date}`);
//   console.log(`rating: ${movie.rating}`);
//   console.log(`Genre: ${movie.genre.join(", ")}`);
  console.log(movie.report())
};

logMovie(currentMovie);
