"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

export default function About() {
  const skills = [
    { name: "Web Development", progress: 90 },
    { name: "UI/UX Design", progress: 85 },
    { name: "Mobile Development", progress: 80 },
    { name: "Backend Development", progress: 75 },
  ]

  return (
    <section id="about" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-2"
        >
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              About Me
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                I am a passionate developer and student, dedicated to creating innovative digital solutions. With a strong foundation in both frontend and backend development, I strive to build seamless, user-centric applications that make a difference.
              </p>
              <p>
                My journey in technology began with a curiosity for how things work, which evolved into a deep love for coding and problem-solving. I continuously explore new technologies and methodologies to stay at the forefront of digital innovation.
              </p>
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-white">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-200">{skill.name}</span>
                    <span className="text-gray-400">{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}