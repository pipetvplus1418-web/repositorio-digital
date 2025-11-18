import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center 
    bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 
    text-center px-4">


     <div className="flex justify-center mb-4">
  <Image
    src="/images/logocolegio.png"
    alt="logolenguaje"
    width={220}
    height={220}
    className="rounded-full"
  />
</div>


      {/* Título */}
      <h1 className="text-5xl font-bold text-white mb-2 flex items-center gap-2 drop-shadow-lg">
        📚 Repositorio Digital Baraya
      </h1>
      
      {/* Subtítulo */}
      <p className="text-white/200 mb-8 drop-shadow-md">
        Bienvenido a tu espacio de estudio. Selecciona una materia para comenzar.
      </p>

      {/* Botones */}
      <div className="flex gap-4">
        <Link href="/matematicas">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow">
            Matemáticas
          </button>
        </Link>

        <Link href="/sociales">
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow">
            Sociales
          </button>
        </Link>

        <Link href="/ciencias">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg shadow">
            Ciencias
          </button>
        </Link>

        <Link href="/Lenguaje">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-lg shadow">
            Lenguaje
          </button>
        </Link>
      </div>


      {/* Subtítulo */}
      <p className="text-white/200 mb-8 drop-shadow-md">
        Proyecto de grado por: Felipe Ojeda-Wilmary Gamboa
      </p>


      <div className="absolute bottom-10 right-4 text-white/80 text-sm bg-black/20 px-3 py-1 rounded-lg backdrop-blur-sm shadow">
        Material de estudio extraído de:{" "}
        <a 
          href="https://librosdetextocolombia.com/" 
          target="_blank" 
          className="underline"
        >
          librosdetextocolombia.com
        </a>
      </div>


    </main>
  );
}
