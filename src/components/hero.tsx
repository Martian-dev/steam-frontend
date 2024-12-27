import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-20 text-center">
      <div className="container max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#6B7FD7] to-purple-600 text-transparent bg-clip-text">
          Satellite Tracking for Evaluation and Analysis of Marinery
        </h1>
        <p className="text-gray-700 mb-8 text-lg">
          STEAM addresses the challenge of water pollution by combining
          satellite and HAPS data with machine learning to monitor, visualise
          and report pollution levels across oceans.
        </p>
        <Button className="bg-[#6B7FD7] hover:bg-[#5668C0] text-white text-lg px-8 py-6">
          Generate Pollution Heatmap
        </Button>
      </div>
    </section>
  );
}
