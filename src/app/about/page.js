import Link from 'next/link';
import { FaUserPlus, FaTint, FaSearchLocation, FaHospital, FaHandshake, FaDatabase } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="h-nav bg-red-50">
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-red-800">About <span className='italic font-serif'>eBloodBank</span></h2>
          <p className="text-lg text-gray-700 mb-4">
            <span className='italic'><span className='italic font-serif'>eBloodBank</span></span> is an innovative e-blood-bank platform designed to revolutionize the way blood donations are managed and facilitated. Our mission is to create a seamless connection between blood donors and recipients, ensuring that life-saving blood is available when and where it's needed most.
          </p>
          <p className="text-lg text-gray-700">
            By leveraging technology and community engagement, <span className='italic font-serif'>eBloodBank</span> minimizes blood storage problems and maximizes the efficiency of the donation process. Whether you're looking to donate blood or in need of a transfusion, <span className='italic font-serif'>eBloodBank</span> is here to help you make a difference.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-red-800">How <span className='italic font-serif'>eBloodBank</span> Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<FaUserPlus className="text-4xl text-red-500" />}
              title="Register and Login"
              description="Create your account to become part of our life-saving community. You can register as a donor, recipient, or both."
            />
            <FeatureCard
              icon={<FaTint className="text-4xl text-red-500" />}
              title="Donate or Request Blood"
              description="Easily submit a request to donate blood or request a blood transfusion through our user-friendly interface."
            />
            <FeatureCard
              icon={<FaSearchLocation className="text-4xl text-red-500" />}
              title="Smart Donor Matching"
              description="Our system automatically finds the nearest compatible donors when a blood request is made."
            />
            <FeatureCard
              icon={<FaHospital className="text-4xl text-red-500" />}
              title="Hospital Coordination"
              description="We connect donors with the nearest hospital for a smooth and efficient donation process."
            />
            <FeatureCard
              icon={<FaHandshake className="text-4xl text-red-500" />}
              title="Direct Interaction"
              description="Facilitate direct communication between donors and recipients for a more personal and efficient experience."
            />
            <FeatureCard
              icon={<FaDatabase className="text-4xl text-red-500" />}
              title="Minimized Storage Issues"
              description="By connecting donors and recipients in real-time, we reduce the need for long-term blood storage."
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-red-800">Why Choose <span className='italic font-serif'>eBloodBank</span>?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Real-time matching of donors and recipients</li>
            <li>Reduced blood wastage due to expiration</li>
            <li>Increased accessibility to blood donation opportunities</li>
            <li>Efficient coordination with local hospitals</li>
            <li>Community-driven approach to blood donation</li>
            <li>User-friendly platform for both donors and recipients</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-800">Join <span className='italic font-serif'>eBloodBank</span> Today</h2>
          <p className="text-lg text-gray-700 mb-4">
            Whether you're looking to donate blood or in need of a transfusion, <span className='italic font-serif'>eBloodBank</span> is here to help. Join our community today and be part of a network that saves lives every day.
          </p>
          <div className="space-x-4">
            <Link href={'/dashboard'} className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300">
              Register Now
            </Link>
            <button className="bg-white text-red-600 px-6 py-2 rounded-full border border-red-600 hover:bg-red-100 transition duration-300">
              Learn More
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-red-100">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4 text-red-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}