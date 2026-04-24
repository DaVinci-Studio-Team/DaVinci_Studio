import React from "react";

const TermsConditions = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By using DaVinci Studio, you agree to these Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of our services.",
    },
    {
      title: "2. Platform Usage",
      content:
        "Our AI image generation platform is intended for legal, creative, and professional use only. Abuse, fraud, harmful content, or illegal usage is strictly prohibited.",
    },
    {
      title: "3. User Accounts",
      content:
        "You are responsible for maintaining your login credentials and all activity performed under your account. Keep your account secure at all times.",
    },
    {
      title: "4. Payments & Plans",
      content:
        "Premium features may require subscriptions or one-time payments. Pricing and service plans may change based on platform updates and feature improvements.",
    },
    {
      title: "5. Ownership & Rights",
      content:
        "DaVinci Studio owns the platform technology, branding, and infrastructure. Users retain ownership of eligible AI-generated content under applicable policies.",
    },
    {
      title: "6. Service Changes",
      content:
        "We reserve the right to update, suspend, or discontinue parts of the platform without prior notice for maintenance, upgrades, or policy reasons.",
    },
    {
      title: "7. Liability Disclaimer",
      content:
        "DaVinci Studio is not liable for indirect damages, interruptions, content misuse, or losses resulting from service usage beyond our reasonable control.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white px-6 py-20 sm:px-10 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="mb-16 text-center">
          <p className="inline-block px-4 py-2 mb-4 text-sm font-medium text-pink-300 border rounded-full border-pink-500/30 bg-pink-500/10">
            Legal Agreement
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Conditions</span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400">
            Please read these terms carefully before using DaVinci Studio.
            These rules help keep our platform safe, secure, and fair for everyone.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8">
          {sections.map((item, index) => (
            <div
              key={index}
              className="p-8 transition-all duration-300 border shadow-2xl rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl hover:border-pink-500/40 hover:shadow-pink-500/10"
            >
              <h2 className="mb-4 text-2xl font-semibold text-white">
                {item.title}
              </h2>
              <p className="leading-8 text-gray-300">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;