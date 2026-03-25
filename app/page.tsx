export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">
      {/* Greeting / Hero Section */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
        Welcome to DevGG
      </h1>

      <p className="text-gray-600 text-lg md:text-xl max-w-2xl mb-8">
        Build modern web applications faster with a clean and scalable setup.
        This is your starting point for something amazing.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition">
          Learn More
        </button>

        <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
          Documentation
        </button>
      </div>

      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      </div>
    </div>
  );
}