import imgOne from "../assets/tofu.jpeg";

export default function NinjaRecipes() {
  return (
    <div className="text-gray-600 font-body">
      <div>
        <nav>
          <div>
            <h1 className="font-bold uppercase p-4 border-b border">
              <a href="/">Food Ninja</a>
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

      <main className="px-16 py-6">
        <div>
          <a href="" className="text-primary">
            Login
          </a>
          <a href="" className="text-primary">
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
            <div>
              <img src={imgOne} alt="Tofu Stir Fry" />
              <div>
                <span>5 Bean Chilli Stew</span>
                <span>Recipe by Mario</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Most Popular
          </h4>
          <div className="mt-8">{/* cards */}</div>

          <div>
            <div className="bg-secondary-100 text-secondary-200">Load More</div>
          </div>
        </div>
      </main>
    </div>
  );
}
