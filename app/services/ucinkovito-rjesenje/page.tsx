import Tsparticles from '@/components/Tsparticles';
import React from 'react';

const page = () => {
  return (
    <div>
      <div className="text-center justify-center text-2xl z-10">
        {/* <h1 className="text-4xl font-bold text-white mb-3">Shockfit:</h1> */}
        <h2 className="text-5xl font-bold">
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
          Ulja 
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
              Eterična
            </span>{' '} <br />
            ulja dolaze iz pažljivo odabranih izvora, a svako od njih je birano s posebnom pažnjom kako bi ispunilo najviše standarde kvalitete. Sve proizvode razvijaju i izrađuju u Hrvatskoj, koristeći prirodne sastojke koji su prošli stroge kontrole kvalitete, a njihovu izvrsnost potvrđuju brojni certifikati.
            {' '}
            <br />
            <br />
<Tsparticles  />
            <span
              style={{
                background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Svi preparati
            </span>{' '} <br />
            koje nude rezultat su rada vrhunskih domaćih stručnjaka, s naglaskom na prirodne sastojke i održivost. Osim što su hrvatske proizvodnje, proizvodi odražavaju najbolje od lokalne tradicije i stručnosti u aromaterapiji.
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
              Fleksibilnost
            </span>{' '} <br />
            i prilagodba klijentima su mi ključne, jer želim da svaki klijent bude potpuno zadovoljan. Ista ulja koje koristim i svojim tretmanima su organskog porijekla, a ne sintetskih sastojaka što mogu potvrditi i međunarodni certifikati o kvaliteti proizvoda.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            alt="icon-image"
            src="/images/iconimg1.jpg"
            className="animate-slide-in-right w-[auto] h-[auto] object-cover  rounded-lg gradient-shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
