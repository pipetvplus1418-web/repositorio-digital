import Link from "next/link";

export default function Unidad3() {
  return (
    <main className="min-h-screen p-10 text-white
      bg-gradient-to-br from-pink-600 via-pink-500 to-rose-600">

      {/* BOTÓN VOLVER */}
      <div className="w-full mb-6 flex justify-start">
        <Link 
          href="/Lenguaje"
          className="text-white bg-white/20 px-4 py-2 rounded-lg 
                     hover:bg-white/30 transition shadow-md"
        >
          ⬅ Volver
        </Link>
      </div>

      {/* CONTENIDO */}
      <div className="max-w-xl mx-auto bg-white/10 p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Unidad 3 - ¡Conozcamos formas de disfrutar y utilizar el lenguaje!
        </h1>

        <p className="mb-4 text-center">Haz clic para abrir los PDF:</p>

        <ul className="space-y-3 text-pink-200 underline text-center">
         <li><Link href="/pdf/lenguaje-unidad3-tema1.pdf" target="_blank">📄 guia 1</Link></li>
          <li><Link href="/pdf/lenguaje-unidad3-tema2.pdf" target="_blank">📄 guia 2</Link></li>
          <li><Link href="/pdf/lenguaje-unidad3-tema3.pdf" target="_blank">📄 guia 3</Link></li>
          <li><Link href="/pdf/lenguaje-unidad3-tema4.pdf" target="_blank">📄 guia 4</Link></li>
          <li><Link href="/pdf/lenguaje-unidad3-tema5.pdf" target="_blank">📄 guia 5</Link></li>
          <li><Link href="/pdf/lenguaje-unidad3-tema6.pdf" target="_blank">📄 guia 6</Link></li>
        </ul>

        <div className="flex justify-center mt-6">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/Bw4ZLVTarSA"
            title="Video sobre textos narrativos" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-xl"
          ></iframe>
        </div>

      </div>
    </main>
  );
}