export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE - INFO */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Let’s talk 👋
          </h1>

          <p className="text-gray-600 mb-6">
            Have a project in mind or need a quick estimate? 
            Send us a message and we’ll help you find the best solution.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>📧 contact@myapp.com</p>
            <p>📞 +63 912 345 6789</p>
            <p>📍 Philippines</p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send a Message
          </h2>

          <form className="flex flex-col gap-4">
            
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Juan Dela Cruz"
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-2 bg-black text-white py-2.5 rounded-lg hover:bg-gray-800 transition font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}