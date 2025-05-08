import React from 'react'
import { FaCheck } from 'react-icons/fa';

const Classic = () => {
  const benefits = [
    'Bolje opuštenost cijelog tijela',
    'Bržu izmjenu tvari u organizmu',
    'Smirenost i rad na psihičkom i mentalnom stanju',
    'Dizanje imuniteta i poboljšanje sna',
    'Bolju cirkulaciju',
  ];
  return (
    <div>
      <div  className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="mt-2 md:mt-0 text-left flex flex-col h-full">
       
       <h2 className="text-4xl font-bold text-white mb-6 animate-slide-in-top">
       {" "}
         <span
           style={{
             background: "linear-gradient(to right, #FF72E1, #F54C7A)",
             WebkitBackgroundClip: "text",
             WebkitTextFillColor: "transparent",
           }}
         >
    Klasična i suha masaža: Koja je razlika?
         </span>         
       </h2>
       <p className="text-base lg:text-lg mb-4 animate-slide-in-bottom">
       Mnogi se pitaju kakva je razlika između klasične masaže s uljem i suhe masaže. Odgovor je jednostavan: klasična masaža s uljem koristi različita kontaktna sredstva poput ulja, emulzija ili krema, dok se suha masaža izvodi bez tih sredstava, a može se raditi i preko odjeće. Ako ste u žurbi za sastanak ili izlazak, suha klasična masaža može biti savršeno rješenje za vas.
       <br />
       Glavna razlika leži u tehnici — suha masaža ne uključuje klizanje ili trenje ruku masera o tijelo klijenta. Umjesto toga, koristi različite pritiske i gnječenja, što može biti fizički zahtjevnije za masera, ali pruža jače osjećaje opuštanja za klijenta. Stoga je suha masaža često skuplja zbog zahtjevnije tehnike izvođenja.
       <br />
       <br />
       <span
           style={{
             background: "linear-gradient(to right, #FF72E1, #F54C7A)",
             WebkitBackgroundClip: "text",
             WebkitTextFillColor: "transparent",
           }}
         >
    Klasična i suha masaža: Koja je razlika?
         </span>      <br />
     - Benefiti klasične masaže
<br />
    - Povećana opuštenost cijelog tijela
<br />
- Brža izmjena tvari u organizmu
<br />
- Smirenost i poboljšanje psihičkog stanja
<br />
- Povećanje imuniteta i poboljšanje kvalitete sna
<br />
- Bolja cirkulacija

<br />

- Što očekivati od klasične masaže?

         
          

       </p>
      
     </div>
     <div className="flex justify-center md:justify-end">
        <img
          alt="meetings"
          src="/images/new.png"
          className="animate-slide-in-right w-[auto] h-[auto]   object-cover opacity-80 rounded-lg gradient-shadow"
        />
      </div>
      </div>
      <div className="flex flex-col justify-between h-full">
  <div className="flex-1 p-4 border rounded-lg shadow-lg">
    <p className="text-base lg:text-lg mb-4 animate-slide-in-bottom">
    <span
           style={{
             background: "linear-gradient(to right, #FF72E1, #F54C7A)",
             WebkitBackgroundClip: "text",
             WebkitTextFillColor: "transparent",
           }}
         >
     Iskustva klijenata variraju.
         </span>   {" "}
      Neki dolaze na masažu radi opuštanja, dok drugi imaju zdravstvene probleme koje žele riješiti. U posljednjih 15 godina, klasična masaža 
      <br />
      postala je sve popularnija u Hrvatskoj, a mnogi je koriste kao način borbe protiv svakodnevnog stresa uzrokovanog različitim životnim izazovima.
      <br />
      Pogledajući benefite klasične masaže, možemo zaključiti da ljudi koji redovito koriste masažne usluge žive kvalitetnije, sretniji su i opušteniji, što može dovesti do produženja života. Brojna istraživanja pokazala su da jedan sat masaže može zamijeniti tri do četiri sata sna. Anksioznost, koja je danas jedan od najraširenijih poremećaja, može se značajno smanjiti opuštanjem koje pruža klasična masaža. Ova metoda može donijeti izvrsne rezultate u rješavanju raznih problema, opuštanju tijela i liječenju anksioznosti.
      <br />
      Pridružite se onima koji su iskusili benefite masaže! Vaše tijelo zaslužuje trenutke opuštanja i revitalizacije. Rezervirajte svoj termin i otkrijte kako klasična ili suha masaža može poboljšati vašu kvalitetu života!
    </p>
  </div>
</div>

        

   
    </div>
);
}

export default Classic