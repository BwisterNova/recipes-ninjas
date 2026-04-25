import imgOne from "../assets/tofu.jpeg";
import imgTwo from "../assets/pea.jpeg";
import imgThree from "../assets/curry.jpeg";

export default function NinjaRecipes() {
  // array of object of cards will be here after learing the tutors method arrange the cards in arry of method way

  return (
    <div className="text-gray-600 font-body grid md:grid-cols-3">
      <div className="md:cols-span-1">
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
      <main className="px-16 py-6 bg-gray-100 md:col-span-2">
        <div className="flex justify-center md:justify-end">
          <a href="" className="text-primary btn border-primary md:border-2">
            Login
          </a>
          <a
            href=""
            className="text-primary ml-2 btn border-primary md:border-2"
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
            <div className="card">
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
                <span>25 min</span>
              </div>
            </div>
            {/* card 2 */}
            <div className="card">
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
                <span>25 min</span>
              </div>
            </div>
            {/* card 3 */}
            <div className="card">
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
            <div className="bg-secondary-100 text-secondary-200 btn">
              Load More
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
