import React from "react";
import ReactDOM from "react-dom/client";

export const tourData = [
  {
    id: 1,
    title: "New York",
    desc: "Home to the Statue of Liberty, Empire State Building, Central Park, Times Square, New York is the most populous city in the USA.",
    image:
      "https://cdn.pixabay.com/photo/2017/06/07/15/47/new-york-city-2380683_1280.jpg",
  },
  {
    id: 2,
    title: "Paris",
    desc: "The romantic city of lights, Paris is famous for the Eiffel Tower, Louvre Museum, and exquisite cuisine.",
    image:
      "https://cdn.pixabay.com/photo/2017/06/07/15/47/new-york-city-2380683_1280.jpg",
  },
  {
    id: 3,
    title: "Tokyo",
    desc: "A futuristic blend of tradition and innovation, Tokyo dazzles with neon lights, temples, and world-class technology.",
    image:
      "https://cdn.pixabay.com/photo/2017/06/07/15/47/new-york-city-2380683_1280.jpg",
  },
  {
    id: 4,
    title: "London",
    desc: "From Big Ben to Buckingham Palace, London offers a rich history, modern architecture, and diverse culture in every corner.",
    image:
      "https://cdn.pixabay.com/photo/2017/06/07/15/47/new-york-city-2380683_1280.jpg",
  },
  {
    id: 5,
    title: "Rome",
    desc: "Explore the ruins of ancient civilization with the Colosseum, Roman Forum, and the Vatican in the eternal city of Rome.",
    image:
      "https://cdn.pixabay.com/photo/2017/06/07/15/47/new-york-city-2380683_1280.jpg",
  },
  {
    id: 6,
    title: "Dubai",
    desc: "A luxury playground in the desert, Dubai is known for the Burj Khalifa, luxury shopping, and man-made islands.",
    image:
      "https://cdn.pixabay.com/photo/2017/06/07/15/47/new-york-city-2380683_1280.jpg",
  },
  {
    id: 7,
    title: "Istanbul",
    desc: "A cultural fusion of East and West, Istanbul offers historic mosques, vibrant bazaars, and rich Ottoman heritage.",
    image:
      "https://cdn.pixabay.com/photo/2017/06/07/15/47/new-york-city-2380683_1280.jpg",
  },
  {
    id: 8,
    title: "Bangkok",
    desc: "The capital of Thailand, Bangkok is known for ornate shrines, vibrant street life, and flavorful cuisine.",
    image:
      "https://cdn.pixabay.com/photo/2017/06/07/15/47/new-york-city-2380683_1280.jpg",
  },
  {
    id: 9,
    title: "Barcelona",
    desc: "Barcelona boasts Gaudí architecture, Mediterranean beaches, and lively culture.",
    image:
      "https://cdn.pixabay.com/photo/2017/06/07/15/47/new-york-city-2380683_1280.jpg",
  },
  {
    id: 10,
    title: "Cape Town",
    desc: "With Table Mountain as its backdrop, Cape Town is a stunning city known for its natural beauty and cultural diversity.",
    image:
      "https://cdn.pixabay.com/photo/2017/06/07/15/47/new-york-city-2380683_1280.jpg",
  },
  {
    id: 11,
    title: "Sydney",
    desc: "Famous for the Sydney Opera House and Harbour Bridge, Sydney combines beaches, bushland, and urban sophistication.",
    image:
      "https://cdn.pixabay.com/photo/2017/06/07/15/47/new-york-city-2380683_1280.jpg",
  },
  {
    id: 12,
    title: "Rio de Janeiro",
    desc: "From the iconic Christ the Redeemer to Copacabana Beach, Rio bursts with life, music, and unmatched scenery.",
    image:
      "https://cdn.pixabay.com/photo/2017/06/07/15/47/new-york-city-2380683_1280.jpg",
  },
];

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

const Header = () => {
  return <h1>Tour Routes</h1>;
};

const Main = () => {
  const tours = tourData;
  // const tours = []
  return (
    <main className="main">
      { tours.length > 0 ? (
      <div>
        <h1>Places to visit</h1>
        {tourData.map((tour) => (
          <Tour key={tour.id} tourObj={tour} />
        ))}
      </div>) : (
        <div>
          <h1>No tours available</h1>
          <p>Please check back later.</p>
        </div>
      )}
    </main>
  );
};

const Tour = ({ tourObj }) => {
  console.log(tourObj);
  const { image, title, desc } = tourObj;
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

const Footer = () => {
  const hours = new Date().getHours();
  const openHours = 10;
  const closeHours = 22;

  const isOpen = hours >= openHours && hours < closeHours;
  if (isOpen) {
    console.log("We are currently open");
  } else {
    console.log("Sorry we are closed");
  }

  return (
    <footer>
      {isOpen ? (<p>We are currently open</p>) : (<p>Sorry, we are closed</p>)}
      <p>{new Date().toLocaleTimeString()} We are the best tour company</p>
    </footer>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
