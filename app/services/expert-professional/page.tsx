import Tsparticles from '@/components/Tsparticles';
import React from 'react';

const page = () => {
  return (
    <div>
      <Tsparticles />
      <div className="flex flex-col items-center text-center text-2xl">
        {/* Heading */}
        <h2 className="text-4xl font-bold">
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            Stručni profesionalac
          </span>
        </h2>
<br />
        {/* Image below the heading */}
        <img
          src="/images/owner-img.jpg" // Replace with the correct path to your image
          alt="Your Image"
          className="mt-4"
          style={{ width: '300px', height: '350px' }}
        />
      </div>

      <br />
      <div className="mt-2 md:mt-0 text-left flex flex-col h-full">
        <p className="text-3xl lg:text-lg mb-4 animate-slide-in-bottom">
          <span
            style={{
              background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Sve je krenulo
          </span>{' '}
          <br />
          kada sam sa 17 godina prvi put počeo masirati, polako gradeći znanje i iskustvo koje su me vodili kroz desetljeća rada s ljudima i sportašima na najvišoj razini. Tijekom karijere, imao sam priliku raditi s prvom hrvatskom olimpijskom atletskom reprezentacijom, a to me iskustvo dodatno oblikovalo kao stručnjaka u području masaže i rehabilitacije. Završivši Kineziološki fakultet u Zagrebu, smjer Višeg trenera Fitnesa, osnažio sam temelj svog znanja i nastavio raditi na različitim tehnikama i pristupima te diplomirao iz masaže na fakultetu.
          <br />
          <br />
          <span
            style={{
              background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Danas kroz
          </span>{' '}
          <br />
          svoju firmu i brend ShockFit u Zagrebu, pružam personalizirane usluge masaže i fitnessa, a uz to sam certificirani tehničar za epilaciju diodnim laserom, refleksoterapeut i certificirani maser hot stone masaže. Moja ponuda tretmana obuhvaća niz tehnika koje omogućuju različite učinke na tijelo i um:
        </p>
      </div>

      <div className="flex justify-center md:justify-end">
        <p className="text-3xl lg:text-sm animate-slide-in-bottom">
          <span
            style={{
              background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            1. Klasična masaža:
          </span>{' '}
          <br />
          Ova je tehnika savršena za opuštanje i regeneraciju. Usredotočena je na
          površinske mišiće i povećanje cirkulacije, čime oslobađa od stresa i
          napetosti. Klasična masaža koristi umjeren pritisak koji stimulira
          cirkulaciju i pomaže u opuštanju cijelog tijela.
          <br />
          <br />
          <span
            style={{
              background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            2. Suha masaža:
          </span>{' '}
          <br />
          Ovaj tretman ne koristi ulja, već se oslanja na tehnike koje
          pojačavaju protok krvi i poboljšavaju cirkulaciju više nego klasična
          masaža te smanjuju zadržavanje tekućine. Izvrsna je za poboljšanje
          tonusa kože i pružanje osjećaja svježine te je pogodna za sportaše
          kojima je potrebna brza regeneracija, a može se raditi i preko
          odjeće.
          <br />
          <br />
          <span
            style={{
              background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            3. Sportska masaža:
          </span>{' '}
          <br />
          Prilagođena sportašima i svima koji su izloženi fizičkom naporu,
          sportska masaža usmjerena je na dublje mišićne slojeve i podiže tonus
          mišića. Njome se potiče cirkulacija, ubrzava oporavak i smanjuje rizik
          od ozljeda. Kroz ovu tehniku pomažem sportašima i rekreativcima da
          lakše postignu svoje ciljeve, bilo u pripremi za natjecanja ili
          oporavku nakon njih.
          <br />
          <br />
          <span
            style={{
              background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            4. Hot stone masaža:
          </span>{' '}
          <br />
          Korištenje toplih vulkanskih kamenja pomaže u dubokom opuštanju i
          oslobađanju stresa. Ova tehnika koristi kombinaciju masaže rukama i
          polaganjem zagrijanih kamenja, čime prodire u dublje slojeve mišića,
          pružajući osjećaj topline i potpunog opuštanja.
          <br />
          <br />
          <span
            style={{
              background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            5. Refleksoterapija:
          </span>{' '}
          <br />
          Refleksoterapija se temelji na stimulaciji refleksnih točaka na
          stopalima koje su povezane s različitim organima i sustavima u tijelu.
          Ova tehnika pomaže u uravnoteženju energetskih tokova i otklanjanju
          blokada, čime omogućava tijelu da se prirodno regenerira i vraća u
          ravnotežu.
          <br />
          <br />
          <span
            style={{
              background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            6. Raindrop tehnika:
          </span>{' '}
          <br />
          Kombinacija masaže i eteričnih ulja koja se nanose na kralježnicu i
          leđa, raindrop tehnika koristi ljekovita svojstva prirodnih eteričnih
          ulja, kako bi podržala imunološki sustav, smanjila napetost i
          potaknula cjelokupnu dobrobit tijela. Ova metoda ima duboko umirujući
          učinak i pomaže u opuštanju tijela i uma.
        </p>
      </div>
      <br />
      <p className="text-3xl lg:text-lg mb-4 animate-slide-in-bottom">
        <span
          style={{
            background: 'linear-gradient(to right, #FF72E1, #F54C7A)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Osim što pružam
        </span>{' '}
        ove tretmane u ShockFitu, radim kao vanjski suradnik u fitness centrima
        i kao mentor u školi za obrazovanje odraslih Galbanum. Suradnja s
        Fitness učilištem također mi je važan dio karijere jer kroz nju
        prenosim znanje budućim stručnjacima u industriji. Cilj mi je svakom
        klijentu pružiti ne samo masažu, već i personalizirani pristup koji će
        ih inspirirati na bolju brigu o sebi i pomoći im da se osjećaju bolje,
        opuštenije i zadovoljnije.
      </p>
    </div>
  );
};

export default page;
