import Tsparticles from '@/components/Tsparticles';
import React from 'react'

const Fitness = () => {
  return (
    <div>
      <div className="   text-center justify-center text-2xl " >
      <h1 className="text-3xl font-bold text-white mb-3">
      Jeste li se ikada 
      </h1>
      <h2 className="text-5xl font-bold ">
        <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
        osjećali kao da ste zapeli u rutini 
        </span>
       <Tsparticles />
      </h2>
      <h3 className="text-4xl font-bold text-white mt-3">
      kada je riječ o postizanju vaših fitness ciljeva? 
      </h3>
    </div>
    <div  className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="mt-2 md:mt-0 text-left flex flex-col h-full ">
       
    
        <p className="text-3xl lg:text-lg mb-4 animate-slide-in-bottom mt-9">
        Ako tražite inovativne načine kako vratiti motivaciju u svoje rutine zdravlja i fitnessa, usluge Shockfit su pravo rješenje za vas.  <br /><br /> {" "}<span
            style={{
              background: "linear-gradient(to right, #FF72E1, #F54C7A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
                  
Nudim personalizirane
          </span>{" "} 
          fitness programe koji su osmišljeni za sve koji žele postići stvaran napredak. Bilo da se radi o savjetovanju, osobnim treninzima, treningu snage, HIIT-u, Tabati ili Bodyweight treningu, moje iskustvo i kvalifikacije omogućuju mi da pružim sveobuhvatnu podršku tijekom vaše transformacije. Svjestan sam da je ključno imati vodstvo i stručnost trenera kako biste ostvarili svoje ciljeve.
          <br /><br />
          <span
            style={{
              background: "linear-gradient(to right, #FF72E1, #F54C7A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
                  
                  Trener koji vas motivira i inspirira
          </span>
<br />
Moj pristup treningu osmišljen je kako bi izazvao vaše tijelo i potaknuo ga da prijeđe vlastite granice, dok istovremeno poboljšava vaše zdravlje, fleksibilnost, snagu i koordinaciju. Započinjanje nove vježbačke rutine može biti izazovno, ali mogu jamčiti da ću svaki trening učiniti zabavnim i ugodnim. Zaboravite na monotoniju — vježbanje sa mnom postaje iskustvo koje ćete jedva čekati ponoviti.
<br /><br />
<span
            style={{
              background: "linear-gradient(to right, #FF72E1, #F54C7A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
                  
                  Isprobajte moje inovativne fitness usluge već danas!
          </span>
<br />
Uz profesionalan pristup, Shockfit je ovdje da vas ohrabri i motivira na svakom koraku. Vaše zadovoljstvo mi je uvijek na prvom mjestu, stoga se trudim osigurati da svaki klijent ispuni svoje ciljeve. Ne propustite ovu priliku — pridružite se Shockfit modelu i započnite uzbudljivo putovanje prema boljem zdravlju, poboljšanom držanju, većoj snazi i pokretljivosti
<br />
Svi zaslužujemo osjećaj postignuća i zadovoljstva. Budite dio zajednice koja se transformira uz podršku i inspiraciju. Prijavite se već danas i vidite razliku!
        </p>
      </div>

      <div className="flex justify-center md:justify-end ">
        <img
          alt="meetings"
          src="/images/trainer-1.png"
          className="animate-slide-in-right w-[auto] h-[auto]   object-cover opacity-80 rounded-lg gradient-shadow"
        />
      </div>
    </div>
 
   
    

    </div>
    
  );
}

export default Fitness