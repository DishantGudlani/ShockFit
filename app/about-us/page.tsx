import Tsparticles from '@/components/Tsparticles';
import React from 'react';

const page = () => {
  return (
    <div className='relative  w-full h-full     '>
<Tsparticles />

      <div className="text-center justify-center text-2xl">
        {/* <h1 className="text-4xl font-bold text-white mb-3">Shockfit:</h1> */}
        <h2 className="text-4xl font-bold">
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
         
Viši trener fitnessa / Maser

          </span>
        </h2>
        {/* <h3 className="text-4xl font-bold text-white mt-3">Kojeg Ćete Ikada Trebati</h3> */}
      </div>

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-2 md:mt-0 text-left flex flex-col h-full">
            <h2 className='text-3xl font bold'>
            <span
              style={{
                background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
            Krešimir Rusak
            </span>

            </h2>
          <p className="text-3xl lg:text-lg mb-4 animate-slide-in-bottom ">
           
            Kao viši trener fitnessa i diplomirani maser s Kineziološkog fakulteta u Zagrebu, već više od 35 godina pomažem ljudima da se oslobode boli i napetosti. Uz individualan pristup, kombiniram različite tehnike masaže – klasičnu, medicinsku, sportsku i Raindrop tehniku s eteričnim uljima – kako bih pružio personalizirano iskustvo koje brzo dovodi do olakšanja.
            <br />
            <br />
            <span
              style={{
                background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
             Ključne kompetencije i bivša te sadašnja radna mjesta:
            </span>{' '} <br />
            -	Više od 35 godina iskustva u profesionalnim masažama i treninzima
            {' '}
             <br />-	Predavač i mentor masaže na Galbanumu – centru za obrazovanje odraslih i Fitnes učilištu
            <br />
            -	Asistent na Kineziološkom fakultetu u Zagrebu, smjer Kineziterapija
            <br />
            -	Maser 1. Hrvatske atletske reprezentacije
            <br />
            -	Rad s vrhunskim sportašima iz različitih sportova, uključujući atletiku, plivanje i vaterpolo
            <br />
            -	Voditelj fitness centra “Laguna”, s bogatim iskustvom rada u salonima i zdravstvenim ustanovama
            <br /><br />
           
          </p>
        </div>
              <div className='flex justify-center md:justify-end'>
              <p className="text-3xl lg:text-lg animate-slide-in-bottom">

                <span className='text-3xl'
              style={{
                background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              
              }}
            >
            Usluge koje mijenjaju vaš život:
            </span>{' '}
            <br />
            Uklanjanje bolova u leđima (uključujući išijas) i tretiranje bolnih točaka
            <br />

Programi treninga snage i oblikovanja tijela kroz metode Bodyweight, HIIT i Tabata
<br />
Stručna podrška u gubitku kilograma ili dobivanju mišićne mase, sve u udobnosti vašeg doma
<br />

Rad na području Zagreba i diljem Hrvatske

            <br />
            Ako se svakodnevno borite s boli ili napetošću u tijelu, možda je baš sada vrijeme da konačno nešto poduzmete. Ne morate trpjeti nelagodu ili čekati na olakšanje – ono je dostupno sada, na dohvat ruke. Brojni klijenti već su osjetili trenutnu promjenu nakon samo jednog tretmana, a isto možete i vi. Zamislite kako biste se osjećali da odmah riješite problem koji vas muči!
            <br />
            <br/>
            <span
              style={{
                background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
           Moja misija:
            </span>{' '}
            <br />
            Cilj mi je ne samo pružiti masažu, već i educirati vas o pravim koristima tretmana. Suvremeni život donosi puno stresa i bolova, no vi to ne morate trpjeti. Masaža ne mora biti bolna da bi bila učinkovita – ključ je u pravilnom pristupu i razumijevanju vašeg tijela. Pustite me da vam pokažem kako se možete osjećati bolje već danas.
            <br />
            Nemojte odgađati osjećaj olakšanja. Rezervirajte za sebe svoje vrijeme za opuštanje i osjetite razliku već s prvim tretmanom.
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
