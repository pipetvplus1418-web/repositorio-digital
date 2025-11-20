import Image from "next/image";
import Link from "next/link";

export default function Lenguaje() {
  const unidades = [
    {
      titulo: "Unidad 1",
      subtitulo: "¡Leo y construyo diversos textos narrativos y descriptivos!",
      temas: [
        "¿Cómo son los textos narrativos?",
        "¡Disfrutemos de los cuentos!",
        "¿Cómo escribir mi propio cuento?",
        "¿Conocemos y recordamos fábulas?",
        "¡El mito y la leyenda son narraciones fascinantes!",
        "¿Cómo narramos y describimos?",
      ],
    },
    {
      titulo: "Unidad 2",
      subtitulo: "¡Descubramos el sonido y la imaginación en las palabras!",
      temas: [
        "Nos gusta escribir poemas",
        "Actitud poética: ¡utilicemos figuras literarias!",
        "¿Conocemos el valor de los poemas?",
        "¡Escribo mis propios poemas!",
        "¡Juguemos con letras y palabras!",
        "¡Las obras de teatro nos divierten!"
      ],
    },
    {
      titulo: "Unidad 3",
      subtitulo: "¡Conozcamos formas de disfrutar y utilizar el lenguaje!",
      temas: [
        "¿Cómo utilizamos el lenguaje?",
        "¡Conozco más sobre las palabras!",
        "¡Escribamos mensajes!",
        "¿Podemos comunicarnos sin palabras?",
        "¡Juguemos a transmitir mensajes!",
        "¡Identifiquemos oraciones y párrafos al escribir!"
      ],
    },
    {
      titulo: "Unidad 4",
      subtitulo: "¡Avancemos en el conocimiento del lenguaje!",
      temas: [
        "Conozco diversas técnicas de expresión oral: la entrevista",
        "¡Aprendamos a argumentar en mesas redondas y debates!",
        "¡Interpretemos noticias y escribamos!",
        "¡Cada vez me intereso más por la lectura!",
        "¡Comprendamos y escribamos textos instructivos!",
        "¡Aprendamos a tomar notas!"
      ],
    },
  ];

  return (
    <main className="min-h-screen px-10 py-10 flex flex-col items-center
      bg-gradient-to-br from-pink-600 via-pink-500 to-rose-600">

      {/* BOTÓN DE INICIO */}
      <div className="w-full mb-6 flex justify-start">
        <Link 
          href="/"
          className="text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg 
                     hover:bg-white/30 transition shadow-md"
        >
          ⬅ Inicio
        </Link>
      </div>



      {/* BOTONES DE OTRAS MATERIAS  */}
<div className="fixed top-4 right-4 flex gap-3 z-50">

  <Link 
    href="/matematicas"
    className="bg-white/20 text-white px-4 py-2 rounded-xl shadow
               hover:bg-white/30 backdrop-blur-md transition"
  >
    ✖ Matemáticas
  </Link> 
  

  <Link 
    href="/ciencias"
    className="bg-white/20 text-white px-4 py-2 rounded-xl shadow
               hover:bg-white/30 backdrop-blur-md transition"
  >
    🔬 Ciencias
  </Link>

  <Link 
    href="/sociales"
    className="bg-white/20 text-white px-4 py-2 rounded-xl shadow
               hover:bg-white/30 backdrop-blur-md transition"
  >
    🌎 Sociales
  </Link>

</div>
  


      

      {/* IMAGEN */}
      <div className="flex justify-center mb-4">
        <Image  
          src="/images/logolengua.jpg" 
          alt="logolenguaje"
          width={220}
          height={220}
          className="rounded-full"
        />
      </div>

      {/* TÍTULO */}
      <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-md">
        📖 Lenguaje
      </h1>

      <p className="text-white/90 mb-10 drop-shadow-md">
        Aquí encontrarás el material de estudio para Lenguaje.
      </p>

      {/* CUADROS DE UNIDADES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {unidades.map((unidad, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-sm p-10 rounded-xl shadow-lg 
                       hover:shadow-2xl hover:scale-105 
                       transition duration-300 cursor-pointer hover:bg-blue-100/90"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-1">
              {unidad.titulo}
            </h3>

            <p className="text-blue-500 mb-10">
              {unidad.subtitulo}
            </p>

            <ul className="text-gray-800 space-y-3">
              {unidad.temas.map((tema, i) => (
                <li key={i} className="text-sm">• {tema}</li>
              ))}
            </ul>

            <Link href={`/Lenguaje/unidad${index + 1}`}>
              <p className="mt-4 text-blue-600 font-medium text-sm underline">
                Ir al material...
              </p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

