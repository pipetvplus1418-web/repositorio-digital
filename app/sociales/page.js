import Image from "next/image";
import Link from "next/link";

export default function Sociales() {
  const unidades = [
    {
      titulo: "Unidad 1",
      subtitulo: "Aprendamos a convivir",
      temas: [
        "¿Cuáles son nuestros derechos y deberes escolares?",
        "Los derechos humanos son de todas las personas",
        "Estudiemos la Constitución Política de Colombia",
        "¿Qué es la cultura?",
        
      ],
    },
    {
      titulo: "Unidad 2",
      subtitulo: "¡Exploremos nuestro país!",
      temas: [
        "¿Cómo es el territorio colombiano?",
        "Estudiemos la ubicación geográfica y las fronteras de Colombia",
        "¿Cuáles son las regiones naturales de Colombia?",
        "¿Por qué es tan importante el suelo?",
        "¿Cuáles son las regiones naturales del mundo?",
      ],
    },
    {
      titulo: "Unidad 3",
      subtitulo: "Conozcamos otras culturas y el origen de nuestro país",
      temas: [
        "Conozcamos algunas grandes exploraciones",
        "¿Cómo fue la época de la Colonia en Colombia?",
        "¡Colombia se independizó de España!",
        "Colombia: ¡república independiente!",
        "Conozcamos la cultura afrocolombiana",
        "Estudiemos la importancia de las ciudades colombianas del siglo XIX"
      ],
    },
    {
      titulo: "Unidad 4",
      subtitulo: "Conozcamos nuestro país en la actualidad",
      temas: [
        "¿Qué ocurrió en Colombia durante el siglo XX?",
        "¿Qué cambios ocurrieron en Colombia entre los siglos XIX y XX?",
        "¿Por qué son importantes los medios de comunicación?",
        "¡Conozcamos cómo progresa Colombia!",
        "¿Qué fue la Campaña Libertadora?",
      ],
    },
  ];

  return (
    <main className="min-h-screen px-10 py-10 flex flex-col items-center 
      bg-gradient-to-br from-green-600 via-green-500 to-emerald-600">

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

      <div className="fixed top-4 right-4 flex gap-3 z-50">

  <Link 
    href="/matematicas"
    className="bg-white/20 text-white px-4 py-2 rounded-xl shadow
               hover:bg-white/30 backdrop-blur-md transition"
  >
    ✖ Matemáticas
  </Link>
<Link 
    href="/Lenguaje"
    className="bg-white/20 text-white px-4 py-2 rounded-xl shadow
               hover:bg-white/30 backdrop-blur-md transition"
  >
    📖 Lenguaje
  </Link>

  <Link 
    href="/ciencias"
    className="bg-white/20 text-white px-4 py-2 rounded-xl shadow
               hover:bg-white/30 backdrop-blur-md transition"
  >
    🔬 Ciencias
  </Link>
  </div>

      {/* IMAGEN */}
      <div className="flex justify-center">
        <Image  
          src="/images/logosociales.jpg" 
          alt="logociencias"
          width={300} 
          height={300} 
        />
      </div>

      {/* TÍTULO */}
      <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-md">
        🌍 Sociales
      </h1>

      <p className="text-white/90 mb-10 drop-shadow-md">
        Aquí encontrarás el material de estudio para Sociales.
      </p>

      {/* CUADROS DE UNIDADES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {unidades.map((unidad, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-sm p-10 rounded-xl shadow-lg
                       hover:shadow-2xl hover:scale-105 transition duration-300 
                       cursor-pointer hover:bg-green-100/90"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-1">
              {unidad.titulo}
            </h3>

            <p className="text-green-600 mb-6">
              {unidad.subtitulo}
            </p>

            <ul className="text-gray-800 space-y-2">
              {unidad.temas.map((tema, i) => (
                <li key={i} className="text-sm">• {tema}</li>
              ))}
            </ul>

            {/* ENLACE A LA UNIDAD */}
            <Link href={`/sociales/unidad${index + 1}`}>
              <p className="mt-4 text-green-700 font-medium text-sm underline">
                Ir al material...
              </p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
