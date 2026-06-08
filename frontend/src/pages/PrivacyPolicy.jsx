// PrivacyPolicy.jsx + TermsConditions.jsx (Premium Styled Version)

import React from "react";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Introduction",
      content:
        "Welcome to DaVinci Studio, an AI-powered image generation platform built for creators, designers, and innovators. Your privacy matters to us, and we are committed to protecting your personal information.",
    },
    {
      title: "2. Information We Collect",
      content:
        "We may collect your name, email address, login credentials, billing details, prompt history, generated images, and usage analytics to improve your overall experience.",
    },
    {
      title: "3. How We Use Your Information",
      content:
        "Your data helps us personalize your experience, improve AI output quality, enhance security, process subscriptions, and provide customer support efficiently.",
    },
    {
      title: "4. Security & Protection",
      content:
        "We use modern encryption and secure infrastructure to protect your information. While we work hard to keep your data safe, no digital platform is 100% immune from risks.",
    },
    {
      title: "5. Third-Party Services",
      content:
        "Trusted third-party services such as payment gateways, analytics tools, and cloud storage providers may be used to support our platform functionality.",
    },
    {
      title: "6. Cookies Policy",
      content:
        "Cookies help us improve performance, remember preferences, and enhance usability. You can disable cookies anytime through your browser settings.",
    },
    {
      title: "7. Contact Information",
      content:
        "If you have any concerns regarding this Privacy Policy, please contact our support team through our official channels.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white px-6 py-20 sm:px-10 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <p className="inline-block px-4 py-2 mb-4 text-sm font-medium text-purple-300 border rounded-full border-purple-500/30 bg-purple-500/10">
            Legal Information
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Policy</span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400">
            Transparency matters. Here's how DaVinci Studio collects,
            protects, and uses your information while delivering powerful
            AI image generation experiences.
          </p>
        </div>

        <div className="grid gap-8">
          {sections.map((item, index) => (
            <div
              key={index}
              className="p-8 transition-all duration-300 border shadow-2xl rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl hover:border-purple-500/40 hover:shadow-purple-500/10"
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

export default PrivacyPolicy;