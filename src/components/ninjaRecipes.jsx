import imgOne from "../assets/tofu.jpeg";

export default function NinjaRecipes() {
  return (
    <div className="text-gray-600 font-body">
      <div>
        <nav>
          <div>
            <h1 className="font-bold uppercase p-4 border-b border">
              <a
                href="/"
                // className="text-green-500 sm:text-red-500 lg:text-blue-500 or text-sm md:text-xl "
              >
                Food Ninja
              </a>
            </h1>
          </div>
          <ul>
            <li className="text-gray-700 font-bolder-gray-100">
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main  */}
      <main className="px-16 py-6 bg-gray-100">
        <div className="flex justify-center md:justify-end">
          <a href="" className="text-primary">
            Login
          </a>
          <a href="" className="text-primary ml-2">
            Sign up
          </a>
        </div>
        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h2 className="text-2xl font-semibold">For Ninjas</h2>
        </header>

        <div>
          <h4 className="font-bold mt-12 pb-2 border-b">Latest Recipes</h4>

          <div className="mt-8 ">
            {/* cards */}
            <div className="bg-white rounded overflow-hidden shadow-md relative">
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
              <div className="bg-secondary-100 text-secondary-200 uppercase text-xs font-bold rounded-full p-2 absolute top-0  ml-2 mt-2">
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
            <div className="bg-secondary-100 text-secondary-200">Load More</div>
          </div>
        </div>
      </main>
    </div>
  );
}
