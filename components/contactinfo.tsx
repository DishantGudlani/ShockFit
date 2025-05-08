import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contactinfo = () => {
  return (
    <div className="mt-20 md:mt-0 text-left flex flex-col h-full">
      <h6>Kontakt</h6>
      <h2 className="text-3xl font-bold text-white mb-6">
        Rezervirajte{" "}
        <span
          style={{
            background: "linear-gradient(to right, #FF72E1, #F54C7A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          svoju uslugu
        </span>
      </h2>

      <div className="flex flex-col space-y-6">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold">Naš email</span>
            <span className="text-white">shockepil@gmail.com</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold">Broj telefona</span>
            <span className="text-white">+385976665646</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="w-6 h-6 text-white"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold">Adresa</span>
            <span className="text-white">
              Medvedgradska 7a 10000 Zagreb Hrvatska
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactinfo;
