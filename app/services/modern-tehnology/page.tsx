import Tsparticles from '@/components/Tsparticles';
import React from 'react';

const page = () => {
  return (
    <div>
      <Tsparticles />
      <div className="text-center justify-center text-2xl">
        {/* <h1 className="text-4xl font-bold text-white mb-3">Shockfit:</h1> */}
        <h2 className="text-5xl font-bold">
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
          Modern Tehnologija
          </span>
        </h2>
        {/* <h3 className="text-4xl font-bold text-white mt-3">Kojeg Ćete Ikada Trebati</h3> */}
      </div>

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-2 md:mt-0 text-left flex flex-col h-full">
          <p className="text-3xl lg:text-lg mb-4 animate-slide-in-bottom mt-9">
            <span
              style={{
                background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Shock Epil® 
            </span>{' '}
            <br />
            uređaj za epilaciju diodnim laserom nudi napredno rješenje za trajno uklanjanje dlačica. Ovaj uređaj koristi najnoviju tehnologiju koja omogućuje brz i učinkovit tretman za različite tipove kože i dlačica. Ključna prednost Shock Epil® uređaja je njegova sposobnost rada s četiri različite valne duljine lasera (755 nm, 808 nm, 940 nm i 1064 nm), što omogućuje širu pokrivenost i bolje rezultate.
            <br />
            <br />

            <span
              style={{
                background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
             Usporedba
            </span>{' '}
            <br />
            lasera s četiri valne duljine s uređajima koji koriste samo jednu valnu duljinu jasno pokazuje prednosti. Svaka valna duljina ima specifičnu funkciju, što omogućuje ciljano tretiranje različitih slojeva kože i tipova dlačica:
            {' '}
             <br />
            <br />
            <span
              style={{
                background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
          - 755 nm
            </span>{' '}    
 najbolje djeluje na svijetle i tanke dlačice te je izuzetno učinkovit za tretiranje svjetlijih tipova kože.
<br />
<br />
<span
              style={{
                background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
          - 808 nm
            </span>{' '}    
             je univerzalna opcija koja se koristi za sve tipove kože i dlačica, pružajući idealnu ravnotežu između dubine penetracije i sigurnosti.
<br />
<br />
<span
              style={{
                background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
          - 940 nm
            </span>{' '}    
 prodire dublje u kožu i posebno je učinkovit za tanje dlačice i srednje tamne tonove kože.
<br />
<br /> 
<span
              style={{
                background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
          - 1064 nm
            </span>{' '}    
 je najpogodnija za tamnije tipove kože, jer prodire duboko i cilja deblje dlačice, smanjujući rizik od oštećenja površinskih slojeva kože.
<br /><br />
            <span
              style={{
                background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
            </span>{' '}
              Zahvaljujući
            <br />
            ovoj kombinaciji valnih duljina, Shock Epil® nudi prilagođene tretmane koji odgovaraju potrebama svakog klijenta, bez obzira na tip kože ili dlačica, osiguravajući brže, sigurnije i dugotrajnije rezultate u usporedbi s uređajima koji koriste samo jednu valnu duljinu.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            alt="icon-image"
            src="/images/mcn-1.jpg"
            className="animate-slide-in-right w-[auto] h-[800px] object-cover  rounded-lg gradient-shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
