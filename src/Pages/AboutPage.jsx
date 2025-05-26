import React from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
import { PiCoffeeBeanFill } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { GiFlamedLeaf } from "react-icons/gi";

function AboutPage() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <Section2 />
      <CommitmentSection />
      {/* <Footer /> */}
    </>
  );
}

export default AboutPage;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[450px]"
        style={{
          backgroundImage: "url(BG1.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
            <p className="mb-5 text-2xl font-semibold w-155">
              Our journey from Indonesian farms to global coffee cups
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Section2() {
  return (
    <>
      <section className="max-h-auto max-w-auto bg-orange-100">
        <div className="hero-content flex-col lg:flex-row-reverse pt-20 pb-20 pl-25">
          <img
            src="Coffee2.jpg"
            className="max-w-md max-h-110 rounded-lg shadow-2xl"
          />
          <div className="mr-30">
            <p className="bg-orange-200 max-w-20 h-8 rounded-md flex justify-center items-center text-amber-800 mb-2">
              Our Story
            </p>
            <h1 className="text-5xl font-bold text-amber-800">
              From Local Farms to Global Markets
            </h1>
            <p className="py-6 flex justify-center items-center text-2xl">
              Aroma Sriwijaya was founded with a vision to showcase Indonesia's
              exceptional coffee to the world. What began as a small operation
              has grown into a trusted exporter of premium Arabica and Robusta
              beans.
            </p>
            <p className="flex justify-center items-center text-2xl">
              Our name pays homage to the ancient Sriwijaya kingdom that once
              flourished in Sumatra, known for its trade networks and cultural
              exchange – much like our mission to connect Indonesian coffee
              farmers with global markets.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function CommitmentSection() {
  return (
    <section className="py-16 px-4 bg-amber-50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <span className="bg-amber-100 text-amber-800 rounded-md px-4 py-1 text-sm font-medium">
            Our Values
          </span>
        </div>

        <h1 className="text-5xl font-bold text-amber-800 mb-8">
          What Drive Us
        </h1>
        <p className="text-xl text-gray-700 mb-12">
          Our core values shape everything we do at Aroma Sriwijaya.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-amber-700 text-3xl mb-4 flex justify-center items-center">
              <PiCoffeeBeanFill />
            </div>
            <h2 className="text-2xl font-semibold text-amber-800 mb-3">
              Quality Excellence
            </h2>
            <p className="text-gray-600">
              We are uncompromising in our commitment to quality, from bean
              selection to export.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-amber-700 text-3xl mb-4 flex justify-center items-center">
              <GoPeople />
            </div>
            <h2 className="text-2xl font-semibold text-amber-800 mb-3">
              Farmer Partnerships
            </h2>
            <p className="text-gray-600">
              We build lasting relationships with farmers, ensuring fair
              compensation and sustainable practices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-amber-700 text-3xl mb-4 flex justify-center items-center">
              <GiFlamedLeaf />
            </div>
            <h2 className="text-2xl font-semibold text-amber-800 mb-3">
              Environmental Stewardship
            </h2>
            <p className="text-gray-600">
              We promote sustainable farming methods that protect Indonesia's
              rich biodiversity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
