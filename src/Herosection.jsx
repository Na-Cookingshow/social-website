import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-400 to-purple-400 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">
          Discover Amazing Content
        </h1>
        <p className="text-xl text-blue-100">
          Share your moments, explore creativity, connect with others
        </p>
      </div>
    </section>
  );
}