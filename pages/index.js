export default function Home() {
  const techs = [
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'HTML', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Redux', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'Spring Boot', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Hibernate', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg' },
  ];

  const databases = [
    { name: 'SQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Cassandra', src: 'https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg' },
    { name: 'Redis', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Neo4j', src: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Neo4j_logo.svg' },
  ];

  const renderItems = (items: { name: string; src: string }[]) =>
    items.map((item) => (
      <div
        key={item.name}
        className="flex flex-col items-center justify-center text-center transform transition-transform duration-300 hover:scale-110"
      >
        <div className="w-16 h-16 mb-2 flex items-center justify-center">
          <img src={item.src} alt={item.name} className="max-w-full max-h-full object-contain" />
        </div>
        <p className="text-sm">{item.name}</p>
      </div>
    ));

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-8 space-y-16">
      {/* Hero */}
      <div className="w-full h-64 bg-gradient-to-r from-gray-800 via-gray-900 to-black flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold mb-2">Facundo Morán</h1>
        <h2 className="text-xl text-gray-300">Estudiante de Ingeniería en Informática</h2>
      </div>

      {/* Sobre mí */}
      <section className="max-w-3xl text-center space-y-4">
        <h3 className="text-2xl font-semibold">Sobre mí</h3>
        <p>
          Soy estudiante de Ingeniería Informática, actualmente cursando el cuarto año de la carrera. Busco incorporarme al ámbito laboral para comenzar a aplicar mis conocimientos en un entorno profesional, aprender de personas con experiencia y continuar desarrollándome tanto a nivel técnico como personal. Me motiva el trabajo en equipo, el aprendizaje constante y la posibilidad de contribuir con soluciones reales mientras me preparo para los desafíos del futuro profesional.
        </p>
      </section>

      {/* Tecnologías */}
      <section className="max-w-6xl w-full text-center space-y-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Lenguajes y Frameworks</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
            {renderItems(techs)}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Bases de Datos</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
            {renderItems(databases)}
          </div>
        </div>
      </section>

      {/* Contacto */}
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
