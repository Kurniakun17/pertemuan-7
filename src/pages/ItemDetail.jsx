import { Star } from "lucide-react";
import React from "react";
const ItemDetail = ({ title, src, seasons, rating, genres }) => {
  return (
    <div className="min-h-screen bg-zinc-800 grid place-items-center">
      <div className="flex w-[95%] max-w-[1600px] mx-auto flex-col gap-2  mb-6  text-white">
        <div className="flex flex-col items-center sm:items-start gap-4 sm:gap-0 sm:flex-row w-full">
          <img
            src={src}
            alt={`${title}`}
            className="mt-4 aspect-[11/16] max-w-[150px] lg:max-w-[260px] rounded-lg object-cover bg-zinc-700"
          />
          <div className="w-full flex flex-col gap-2 mx-auto sm:px-8 sm:py-4 rounded-lg">
            <h1 className="text-3xl font-bold">{title}</h1>
            <Rating rating={rating} />
            {/* <Status status={data.status} /> */}
            <Summary
              summary={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, iusto! Impedit error omnis corrupti laudantium consequuntur doloribus officia ut architecto dignissimos nesciunt quibusdam vitae qui, eius ipsum, dolor aspernatur similique!"
              }
            />
            <Genres genres={genres} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Status = ({ status }) => {
  return (
    <div className="flex gap-2">
      <span className="text-gray-400">Status:</span>
      <span className="text-gray-200 font-semibold">
        {status === "To Be Determined" || status === "Running"
          ? "On-Going"
          : status}
      </span>
    </div>
  );
};

const Summary = ({ summary }) => {
  return summary ? (
    <div
      dangerouslySetInnerHTML={{ __html: summary }}
      className="mb-2 text-gray-400"
    />
  ) : (
    <div>
      <p>No summary available</p>
    </div>
  );
};

const Genres = ({ genres }) => {
  return (
    <div className="flex gap-4">
      {genres.map((genre, index) => (
        <span
          key={index}
          className="px-2 py-1 bg-gray-200 rounded-lg text-sm text-gray-700"
        >
          {genre}
        </span>
      ))}
    </div>
  );
};

const Rating = ({ rating }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="flex gap-1 items-center p-2 px-3 bg-zinc-800 rounded-lg font-bold text-xl">
        <Star
          className={`${
            rating ? "text-red-600 fill-red-600" : "text-gray-400 fill-gray-400"
          }`}
        />
        <p className="text-gray-200">{rating ? `${rating}/10` : "No Rating"}</p>
      </div>
    </div>
  );
};

export default ItemDetail;