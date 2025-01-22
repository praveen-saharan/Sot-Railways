import React from "react";
import { FaLock, FaTrain, FaHeadset } from "react-icons/fa"; // Icons from FontAwesome

const Home = () => {
  return (
    <div className="bg-primary text-light min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-8">
        <h1 className="text-4xl font-bold text-highlight mb-4 animate-fadeIn">
          Welcome to Railway Ticketing
        </h1>
        <p className="text-lg max-w-2xl animate-fadeIn">
          Book your train tickets seamlessly with our platform. Discover routes,
          check train schedules, and manage your bookings effortlessly.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="bg-accent hover:bg-highlight text-light font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 animate-fadeIn">
            Book Tickets
          </button>
          <button className="bg-secondary hover:bg-accent text-light font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 animate-fadeIn">
            View Schedule
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary text-light py-12 px-8">
        <h2 className="text-3xl font-semibold text-center text-highlight mb-8">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-primary rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaLock className="text-4xl text-highlight mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p>
              Make payments through our secure and trusted gateway for a
              hassle-free experience.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-primary rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaTrain className="text-4xl text-highlight mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
            <p>
              Track train schedules and routes in real-time with up-to-date
              information.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-primary rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaHeadset className="text-4xl text-highlight mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p>
              Our dedicated support team is available round the clock to assist
              you with any queries.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-primary text-light text-center">
        <h2 className="text-3xl font-semibold text-highlight mb-4">
          Ready to Plan Your Journey?
        </h2>
        <p className="mb-8">
          Join thousands of happy travelers who trust us for their railway
          bookings.
        </p>
        <button className="bg-accent hover:bg-highlight text-light font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105">
          Get Started Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-light py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Railway Ticketing Platform. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
