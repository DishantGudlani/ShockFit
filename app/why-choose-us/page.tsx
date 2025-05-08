import Tsparticles from '@/components/Tsparticles';
import React from 'react';

const page = () => {
  return (
    <div className='relative  w-full h-full'>
      <Tsparticles />
      <div className="text-center justify-center text-2xl">
        {/* <h1 className="text-4xl font-bold text-white mb-3">Shockfit:</h1> */}
        <h2 className="text-4xl font-bold">
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
         
          Zašto odabrati nas

          </span>
        </h2>
        {/* <h3 className="text-4xl font-bold text-white mt-3">Kojeg Ćete Ikada Trebati</h3> */}
      </div>

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-2 md:mt-0 text-left flex flex-col h-full">
          
          <p className="text-3xl lg:text-lg mb-4 animate-slide-in-bottom ">
           
          Tijekom više od 35 godina rada u području masaže, treninga i održavanja ljudskog tijela, stekao sam bogato iskustvo u radu sa starijim osobama, umirovljenicima, osobama s kroničnim bolestima te onima u terminalnim fazama bolesti. Posebno sam ponosan na svoju ulogu u olakšavanju posljednjih dana života ovih klijenata kroz masažu, pomažući im da smanje bol i dožive barem malo olakšanja u najtežim trenucima.
            <br />
            <br />

            <span className='text-2xl'
              style={{
                background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
            Edukacija kao temelj mog rada
            </span>{' '} <br />
            Svoj rad temeljim na edukaciji klijenata. Svakom pojedincu pristupam s ciljem da ga naučim kako bolje razumjeti vlastito tijelo. Uz primjere iz bogate prakse i stručna znanja koja sam stekao kroz godine rada, pružam uvid u ono što se često ne može naučiti iz knjiga – iskustvo koje dolazi iz dugotrajnog praktičnog rada s ljudima.
            <br /><br />
            Kako bih što bolje pristupio svakom klijentu, kontinuirano se educiram. Nedavno sam upisao edukaciju za refleksoterapeuta, a uskoro završavam i specijalizaciju za terapeuta masaže vrućim kamenjem. Cilj mi je ponuditi što individualiziraniji pristup koji ne samo da pomaže u fizičkom smislu, nego i umiruje um te smanjuje razinu stresa, jednog od najvećih izazova u današnjem životu.
            <br /><br />
           
          </p>
        </div>
              <div className='flex justify-center md:justify-end'>
              <p className="text-3xl lg:text-lg animate-slide-in-bottom">

                <span className='text-2xl'
              style={{
                background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              
              }}
            >
           Rad s osobama starije životne dobi
            </span>{' '}
            
            <br />
            S godinama sam se specijalizirao za rad sa starijom populacijom te s osobama koje dolaze iz bolnica, gdje fizioterapeuti često nemaju dovoljno vremena posvetiti im se na način koji je potreban za potpuni oporavak. Moji treninzi i masaže prilagođeni su njihovim specifičnim potrebama, s naglaskom na individualni pristup koji im omogućava poboljšanje kvalitete života. Činjenica da mi je najmlađi klijent 72 godine, a najstariji 96 godina, svjedoči o tome da godine nisu prepreka za postizanje napretka i olakšanje boli. Nema veće radosti od one kada vidite suze zahvalnosti u očima klijenta kojem ste pomogli.
            <br />
            <br />
            <span className='text-2xl'
              style={{
                background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
          Trajna epilacija diodnim laserom
            </span>{' '}
            <br />
            Uz dugogodišnji rad u masaži, trenutačno se bavim i trajnom epilacijom diodnim laserom. Stroj koji koristim je najnovije generacije i omogućuje izvanredne rezultate. Iako su najčešće klijentice žene, muškarci također koriste ovu uslugu kako bi se trajno riješili neželjenih dlačica. Zadovoljne korisnice epilacije često ističu kako im je tretman pomogao povećati samopouzdanje, što me iznimno veseli. Pružamo uslugu trajne epilacije cijelog tijela po najpovoljnijim cijenama u Hrvatskoj, zbog čega nam klijentice dolaze čak i iz udaljenijih krajeva izvan Zagreba.
            <br />
            <br />
            <span className='text-2xl'
              style={{
                background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
          Pristupačnost za sve
            </span>{' '}
            <br />
            Moj je cilj osigurati pristupačne cijene tretmana svima – kako ženama, tako i muškarcima. U ovim vremenima financijske neizvjesnosti, nastojim pomoći svima koji žele riješiti problem neželjenih dlačica na trajan način, pružajući uslugu po cijenama koje su dostupne širem krugu ljudi.
                </p>
              </div>
       
      </div>
    </div>
  );
};

export default page;
