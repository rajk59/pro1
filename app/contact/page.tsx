
export default function ContactPage() {
  return (
    <main className="px-4 py-12 bg-gray-50 min-h-screen flex flex-col items-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full mb-8">
        <h1 className="text-3xl font-bold text-yellow-700 mb-6 text-center">
          📞 Contact Us
        </h1>

        <div className="space-y-5 text-gray-700 text-base">
          <div className="flex items-start gap-3">
            <span className="text-2xl mt-1">📱</span>
            <div>
              <strong>Phone:</strong><br />
              +91-88306 51687 / +91-92726 18957
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl mt-1">📍</span>
            <div>
              <strong>Address:</strong><br />
              Hotel Chirag, MIDC Road Sanaswadi,<br />
              Near HP Petrol Pump, Raigad-Mangaon
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl mt-1">⏰</span>
            <div>
              <strong>Hours:</strong><br />
              7:00 AM – 11:00 PM (All Days)
            </div>
          </div>
        </div>

        {/* WhatsApp Contact Button */}
        <a
          href="https://wa.me/918830651687?text=Hello%20Hotel%20Chirag%2C%20I%20want%20to%20book%20a%20room"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-full shadow hover:bg-green-600 transition text-center w-full"
        >
          💬 Chat on WhatsApp
        </a>
      </div>

      {/* Google Map Embed */}
      <div className="w-full max-w-3xl h-80">
        <iframe
          title="Hotel Chirag Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.5418775397167!2d73.44422711437668!3d18.509936273041066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2cfbca2fdf9d3%3A0xb5976a2b4dbac1cb!2sHP%20Petrol%20Pump%20-%20Shivkrupa%20Petroleum!5e0!3m2!1sen!2sin!4v1720598450000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="rounded-xl shadow"
        ></iframe>
      </div>
    </main>
  );
}
