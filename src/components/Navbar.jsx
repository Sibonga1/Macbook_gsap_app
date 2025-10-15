import { navLinks } from "../constants/index.js";
const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />

        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
            <button>
                <img src="/search.svg" alt="Search icon" />
            </button>
            <button>
                <img src="/cart.svg" alt="cart icon" />
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
