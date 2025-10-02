import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/gettingstart.jpeg";

export default function ProductPreview() {
  return (
    <section className="w-full py-8">
      <div className="main-wrapper flex flex-col md:flex-row items-center gap-12">
        
        {/* Video */}
        <div className="flex-1">
          <img src={image} alt="Product Demo" className="w-full rounded-lg shadow-lg" />
        </div>

        {/* Text Content */}
        {/* <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Experience Human-like Interviews
          </h2>
          <p className="text-lg text-gray-700 max-w-md">
            Practice interviews in a realistic environment and receive
            <span className="text-pink-500 font-semibold"> personalized feedback </span>
            on your answers, communication skills, and technical knowledge.
          </p>
        </div> */}
      </div>
    </section>
  );
}
