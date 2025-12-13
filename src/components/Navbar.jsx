import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navLinkBase =
  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200";
const navLinkInactive =
  "text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800";
const navLinkActive =
  "text-blue-600 bg-blue-50 dark:text-yellow-300 dark:bg-gray-800";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  border-gray-100 bg-gray-50 backdrop-blur
    dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8
        bg-blue-50
      dark:bg-gray-900 rounded-2xl mx-2 my-4
      ">
        {/* Left: name */}
        <Link
          to="/"
          className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent"
        >
          Chirag Bais
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center space-x-6 md:flex lg:space-x-10">
          {["/", "/projects", "/skills", "/education", "/contact"].map(
            (path, idx) => {
              const labels = [
                "Home",
                "Projects",
                "Skills",
                "Education",
                "Contact",
              ];
              return (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `${navLinkBase} ${
                      isActive ? navLinkActive : navLinkInactive
                    }`
                  }
                >
                  {labels[idx]}
                </NavLink>
              );
            }
          )}

          {/* Desktop theme toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-200 dark:hover:text-white"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 shadow-lg dark:border-gray-800 dark:bg-gray-950">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {[
              { to: "/", label: "Home" },
              { to: "/projects", label: "Projects" },
              { to: "/skills", label: "Skills" },
              { to: "/education", label: "Education" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block ${navLinkBase} ${
                    isActive
                      ? "text-blue-600 bg-blue-50 dark:text-yello-300 dark:bg-gray-800"
                      : "text-gray-900 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-800"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Mobile theme toggle */}
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
