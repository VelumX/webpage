import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import Ecosystem from "@/components/Ecosystem";
import SDK from "@/components/SDK";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary relative flex flex-col font-inter overflow-x-hidden">
      <Nav />
      <Hero />
      <HowItWorks />
      <Features />
      <UseCases />
      <Ecosystem />
      <SDK />
      <FAQ />
      <Footer />
    </main>
  );
}
