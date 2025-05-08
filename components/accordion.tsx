"use client";
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import image1 from "../public/images/mcn-1.jpg"; // Image import
import image2 from "../public/images/mcn-2.jpg"; // Image import
import image3 from "../public/images/cng-1.png"; // Image import
import image4 from "../public/images/photoS5.jpeg"; // Image import
import image5 from "../public/images/photoS3.jpeg"; // Image import
import image6 from "../public/images/photoS4.jpeg"; // Image import
import image7 from "../public/images/image-8.jpeg"; // Image import
import image8 from "../public/images/image-9.jpeg"; // Image import
import image9 from "../public/images/image-10.jpeg"; // Image import

const Accordions = () => {
  return (
    <div id="choose">
      <Accordion  sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-header"
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          sx={{
            color: "white",
            backgroundColor: "transparent",
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <Typography>Zauvijek glatka koža bez brige!</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "transparent", color: "white" }}>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <img src={image7.src} alt="Description 3" style={{ width: "45%", borderRadius: "8px", maxWidth: "12rem" }} />
            <img src={image8.src} alt="Description 3" style={{ width: "45%", borderRadius: "8px", maxWidth: "10rem" }} />
            <img src={image9.src} alt="Description 3" style={{ width: "45%", borderRadius: "8px", maxWidth: "12rem" }} />
          </div>
          <Typography>
            Umorna si od brijanja, depilacije i uraslih dlačica? Želiš se konačno osloboditi tih svakodnevnih rutina i uživati u glatkoj koži? Laserska epilacija je rješenje za tebe!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-header"
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          sx={{
            color: "white",
            backgroundColor: "transparent",
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <Typography>Kako to funkcionira?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "transparent", color: "white" }}>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <img src={image3.src} alt="Description 3" style={{ width: "100%", borderRadius: "8px", maxWidth: "20rem" }} />
          </div>
          <Typography>
            Naš najsuvremeniji laser cilja pigment u dlaci i pretvara ga u toplinu, oštećujući korijen dlake. To znači da dlake postaju sve slabije i rjeđe nakon svakog tretmana, a rezultati su vidljivi već nakon prvog tretmana.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-header"
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          sx={{
            color: "white",
            backgroundColor: "transparent",
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <Typography>Zašto odabrati nas?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "transparent", color: "white" }}>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <img src={image1.src} alt="Description 1" style={{ width: "45%", borderRadius: "8px", maxWidth: "8rem" }} />
            <img src={image2.src} alt="Description 2" style={{ width: "45%", borderRadius: "8px", maxWidth: "8rem" }} />
          </div>
          <Typography component="div">
            <ul className="list-disc pl-4 mb-4">
              <li>
                Brzo i bezbolno: Zahvaljujući našem naprednom laserskom sustavu, tretman je ugodan i traje kratko.
              </li>
              <li>
                Trajni rezultati: Uživaj u glatkoj koži, bez urastanja dlačica i neželjenih, bolnih te dosadnih prištića.
              </li>
              <li>
                Personalizirani pristup: Svaki klijent je jedinstven, pa tako i svaki tretman.
              </li>
            </ul>
            <p>
              Najsuvremenija tehnologija: Koristimo najučinkovitiji laser na tržištu. Naše promijenjive četiri glave lasera su raznih veličina, tako da za manje dijelove tretiranja kože izaberemo manju glavu, ne smetajući ostalim dijelovima tijela. One su, za razliku od drugih glava lasera napravljene od metala tako da se hlade na -5°C i na taj način eliminiraju dodatno peckanje na Vašoj koži.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <AccordionSummary
          id="panel4-header"
          aria-controls="panel4-header"
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          sx={{
            color: "white",
            backgroundColor: "transparent",
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <Typography>Ključ uspješnog uklanjanja dlačica</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "transparent", color: "white" }}>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <img src={image4.src} alt="Description 1" style={{ width: "45%", borderRadius: "8px", maxWidth: "10rem" }} />
            <img src={image5.src} alt="Description 2" style={{ width: "45%", borderRadius: "8px", maxWidth: "15rem" }} />
          </div>
          <Typography>
            Odabir pravog diodnog lasera za trajno uklanjanje dlačica ovisi o nekoliko čimbenika, a jedan od najvažnijih je valna duljina lasera. Valna duljina određuje koliko duboko laser prodire u kožu i koliko učinkovito cilja melanin u dlaci.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <AccordionSummary
          id="panel5-header"
          aria-controls="panel5-header"
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          sx={{
            color: "white",
            backgroundColor: "transparent",
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <Typography>Zašto su valne duljine važne?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "transparent", color: "white" }}>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <img src={image6.src} alt="Description 3" style={{ width: "45%", borderRadius: "8px", maxWidth: "15rem" }} />
          </div>
          <ul className="list-disc pl-4 mb-4">
            <li>
              Selektivna fototermoliza: Princip rada lasera temelji se na selektivnoj fototermolizi. To znači da se određene valne duljine koriste za ciljanje različitih tipova dlačica i kože.
            </li>
            <li>
              Učinkovitost: Prava valna duljina znači bolje rezultate. Odabirom pravog lasera za svoj tip kože i boju dlačica povećavaš šanse za uspjeh.
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <AccordionSummary
          id="panel6-header"
          aria-controls="panel6-header"
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          sx={{
            color: "white",
            backgroundColor: "transparent",
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <Typography>Prijavi se odmah!</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "transparent", color: "white" }}>
          <Typography>
            Za više informacija ili za dogovoriti konzultacije, kontaktirajte nas. Naši stručnjaci su tu da odgovore na sva vaša pitanja.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordions;
