"use client";

import { useState, FormEvent } from "react";
import Button from "./Button";
import { CheckCircle2, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Website Development",
    budget: "$5,000 - $10,000",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const servicesList = [
    "Social Media Management",
    "PPC & Paid Ads",
    "SEO / GMB",
    "Website Development"
  ];

  const budgetTiers = [
    "$3,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000+"
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="bg-[#F4F4F4] border border-neutral-200 p-8 sm:p-12 text-center flex flex-col items-center justify-center gap-4 rounded-xs my-auto min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-[#FE8301]/10 flex items-center justify-center text-[#FE8301] mb-2">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-heading font-bold text-2xl text-black">
          Inquiry Received
        </h3>
        <p className="text-neutral-600 text-sm max-w-md leading-relaxed font-medium">
          Thank you, <span className="text-black font-semibold">{formData.name}</span>. Our growth team is reviewing your project details and will be in touch within 4 business hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#FE8301] hover:underline cursor-pointer"
        >
          ← Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-neutral-200/90 p-6 sm:p-10 shadow-xs flex flex-col gap-6">
      <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
        <h3 className="font-heading font-bold text-xl text-black">
          Start a Conversation
        </h3>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#FE8301]">
          <Sparkles className="w-3.5 h-3.5" />
          Direct Strategy Access
        </span>
      </div>

      {/* Service Selector Pills */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-wider text-black">
          Service Interested In
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {servicesList.map((svc) => (
            <button
              type="button"
              key={svc}
              onClick={() => setFormData({ ...formData, service: svc })}
              className={`px-4 py-2.5 text-xs font-semibold text-left border transition-all rounded-xs cursor-pointer ${
                formData.service === svc
                  ? "bg-black text-white border-black"
                  : "bg-[#F4F4F4] text-neutral-700 border-transparent hover:border-neutral-300"
              }`}
            >
              {svc}
            </button>
          ))}
        </div>
      </div>

      {/* Form Fields Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-black">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 text-sm bg-[#F4F4F4] border border-transparent focus:border-black focus:bg-white text-black outline-none transition-colors font-medium"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-black">
            Work Email *
          </label>
          <input
            type="email"
            required
            placeholder="john@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 text-sm bg-[#F4F4F4] border border-transparent focus:border-black focus:bg-white text-black outline-none transition-colors font-medium"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-black">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 text-sm bg-[#F4F4F4] border border-transparent focus:border-black focus:bg-white text-black outline-none transition-colors font-medium"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-black">
            Company Name
          </label>
          <input
            type="text"
            placeholder="Acme Corp"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 text-sm bg-[#F4F4F4] border border-transparent focus:border-black focus:bg-white text-black outline-none transition-colors font-medium"
          />
        </div>
      </div>

      {/* Budget Tier Selector */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-wider text-black">
          Estimated Monthly Investment
        </label>
        <div className="flex flex-wrap gap-2">
          {budgetTiers.map((bgt) => (
            <button
              type="button"
              key={bgt}
              onClick={() => setFormData({ ...formData, budget: bgt })}
              className={`px-4 py-2 text-xs font-semibold border transition-all rounded-xs cursor-pointer ${
                formData.budget === bgt
                  ? "bg-[#FE8301] text-white border-[#FE8301]"
                  : "bg-[#F4F4F4] text-neutral-700 border-transparent hover:border-neutral-300"
              }`}
            >
              {bgt}
            </button>
          ))}
        </div>
      </div>

      {/* Message Field */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-black">
          Project Details & Goals *
        </label>
        <textarea
          required
          rows={4}
          placeholder="Tell us about your current challenges, goals, and timeline..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 text-sm bg-[#F4F4F4] border border-transparent focus:border-black focus:bg-white text-black outline-none transition-colors font-medium resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full justify-center mt-2"
      >
        {loading ? "Processing..." : "Send Inquiry"}
      </Button>
    </form>
  );
}
