import Tsparticles from '@/components/Tsparticles';
import React from 'react';

const page = () => {
  return (
    <div>
      <div className="text-center justify-center text-2xl">
        {/* <h1 className="text-4xl font-bold text-white mb-3">Shockfit:</h1> */}
        <h2 className="text-4xl font-bold">
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
          Personalizacija ulja prema tipu kože
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
              Svaka koža 
            </span>{' '}
            <br />
            je jedinstvena, pa je pravilna njega ključna kako bi postigli željene rezultate, bilo da je riječ o opuštanju, hidrataciji ili ublažavanju problema s kožom. U masaži je odabir pravih eteričnih ulja od velike važnosti jer svako ulje ima specifična svojstva koja odgovaraju različitim tipovima kože. Kombinacijom sedam pažljivo odabranih ulja, nudimo personalizirani pristup koji omogućuje da svaki tretman bude prilagođen potrebama vaše kože.
            <br />
            <br />
<Tsparticles />
            <span
              style={{
                background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
             Mješovita koža
            </span>{' '}
            <br />
            Za mješovitu kožu biramo ulja koja pomažu u balansiranju masnijih i suših dijelova. Cilj je postići ravnotežu između hidratacije i regulacije sebuma, čime se smanjuje sjaj u T-zoni, a suhi dijelovi kože postaju nježniji.
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
             Osjetljiva koža
            </span>{' '}
            <br />
           zahtijeva posebno pažljivo birana ulja koja umiruju i smanjuju iritacije. Uvijek biramo nježna ulja koja ne sadrže potencijalne iritanse, kako bi koža ostala smirena i zaštićena.
            <br />
            <br />
           
          </p>
        </div>
              <div className='flex justify-center md:justify-end'>
              <p className="text-3xl lg:text-lg animate-slide-in-bottom ">

                <span
              style={{
                background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
             Zrela koža
            </span>{' '}
            <br />
             ima specifične potrebe, pa se za nju biraju ulja koja potiču regeneraciju stanica i smanjuju vidljive znakove starenja. Koristimo ulja bogata antioksidansima koja pomažu u poboljšanju elastičnosti i čvrstoće kože.
            <br />
            <br />
            <span
              style={{
                background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
             Koža sklona aknama
            </span>{' '}
            <br />
            Za kožu sklonu aknama odabiremo ulja s antibakterijskim i protuupalnim svojstvima, koja pomažu u smirivanju upala i sprječavanju novih nepravilnosti. Ova ulja balansiraju kožu bez dodatnog zamašćivanja.
            <br />
            <br />
            <span
              style={{
                background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
             Normalna koža
            </span>{' '}
            <br />
            Kod normalne kože biramo ulja koja održavaju prirodnu ravnotežu vlage i hranjivih tvari. Cilj je održati optimalnu hidrataciju i elastičnost te zadržati prirodni sjaj i zdrav izgled kože.
                </p>
              </div>
        {/* <div className="flex justify-center md:justify-end">
          <img
            alt="icon-image"
            src="/images/iconimg1.jpg"
            className="animate-slide-in-right w-[auto] h-[auto] object-cover  rounded-lg gradient-shadow"
          />
        </div> */}
      </div>
    </div>
  );
};

export default page;
