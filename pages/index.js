<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Facundo Morán | Portafolio</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <style>
    :root {
      --background: #f9f5f0;
      --foreground: #1a1a1a;
      --primary: #e09f3e;
      --secondary: #ffffff;
    }

    body {
      background-color: var(--background);
      color: var(--foreground);
    }
  </style>
</head>
<body class="min-h-screen px-4 sm:px-10 py-10 flex flex-col gap-20 items-center text-[var(--foreground)]">

  <!-- Presentación -->
  <section class="w-full max-w-4xl text-center space-y-4 py-8 border-b border-gray-300">
    <h1 class="text-6xl font-extrabold bg-gradient-to-r from-[var(--primary)] to-blue-500 text-transparent bg-clip-text">
      Facundo Morán
    </h1>
    <div class="w-16 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
    <h2 class="text-lg sm:text-xl text-gray-600 font-medium tracking-wide">
      Estudiante de Ingeniería en Informática
    </h2>
  </section>

  <!-- Sobre mí -->
  <section class="w-full max-w-3xl p-8 rounded-2xl shadow-lg bg-[var(--secondary)]">
    <h3 class="text-2xl font-semibold mb-4">Sobre mí</h3>
    <p class="text-base leading-relaxed">
      Soy estudiante de Ingeniería Informática, actualmente cursando el cuarto año de la carrera. Busco incorporarme al ámbito laboral para aplicar mis conocimientos en un entorno profesional, aprender de personas con experiencia y desarrollarme a nivel técnico y personal. Me motiva el trabajo en equipo, el aprendizaje constante y contribuir con soluciones reales.
    </p>
  </section>

  <!-- Tecnologías -->
  <section class="w-full max-w-6xl space-y-16">

    <!-- Lenguajes y Frameworks -->
    <div class="space-y-6">
      <h3 class="text-2xl font-semibold text-center">Lenguajes y Frameworks</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center bg-[var(--secondary)] p-6 rounded-2xl shadow-md">
        <!-- Íconos (ejemplo de 3, puedes copiar/pegar más) -->
        <div class="flex flex-col items-center space-y-2">
          <img src="https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png" alt="Python" class="w-12 h-12 object-contain" />
          <span class="text-sm text-center">Python</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Java" class="w-12 h-12 object-contain" />
          <span class="text-sm text-center">Java</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" class="w-12 h-12 object-contain" />
          <span class="text-sm text-center">HTML</span>
        </div>
        <!-- Continúa con los demás íconos como en el ejemplo -->
      </div>
    </div>

    <!-- Bases de Datos -->
    <div class="space-y-6">
      <h3 class="text-2xl font-semibold text-center">Bases de Datos</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center bg-[var(--secondary)] p-6 rounded-2xl shadow-md">
        <div class="flex flex-col items-center space-y-2">
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968364.png" alt="SQL Server" class="w-12 h-12 object-contain" />
          <span class="text-sm text-center">SQL Server</span>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <img src="https://webimages.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" alt="MongoDB" class="w-12 h-12 object-contain" />
          <span class="text-sm text-center">MongoDB</span>
        </div>
        <!-- Agrega más íconos como necesites -->
      </div>
    </div>

  </section>

  <!-- Contacto -->
  <section class="w-full max-w-3xl p-8 rounded-2xl shadow-lg bg-[var(--secondary)]">
    <h3 class="text-2xl font-semibold text-center mb-6">Contáctame</h3>
    <form action="https://formspree.io/f/xgvkbyvq?redirect=https://tusitio.vercel.app/gracias" method="POST" class="space-y-4">
      <input type="text" name="name" placeholder="Nombre" class="w-full px-4 py-2 rounded border border-gray-300 bg-white text-[var(--foreground)]" required />
      <input type="email" name="email" placeholder="Correo electrónico" class="w-full px-4 py-2 rounded border border-gray-300 bg-white text-[var(--foreground)]" required />
      <textarea name="message" placeholder="Mensaje" class="w-full px-4 py-2 rounded border border-gray-300 bg-white text-[var(--foreground)]" rows="4" required></textarea>
      <button type="submit" class="w-full bg-[var(--primary)] text-white py-2 rounded hover:bg-blue-700 transition font-semibold">Enviar mensaje</button>
    </form>
  </section>

</body>
</html>
