import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full h-[600px] bg-[url(https://placehold.co/600x400)] bg-cover bg-center grid grid-cols-2"
    >
      <div className="col-span-1 flex flex-col justify-center items-center gap-4">
        <h1 className="text-brown text-3xl text-center max-w-[500px] font-medium">
          <span className="font-bold">AURA:</span> ПЪРВИЯТ БЛЕСТЯЩ СПРЕЙ С
          ПЕПТИДИ
        </h1>
        <button className="text-white bg-brown px-14 py-3 font-base hover:bg-beige transition-all duration-700">
          КУПИ СЕГА
        </button>
      </div>
    </section>
  );
}
