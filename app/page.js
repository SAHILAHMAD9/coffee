"use client"
import { Boxes } from "@/components/ui/BackgroundBoxes";
import DotPattern from "@/components/ui/DotPattern";
import { Meteors } from "@/components/ui/Meteors";
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
        className="h-[50rem] w-full sm:flex sm:items-center sm:justify-center bg-black antialiased overflow-hidden pt-[25vh] relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />
        {/* <div
        className="absolute pointer-events-none inset-0 flex gap-4 items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
        {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div> */}
        <div className="flex ">
          <p
            className="text-4xl inver font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Buy me a COFFEE
          </p>
          <span><img src='Cup.gif' width={100} /></span>
        </div>
        <div className="flex items-center justify-center h-fit py-4 rounded-2xl w-full">
          <TextRevealCard
            text="You know the business"
            revealText="I know the chemistry "
          >
            <TextRevealCardTitle className='font-mono font-semibold text-xl'>
              A crowdfunding platform for creators to fund their projects.
            </TextRevealCardTitle>
            <TextRevealCardDescription>
              This is a text reveal card. Hover over the card to reveal the hidden
              text.
            </TextRevealCardDescription>
          </TextRevealCard>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 p-8 bg-black gap-4">
        {/* grid 1 */}

        <div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <Meteors number={30} />
          {/* <Boxes /> */}
          <img className="bg-slate-400 relative rounded-full p-2 mb-4 text-black" width={88} src="Man.gif" alt="" />
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
            Fans want to help
          </h1>
          <p className="text-center mt-2 text-neutral-300 relative z-20">
            Your fans are available to support you
          </p>
        </div>

        {/* grid 2  */}

        <div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <Meteors number={30} />
          {/* <Boxes /> */}
          <img className="bg-slate-400 relative rounded-full p-2 mb-4 text-black" width={88} src="Coin.gif" alt="" />
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
            Fans want to contribute
          </h1>
          <p className="text-center mt-2 text-neutral-300 relative z-20">
            Your fans are willing to contribute financially
          </p>
        </div>

        {/* grid 3  */}

        <div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <Meteors number={30} />
          {/* <Boxes /> */}
          <img className="bg-slate-400 relative rounded-full p-2 mb-4 text-black" width={88} src="Group.gif" alt="" />
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
