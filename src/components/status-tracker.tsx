export function StatusTracker() {
  return (
    <section className="py-20 bg-[#B7C4FF]/10">
      <div className="container max-w-3xl text-center mx-auto">
        <h2 className="text-3xl font-bold text-[#3B4B8C] mb-4">
          Track the status of your complaints
        </h2>
        <p className="text-gray-600 mb-12">
          Track the status of your submitted complaints in real time and stay
          informed as actions are taken.
        </p>

        <div className="bg-[#B7C4FF]/20 rounded-lg p-8 backdrop-blur">
          {/* Placeholder for status tracking UI */}
          <div className="h-48 bg-white/50 rounded-lg flex items-center justify-center text-gray-500">
            Status tracking interface will be displayed here
          </div>
        </div>
      </div>
    </section>
  );
}
