import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";

const Home = () => {
  const [shows, setShows] = useState([
    {
      title: "Spongebob Squarepants",
      seasons: 12,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjOkzSZZ0FTBC2Z45hL7HiGGQN0dkoAt5kPenpZWWGw&s",
      rating: 4.5,
      genres: ["Comedy", "Family"],
    },
    {
      title: "We Bare Bears",
      seasons: 4,
      imgSrc:
        "https://i.pinimg.com/564x/2f/37/c6/2f37c639a2170972de6054fab7c67040.jpg",
      rating: 4.5,
      genres: ["Comedy", "Family"],
    },
    {
      title: "Adventure Time",
      seasons: 10,
      imgSrc:
        "https://resizing.flixster.com/p4bNRltTA96oMxss5CJVBj0YvSU=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjIwNDEwMy53ZWJw",
      rating: 4.5,
      genres: ["Adventure", "Fantasy"],
    },
    {
      title: "Naruto",
      seasons: 6,
      imgSrc:
        "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
      rating: 4.5,
      genres: ["Action", "Adventure"],
    },
    {
      title: "Nussa",
      seasons: 3,
      imgSrc:
        "https://littlegiantz.com/wp-content/uploads/2022/01/NUSSA-WEBSITE-aspect-ratio-484-615-850x1080.png",
      rating: 4.5,
      genres: ["Education", "Family"],
    },
    {
      title: "Upin & Ipin",
      seasons: 5,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmKkc-QZuaqCleyNOZLoc5CX8Po3EsJrsjwfaI1X5aWA&s",
      rating: 4.5,
      genres: ["Comedy", "Family"],
    },
  ]);

  return (
    <div className="min-h-screen bg-zinc-800 text-white grid place-items-center">
      <div className="w-[500px] h-[90%]">
        <h1 className="text-3xl font-bold mb-4">All Shows!</h1>
        <div className="flex flex-col gap-3">
          {/* Item Card */}
          {shows.map((show) => (
            <ItemCard
              src={show.imgSrc}
              title={show.title}
              seasons={show.seasons}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

// Suatu page website, bagusnya dipisah antara logic dengan view
