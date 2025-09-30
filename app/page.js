import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-center px-4">
      {/* Título con icono */}
      <h1 className="text-4xl font-bold text-blue-600 mb-2 flex items-center gap-2">
        📚 Repositorio Digital Baraya
      </h1>
      
      {/* Subtítulo */}
      <p className="text-gray-600 mb-8">
        Bienvenido a tu espacio de estudio. Selecciona una materia para comenzar.
      </p>

      {/* Botones de materias */}
      <div className="flex gap-4">
        <Link href="/matematicas">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow">
            Matemáticas
          </button>
        </Link>
        <Link href="/sociales">
          <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow">
            Sociales
          </button>
        </Link>
        <Link href="/ciencias">
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-lg shadow">
            Ciencias
          </button>
        </Link>
        <Link href="/espanol">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-lg shadow">
            Español
          </button>
        </Link>
      </div>
    </main>
  );
}

