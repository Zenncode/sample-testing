"use client";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 
                    dark:from-gray-900 dark:via-gray-950 dark:to-black pt-24 px-6">
      
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Need a solution or want a quick estimate? Reach out or use our smart assistant.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT PANEL */}
          <div className="flex flex-col justify-between 
                          bg-black text-white 
                          dark:bg-gray-800 dark:text-gray-100
                          rounded-3xl p-8 shadow-xl">
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Let’s build something great 🚀
              </h2>

              <p className="text-gray-300 dark:text-gray-400 mb-6">
                Message us or get an instant estimate using our assistant.
              </p>

              <div className="space-y-3 text-sm">
                <p>📧 contact@myapp.com</p>
                <p>📞 +63 912 345 6789</p>
                <p>📍 Philippines</p>
              </div>
            </div>

            <button className="mt-8 bg-white text-black 
                               dark:bg-gray-200 dark:text-black
                               py-3 rounded-xl font-medium hover:bg-gray-200 transition">
              Get Instant Quote
            </button>
          </div>

          {/* FORM */}
          <div className="bg-white dark:bg-gray-900 
                          border border-gray-100 dark:border-gray-800
                          rounded-3xl shadow-xl p-8">
            
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Send us a message
            </h2>

            <form className="flex flex-col gap-5">
              
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 dark:border-gray-700 
                             bg-white dark:bg-gray-800 
                             text-gray-900 dark:text-white
                             rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 dark:border-gray-700 
                             bg-white dark:bg-gray-800 
                             text-gray-900 dark:text-white
                             rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-gray-800 
                           text-gray-900 dark:text-white
                           rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              />

              <select className="border border-gray-300 dark:border-gray-700 
                                 bg-white dark:bg-gray-800 
                                 text-gray-600 dark:text-gray-300
                                 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white">
                <option>Select Service</option>
                <option>Hardware Solution</option>
                <option>Software Development</option>
                <option>IT Consulting</option>
              </select>

              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-gray-800 
                           text-gray-900 dark:text-white
                           rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              ></textarea>

              <button
                type="submit"
                className="bg-black text-white 
                           dark:bg-white dark:text-black
                           py-3 rounded-xl hover:opacity-90 transition font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

        <p className="text-center text-gray-400 dark:text-gray-500 text-sm mt-10">
          We typically respond within 24 hours.
        </p>
      </div>
    </div>
  );
}