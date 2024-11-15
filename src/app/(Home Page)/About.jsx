"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
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

  return (
    <section
      ref={ref}
      className="w-full py-12 md:py-12 lg:py-24 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-lg">
              <Image
                src="https://illustrations.popsy.co/blue/podcast-show.svg"
                alt="Climate Change Conference Image"
                layout="fill"
                objectFit="cover"
                className="object-center"
              />
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl  text-blue-500 drop-shadow-sm">
              About Conference
            </h2>
            <p className="text-muted-foreground">
              Join us for a groundbreaking gathering of environmental experts,
              policymakers, and innovators at the forefront of climate action.
              Our conference offers a unique platform for sharing cutting-edge
              research, sustainable solutions, and collaborative strategies to
              address the urgent challenges of climate change and build a more
              sustainable future for our planet.
            </p>
            <motion.div variants={itemVariants}>
              <Button
                asChild
                className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
              >
                <a href="/about-conference">Learn More</a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
