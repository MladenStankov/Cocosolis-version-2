import React from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";

interface IUserComment {
  name?: string;
  ratingStars?: number;
  product?: string;
  comment?: string;
  likes?: number;
  dislikes?: number;
}

export default function UserComment({
  name = "Даниела Д.",
  ratingStars = 5,
  product = "WATERMELON Suntan & Body Oil",
  comment = "Копринено нежни масла за кожата. Ароматите са превъзходни.",
  likes = 5,
  dislikes = 2,
}: IUserComment) {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5 p-5 bg-white rounded-lg">
      <div className="flex flex-row items-start gap-5">
        <div className="w-12 h-12 bg-slate-400 text-white text-center rounded-full flex justify-center items-center text-lg px-3">
          {name
            .split(" ")
            .map((word) => word[0].toUpperCase())
            .join("")}
        </div>
        <div className="flex flex-col">
          <div className="flex flex-wrap gap-2 items-center">
            <p className="font-semibold">{name}</p>
            <p className="text-sm font-light text-gray-500">
              потвърдена поръчка
            </p>
          </div>
          <div className="flex flex-row text-beige mt-1">
            {Array.from({ length: ratingStars }).map((_, index) => (
              <FaStar key={index} size={15} />
            ))}
          </div>
          <p className="mt-3 text-gray-700 font-medium">Cocosolis</p>
          <p className="font-light text-gray-600">{comment}</p>
          <img
            src="https://placehold.co/100x100"
            alt="Product"
            className="w-20 md:w-24 mt-3 rounded"
          />
          <div className="flex flex-wrap gap-1 text-gray-500 mt-2 text-sm">
            <p className="font-thin">Mнението е за продукт</p>
            <span className="underline text-blue-600">{product}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end gap-3">
        <p className="text-gray-500 text-sm">08.07.2024</p>
        <div className="flex flex-row items-center gap-2">
          <p className="text-sm text-gray-600">
            Това мнение беше ли полезно за Вас?
          </p>
          <div className="flex items-center gap-1">
            <AiFillLike className="text-beige cursor-pointer" />
            <p className="text-sm">{likes}</p>
          </div>
          <div className="flex items-center gap-1">
            <AiFillDislike className="text-beige cursor-pointer" />
            <p className="text-sm">{dislikes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
