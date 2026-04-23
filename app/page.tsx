import Hero from "@/Components/Homepage/Hero";
import WhyChoose from "@/Components/Homepage/Services";
import Testimonials from "@/Components/Homepage/Testimonials";
import Stats from "@/Components/Homepage/Stats";
import Clients from "@/Components/Homepage/Clients";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Testimonials />
      <Stats />
      <Clients />
    </>
  );
}
