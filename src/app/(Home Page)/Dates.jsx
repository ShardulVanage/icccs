"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Book, Globe, Lightbulb, Users } from "lucide-react";

const timeline = [
  {
    name: "Early bird registration deadline",
    description:
      "Submit your research papers on climate change mitigation and adaptation strategies.",
    date: "December 15th",
    dateTime: "2024-12-15",
    icon: <Book className="h-6 w-6" />,
  },
  {
    name: "Abstract submission deadline",
    description:
      "Register using our paperless system and receive a virtual conference kit.",
    date: "January 10th",
    dateTime: "2025-01-10",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    name: "Full paper submission Deadline",
    description:
      "Selected papers will be featured in our special Climate Innovation Showcase.",
    date: "February 1st",
    dateTime: "2025-02-01",
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    name: "Registration Deadline",
    description:
      "Join us for three days of insights on climate action and sustainable development.",
    date: "September 15th",
    dateTime: "2025-09-15",
    icon: <Users className="h-6 w-6" />,
  },
];

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pb-8 "
    >
      <Card className="relative flex items-center border-none">
        <CardContent className="flex p-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-md"
          >
            {item.icon}
          </motion.div>
          <div className="ml-4 flex flex-col">
            <time
              dateTime={item.dateTime}
              className="text-sm font-semibold text-blue-600"
            >
              {item.date}
            </time>
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">
              {item.name}
            </h3>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
              {item.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Dates() {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-300 sm:text-5xl">
            Conference Important Dates
          </h2>
          <p className="mt-6 text-lg text-blue-700 dark:text-blue-200">
            Join us in our journey towards a sustainable future. Stay updated
            with our climate action conference schedule and important
            milestones.
          </p>
        </div>

        <div className="mt-16 flex flex-col-reverse sm:flex-row justify-center items-start gap-12">
          <div className="relative inline-flex">
            <motion.div
              ref={timelineRef}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute left-6 top-5 -bottom-5 w-0.5 bg-blue-600"
              style={{ originY: 0 }}
            />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <TimelineItem key={item.name} item={item} index={index} />
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center items-center sm:w-1/2 sm:pl-12">
            <Image
              src="https://illustrations.popsy.co/blue/working-vacation.svg"
              alt="Illustration representing climate action and sustainability"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            size="lg"
            className="bg-blue-600 text-lg text-white hover:bg-blue-700"
          >
            <Link href="/schedule">Get Full Conference Schedule</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
