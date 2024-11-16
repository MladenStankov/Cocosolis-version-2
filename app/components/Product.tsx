import Link from "next/link";
import React from "react";

import { BsInfoLg } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

interface IProduct {
  image?: string;
  discount?: number;
  title?: string;
  subTitle?: string;
  description?: string;
  price?: number;
  lowestPriceText?: string;
  href?: string;
  originalPrice?: number;

  badge?: boolean;
  improvedFormula?: boolean;

  ratingStars?: number;
  ratings?: number;

  volume1?: number;
  volume2?: number;
  price1?: number;
  price2?: number;
}

export default function Product({
  image = "https://placehold.co/600x400",
  discount,
  title = "DREAM HAIR",
  subTitle,
  description = "Трансформирайте косата си натуралнo",
  price = 92.65,
  lowestPriceText,
  href = "#",
  originalPrice,
  badge,
  improvedFormula,
  ratingStars,
  ratings,
  volume1,
  volume2,
  price1,
  price2,
}: IProduct) {
  return (
    <div className="flex flex-col text-brown items-center">
      <Link href={href} className="relative">
        <img src={image} className="w-full h-full" />
        {discount && (
          <div className="absolute top-2 -left-3 text-white bg-purple rounded-lg px-2 py-1">
            -{discount}%
          </div>
        )}
        {badge && (
          <div className="absolute top-0 flex flex-col gap-3">
            <img
              src="https://cocosolis.com/wp-content/uploads/awards-beauty-shortlist-editors-choice.png"
              className="w-1/5 top-0"
            />
            {improvedFormula && (
              <div className=" text-white bg-beige max-w-[90px] rounded-lg p-1  leading-5">
                IMPROVED FORMULA
              </div>
            )}
          </div>
        )}
      </Link>

      <div className="text-center">
        <h2 className="text-2xl font-normal">{title}</h2>
        {subTitle && <h3 className="text-xl">{subTitle}</h3>}
        {ratingStars && ratings && (
          <div className="flex flex-row justify-center">
            {Array.from({ length: ratingStars }).map((_, index) => (
              <FaStar key={index} size={15} className="text-beige" />
            ))}
            <p className="text-xs text-beige">{ratings} мнения</p>
          </div>
        )}
        {description && <p>{description}</p>}
      </div>

      {volume1 && volume2 && price1 && price2 ? (
        <>
          <div className="flex gap-6">
            <div className="mt-4 px-4">
              <p className="text-xl mx-2">
                {price1.toLocaleString("bg-BG", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
                лв. /
                <span className="ml-1 font-light text-base">{volume1} ML</span>
              </p>
              <button className="text-white bg-brown font-light w-full py-3 hover:bg-beige transition-all duration-300">
                ДОБАВИ
              </button>
            </div>

            <div className="mt-4">
              <p className="text-xl mx-2">
                {price2.toLocaleString("bg-BG", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
                лв. /
                <span className="ml-1 font-light text-base">{volume1} ML</span>
              </p>
              <button className="text-white bg-brown font-light w-full py-3 hover:bg-beige transition-all duration-300">
                ДОБАВИ
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mt-4">
            <p className="text-2xl">
              {price.toLocaleString("bg-BG", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              лв.
              {originalPrice && (
                <span className="line-through ml-1">
                  {originalPrice.toLocaleString("bg-BG", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                  лв.
                </span>
              )}
            </p>
          </div>

          {lowestPriceText && (
            <div className="flex gap-1 items-center mb-1">
              <BsInfoLg
                size={12}
                className="text-white bg-beige rounded-full"
              />
              <p className="text-xs">{lowestPriceText}</p>
            </div>
          )}

          <button className="text-white bg-brown font-light w-full py-3 hover:bg-beige transition-all duration-300">
            ДОБАВИ
          </button>
        </>
      )}
    </div>
  );
}
