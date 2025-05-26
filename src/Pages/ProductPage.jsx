import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import { FaArrowRight } from "react-icons/fa";
import Footer from "./Footer";

function ProductPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Section2 />
      <Footer />
    </>
  );
}

export default ProductPage;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[450px]"
        style={{
          backgroundImage: "url(BG2.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Our Coffee Products</h1>
            <p className="mb-5 text-2xl font-semibold">
              Premium Indonesian Coffee Beans for Global Markets
            </p>
            <Link
              className="btn btn-primary gap-2 bg-amber-800 border-0 hover:bg-orange-400"
              to="/contact"
            >
              Request Sample <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function Section2() {
  return (
    <div className="py-10 px-4 bg-base-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card Americano */}
          <div className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
            <figure className="h-48 overflow-hidden">
              <img
                src="Americano.jpg"
                alt="Americano"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold mb-3 text-center">Americano</h2>
              <p className="text-gray-600 mb-4 text-center">
                Minuman kopi yang dihasilkan dari campuran espresso dan air
                panas. Proses ini menciptakan kopi dengan rasa yang lebih lembut
                dibandingkan espresso murni.
              </p>
              <button className="mt-auto btn btn-primary bg-amber-800 border-0 hover:bg-amber-700 text-white">
                Buy Now
              </button>
            </div>
          </div>

          {/* Card Espresso */}
          <div className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
            <figure className="h-48 overflow-hidden">
              <img
                src="Expreso1.jpg"
                alt="Espresso"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold mb-3 text-center">Espresso</h2>
              <p className="text-gray-600 mb-4 text-center">
                Kopi pekat yang dibuat dengan memasukkan air panas di bawah
                tekanan tinggi melalui biji kopi yang digiling halus.
              </p>
              <button className="mt-auto btn btn-primary bg-amber-800 border-0 hover:bg-amber-700 text-white">
                Buy Now
              </button>
            </div>
          </div>

          {/* Card Latte */}
          <div className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
            <figure className="h-48 overflow-hidden">
              <img
                src="Latte.png"
                alt="Latte"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold mb-3 text-center">Latte</h2>
              <p className="text-gray-600 mb-4 text-center">
                Minuman ini terdiri dari espresso, susu yang dikukus (steamed
                milk), dan sedikit busa susu di atasnya.
              </p>
              <button className="mt-auto btn btn-primary bg-amber-800 border-0 hover:bg-amber-700 text-white">
                Buy Now
              </button>
            </div>
          </div>

          {/* Card Long Black */}
          <div className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
            <figure className="h-48 overflow-hidden">
              <img
                src="long black.jpg"
                alt="Long Black"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold mb-3 text-center">Long Black</h2>
              <p className="text-gray-600 mb-4 text-center">
                Minuman kopi yang terdiri dari dua teguk espresso yang
                dituangkan ke dalam cangkir berisi air panas.
              </p>
              <button className="mt-auto btn btn-primary bg-amber-800 border-0 hover:bg-amber-700 text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
