"use client"
import { Boxes } from "@/components/ui/BackgroundBoxes";
import { Spotlight } from "@/components/ui/Spotlight";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/TextRevealingCard.jsx";
import { cn } from "@/lib/utils";
export default function Home() {
  return (
    <div>
    <div
      className="h-[50rem] w-full dark:bg-black min-h-screen bg-grid-white/[0.2] pt-[25vh] relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div
        className="absolute pointer-events-none inset-0 flex gap-4 items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex ">
      <p
        className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Buy me a COFFEE 
      </p>
      <span><img src='Cup.gif' width={100}/></span>
      </div>
    <div className="flex items-center justify-center h-fit py-4 rounded-2xl w-full">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
      >
        <TextRevealCardTitle>
        A crowdfunding platform for creators to fund their projects.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 p-8 gap-4 ">

      {/* grid 1 */}

      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      {/* <Boxes /> */}
      <img className="bg-slate-400 relative rounded-full p-2 m-2 text-black" width={88} src="Man.gif" alt="" />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
      Fans want to help
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
      Your fans are available to support you
      </p>
    </div>

    {/* grid 2  */}

    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      {/* <Boxes /> */}
      <img className="bg-slate-400 relative rounded-full p-2 m-2 text-black" width={88} src="Coin.gif" alt="" />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
      Fans want to contribute
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
      Your fans are willing to contribute financially
      </p>
    </div>

    {/* grid 3  */}

    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      {/* <Boxes /> */}
      <img className="bg-slate-400 relative rounded-full p-2 m-2 text-black" width={88} src="Group.gif" alt="" />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
      Fans want to collaborate
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
      Your fans are ready to collaborate with you
      </p>
    </div>
      </div>
    </div>
  );
}
