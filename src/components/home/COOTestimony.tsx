// src/components/COOTestimony.tsx
"use client";

export default function COOTestimony() {
  return (
    <section className="w-full bg-white text-black py-4 px-6 md:px-16 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Quote */}
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light italic leading-relaxed text-gray-800 mb-10">
          “As a highly specialized boutique agency and business partner, we
          combine marketing, sales, and consulting expertise to deliver premium
          sales funnels to our clients.”
        </blockquote>

        {/* Divider Line */}
        <div className="w-16 h-0.5 bg-yellow-500 mx-auto mb-8" />

        {/* Names */}
        <div className="flex flex-col items-center gap-1 text-gray-700">
          <p className="font-semibold text-lg">Raoul Muller</p>
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
            Founder
          </p>

          {/* Uncomment if needed
          <p className="font-semibold text-lg">Ayham Muhrez</p>
          <p className="text-sm uppercase tracking-wider text-gray-500">
            Co-Founder
          </p>
          */}
        </div>
      </div>
    </section>
  );
}
