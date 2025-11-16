import Image from "next/image";
import Link from "next/link";

export default function Matematicas() {
  const unidades = [
    {
      titulo: "Unidad 1",
      subtitulo: "Los números también cumplen reglas",
      temas: [
        "¿Cómo aplicamos el m.c.m. y el m.c.d. en la resolución de problemas?",
        "¡Utilicemos los números fraccionarios!",
        "Practiquemos algunas operaciones utilizando fracciones",
        "¡Utilicemos los números mixtos!",
        "Hallemos equivalencias entre las fracciones y los números decimales",
        "¡Calculemos el área y el perímetro de diferentes figuras!",
      ],
    },
    {
      titulo: "Unidad 2",
      subtitulo: "Con los números podemos hacer muchos cálculos",
      temas: [
        "¡Realicemos operaciones con números decimales!",
        "Una nueva operación para solucionar problemas",
        "Ahora relacionemos la potenciación con la radicación",
        "Cómo aplicamos la potenciación, la radicación y la logaritmación",
        "¡Ubiquemos objetos en el plano!",
        "Empleemos el orden en las operaciones matemáticas",
      ],
    },
    {
      titulo: "Unidad 3",
      subtitulo: "Utilicemos adecuadamente los sistemas de medida",
      temas: [
        "¡Realicemos mediciones de volumen y de masa!",
        "Establezcamos relaciones de variación",
        "¡Identifiquemos variables independientes y variables dependientes!",
        "Reglas que aumentan y reglas que disminuyen",
        "¿Qué tan grande es?",
        "¡Analicemos la información de tablas y gráficas!",
        "¡Utilicemos nuestro ingenio en la creación de figuras!"
      ],
    },
    {
      titulo: "Unidad 4",
      subtitulo: "Apliquemos nuestros conocimientos a la resolución de problemas",
      temas: [
        "Comparemos la capacidad de algunos objetos",
        "Caractericemos datos",
        "¡Interpretemos información porcentual!",
        "¡Calculemos el término desconocido!",
        "¿Qué probabilidad hay?",
        "Reconozcamos las características de los sólidos",
        "¿Qué medidas tienen en común las figuras planas y los sólidos geométricos?"
      ],
    },
  ];

  return (
    <main className="min-h-screen px-10 py-10 flex flex-col items-center 
      bg-gradient-to-br from-blue-700 via-blue-500 to-indigo-600">

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

      {/* LOGO O IMAGEN */}
      <div className="flex justify-center">
              <Image  
                src="/images/logomatematicas.png" 
                alt="logociencias"
                width={300} 
                height={300} 
              />
              </div>

      {/* TÍTULO */}
      <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-md">
        ➗ Matemáticas
      </h1>

      <p className="text-white/90 mb-10 drop-shadow-md">
        Aquí encontrarás el material de estudio para Matemáticas.
      </p>

      {/* TARJETAS DE UNIDADES */}
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

            <Link href={`/matematicas/unidad${index + 1}`}>
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
