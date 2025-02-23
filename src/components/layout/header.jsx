import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [navAberto, setNavAberto] = useState(false);

  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md m-2">
      <h3 className="font-medium text-xl">Allu&Co</h3>

      {/* Ícone do Menu Mobile */}
      <button
        className="md:hidden text-4xl z-30"
        onClick={() => setNavAberto((prev) => !prev)}
      >
        {navAberto ? <IoClose /> : <IoMenu />}
      </button>

      {/* Menu Mobile */}
      <nav
        className={`fixed top-0 left-0 w-2/3 h-screen z-20 bg-slate-700 bg-opacity-85 flex flex-col items-center justify-center text-white text-2xl gap-8 transform ${
          navAberto ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col items-center gap-6">
          <li className="font-medium cursor-pointer hover:text-orange-400">
            Início
          </li>
          <li className="font-medium cursor-pointer hover:text-orange-400">
            Loja
          </li>
          <li className="font-medium cursor-pointer hover:text-orange-400">
            Contato
          </li>
        </ul>
      </nav>

      {/* Menu Desktop */}
      <nav className="hidden md:flex">
        <ul className="flex gap-10 text-lg">
          <li className="font-medium cursor-pointer hover:text-orange-400">
            Início
          </li>
          <li className="font-medium cursor-pointer hover:text-orange-400">
            Loja
          </li>
          <li className="font-medium cursor-pointer hover:text-orange-400">
            Contato
          </li>
        </ul>
      </nav>
    </header>
  );
}
