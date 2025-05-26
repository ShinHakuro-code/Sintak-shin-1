import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { FaArrowRight } from "react-icons/fa";
import { TbWorldLongitude } from "react-icons/tb";
import { GiCoffeeBeans } from "react-icons/gi";
import { PiPlantFill } from "react-icons/pi";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Section2 />
      <CommitmentSection />
      <Footer />
    </>
  );
}

export default HomePage;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[450px]"
        style={{
          backgroundImage: "url(src/assets/Coffee.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Aroma Sriwijaya</h1>
            <p className="mb-5 text-2xl font-semibold w-150">
              Premium Indonesian Coffee Beans for Global Markets
            </p>
            <Link
              to="/product"
              className="btn btn-primary gap-2 bg-amber-800 border-0 hover:bg-orange-400"
            >
              View Coffee Catalog <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function Section2() {
  return (
    <section className="bg-orange-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 w-full lg:pl-8">
            <img
              src="src/assets/BG5.jpg"
              alt="Indonesian coffee beans"
              className="w-full h-auto rounded-lg shadow-2xl object-cover"
            />
          </div>

          <div className="lg:w-1/2 w-full">
            <span className="inline-block bg-orange-200 px-4 py-1 rounded-md text-amber-800 mb-4 text-sm font-medium">
              Direct from Indonesia
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6 leading-tight">
              Exceptional Coffee Beans from the Heart of Indonesia
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-[550px]">
              Aroma Sriwijaya works directly with local farmers across Indonesia
              to source the finest Arabica and Robusta coffee beans. Our
              commitment to quality and sustainability ensures that every bean
              we export meets the highest standards.
            </p>
            <Link
              to="/about"
              className="inline-block px-8 py-3 bg-amber-800 text-white rounded-md hover:bg-orange-400 transition duration-300 text-lg font-medium"
            >
              Learn About Our Process
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommitmentSection() {
  return (
    <section className="py-16 px-4 bg-amber-50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <span className="bg-amber-100 text-amber-800 rounded-md px-4 py-1 text-sm font-medium">
            Why Choose Us
          </span>
        </div>

        <h1 className="text-5xl font-bold text-amber-800 mb-8">
          Our Commitment to Excellence
        </h1>
        <p className="text-xl text-gray-700 mb-12">
          Discover why coffee businesses around the world trust Aroma Srivijaya
          for their premium Indonesian coffee needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-amber-700 text-3xl mb-4 flex justify-center items-center">
              <TbWorldLongitude />
            </div>
            <h2 className="text-2xl font-semibold text-amber-800 mb-3">
              Global Reach
            </h2>
            <p className="text-gray-600">
              We export to roasteries and wholesalers worldwide, with efficient
              logistics and reliable delivery.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-amber-700 text-3xl mb-4 flex justify-center items-center">
              <GiCoffeeBeans />
            </div>
            <h2 className="text-2xl font-semibold text-amber-800 mb-3">
              Quality Assurance
            </h2>
            <p className="text-gray-600">
              Rigorous quality control ensures only the finest beans make it to
              your roastery.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-amber-700 text-3xl mb-4 flex justify-center items-center">
              <PiPlantFill />
            </div>
            <h2 className="text-2xl font-semibold text-amber-800 mb-3">
              Sustainability
            </h2>
            <p className="text-gray-600">
              Direct partnerships with farmers promote sustainable practices and
              fair compensation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
