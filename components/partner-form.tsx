"use client";

import { FormEvent, useState } from "react";

export function PartnerForm() {
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    organization: "",
    email: "",
    country: "",
    focus: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");

    try {
      // Simulate form submission
      // In production, this would send to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", formData);
      setFormState("success");
      setFormData({
        organization: "",
        email: "",
        country: "",
        focus: "",
        message: "",
      });

      // Reset success state after 5 seconds
      setTimeout(() => setFormState("idle"), 5000);
    } catch (error) {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 5000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-white p-8 shadow-sm"
    >
      <div className="space-y-6">
        <div>
          <label
            htmlFor="organization"
            className="block text-sm font-semibold text-brand-950"
          >
            Organization Name
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2 text-sm text-slate-900 transition placeholder:text-slate-500 focus:border-brand-700 focus:outline-none focus:ring-1 focus:ring-brand-700"
            placeholder="e.g., Ministry of Agriculture, NGO Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-brand-950">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2 text-sm text-slate-900 transition placeholder:text-slate-500 focus:border-brand-700 focus:outline-none focus:ring-1 focus:ring-brand-700"
            placeholder="contact@organization.org"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="country" className="block text-sm font-semibold text-brand-950">
              Primary Country
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2 text-sm text-slate-900 transition focus:border-brand-700 focus:outline-none focus:ring-1 focus:ring-brand-700"
            >
              <option value="">Select a country</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Kenya">Kenya</option>
              <option value="Uganda">Uganda</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Ghana">Ghana</option>
              <option value="Mali">Mali</option>
              <option value="Senegal">Senegal</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="focus" className="block text-sm font-semibold text-brand-950">
              Primary Focus
            </label>
            <select
              id="focus"
              name="focus"
              value={formData.focus}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2 text-sm text-slate-900 transition focus:border-brand-700 focus:outline-none focus:ring-1 focus:ring-brand-700"
            >
              <option value="">Select a focus area</option>
              <option value="Climate Adaptation">Climate Adaptation</option>
              <option value="Food Security">Food Security</option>
              <option value="Agricultural Development">Agricultural Development</option>
              <option value="Risk Management">Risk Management</option>
              <option value="Research">Research</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-brand-950">
            Partnership Inquiry
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2 text-sm text-slate-900 transition placeholder:text-slate-500 focus:border-brand-700 focus:outline-none focus:ring-1 focus:ring-brand-700"
            placeholder="Tell us about your organization's goals and how Eden might support your climate resilience initiatives..."
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {formState === "success" && (
            <p className="text-sm font-semibold text-emerald-700">
              ✓ Thank you. We'll be in touch shortly.
            </p>
          )}
          {formState === "error" && (
            <p className="text-sm font-semibold text-rose-700">
              Something went wrong. Please try again.
            </p>
          )}
          <button
            type="submit"
            disabled={formState === "loading"}
            className="inline-flex items-center justify-center rounded-full bg-brand-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-950 disabled:opacity-50"
          >
            {formState === "loading" ? "Sending..." : "Send Partnership Inquiry"}
          </button>
        </div>
      </div>
    </form>
  );
}
