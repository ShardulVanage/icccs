"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Leaf, Globe, Sparkles } from "lucide-react";
import Image from "next/image";
import MorphingCard from "@/components/ui/MorphingCard";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 text-sm font-medium px-3 py-1 rounded-full">
              Global Initiative
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-blue-900 dark:text-blue-100">
              <span className="block">International Conference on</span>
              <span className="block text-blue-600 dark:text-blue-400">
                Climate Change &
              </span>
              <span className="block text-blue-600 dark:text-blue-400">
                Sustainability
              </span>
            </h1>
            <p className="text-xl text-blue-700 dark:text-blue-200 max-w-2xl">
              Join us for a transformative experience exploring innovative
              solutions for a sustainable future and combating climate change.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 text-lg text-blue-800 dark:text-blue-200">
              <div className="flex items-center space-x-2">
                <Calendar className="h-6 w-6 text-blue-500" />
                <span>15 - 17 October 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-blue-500" />
                <span>Stockholm, Sweden</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-800"
              >
                Submit Your Paper
              </Button>
            </div>
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-500" />
                <span className="text-sm text-blue-700 dark:text-blue-300">
                  1000+ Attendees
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="h-5 w-5 text-blue-500" />
                <span className="text-sm text-blue-700 dark:text-blue-300">
                  100+ Speakers
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-blue-500" />
                <span className="text-sm text-blue-700 dark:text-blue-300">
                  50+ Countries
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-full w-full  p-8">
              <img
                alt="Conference illustration"
                className="h-auto w-full object-contain"
                src="https://illustrations.popsy.co/blue/woman-hugging-earth.svg"
              />
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 rounded-2xl bg-primary p-6 text-primary-foreground shadow-lg bg-white"
              >
                <Sparkles className="h-8 w-8 mb-2 text-blue-700" />
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">
                  Innovative Solutions <br /> Showcase
                </h3>
                <p className="mt-1 text-blue-700 dark:text-blue-200 max-w-xs">
                  Connect with industry leaders
                </p>
              </motion.div> */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-20 -left-6 rounded-2xl bg-primary p-6 text-primary-foreground "
              >
                <MorphingCard
                  width="260px"
                  height="220px"
                  contents={[
                    {
                      shape: "rectangle",
                      title: "Discover",
                      description:
                        "Explore our innovative features that redefine user experience.",
                    },
                    {
                      shape: "circle",
                      title: "Connect",
                      description:
                        "Join a community of forward-thinking individuals and ideas.",
                    },
                    {
                      shape: "hexagon",
                      title: "Transform",
                      description:
                        "Witness the evolution of design and functionality in real-time.",
                    },
                  ]}
                  colorScheme={{ from: "#4F46E5", to: "#7C3AED" }}
                  autoPlay={true}
                  interval={4000}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
