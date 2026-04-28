import imgOne from "../assets/tofu.jpeg";
import imgTwo from "../assets/pea.jpeg";
import imgThree from "../assets/curry.jpeg";
import {
  Clock,
  Delete,
  Home,
  Info,
  Mail,
  Menu,
  SidebarClose,
  X,
} from "lucide-react";
import { useState } from "react";

export default function NinjaRecipes() {
  // array of object for cards
  const Card = [
    {
      id: 1,
      title: "5 Bean Chilli Stew",
      src: imgOne,
      time: "25 Min",
      detail: "Recipe by Mario",
    },

    {
      id: 2,
      title: "Pea noodles",
      src: imgTwo,
      time: "25 Min",
      detail: "Recipe by Mario",
    },

    {
      id: 3,
      title: "Tofu Curry",
      src: imgThree,
      time: "25 Min",
      detail: "Recipe by Mario",
    },
  ];

  const [navIcon, setNavIcon] = useState(false);

  function handleNavIcon() {
    setNavIcon(!navIcon);
  }

  return (
    <div className="text-gray-600 font-body grid md:grid-cols-3">
      <div className="md:cols-span-1 md:flex md:justify-end">
        <nav className="text-right">
          <div className="flex justify-between items-center">
            <h1 className="font-bold uppercase p-4 border-b border">
              <a
                href="/"
                // className="text-green-500 sm:text-red-500 lg:text-blue-500 or text-sm md:text-xl "
                className="hover:text-gray-700"
              >
                Food Ninja
              </a>
            </h1>

            {/* The tooglr open and close nav */}
            <div
              className="px-4 cursor-pointer md:hidden"
              id="burger"
              onClick={handleNavIcon}
            >
              {navIcon ? <X className="w-6" /> : <Menu className="w-6" />}
            </div>
          </div>

          {/* Responsive Menu - CSS Controlled */}
          <ul
            className={`text-sm mt-6 ${navIcon ? "block" : "hidden"} md:block`}
          >
            <li className="text-gray-700 font-bolder-gray-100 py-1">
              <a
                href="#"
                className="px-4 flex justify-end border-r-4 border-primary"
              >
                <span>Home</span>
                <Home className="w-5 ml-2" />
              </a>
            </li>
            <li py-1>
              <a
                href="#"
                className="px-4 flex justify-end border-r-4 border-white"
              >
                <span>About</span>
                <Info className="w-5 ml-2" />
              </a>
            </li>
            <li py-1>
              <a
                href="#"
                className="px-4 flex justify-end border-r-4 border-white"
              >
                <span>Contact</span>
                <Mail className="w-5 ml-2" />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main  */}
      <main className="px-16 py-6 bg-gray-100 md:col-span-2">
        <div className="flex justify-center md:justify-end">
          <a
            href=""
            className="text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
          >
            Login
          </a>
          <a
            href=""
            className="text-primary ml-2 btn border-primary md:border-2 hover:bg-primary hover:text-white  transition ease-out duration-500"
          >
            Sign up
          </a>
        </div>
        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h2 className="text-2xl font-semibold">For Ninjas</h2>
        </header>

        <div>
          <h4 className="font-bold mt-12 pb-2 border-b">Latest Recipes</h4>

          <div className="mt-8 grid lg:grid-cols-3 gap-10 ">
            {/* card 1 */}
            <div className="card hover:shadow-lg">
              <img
                src={imgOne}
                alt="Tofu Stir Fry"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4 ">
                <span className="font-bold">5 Bean Chilli Stew</span>
                <span className="block text-grey-500 text-sm">
                  Recipe by Mario
                </span>
              </div>
              {/* For badge */}
              <div className="badge">
                <Clock className="w-5 inline-block" />
                <span> 25 min</span>
              </div>
            </div>
            {/* card 2 */}
            <div className="card hover:shadow-lg">
              <img
                src={imgTwo}
                alt="Pea"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4 ">
                <span className="font-bold">Pea noodles</span>
                <span className="block text-grey-500 text-sm">
                  Recipe by Mario
                </span>
              </div>
              {/* For badge */}
              <div className="badge">
                <Clock className="w-5 inline-block" />
                <span>25 min</span>
              </div>
            </div>
            {/* card 3 */}
            <div className="card hover:shadow-lg">
              <img
                src={imgThree}
                alt="curry"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4 ">
                <span className="font-bold">Tofu Curry </span>
                <span className="block text-grey-500 text-sm">
                  Recipe by Mario
                </span>
              </div>
              {/* For badge */}
              <div className="badge">
                <Clock className="w-5 inline-block" />
                <span>25 min</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Most Popular
          </h4>
          <div className="mt-8">{/* cards */}</div>

          <div className="flex justify-center">
            <div className="bg-secondary-100 text-secondary-200 btn hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
              Load More
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
