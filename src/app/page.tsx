import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ComplaintForm } from "@/components/complaint-form";
import { StatusTracker } from "@/components/status-tracker";
import { ScrollDownButton } from "@/components/scroll-down-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F0FF]">
      <Navbar />
      <Hero />

      <section id="data-visualization" className="py-20 text-center">
        <h2 className="text-3xl font-bold text-[#3B4B8C] mb-4">
          Why limit yourself to basic data visualisation?
        </h2>
        <p className="text-gray-600">Let us step up the game for you.</p>
        <div className="mt-8">
          <ScrollDownButton targetId="complaint-form" />
        </div>
      </section>

      <ComplaintForm />
      <StatusTracker />
    </div>
  );
}
