import { TracingBeamDemo } from '@/components/trackingbeam';
import Tsparticles from '@/components/Tsparticles';
import React from 'react';

const page = () => {
  return (
    <div>
      <div className="text-center justify-center text-2xl">
        <h1 className="text-3xl font-bold text-white mb-3">
          Trajno uklanjanje
        </h1>
        <h2 className="text-5xl font-bold">
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            dlačica diodnim laserom
          </span>
        </h2>
        <Tsparticles />
      </div>
      <br /><br />
      <div>
        <TracingBeamDemo />
      </div>

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-2 md:mt-0 text-left flex flex-col h-full">
          <p className="text-3xl lg:text-lg mb-4 animate-slide-in-bottom mt-9">
            Trajno uklanjanje dlačica diodnim laserom predstavlja najsuvremeniju tehnologiju u estetici koja osigurava dugotrajne rezultate uz minimalnu nelagodu. Ova metoda koristi specifičnu valnu duljinu svjetlosti koja se fokusira na melanin u dlačicama, omogućujući precizno uništavanje folikula bez oštećenja okolne kože. S obzirom na to da se laser može prilagoditi različitim tipovima kože i dlačica, diodni laser je prikladan za širok spektar klijenata.
            <br /><br />
            Jedna od ključnih prednosti diodnog lasera u odnosu na druge metode uklanjanja dlačica, poput voska ili britvice, je trajnost rezultata. Dok su tradicionalne metode privremene i često zahtijevaju čestu primjenu, diodni laser osigurava dugotrajno smanjenje dlačica, što vam omogućuje da se oslobodite svakodnevnog rutinskog uklanjanja dlačica.
            <br /><br />
            Uz to, tretmani diodnim laserom su brzi i učinkoviti. Svaka sesija traje samo nekoliko minuta, ovisno o području koje se tretira. Klijenti često primjećuju značajno smanjenje rasta dlačica već nakon nekoliko tretmana, a rezultat je glatka koža bez iritacije i crvenila koje često prate druge metode.
            <br /><br />
            S obzirom na sve prednosti, važno je da odaberete stručnjaka koji koristi najnoviju tehnologiju. U našem prostoru, svi tretmani se provode u sigurnom i udobnom okruženju, uz osobni pristup svakom klijentu. Naši iskusni tehničari će vas voditi kroz cijeli proces, osiguravajući da se osjećate ugodno i opušteno.
            <br /><br />
            Ne čekajte više da se oslobodite dlačica na jednostavan i učinkovit način. Rezervirajte svoj termin već danas i iskusite razliku koju nudi trajno uklanjanje dlačica diodnim laserom. Vaša koža zaslužuje najbolje, a mi smo tu da vam to pružimo. Nazovite nas sada i osigurajte svoj termin!
          </p>
        </div>

        {/* Image on the right side */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            alt="meetings"
            src="/images/image-11.jpeg"
            className="animate-slide-in-right w-[auto] h-[450px] object-cover rounded-lg gradient-shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
