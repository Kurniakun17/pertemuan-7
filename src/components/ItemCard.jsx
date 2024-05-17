import { Heart, Tv } from "lucide-react";
import React, { useState } from "react";

const ItemCard = ({ src, title, seasons }) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="flex gap-4 bg-zinc-700 rounded-xl p-2">
      <img
        src={src}
        className="w-[70px] object-cover aspect-square object-top rounded-xl"
      />
      <div className="flex w-full items-center justify-between pr-3">
        <div className="flex flex-col gap-1">
          <button
            onClick={() => {
              navigate(`/shows/${title}`);
            }}
            className="text-xl font-semibold"
          >
            {title}
          </button>
          <div className="flex items-center gap-1">
            <Tv size={16} />
            <p>{seasons} Seasons</p>
          </div>
        </div>
        <button
          onClick={() => setIsLiked((prev) => !prev)}
          className="hover:scale-125  active:scale-75 duration-500"
        >
          <Heart
            size={24}
            className={`ml-auto duration-500 ease-out`}
            fill={isLiked ? "red" : "transparent"}
            stroke={isLiked ? "red" : "white"}
            color="white"
          />
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
