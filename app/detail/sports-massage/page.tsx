import React from 'react'
import { FaCheck } from 'react-icons/fa';

const Sports = () => {
  const benefits = [
    'Prevencija nastanka prehlade i gripe',
    'Prevencija i riješavanje stresa',
    'Riješavanje navedenih tegoba kralježnice',
    'Dizanje smanjenog imuniteta i riješavanje kroničnog umora',
    'Spriječavanje artritisa, multiple skleroze te autoimunih bolesti',
  ];
  return (
    <div>
     
      <div className="mt-2 md:mt-0 text-left flex flex-col h-full">
       
       <h2 className="text-3xl font-bold text-white mb-6 animate-slide-in-top ">
       {" "}
         <span
           style={{
             background: "linear-gradient(to right, #FF72E1, #F54C7A)",
             WebkitBackgroundClip: "text",
             WebkitTextFillColor: "transparent",
           }}
         >
    Sport i sportska masaža:
         </span>   {" "}   
         Razumijevanje prave tehnike   
       </h2>
       <p className="text-base lg:text-lg mb-4 animate-slide-in-bottom">
       Zbog neupućenosti javnosti, mnogi kozmetički saloni nazivaju klasičnu masažu sa jačim intenzitetom pritiska sportskom masažom, a ponekad je naplaćuju i dvostruko skuplje od obične masaže. Ako se ne pripremate za natjecanje, a želite intenzivniji tretman, jednostavno zamolite masera ili maserku da vam pruži klasičnu masažu s jačim pritiskom, dok pritom niste platili dosta skuplji tretman.
       <br /><br />
       <span
           style={{
             background: "linear-gradient(to right, #FF72E1, #F54C7A)",
             WebkitBackgroundClip: "text",
             WebkitTextFillColor: "transparent",
           }}
         >
   Benefiti sportske masaže
         </span>   <br />
         - Jači tonus mišića cijelog tijela
<br />
- Brža cirkulacija
<br />
- Povećana izmjena tvari u organizmu
<br />
- Poboljšana budnost i spremnost na reagiranje
<br />
- Mentalna fokusiranost na predstojeće napore
<br /><br />
<span
           style={{
             background: "linear-gradient(to right, #FF72E1, #F54C7A)",
             WebkitBackgroundClip: "text",
             WebkitTextFillColor: "transparent",
           }}
         >
 Što očekivati od sportske masaže?
         </span>   <br />
Kada se pripremate za važno natjecanje, bilo da se radi o prijateljskoj utakmici, meču ili nekim drugim sportskim događanjima, ključno je da vaše tijelo bude u optimalnom stanju. Zagrijavanje samo po sebi ne može vas dovesti do potrebnog tonusa za održavanje efikasne mišićne kontrakcije. Tada je od pomoći imati uz sebe masera koji zna kako izvesti sportsku masažu, čime se može podići tonus mišića na potrebnu razinu.
<br />
Sportska masaža može čak pomoći u postizanju boljih rezultata, omogućujući vam da pobijedite vlastite rekorde ili date svoj maksimum, čak i ako se ne osjećate najbolje. Kao što sam spomenuo, sportsku masažu preporučujem sportašima koji se natječu, a ne onima koji traže samo jaču klasičnu masažu.
<br />
Iskoristite prednosti sportske masaže! Ako se ozbiljno bavite sportom ili planirate natjecanje, ne zaboravite na važnost pravog tretmana. Rezervirajte svoj termin i pripremite se za svoj sljedeći izazov s pravom podrškom!

       </p>
     
   
    
      </div>
      
      

   
  
    </div>
);
}

export default Sports