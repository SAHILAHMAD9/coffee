
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
import { Card } from "@/components/ui/card";
import { Coffee, Heart, Star } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimateButton";
import Link from "next/link";

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Previous sections remain unchanged */}
      <div className="h-[50rem] w-full sm:flex sm:items-center sm:justify-center bg-black antialiased overflow-hidden pt-[25vh] relative flex flex-col items-center justify-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />
        <div className="flex">
          <p className="text-4xl inver font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Buy me a COFFEE
          </p>
          <span><img src='Cup.gif' width={100} alt="Coffee cup" /></span>
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

      <div className="container mx-auto px-4 w-full">
        <h2 className="text-4xl font-bold text-center text-white mb-16 bg-clip-text">
          How Fans Engage with You
        </h2>
      </div>
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 px-8 bg-black gap-4">
        <div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <Meteors number={30} />
          <img className="bg-slate-400 relative rounded-full p-2 mb-4 text-black" width={88} src="Man.gif" alt="Man" />
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
            Fans want to help
          </h1>
          <p className="text-center mt-2 text-neutral-300 relative z-20">
            Your fans are available to support you
          </p>
        </div>

        <div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <Meteors number={30} />
          <img className="bg-slate-400 relative rounded-full p-2 mb-4 text-black" width={88} src="Coin.gif" alt="Coin" />
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
            Fans want to contribute
          </h1>
          <p className="text-center mt-2 text-neutral-300 relative z-20">
            Your fans are willing to contribute financially
          </p>
        </div>

        <div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <Meteors number={30} />
          <img className="bg-slate-400 relative rounded-full p-2 mb-4 text-black" width={88} src="Group.gif" alt="Group" />
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
            Fans want to collaborate
          </h1>
          <p className="text-center mt-2 text-neutral-300 relative z-20">
            Your fans are ready to collaborate with you
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16 bg-clip-text">
            Why Programers Love Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Coffee className="w-8 h-8 text-purple-500" />,
                title: "Monthly Support",
                description: "Receive recurring support from your biggest fans"
              },
              {
                icon: <Heart className="w-8 h-8 text-pink-500" />,
                title: "Direct Connection",
                description: "Build meaningful relationships with your supporters"
              },
              {
                icon: <Star className="w-8 h-8 text-yellow-500" />,
                title: "Creative Freedom",
                description: "Focus on creating while we handle the rest"
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  {benefit.icon}
                  <h3 className="mt-4 text-xl font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-gray-400">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="relative z-10 bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-3xl border border-gray-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-gray-400 max-w-2xl">
                  Join thousands of programers who are turning their passion into a sustainable income stream.
                </p>
              </div>
              <Link href='/signup'>
                <AnimatedButton />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* New Button Section */}

    </div>
  );
}

export default App;