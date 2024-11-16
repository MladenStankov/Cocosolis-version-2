import React from "react";
import Product from "./Product";

export default function FaceSection() {
  return (
    <section
      id="ЛИЦЕ"
      className="bg-beige-light ~md/xl:~px-10/40 py-20 flex flex-col items-center gap-14"
    >
      <div className="text-brown text-center">
        <h2 className="text-5xl font-light">ЛИЦЕ</h2>
        <h3 className="text-base">
          Високоефективни натурални продукти за подмладена и сияйна кожа
        </h3>
      </div>

      <div className="grid grid-cols-auto-fill-400 gap-10 w-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <Product key={index} ratings={1332} ratingStars={5} />
        ))}
        <div className="bg-[url(https://placehold.co/600x400)] bg-cover bg-center w-full min-h-[400px]"></div>
      </div>
    </section>
  );
}
