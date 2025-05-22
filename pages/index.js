export default function Home() {
  return (
    <main className="min-h-screen px-4 sm:px-10 py-10 flex flex-col gap-20 items-center bg-[var(--background)] text-[var(--foreground)]">
      {/* Presentación */}
      <section className="w-full max-w-4xl text-center space-y-4 animate-fade-in">
        <h1 className="text-5xl font-bold">Facundo Morán</h1>
        <h2 className="text-lg text-gray-600 dark:text-gray-400">
          Estudiante de Ingeniería en Informática
        </h2>
        <p className="italic text-md text-gray-500 dark:text-gray-400">
          "El conocimiento es poder, pero compartirlo es sabiduría."
        </p>
      </section>

      {/* Sobre mí */}
      <section className="w-full max-w-3xl p-8 rounded-2xl shadow-xl bg-[var(--secondary)]">
        <h3 className="text-2xl font-semibold mb-4">Sobre mí</h3>
        <p className="text-base leading-relaxed">
          Soy estudiante de Ingeniería Informática, actualmente cursando el cuarto año de la carrera. Busco incorporarme al ámbito laboral para aplicar mis conocimientos en un entorno profesional, aprender de personas con experiencia y desarrollarme a nivel técnico y personal. Me motiva el trabajo en equipo, el aprendizaje constante y contribuir con soluciones reales.
        </p>
      </section>

      {/* Tecnologías */}
      <section className="w-full max-w-6xl space-y-16">
        {/* Lenguajes y Frameworks */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center">Lenguajes y Frameworks</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center bg-[var(--secondary)] p-6 rounded-2xl shadow-md">
            {/* Logos */}
          </div>
        </div>

        {/* Bases de Datos */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center">Bases de Datos</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center bg-[var(--secondary)] p-6 rounded-2xl shadow-md">
            {/* Logos */}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="w-full max-w-3xl p-8 rounded-2xl shadow-lg bg-[var(--secondary)]">
        <h3 className="text-2xl font-semibold text-center mb-6">Contáctame</h3>
        <form
          action="https://formspree.io/f/mqaqqjpr?redirect=https://tusitio.vercel.app/gracias"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="w-full px-4 py-2 rounded border border-gray-300 bg-[var(--accent)] text-[var(--foreground)]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-2 rounded border border-gray-300 bg-[var(--accent)] text-[var(--foreground)]"
            required
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            className="w-full px-4 py-2 rounded border border-gray-300 bg-[var(--accent)] text-[var(--foreground)]"
            rows={4}
            required
          />
          <button
            type="submit"
            className="w-full bg-[var(--primary)] text-white py-2 rounded hover:bg-opacity-90 transition font-semibold"
          >
            Enviar mensaje
          </button>
        </form>
      </section>
    </main>
  );
}
