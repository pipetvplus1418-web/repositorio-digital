import Link from "next/link";

export default function Unidad3() {
  return (
    <main className="min-h-screen p-10 text-white
      bg-gradient-to-br from-green-600 via-green-500 to-emerald-600">

      <div className="w-full mb-6 flex justify-start">
        <Link 
          href="/sociales"
          className="text-white bg-white/20 px-4 py-2 rounded-lg 
                     hover:bg-white/30 transition shadow-md"
        >
          ⬅ Volver
        </Link>
      </div>

      <div className="max-w-xl mx-auto bg-white/10 p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Unidad 3 - Material de estudio
        </h1>

        <ul className="space-y-3 text-green-300 underline text-center">
          <li><Link href="/pdf/sociales-unidad3-tema1.pdf" target="_blank">📄 Guía 1</Link></li>
          <li><Link href="/pdf/sociales-unidad3-tema2.pdf" target="_blank">📄 Guía 2</Link></li>
          <li><Link href="/pdf/sociales-unidad3-tema3.pdf" target="_blank">📄 Guía 3</Link></li>
          <li><Link href="/pdf/sociales-unidad3-tema4.pdf" target="_blank">📄 Guía 4</Link></li>
          <li><Link href="/pdf/sociales-unidad3-tema5.pdf" target="_blank">📄 Guía 5</Link></li>
          <li><Link href="/pdf/sociales-unidad3-tema6.pdf" target="_blank">📄 Guía 6</Link></li>
        </ul>

        <div className="flex justify-center mt-6">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/Xar2gpHjzsg"
            title="YouTube video sociales" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-xl shadow-xl"
          ></iframe>
        </div>


      </div>
    </main>
  );
}
