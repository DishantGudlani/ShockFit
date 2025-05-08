import Link from "next/link";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/wobble-card";

export function ThreeDCardDemo() {
  return (
    <div className="md:grid md:grid-cols-3 gap-4 items-center" id="usluge">
      {/* First Card */}
      <CardContainer className="inter-var">
        <Link href="/detail/laser">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] h-[30rem] rounded-xl p-6 border flex flex-col justify-between">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              Trajno uklanjanje dlačica diodnim laserom
            </CardItem>

            <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
              <img
                src="/images/image-11.jpeg"
                height={240}
                width={320}
                className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>

            <div className="flex justify-between items-center mt-8">
              <CardItem translateZ={20} translateX={-40} as="button" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                Detalj →
              </CardItem>
              <CardItem translateZ={20} translateX={40} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                Rezervirajte sada
              </CardItem>
            </div>
          </CardBody>
        </Link>
      </CardContainer>

      {/* Second Card */}
      <CardContainer className="inter-var">
        <Link href="/detail/massage">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] h-[30rem] rounded-xl p-6 border flex flex-col justify-between">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              Masaža
            </CardItem>

            <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
              <img
                src="/images/img-12.png"
                height={240}
                width={320}
                className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>

            <div className="flex justify-between items-center mt-8">
              <CardItem translateZ={20} translateX={-40} as="button" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                Detalj →
              </CardItem>
              <CardItem translateZ={20} translateX={40} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                Rezervirajte sada
              </CardItem>
            </div>
          </CardBody>
        </Link>
      </CardContainer>

      {/* Third Card */}
      <CardContainer className="inter-var">
        <Link href="/detail/fitness">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] h-[30rem] rounded-xl p-6 border flex flex-col justify-between">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              Fitness
            </CardItem>

            <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
              <img
                src="/images/fit.jpg"
                height={240}
                width={320}
                className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>

            <div className="flex justify-between items-center mt-8">
              <CardItem translateZ={20} translateX={-40} as="button" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                Detalj →
              </CardItem>
              <CardItem translateZ={20} translateX={40} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                Rezervirajte sada
              </CardItem>
            </div>
          </CardBody>
        </Link>
      </CardContainer>
    </div>
  );
}
