import Image from "next/image";
import Link from "next/link";

export default function Ciencias() {
  const unidades = [
    {
      titulo: "Unidad 1",
      subtitulo: "Organización interna de los seres vivos",
      temas: ["¿Cómo están conformados los seres vivos?", "Organismos Unicelulares y organismos pluricelulares ", "Tejidos y las células que conforman las plantas y los animales", "¿Cómo se organizan internamente los seres humanos?", "Clasificacion de los seres vivos en reinos", "Las vacunas"],
    },
    {
      titulo: "Unidad 2",
      subtitulo: " Sistemas y aparatos que conforman el cuerpo humano",
      temas: ["Estructura y la funcion del sistema nerviso", "¿Cómo está conformado y cómo funciona nuestro sistema locomotor?", "¿Cómo está conformado y cómo funciona nuestro sistema digestivo?", "estructura y la función del aparato cardiovascular", "¿Cómo está conformado y cómo funciona nuestro sistema respiratorio?", "la importancia del aparato reproductor"],
    },
    {
      titulo: "Unidad 3",
      subtitulo: " Sustancias químicas y sus propiedades",
      temas: ["la acidez y la basicidad de algunas sustancias", "los cambios físicos", "los cambios químicos", "¿Cómo se clasifican las sustancias puras y las mezclas?"],
    },
    {
      titulo: "Unidad 4",
      subtitulo: "La electricidad y sus aplicaciones en la vidad diaria",
      temas: ["¿Qué es la electricidad?", "¿Cómo se produce la electricidad?", "¿Cómo se transforma la electricidad?", "¿Cómo se utiliza la electricidad en la vida diaria?", " ¿Cómo se puede ahorrar electricidad?"],
    },
  ];

  return (
    <main className="min-h-screen px-10 py-10 flex flex-col items-center 
                 bg-gradient-to-br from-purple-700 via-purple-500 to-indigo-700">

         <div className="w-full mb-4 flex justify-start">
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
    href="/sociales"
    className="bg-white/20 text-white px-4 py-2 rounded-xl shadow
               hover:bg-white/30 backdrop-blur-md transition"
  >
    🌎 Sociales
  </Link>

</div>

    {/* IMAGEN */}  
      <div className="flex justify-center">
        <Image  
          src="/images/logociencias.png" 
          alt="logociencias"
          width={300} 
          height={300} 
          className="rounded-full"
        />
      </div>

      {/* TÍTULO */}
      <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-md">
        🔬 Ciencias Naturales
      </h1>

      <p className="text-gray-200 mb-10 drop-shadow-md">
        Aquí encontrarás el material de estudio para Ciencias.
      </p>

      {/* UNIDADES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {unidades.map((unidad, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-sm p-10 rounded-xl shadow-lg 
                       hover:shadow-2xl hover:scale-105 
                       transition duration-300 cursor-pointer hover:bg-purple-100/90"
          >
            <h3 className="text-xl font-semibold text-purple-700 mb-1">
              {unidad.titulo}
            </h3>

            {/* SUBTÍTULO */}
            <p className="text-purple-500 text-50 mb-10">
              {unidad.subtitulo}
            </p>

            <ul className="text-gray-800 space-y-3">
              {unidad.temas.map((tema, i) => (
                <li key={i} className="text-sm">• {tema}</li>
              ))}
            </ul>

             {/* ENLACE A LA UNIDAD */}
  <Link href={`/ciencias/unidad${index + 1}`}>
    <p className="mt-4 text-purple-600 font-medium text-sm underline">
      Ir al material...
    </p>
  </Link>
</div>
        ))}
      </div>
    </main>
  );
}
