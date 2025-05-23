<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Facundo Morán - Portafolio</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <main>
    <!-- Presentación -->
    <section>
      <h1>Facundo Morán</h1>
      <div class="underline"></div>
      <h2>Estudiante de Ingeniería en Informática</h2>
    </section>

    <!-- Sobre mí -->
    <section class="about">
      <h3>Sobre mí</h3>
      <p>
        Soy estudiante de Ingeniería Informática, actualmente cursando el cuarto año de la carrera. Busco incorporarme al ámbito laboral para aplicar mis conocimientos en un entorno profesional, aprender de personas con experiencia y desarrollarme a nivel técnico y personal. Me motiva el trabajo en equipo, el aprendizaje constante y contribuir con soluciones reales.
      </p>
    </section>

    <!-- Tecnologías -->
    <section>
      <h3>Lenguajes y Frameworks</h3>
      <div class="grid">
        <div><img src="https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png" alt="Python"/><span>Python</span></div>
        <div><img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Java"/><span>Java</span></div>
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML"/><span>HTML</span></div>
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS"/><span>CSS</span></div>
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript"/><span>JavaScript</span></div>
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React"/><span>React</span></div>
        <div><img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="Redux"/><span>Redux</span></div>
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg" alt="Spring Boot"/><span>Spring Boot</span></div>
        <div><img src="https://cdn.worldvectorlogo.com/logos/hibernate.svg" alt="Hibernate"/><span>Hibernate</span></div>
      </div>
    </section>

    <section>
      <h3>Bases de Datos</h3>
      <div class="grid">
        <div><img src="https://cdn-icons-png.flaticon.com/512/5968/5968364.png" alt="SQL Server"/><span>SQL Server</span></div>
        <div><img src="https://webimages.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" alt="MongoDB"/><span>MongoDB</span></div>
        <div><img src="https://cdn.worldvectorlogo.com/logos/apache-cassandra-1.svg" alt="Cassandra"/><span>Cassandra</span></div>
        <div><img src="https://cdn.worldvectorlogo.com/logos/redis-4.svg" alt="Redis"/><span>Redis</span></div>
        <div><img src="https://cdn.worldvectorlogo.com/logos/neo4j-2.svg" alt="Neo4j"/><span>Neo4j</span></div>
      </div>
    </section>

    <!-- Contacto -->
    <section class="contact">
      <h3>Contáctame</h3>
      <form action="https://formspree.io/f/xgvkbyvq?redirect=https://tusitio.vercel.app/gracias" method="POST">
        <input type="text" name="name" placeholder="Nombre" required />
        <input type="email" name="email" placeholder="Correo electrónico" required />
        <textarea name="message" placeholder="Mensaje" rows="4" required></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>
    </section>
  </main>
</body>
</html>
