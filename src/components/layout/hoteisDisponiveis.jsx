import { useEffect, useRef } from "react";
import { Hoteis } from "../../data/hoteis";
import ScrollReveal from  "scrollreveal"
export default function HoteisDisponiveis() {
  const ref = useRef()
  

  return (
    <section className="w-5/6 m-auto flex flex-col items-center p-4">
      <h2 className="font-bold text-2xl m-6">Hoteis Populares</h2>

      {/* Grid Responsivo */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Hoteis.map((ele) => (
          <div
            key={ele.id}
            className="w-full bg-white shadow-md border rounded-xl overflow-hidden 
                       hover:scale-105 transition-transform duration-300"
                       ref={ref}
          >
            {/* Imagem */}
            <div className="w-full h-48">
              <img
                src={ele.img}
                alt={ele.nome}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Informações */}
            <div className="w-full flex flex-col justify-between p-4">
              <div className="flex justify-between">
                <h3 className="font-medium">{ele.nome}</h3>
                <h3 className="font-medium">{ele.codigo}</h3>
              </div>
              <p className="text-gray-600">{ele.local}</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
