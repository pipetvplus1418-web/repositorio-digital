import Image from "next/image";
import Link from "next/link";

export default function Lenguaje() {
  const unidades = [
    {
      titulo: "Unidad 1",
      subtitulo: "Comprensión lectora",
      temas: [
        "Tipos de texto",
        "Ideas principales y secundarias",
        "Inferencias",
        "Conectores lógicos",
        "Tono e intención del texto",
      ],
    },
    {
      titulo: "Unidad 2",
      subtitulo: "Gramática y estructura del lenguaje",
      temas: [
        "Sustantivos y adjetivos",
        "Verbos y tiempos verbales",
        "Pronombres",
        "Oraciones simples y compuestas",
        "Signos de puntuación",
      ],
    },
    {
      titulo: "Unidad 3",
      subtitulo: "Producción textual",
      temas: [
        "Redacción básica",
        "Coherencia y cohesión",
        "Uso adecuado de párrafos",
        "Textos narrativos y expositivos",
      ],
    },
    {
      titulo: "Unidad 4",
      subtitulo: "Literatura",
      temas: [
        "Géneros literarios",
        "Figuras literarias",
        "Autores importantes",
        "Elementos del cuento",
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
                       hover:shadow-2xl hover:scale-105 transition duration-300 
                       cursor-pointer hover:bg-pink-100/90"
          >
            <h3 className="text-xl font-semibold text-pink-700 mb-1">
              {unidad.titulo}
            </h3>

            <p className="text-pink-600 mb-6">
              {unidad.subtitulo}
            </p>

            <ul className="text-gray-800 space-y-2">
              {unidad.temas.map((tema, i) => (
                <li key={i} className="text-sm">• {tema}</li>
              ))}
            </ul>

            {/* ENLACE A LA UNIDAD */}
            <Link href={`/lenguaje/unidad${index + 1}`}>
              <p className="mt-4 text-pink-700 font-medium text-sm underline">
                Ir al material...
              </p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

