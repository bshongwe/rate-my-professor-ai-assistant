import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Icons } from "./Icons";

interface ServiceProps {
    title: string;
    description: string;
    icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
    {
        title: "Collaborative Voting",
        description:
            "Empower your team with collaborative voting tools that allow everyone to have a say in key decisions, fostering a sense of inclusion and teamwork.",
        icon: (
            <Icons.code className="h-6 w-6 dark:text-orange-500 text-blue-500" />
        ),
    },
    {
        title: "Efficient Vote Management",
        description:
            "Streamline the voting process with our efficient vote management system, designed to handle everything from scheduling votes to tallying results with ease.",
        icon: (
            <Icons.dashboard className="h-6 w-6 dark:text-orange-500 text-blue-500" />
        ),
    },
    {
        title: "Automated Voting Solutions",
        description:
            "Save time and reduce manual effort with our automated voting solutions. Set up, manage, and execute votes automatically, ensuring accuracy and reliability.",
        icon: (
            <Icons.project className="h-6 w-6 dark:text-orange-500 text-blue-500" />
        ),
    },
];

const Services = () => {
    return (
        <section className="container py-24 sm:py-32">
            <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                            Client-Centric{" "}
                        </span>
                        Services
                    </h2>

                    <p className="text-muted-foreground text-xl mt-4 mb-8 ">
                        Our commitment is to provide services that put our
                        client needs first, ensuring a seamless and
                        productive experience.
                    </p>

                    <div className="flex flex-col gap-8">
                        {serviceList.map(
                            ({ icon, title, description }: ServiceProps) => (
                                <Card key={title}>
                                    <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                                        <div className="mt-1 bg-primary/20 p-3 rounded-2xl">
                                            {icon}
                                        </div>
                                        <div>
                                            <CardTitle>{title}</CardTitle>
                                            <CardDescription className="text-md mt-2">
                                                {description}
                                            </CardDescription>
                                        </div>
                                    </CardHeader>
                                </Card>
                            )
                        )}
                    </div>
                </div>

                <img
                    src="./cube-leg.png"
                    className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
                    alt="About services"
                />
            </div>
        </section>
    );
};

export default Services;
