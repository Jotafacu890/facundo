export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-8 py-10 flex flex-col items-center space-y-24">
      {/* Hero */}
      <section className="w-full text-center space-y-4">
        <h1 className="text-5xl font-bold">Facundo Morán</h1>
        <h2 className="text-lg text-gray-400">Estudiante de Ingeniería en Informática</h2>
      </section>

      {/* Sobre mí */}
      <section className="max-w-2xl w-full text-center space-y-4">
        <h3 className="text-2xl font-semibold text-white">Sobre mí</h3>
        <p className="text-gray-300 leading-relaxed">
          Soy estudiante de Ingeniería Informática, actualmente cursando el cuarto año de la carrera. Busco incorporarme al ámbito laboral para aplicar mis conocimientos en un entorno profesional, aprender de personas con experiencia y desarrollarme a nivel técnico y personal. Me motiva el trabajo en equipo, el aprendizaje constante y contribuir con soluciones reales.
        </p>
      </section>

      {/* Tecnologías */}
      <section className="w-full max-w-5xl text-center space-y-16">
        {/* Lenguajes y Frameworks */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Lenguajes y Frameworks</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {[
              { name: 'Python', src: 'https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png' },
              { name: 'Java', src: 'https://cdn-icons-png.flaticon.com/512/226/226777.png' },
              { name: 'HTML', src: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
              { name: 'CSS', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
              { name: 'JavaScript', src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
              { name: 'React', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
              { name: 'Redux', src: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' },
              { name: 'Spring Boot', src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg' },
              { name: 'Hibernate', src: 'https://cdn.worldvectorlogo.com/logos/hibernate.svg' },
            ].map((tech) => (
              <div key={tech.name} className="flex flex-col items-center space-y-2">
                <img src={tech.src} alt={tech.name} className="w-12 h-12 object-contain" />
                <p className="text-sm">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bases de Datos */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Bases de Datos</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {[
              { name: 'SQL Server', src: 'https://cdn.worldvectorlogo.com/logos/microsoft-sql-server.svg' },
              { name: 'MongoDB', src: 'https://webimages.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png' },
              { name: 'Cassandra', src: 'https://cdn.worldvectorlogo.com/logos/apache-cassandra-1.svg' },
              { name: 'Redis', src: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Redis_Logo.svg' },
              { name: 'Neo4j', src: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Neo4j_logo.svg' },
            ].map((db) => (
              <div key={db.name} className="flex flex-col items-center space-y-2">
                <img src={db.src} alt={db.name} className="w-12 h-12 object-contain" />
                <p className="text-sm">{db.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="w-full bg-gray-900 py-10 px-4 sm:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h3 className="text-2xl font-semibold text-white">Contáctame</h3>
          <form
            action="https://formspree.io/f/mqaqqjpr?redirect=https://tusitio.vercel.app/gracias"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400"
              required
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400"
              rows={4}
              required
            />
            <button
              type="submit"
              className="w-full bg-white text-black py-2 rounded hover:bg-gray-300 transition font-semibold"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
