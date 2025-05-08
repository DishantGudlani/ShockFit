"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <>
      <div className="h-auto md:h-[40rem] max-w-[1200px] min-w-[300px] w-full rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mt-0 mx-auto">
        <h1 className="text-base md:text-lg lg:text-xl font-normal z-10 relative max-w-[600px] text-center flex mx-auto justify-center items-center text-gray-500 mt-5 md:mt-10">
          Zadovoljni klijenti
        </h1>
        <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold z-10 relative mt-2 text-center">
          Svjedočanstva naših{' '}
          <span
            style={{
              background: "linear-gradient(to right, #FF72E1, #F54C7A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            dragih klijenata
          </span>
        </h1>

        <img
          src="/images/google.svg"
          className="w-[80px] md:w-[100px] mt-5"
          alt=""
        />

        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  );
}

const testimonials = [
  {
    rating: 5,
    quote:
      "Krešo ima odličnu vještinu prenošenja znanja na druge i to sam mogao iskusiti kod njega na tečaju za masažu. Profesionalan je, no nije dosadan. Od mene kao učenika je očekivao da svaki put dam sve od sebe jer isto to i on prakticira kod svojih klijenata za vrijeme masaže.",
    name: "Ivan Vidovic",
    title: "2024-06-21",
  },
  {
    quote:
      "Krešo je vrhunski maser i učitelj masaže. Strpljiv i predan svome poslu. Imala sam priliku koristiti i njegove usluge privatnog treniranja gdje je pokazao maksimalnu suradljivost i prilagodljivost mojim potrebama. Sve preporuke za suradnju!",
    name: "Željka Vranaričić",
    title: "2024-06-21",
    rating: 5,
  },
  {
    quote:
      "Kresimir is a thoroughly lovely guy, intelligent, a good conversationalist and very professional masseur. He's my Go To guy each time I'm in Zagreb. Best massage I've had in a long while. Thoroughly recommended.",
    name: "Figaro Qua!",
    title: "2024-06-18",
    rating: 5,
  },
  {
    quote:
      "Topla preporuka za sve one koji traže kvalitetnu masažu u udobnosti vlastitog doma!",
    name: "Marina Škunca",
    title: "2024-06-21",
    rating: 5,
  },
  {
    quote:
      "Idealna jačina stiska, detaljan i sistematičan pristup masaži cijelog tijela. Također Krešo je komunikativna, ugodna, smirujuća osoba. Zaključak: masaža je rezultirala potpuno opuštanje duše&tijela!✨️????‍♀️✨️",
    name: "mirjana kalajzic",
    title: "2024-06-22",
    rating: 5,
  },
  {
    quote:
      "Kvalitetna usluga masaže u vlastitom domu vrijedna svake preporuke!",
    name: "H H",
    title: "2024-06-25",
    rating: 5,
  },
  {
    quote:
      "Krešo je fantastičan u svom poslu i ophođenju s klijentima. U svakom trenutku, profesionalan, ljubazan i trudi se napravit maksimalno opuštajuću atmosferu. Jedina osoba koju zovem kad me nešto boli i jedini koga preporucam drugima.",
    name: "Mina Secic",
    title: "2024-06-26",
    rating: 5,
  },
  {
    quote:
      "Krešo je stručan, profesionalan i pristupačan terapeut koji masažu prilagođava sukladno potrebama klijenta. Masažne tehnike te iskustvo koje je stekao godinama rezultirali su vrhunskom masažom za svaku preporuku!",
    name: "Aroma studio Kala",
    title: "2024-07-02",
    rating: 5,
  },
];
