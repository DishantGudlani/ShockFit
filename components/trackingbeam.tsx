"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";
import Accordions from "./accordion";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6" >
   
      <Accordions />
    </TracingBeam>
  );
}
const dummyContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Umorna si od brijanja, depilacije i uraslih dlačica? Želiš se konačno
          osloboditi tih svakodnevnih rutina i uživati u glatkoj koži? Laserska
          epilacija je rješenje za tebe!
        </p>
      </>
    ),
    badge: "Zauvijek glatka koža bez brige!",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Naš najsuvremeniji laser cilja pigment u dlaci i pretvara ga u
          toplinu, oštećujući korijen dlake. To znači da dlake postaju sve
          slabije i rjeđe nakon svakog tretmana, a rezultati su vidljivi već
          nakon prvog tretmana.
        </p>
      </>
    ),
    badge: "Kako to funkcionira?",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <div>
          <ul>
            Brzo i bezbolno: Zahvaljujući našem naprednom laserskom sustavu,
            tretman je ugodan i traje kratko.
          </ul>
          <ul>
            Trajni rezultati: Uživaj u glatkoj koži, bez urastanja dlačica i
            neželjenih, bolnih te dosadnih prištića.
          </ul>
          <ul>
            Personalizirani pristup: Svaki klijent je jedinstven, pa tako i
            svaki tretman.
          </ul>
          <br />
          Najsuvremenija tehnologija: Koristimo najučinkovitiji laser na
          tržištu. Naše promijenjive četiri glave lasera su raznih veličina,
          tako da za manje dijelove tretiranja kože izaberemo manju glavu, ne
          smetajući ostalim dijelovima tijela. One su, za razliku od drugih
          glava lasera napravljene od metala tako da se hlade na -5°C i na taj
          način eliminiraju dodatno peckanje na Vašoj koži.
        </div>
      </>
    ),
    badge: "Zašto odabrati nas?",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <h1>Ključ uspješnog uklanjanja dlačica</h1>
        <p>
          Odabir pravog diodnog lasera za trajno uklanjanje dlačica ovisi o
          nekoliko čimbenika, a jedan od najvažnijih je valna duljina lasera.
          Valna duljina određuje koliko duboko laser prodire u kožu i koliko
          učinkovito cilja melanin u dlaci.
        </p>
      </>
    ),
    badge: "Zauvijek glatka koža bez brige!",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <h1>Zašto su valne duljine važne?</h1>
        <p>
          <b> Selektivna fototermoliza:</b> Princip rada lasera temelji se na
          selektivnoj fototermolizi. To znači da laser apsorbira svjetlost
          određene valne duljine, koja se pretvara u toplinu i uništava korijen
          dlake, a da pritom ne ošteti okolno tkivo.
          <br /> <b> Dubina prodiranja: </b>
          Različite valne duljine prodiru različito duboko u kožu. Neke su
          učinkovitije za površinske dlake, dok druge dublje prodiru kako bi
          zahvatile korijen dlake.
          <br /> <b>Tip kože i boja dlake:</b> Odabir valne duljine ovisi i o
          tipu kože i boji dlake. Tamnije dlake lakše apsorbiraju svjetlost, dok
          je za svijetle dlake potrebna drugačija valna duljina.
        </p>
      </>
    ),
    badge: "Ključ uspješnog uklanjanja dlačica",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          808 nm: Ovo je najčešće korištena valna duljina jer pruža optimalnu
          kombinaciju dubine prodiranja i učinkovitosti za različite tipove kože
          i boja dlaka. 755 nm: Ova valna duljina je učinkovitija za površinske
          dlake i svijetlu kožu. 1064 nm: Ova valna duljina je idealna za tamnu
          kožu i može se koristiti za uklanjanje dlačica na osunčanoj koži.
        </p>
      </>
    ),
    badge: "Najčešće korištene valne duljine diodnih lasera:",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
        Laseri koji nude više valnih duljina su svestraniji i mogu se prilagoditi različitim tipovima kože i dlaka. To omogućuje postizanje najboljih rezultata za svakog pojedinca.
        </p>
      </>
    ),
    badge: "Prednosti diodnih lasera s više valnih duljina:",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
        Valna duljina diodnog lasera igra ključnu ulogu u uspješnosti tretmana uklanjanja dlačica. Odabirom pravog lasera i prave valne duljine možete postići trajno glatku kožu bez neželjenih dlačica.
        </p>
      </>
    ),
    badge: "Zaključak:",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
       
      </>
    ),
    badge: "Oprosti se od dlačica i dočekaj sljedeće ljeto spremna!",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
       
      </>
    ),
    badge: "Zakaži besplatne konzultacije i uvjeri se sama!",
  },
];
