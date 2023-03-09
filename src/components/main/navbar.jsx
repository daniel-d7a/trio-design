import { Link } from "react-router-dom";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <nav className="sm:hidden text-black z-20 capitalize flex relative justify-between items-center">
        <ul
          className={`${
            !isOpen ? "top-16" : "-translate-y-full "
          } absolute w-full transition bg-white justify-center items-center flex flex-col gap-4 text-xl pb-4`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>products</Link>
          </li>
          <li>
            <Link to="/contact">contact us</Link>
          </li>
        </ul>
        <div className="flex flex-row bg-white justify-between items-center z-10 w-full px-4 ">
          <p className="text-3xl text-start py-4"> trio design</p>
          <Hamburger onToggle={() => setIsOpen(!isOpen)} />
        </div>
      </nav>

      <nav className="text-black z-20 hidden p-4 capitalize sm:flex relative justify-between items-center">
        <p className="text-3xl text-start py-4"> trio design</p>

        <ul
          className={`transition sm:w-1/2 md:w-2/5 bg-white justify-between items-center flex gap-4 text-xl`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>products</Link>
          </li>
          <li>
            <Link to="/contact">contact us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
