import Link from "next/link";

export default function unidad3() {
  return (
    <main className="min-h-screen p-10 text-white 
                     bg-gradient-to-br from-purple-700 via-purple-500 to-indigo-700">

      {/* BOTÓN DE VOLVER */}
      <div className="w-full mb-6 flex justify-start">
        <Link 
          href="/ciencias"
          className="text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg 
                     hover:bg-white/30 transition shadow-md"
        >
          ⬅ Volver
        </Link>
      </div>

      {/* CONTENIDO CENTRADO */}
      <div className="max-w-xl mx-auto bg-white/10 p-8 rounded-2xl shadow-lg backdrop-blur-md">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Unidad 3 - Material de estudio
        </h1>

        <p className="mb-4 text-center">Haz clic para abrir los PDF:</p>

        <ul className="space-y-3 text-blue-300 underline text-center">
          <li>
            <Link href="/pdf/ciencias-unidad3-tema1.pdf" target="_blank">
              📄 Guía 1
            </Link>
          </li>

          <li>
            <Link href="/pdf/ciencias-unidad3-tema2.pdf" target="_blank">
              📄 Guía 2
            </Link>
          </li>

          <li>
            <Link href="/pdf/ciencias-unidad3-tema3.pdf" target="_blank">
              📄 Guía 3
            </Link>
          </li>

          <li>
            <Link href="/pdf/ciencias-unidad3-tema4 y evaluando lo aprendido.pdf" target="_blank">
              📄 Guía 4
            </Link>
          </li>

          <div className="mt-8 flex justify-center">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/tpYlt7TeqZA"
            title="YouTube video ciencias" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-xl shadow-xl"
          ></iframe>
        </div>

         
          </ul>

      </div>
    </main>
  );
}
