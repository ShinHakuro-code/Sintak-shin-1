import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="bg-amber-900 text-amber-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex items-center gap-4">
            <img
              src="/Favicon.ico"
              alt="Aroma Sriwijaya Icon"
              className="w-20 h-20"
            />
            <div>
              <h1 className="text-3xl font-bold mb-2">Aroma Sriwijaya</h1>
              <p className="text-amber-200 max-w-lg">
                Premium Indonesian coffee beans exported directly from farmers
                to global markets.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-amber-700 pb-2">
                Contact Us
              </h2>
              <address className="not-italic space-y-2">
                <p>Jl. Sriwijaya No. 123, Palembang,</p>
                <p>South Sumatra, Indonesia 30139</p>
                <p>
                  <a
                    href="mailto:info@aromasriwijaya.com"
                    className="hover:text-amber-300 transition"
                  >
                    info@aromasriwijaya.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+6281234567890"
                    className="hover:text-amber-300 transition"
                  >
                    +62 812 3456 7890
                  </a>
                </p>
              </address>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-amber-700 pb-2">
                Quick Links
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-amber-300 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-amber-300 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product"
                    className="hover:text-amber-300 transition"
                  >
                    Coffee Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-amber-300 transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-amber-700 pb-2">
                Coffee Products
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/product"
                    className="hover:text-amber-300 transition"
                  >
                    Americano
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product"
                    className="hover:text-amber-300 transition"
                  >
                    Espresso
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product"
                    className="hover:text-amber-300 transition"
                  >
                    Latte
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product"
                    className="hover:text-amber-300 transition"
                  >
                    Long Black
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-amber-800 pt-6 text-center text-amber-300">
            <p>© 2025 Aroma Sriwijaya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
