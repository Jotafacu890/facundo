"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const technologies = [
  { name: "Python", src: "/images/python.png" },
  { name: "Java", src: "/images/java.png" },
  { name: "HTML", src: "/images/html.png" },
  { name: "CSS", src: "/images/css.png" },
  { name: "JavaScript", src: "/images/javascript.png" },
  { name: "React", src: "/images/react.png" },
  { name: "Redux", src: "/images/redux.png" },
  { name: "Spring Boot", src: "/images/springboot.png" },
  { name: "Hibernate", src: "/images/hibernate.png" },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 bg-[var(--background)] text-[var(--foreground)]">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold">Facundo Morán</h1>
        <p className="text-lg mt-2 text-[var(--accent)]">
          Estudiante de Ingeniería en Informática
        </p>
      </div>

      <section className="max-w-3xl mx-auto mb-12 bg-[var(--card)] rounded-2xl shadow-md border border-[var(--border)] p-6 md:p-8">
        <h2 className="text-2xl font-semibold mb-3">Sobre mí</h2>
        <p className="text-base leading-relaxed">
          Soy estudiante de Ingeniería Informática, actualmente cursando el cuarto año de la carrera.
          Busco incorporarme al ámbito laboral para aplicar mis conocimientos en un entorno profesional,
          aprender de personas con experiencia y desarrollarme a nivel técnico y personal. Me motiva el trabajo en equipo,
          el aprendizaje constante y contribuir con soluciones reales.
        </p>
      </section>

      <section className="max-w-5xl mx-auto bg-[var(--card)] rounded-2xl shadow-md border border-[var(--border)] p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Lenguajes y Frameworks
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="text-center transition-all duration-200"
            >
              <Image
                src={tech.src}
                alt={tech.name}
                width={50}
                height={50}
                className="mx-auto mb-2"
              />
              <span className="text-sm text-[var(--foreground)]">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
