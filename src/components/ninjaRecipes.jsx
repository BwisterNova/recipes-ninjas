export default function NinjaRecipes() {
  return (
    <div>
      <div>
        <nav>
          <div>
            <h1>
              <a href="/">Food Ninja</a>
            </h1>
          </div>
          <ul>
            <li>
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

      <main>
        <div>
          <a href="">Login</a>
          <a href="">Sign up</a>
        </div>
        <header>
          <h2>Recipes</h2>
          <h2>For Ninjas</h2>
        </header>

        <div>
          <h4>Latest Recipes</h4>
          <div>
            {/* cards */}
            <div>
              <img src="" alt="" srcset="" />
              <div>
                <span>5 Bean Chilli Stew</span>
                <span>Recipe by Mario</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4>Most Popular</h4>
          <div>{/* cards */}</div>

          <div>
            <div>Load More</div>
          </div>
        </div>
      </main>
    </div>
  );
}
