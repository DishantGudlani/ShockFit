import PrototypeImg from "@/components/prototype-img";
import LightBg from "@/components/light-bg";
import { CardHoverEffectDemo } from "@/components/imageslider";
import { ThreeDCardDemo } from "@/components/wobblecard";
import { TracingBeamDemo } from "@/components/trackingbeam";
import { InfiniteMovingCardsDemo } from "@/components/movingcards";
import { SignupFormDemo } from "@/components/form";
import Contactinfo from "@/components/contactinfo";
import { FocusCardsDemo } from "@/components/imagegalry";
import { BackgroundBeamsWithCollisionDemo } from "@/components/beam";
import { VortexDemo } from "@/components/background";
import Herosection from "@/components/herosection";
import Tsparticles from "@/components/Tsparticles";
import Video from "@/components/vedio";
import ThreeDCarddtail from "@/components/threeDCarddtail";
import Iframe from "@/components/iframe";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-4 py-10 md:py-10 ">
        <div className="md:grid md:grid-cols-12">
          <Video />
          <div className="col-span-7">
            <Herosection />
          </div>
        </div>
        <Tsparticles />
        <PrototypeImg />
        <div className="mt-6 lg:mt-10 flex flex-col justify-center items-center mx-auto px-4 md:px-6">
          <CardHoverEffectDemo />
        </div>

        <LightBg />
        <BackgroundBeamsWithCollisionDemo />

        <ThreeDCarddtail />

        <ThreeDCardDemo />
        
        
        {/* <TracingBeamDemo /> */}
        <FocusCardsDemo />

        <InfiniteMovingCardsDemo />
       
        <div style={{ marginTop: '20px' }}>
          <VortexDemo />
        </div>
        {/* <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Contactinfo />
          <SignupFormDemo />
        </div> */}
        <br />
<div style={{ marginTop: "40px", width: "100%" }}>
        <Iframe />
        </div>
      </section>
    </div>
  );
}
