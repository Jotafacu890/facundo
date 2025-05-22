export default function Home() {
  return (
    <main className="min-h-screen px-4 sm:px-8 py-16 flex flex-col items-center bg-[var(--background)] text-[var(--foreground)]">
      
      {/* Presentación */}
      <section className="w-full max-w-3xl text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold">Facundo Morán</h1>
        <p className="text-base text-gray-600 dark:text-gray-400 mt-2">
          Estudiante de Ingeniería en Informática
        </p>
      </section>

      {/* Sobre mí */}
      <section className="w-full max-w-2xl border border-[var(--border)] rounded-xl bg-[var(--card)] p-6 mb-20">
        <h2 className="text-2xl font-semibold mb-4">Sobre mí</h2>
        <p className="text-base leading-relaxed">
          Soy estudiante de Ingeniería Informática, actualmente cursando el cuarto año de la carrera. Busco incorporarme al ámbito laboral para aplicar mis conocimientos en un entorno profesional, aprender de personas con experiencia y desarrollarme a nivel técnico y personal.
        </p>
      </section>

      {/* Tecnologías */}
      <section className="w-full max-w-5xl mb-20">
        <h2 className="text-2xl font-semibold text-center mb-10">Tecnologías</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {[
            { name: 'Python', src: 'https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png' },
            { name: 'Java', src: 'https://cdn-icons-png.flaticon.com/512/226/226777.png' },
            { name: 'React', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
            { name: 'Redux', src: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' },
            { name: 'Spring Boot', src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg' },
            { name: 'MongoDB', src: 'https://webimages.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png' },
          ].map(({ name, src }) => (
            <div key={name} className="flex flex-col items-center space-y-2">
              <img src={src} alt={name} className="w-12 h-12 object-contain" />
              <span className="text-sm">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section className="w-full max-w-xl border border-[var(--border)] rounded-xl bg-[var(--card)] p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Contáctame</h2>
        <form
          action="https://formspree.io/f/mqaqqjpr?redirect=https://tusitio.vercel.app/gracias"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-white dark:bg-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-white dark:bg-black"
            required
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows={4}
            className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-white dark:bg-black"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-[var(--accent)] text-white rounded-lg hover:bg-blue-600 transition"
          >
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
}
