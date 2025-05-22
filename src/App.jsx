import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCheck, 
  FiZap, 
  FiAward, 
  FiCode, 
  FiDownload 
} from 'react-icons/fi';
import { 
  FaRobot,
  FaChessKnight, 
  FaLaptopCode,
  FaRocket, 
  FaStar 
} from 'react-icons/fa';
import "./index.css";


const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 opacity-90">
          {/* Animated Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white opacity-10"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 15 + 10}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          {/* Animated Grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'linear-gradient(to right,rgb(0, 238, 247) 1px, transparent 1px), linear-gradient(to bottom,rgb(42, 214, 94) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              animation: 'gridMove 20s linear infinite',
            }}
          />

          {/* Floating Blobs */}
          {/* Floating Blobs - Updated with your colors */}
          <div
            className="absolute rounded-full opacity-15 blur-xl"
            style={{
              width: '400px',
              height: '400px',
              top: '-50px',
              left: '-50px',
              animation: 'blobFloat 15s ease-in-out infinite alternate',
              background: 'radial-gradient(circle, #00D7B1 0%, transparent 70%)'
            }}
          />
          <div
            className="absolute rounded-full opacity-15 blur-xl"
            style={{
              width: '500px',
              height: '500px',
              bottom: '-100px',
              right: '-100px',
              animation: 'blobFloat 20s ease-in-out infinite alternate-reverse',
              background: 'radial-gradient(circle, #00B89C 0%, transparent 70%)'
            }}
          />
        </div>
      </div>

      {/* Content (same as before) */}
      <section className="relative z-10 pt-24 pb-12 md:pt-32 md:pb-20 min-h-screen flex flex-col justify-between">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full m-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                  <span className="text-primary">CP</span>Input
                </h1>
                <img
                  src="/logo.png"
                  alt="CP Input Gen Logo"
                  className="h-16 md:h-20 ml-4 inline-block"
                />
              </div>
              <p className="mt-6 text-xl text-black">
                <span className="font-semibold text-secondary">Get input code, code the logic</span> -
                Automatically generate input handling code for competitive programming platforms.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition duration-300 transform hover:scale-105 flex items-center justify-center">
                  <FiDownload className="mr-2" />
                  Add to Chrome - It's Free
                </button>
                <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 flex items-center justify-center">
                  <FaRobot className="mr-2" />
                  See Demo
                </button>
              </div>
              <div className="mt-8 flex items-center">
                <div className="ml-4">
                  <p className="text-black ">
                    Trusted by <span className="font-bold text-gray">competitive programmers</span>
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-xl shadow-2xl overflow-hidden border-4 border-gray-100">
                <img
                  src="/extension-screenshot.png"
                  alt="Extension Screenshot"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-20"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-gray-200 hidden md:block">
                <div className="flex items-center">
                  <div className="bg-primary bg-opacity-10 p-2 rounded-full">
                    <FiCode className="text-primary text-xl" />
                  </div>
                  <div className="ml-3">
                    <p className="text-xs text-gray-500">Generating code for</p>
                    <p className="font-semibold">Codeforces Problem B</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Platforms integrated into hero section */}
          <div className="mt-16 md:mt-24 w-full">
            <div className="w-full px-4">
              <p className="text-center text-black mb-6 md:mb-8 text-lg font-medium">
                Supported Competitive Programming Platforms
              </p>
              <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto">
                {[
                  { name: 'Codeforces', logo: 'Codeforces_logo.png' },
                  { name: 'AtCoder', logo: 'atcoder-logo.webp' },
                  { name: 'CodeChef', logo: 'codechef-logo.png' },
                ].map((platform, index) => (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="flex justify-center items-center p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="h-20 md:h-24 w-full object-contain"
                      style={{ maxWidth: '180px' }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add these styles for the animations */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-100px) translateX(50px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        
        @keyframes gridMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 40px;
          }
        }
        
        @keyframes blobFloat {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(50px, 50px) rotate(10deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
      `}</style>
    </div>
  )
}

const CompetitiveProgrammingInputGenerator = () => {
  const [activeTab, setActiveTab] = useState('free');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll animation trigger
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight - 100) {
          element.classList.add('animate-fadeIn');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Navigation */}
      <nav className="fixed w-full bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="/logo.png"
                  alt="Competitive Programming Input Generator"
                />
                <span className="ml-2 text-xl font-bold text-gray-900">
                  CPInput
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
                Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
                Pricing
              </a>
              <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 transform hover:scale-105">
                Install Now
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#features"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              >
                Testimonials
              </a>
              <button className="w-full bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-base font-medium mt-2 transition duration-300">
                Install Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Supercharge Your <span className="text-primary">Competitive Programming</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Focus on solving problems while we handle the boilerplate input code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLaptopCode className="text-4xl text-primary" />,
                title: "One-Click Input Generation",
                description: "Generate complete input handling code with a single click for any competitive programming problem.",
              },
              {
                icon: <FiZap className="text-4xl text-secondary" />,
                title: "Platform-Specific Templates",
                description: "Automatically adapts to each platform's input format - Codeforces, LeetCode, AtCoder, etc.",
              },
              {
                icon: <FiAward className="text-4xl text-primary" />,
                title: "Competition Ready",
                description: "Optimized for speed during competitions with minimal keystrokes required.",
              },
              {
                icon: <FaChessKnight className="text-4xl text-secondary" />,
                title: "Advanced Customization",
                description: "Customize input parsing for complex problems with our advanced editor.",
              },
              {
                icon: <FiCheck className="text-4xl text-primary" />,
                title: "Error-Free Input Handling",
                description: "Eliminate input parsing bugs that cost you precious time in competitions.",
              },
              {
                icon: <FaRobot className="text-4xl text-secondary" />,
                title: "Smart Detection",
                description: "Intelligently detects input patterns and generates appropriate code structures.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              See It In <span className="text-primary">Action</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how CP Input Gen saves you time and reduces errors.
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-200">
            <video
              className="w-full h-full object-cover"
              controls
              poster="/demo.gif"
            >
              <source src="/demo.gif" type="video/gif" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Simple, <span className="text-primary">Transparent</span> Pricing
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your competitive programming needs.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveTab('free')}
                className={`px-6 py-3 text-sm font-medium rounded-l-lg ${activeTab === 'free' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Free
              </button>
              <button
                onClick={() => setActiveTab('premium')}
                className={`px-6 py-3 text-sm font-medium ${activeTab === 'premium' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Premium ($10)
              </button>
              <button
                onClick={() => setActiveTab('pro')}
                className={`px-6 py-3 text-sm font-medium rounded-r-lg ${activeTab === 'pro' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Pro ($15)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Free',
                price: '$0',
                description: 'Basic functionality for casual programmers',
                features: [
                  'Basic input generation',
                  'Supports 3 platforms',
                  'Standard input templates',
                  'Community support',
                ],
                cta: 'Get Started',
                active: activeTab === 'free',
              },
              {
                name: 'Premium',
                price: '$10',
                description: 'For serious competitive programmers',
                features: [
                  'Advanced input generation',
                  'Supports all major platforms',
                  'Customizable templates',
                  'Priority support',
                  'Batch input generation',
                ],
                cta: 'Upgrade Now',
                active: activeTab === 'premium',
              },
              {
                name: 'Pro',
                price: '$15',
                description: 'For professionals and teams',
                features: [
                  'All Premium features',
                  'AI-powered input detection',
                  'Team collaboration',
                  'Custom template sharing',
                  'Dedicated support',
                  'Early access to new features',
                ],
                cta: 'Get Pro',
                active: activeTab === 'pro',
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${plan.active ? 'border-primary shadow-xl transform -translate-y-2' : 'border-gray-200 shadow-md'}`}
              >
                <div className={`p-6 ${plan.active ? 'bg-primary text-white' : 'bg-white'}`}>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="mt-2">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.name !== 'Free' && <span className="text-sm ml-1">one-time payment</span>}
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <FiCheck className={`flex-shrink-0 mt-1 mr-2 ${plan.active ? 'text-primary' : 'text-gray-400'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full mt-8 py-3 px-4 rounded-md font-medium ${plan.active ? 'bg-primary hover:bg-primary-dark text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
  {/* Premium background elements */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-r from-[#00D7B1] to-[#00B89C] opacity-95"></div>
    
    {/* Animated floating elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white opacity-[0.03]"
          style={{
            width: `${Math.random() * 300 + 100}px`,
            height: `${Math.random() * 300 + 100}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 15 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
    
    {/* Shining grid overlay */}
    <div 
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `
          linear-gradient(to right, white 1px, transparent 1px),
          linear-gradient(to bottom, white 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
          Ready to Supercharge Your Competitive Programming?
        </span>
      </h2>
      
      <motion.p 
        className="text-xl md:text-2xl text-white opacity-90 mb-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Join <span className="font-semibold">thousands of top programmers</span> who save hours and eliminate input errors with CP Input Gen.
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row justify-center gap-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <button className="
          relative overflow-hidden
          bg-white text-[#00B89C] px-10 py-5 rounded-xl
          text-lg font-bold shadow-2xl
          transition-all duration-300
          hover:scale-105 hover:shadow-xl
          group
        ">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <FiDownload className="inline mr-3 -ml-1" size={20} />
          Add to Chrome - It's Free
          <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#00D7B1] to-[#00B89C]"></span>
        </button>
        
        <button className="
          relative overflow-hidden
          border-2 border-white text-white px-10 py-5 rounded-xl
          text-lg font-bold
          transition-all duration-300
          hover:scale-105 hover:bg-white hover:bg-opacity-10
          group
        ">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-200 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <FaRocket className="inline mr-3 -ml-1" size={18} />
          Explore Premium Features
          <span className="absolute inset-x-0 bottom-0 h-1 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
        </button>
      </motion.div>
      
      <motion.div 
        className="mt-12 flex items-center justify-center space-x-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
      </motion.div>
    </motion.div>
  </div>

  {/* Animation styles */}
  <style jsx global>{`
    @keyframes float {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(-20px) rotate(5deg);
      }
    }
  `}</style>
</section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Brand Column */}
      <div className="md:col-span-2">
        <div className="flex items-center">
          <img
            className="h-10 w-auto"
            src="logo.png"
            alt="CP Input Generator"
          />
          <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-[#00D7B1] to-[#00B89C] bg-clip-text text-transparent">
            CPInput
          </span>
        </div>
        <p className="mt-4 text-gray-400 max-w-md">
          Get input code, code the logic. Focus on what matters in competitive programming.
        </p>
        <div className="mt-6 flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      {/* Links Columns */}
      <div>
        <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Product</h3>
        <ul className="mt-4 space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
        </ul>
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} CPInput. All rights reserved.
      </p>
      <div className="mt-4 md:mt-0 flex space-x-6">
        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
};

export default CompetitiveProgrammingInputGenerator;