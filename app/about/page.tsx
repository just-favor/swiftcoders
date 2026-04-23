"use client";

import Container from "@/Components/Container";
import Animate from "@/Components/Animate";
import Team from "@/Components/Homepage/Team";
import Skills from "@/Components/Homepage/Skills";

export default function page() {
  return (
    <section id="about" className="py-24 bg-black text-white">
      {/* <Container> */}
        <Animate>
          <h2 className="text-3xl font-bold text-center">
            About SwiftCoders
          </h2>
        </Animate>

        <Animate delay={0.2}>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-center">
            SwiftCoders is a frontend development studio focused on building
            fast, modern, and scalable websites that help businesses grow.
          </p>
        </Animate>

        <Team />
        <Skills />

        <Animate delay={0.2}>
          <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              More Than Just Code
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              SwiftCoders is a modern software organisation built around one idea — that great digital products come from the intersection of clean engineering and thoughtful design. We don't just write code; we architect experiences that are fast, accessible, and built to last.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              From early-stage startups to growing businesses, we partner with teams who want more than a website — they want a digital foundation. We work across the full frontend stack, leveraging the latest in React, Next.js, and modern tooling to ship products that perform at scale.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our approach is collaborative, transparent, and results-driven. Every project starts with understanding your goals, and ends with a product your users will love. We stay current with the evolving web ecosystem so you don't have to — bringing best practices, performance optimisation, and pixel-perfect execution to every engagement.
            </p>
          </div>
        </Animate>
      {/* </Container> */}
    </section>
  );
}
