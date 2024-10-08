import Link from "next/link";

import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { Icons } from "@/components/Icons";

const Hero = () => {
    return (
        <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
            <div className="text-center lg:text-start space-y-6">
                <main className="text-5xl md:text-6xl font-bold">
                    <h1 className="inline">
                        <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
                            Rate My
                        </span>{" "}
                        Professor
                    </h1>{" "}
                    v1{" "}
                    <h2 className="inline">
                        <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                            AI
                        </span>{" "}
                        Assistant.
                    </h2>
                </main>

                <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                    An app that will change your perception about rating and AI forever.
                    Give it a try, today!
                </p>

                <div className="space-y-4 md:space-y-0 md:space-x-4">
                    <Link href="https://rmp-ai-bot.vercel.app/" passHref>
                        <Button className="w-full md:w-1/3">Get Started</Button>
                    </Link>

                    <Link
                        href="https://github.com/bshongwe"
                        target="_blank"
                        className={`w-full md:w-1/3 ${buttonVariants({
                            variant: "outline",
                        })}`}
                    >
                        GitHub
                        <Icons.github className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>

            {/* Hero cards sections */}
            <div className="z-10">
                <HeroCards />
            </div>

            {/* Shadow effect */}
            <div className="shadow"></div>
        </section>
    );
};

export default Hero;
