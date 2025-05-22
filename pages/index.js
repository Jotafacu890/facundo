export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-8 space-y-16">
      {/* Hero con fondo degradado oscuro */}
      <div className="w-full h-64 bg-gradient-to-r from-gray-800 via-gray-900 to-black flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold text-white mb-2">Facundo Morán</h1>
        <h2 className="text-xl text-gray-300">Estudiante de Ingeniería en Informática</h2>
      </div>

      {/* Sobre mí */}
      <section className="max-w-3xl text-center space-y-4">
        <h3 className="text-2xl font-semibold">Sobre mí</h3>
        <p>
          Soy estudiante de Ingeniería Informática, actualmente cursando el cuarto año de la carrera. 
        Busco incorporarme al ámbito laboral para comenzar a aplicar mis conocimientos en un entorno profesional, aprender de personas con experiencia y continuar desarrollándome tanto a nivel técnico como personal.
        Me motiva el trabajo en equipo, el aprendizaje constante y la posibilidad de contribuir con soluciones reales mientras me preparo para los desafíos del futuro profesional.


        </p>
      </section>

      {/* Tecnologías */}
      <section className="max-w-5xl text-center space-y-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Lenguajes y Frameworks</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {[
              { name: 'Python', src: 'https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png' },
              { name: 'Java', src: 'https://images.vexels.com/media/users/3/166401/isolated/lists/b82aa7ac3f736dd78570dd3fa3fa9e24-icono-del-lenguaje-de-programacion-java.png' },
              { name: 'HTML', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png' },
              { name: 'CSS', src: 'https://www.superbefilms.com/wp-content/uploads/2016/03/css-logo.png' },
              { name: 'JavaScript', src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
              { name: 'React', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
              { name: 'Redux', src: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' },
              { name: 'Spring Boot', src: 'https://spring.io/images/icon-spring-b8754b8d2f26b0b63cf596c8d1ecb5eb.svg' },
              { name: 'Hibernate', src: 'https://cdn.worldvectorlogo.com/logos/hibernate.svg' },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110"
              >
                <img src={tech.src} alt={tech.name} className="w-16 h-16 mb-2 object-contain" />
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Bases de Datos</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {[
              { name: 'SQL', src: 'https://brandlogos.net/wp-content/uploads/2025/03/microsoft_sql_server-logo_brandlogos.net_wykhq.png' },
              { name: 'MongoDB', src: 'https://www.svgrepo.com/show/331488/mongodb.svg' },
              { name: 'Cassandra', src: 'https://cdn.worldvectorlogo.com/logos/apache-cassandra.svg' },
              { name: 'Redis', src: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Redis_Logo.svg' },
              { name: 'Neo4j', src: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Neo4j_logo.svg' },
            ].map((db) => (
              <div
                key={db.name}
                className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110"
              >
                <img src={db.src} alt={db.name} className="w-16 h-16 mb-2 object-contain" />
                <p>{db.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contáctame */}
      <section className="w-full bg-gray-800 py-12 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h3 className="text-2xl font-semibold">Contáctame</h3>
          <form
            action="https://formspree.io/f/mqaqqjpr?redirect=https://tusitio.vercel.app/gracias"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="w-full px-4 py-2 bg-gray-700 border border-white rounded text-white placeholder-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="w-full px-4 py-2 bg-gray-700 border border-white rounded text-white placeholder-white"
              required
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              className="w-full px-4 py-2 bg-gray-700 border border-white rounded text-white placeholder-white"
              rows={4}
              required
            />
            <button
              type="submit"
              className="w-full bg-white text-black py-2 rounded hover:bg-gray-300 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
