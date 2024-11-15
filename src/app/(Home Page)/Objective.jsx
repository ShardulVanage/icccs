"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";

export default function ConferenceObjectives() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const objectives = [
    {
      title: "Climate Action",
      description:
        "Facilitate the exchange of cutting-edge research and best practices in climate change mitigation and adaptation strategies.",
    },
    {
      title: "Sustainable Innovation",
      description:
        "Showcase innovative technologies and approaches for building a sustainable, low-carbon future across various sectors.",
    },
    {
      title: "Global Collaboration",
      description:
        "Create opportunities for policymakers, researchers, and industry leaders to connect and collaborate on climate solutions.",
    },
    {
      title: "Environmental Justice",
      description:
        "Address the social and economic impacts of climate change, promoting equitable and inclusive sustainability practices.",
    },
  ];

  return (
    <section
      ref={ref}
      className="w-full pb-24 sm:pl-24 bg-gradient-to-tr from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
        >
          <motion.div
            variants={containerVariants}
            className="flex flex-col space-y-6"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl underline underline-offset-4 decoration-blue-600 dark:decoration-blue-300"
            >
              Objectives of the Conference
            </motion.h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {objectives.map((objective, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full bg-white dark:bg-blue-800 border-none">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-2 text-blue-600 dark:text-blue-300">
                        {objective.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-blue-100">
                        {objective.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[500px] aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="https://illustrations.popsy.co/blue/creative-work.svg"
                alt="Climate Change Conference Objectives"
                layout="fill"
                objectFit="cover"
                className="object-center"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
