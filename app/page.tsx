import React from "react";
import FreeDeliveryPopup from "./components/FreeDeliveryPopup";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ProductsSections from "./components/ProductsSections";
import AboutUs from "./components/AboutUs";
import EmailCTA from "./components/EmailCTA";
import UserComments from "./components/UserComments";
import SectionsNav from "./components/SectionNav";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 left-0 shadow-md">
        <FreeDeliveryPopup />
        <div className="divide-y-[1px]">
          <Nav />
          <SectionsNav />
        </div>
      </header>
      <Hero />
      <ProductsSections />
      <AboutUs />
      <EmailCTA />
      <UserComments />
    </>
  );
}
