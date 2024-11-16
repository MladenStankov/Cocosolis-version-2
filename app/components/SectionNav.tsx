"use client";

import { useEffect, useState } from "react";

export default function SectionsNav() {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const navbarHeight = 150;

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");

    if (window.scrollY === 0) {
      setIsVisible(false);
      document.getElementById("logo")?.classList.remove("h-10");
      document.getElementById("logo")?.classList.add("h-20");
    } else {
      setIsVisible(true);
      document.getElementById("logo")?.classList.remove("h-20");
      document.getElementById("logo")?.classList.add("h-10");
    }

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight) {
        setActiveSection(section.id);
      }
    });
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full bg-white transition-transform duration-300 flex flex-row justify-center ${
        !isVisible ? "hidden" : ""
      }`}
    >
      <ul className="flex space-x-4 p-4 self-center">
        {[
          "ПРОМО",
          "КОСА",
          "КОЖА",
          "ЛИЦЕ",
          "АВТОБРОНЗАНТИ",
          "ТЕН",
          "БЛЯСЪК",
          "SPF",
        ].map((section) => (
          <li key={section}>
            <a
              onClick={() => scrollToSection(section)}
              className={`cursor-pointer text-brown ${
                activeSection === section ? "underline" : ""
              }`}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
