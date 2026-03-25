export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white mt-10">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

        {/* 🏢 Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">MGA KUPALS</h2>
          <p className="text-sm text-zinc-400">
            We provide reliable software and hardware solutions to help your business grow.
          </p>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li
                key={item}
                className="transition transform hover:scale-105 hover:text-blue-400 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 🛠 Services */}
        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Web Development",
              "System Integration",
              "IT Support",
              "Hardware Solutions",
            ].map((service) => (
              <li
                key={service}
                className="transition transform hover:scale-105 hover:text-blue-400 cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* 📞 Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>📍 Quezon City, Philippines</li>
            <li>📞 +63 912 345 6789</li>
            <li>✉️ info@yourcompany.com</li>
          </ul>
        </div>
      </div>

      {/* 🔻 Bottom */}
      <div className="border-t border-zinc-700 text-center text-sm py-4 text-zinc-500">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}