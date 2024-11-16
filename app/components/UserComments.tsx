import React from "react";
import UserComment from "./UserComment";

export default function UserComments() {
  return (
    <section className="flex flex-col mx-36 py-20 gap-5">
      <h2 className="text-5xl mb-2 text-brown">ПОТРЕБИТЕЛСКИ ОТЗИВИ</h2>
      <p className="text-xl text-brown">
        18 369 мнения, от които 2 299 от български клиенти
      </p>

      {Array.from({ length: 10 }).map((_, index) => (
        <UserComment key={index} />
      ))}
    </section>
  );
}
