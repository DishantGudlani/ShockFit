import React from 'react'
import { FaCheck } from 'react-icons/fa';

const Raindrop = () => {
  const benefits = [
    'Prevencija nastanka prehlade i gripe',
    'Prevencija i riješavanje stresa',
    'Riješavanje navedenih tegoba kralježnice',
    'Dizanje smanjenog imuniteta i riješavanje kroničnog umora',
    'Spriječavanje artritisa, multiple skleroze te autoimunih bolesti',
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
      RAINDROP TEHNIKA
         </span>         
       </h2>
       <p className="text-base lg:text-lg mb-4 animate-slide-in-bottom">
       Više od nekoliko desetljeća trebalo je toj tehnici da se iz Amerike proširi cijelim svijetom, tako da danas u toj tehnici uživaju tisuće zadovoljnih klijenata. Da li ste ikada osjetili kapanje čistih eteričnih ulja na vaše tijelo? Niste? Onda ste na pravom mjestu, jer Raindrop tehnika je upravo to.  Totalno ne intenzivna tehnika masaže koja se primjenjuje kod raznih oblika deformiteta kralježnice kao što su skolioza, lumbalna lordoza te kifoza, a ista će vam pomoći kod opuštanja, raznih gripa te kojih virusnih bolesti. 
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
      
        {/* <div  className="md:grid md:grid-cols-2 gap-8  items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"> */}

    <div className="bg-black text-white p-6 space-y-4">
    <h2 className="text-5xl font-bold text-white  animate-slide-in-top -mt-20">
    Benefiti Raindrop{" "}
         <span
           style={{
             background: "linear-gradient(to right, #FF72E1, #F54C7A)",
             WebkitBackgroundClip: "text",
             WebkitTextFillColor: "transparent",
           }}
         >
            tehnike
         </span>{" "}
         
       </h2>
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="flex items-center bg-gray-900 p-4 rounded-md"
        >
          <FaCheck className="text-red-500 mr-4" />
          <span>{benefit}</span>
        </div>
      ))}
    </div>
    {/* <div className="mt-2 md:mt-0 text-left flex flex-col h-full">
       
       <h2 className="text-4xl font-bold text-white mb-6 animate-slide-in-top">
       Što očekivati od{" "}
         <span
           style={{
             background: "linear-gradient(to right, #FF72E1, #F54C7A)",
             WebkitBackgroundClip: "text",
             WebkitTextFillColor: "transparent",
           }}
         >
           Maderoterapije masaže?
         </span>{" "}
         
       </h2>
       <p className="text-base lg:text-lg mb-4 animate-slide-in-bottom">
       Na našim prostorima Maderoterapija se pojavila unazad par godina te mnoštvo zadovoljnih klijentica sa osmjehom i sigurnošću može reći da ista daje rezultate. Domovina Maderoterapije je južna Amerika gdje su žene drvenim pomagalima masirale svoje dijelove tijela ne bi li maknuli, razbili odn. pomogli tijelu u bržem razgrađivanju masnih potkožnih stanica te tako bile prvenstveno same sebi zadovoljnije svojim izgledom. Tehnika se proširila i na ostatak svijeta te nemali broj žena odlazi na tretmane nebi li maknuli celulit. Znači vidite li neku ženu na plaži da dobro izgleda te da nema celulit na mjestima gdje se on nakuplja, možete skoro pa biti sigurni da ona ide na tretmane Maderoterapije te da nije sve u genetici. 
No ovdje moramo napomenuti da sama Maderoterapija ne ukljanja celulit nego zaglađuje kožu od neželjene narančine kore. Celulit se uklanja pravilnom ishranom i tjelovježbom, a za ostale informacije mi se slobodno obratite.
       </p>
     </div> */}
    {/* </div> */}

  
    
    

    
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
          Zbog svoje učinkovitosti,
         </span>{" "}
         Raindrop tehnika često se naziva i "kiropraktika iz bočice". Iako se koriste esencijalna eterična ulja koja mogu biti skuplja, iskustva klijenata pokazuju da se pozitivne promjene osjećaju već nakon prvog tretmana. Ova metoda ne samo da pruža fizičku olakšicu, već i emocionalno ispunjenje, ostavljajući klijente opuštenima i revitaliziranima.
        </p>
      </div>
</div>

    
 
   

</div> 
);
}

export default Raindrop
