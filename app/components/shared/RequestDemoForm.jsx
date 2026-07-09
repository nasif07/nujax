"use client";
import React, { useState } from "react";
import { LuArrowRight } from "react-icons/lu";

const initialForm = {
  fullName: "",
  email: "",
  message: "",
};

const validateEmail = (email) => {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
};

export default function RequestDemoForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  function validate() {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!validateEmail(form.email.trim()))
      e.email = "Please enter a valid email address.";
    if (!form.message.trim())
      e.message = "Tell us a bit about what you need.";
    return e;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    setSubmitError("");
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setLoading(true);
    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const body = await res.text();
        throw new Error(body || "Server error");
      }
      setSuccess(true);
      setForm(initialForm);
      setErrors({});
    } catch (err) {
      console.error(err);
      setSubmitError(
        typeof err?.message === "string" && err.message
          ? err.message
          : "Submission failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto text-center px-4 sm:px-0">
      <h1
        style={{ lineHeight: "130%", letterSpacing: "-1.44px" }}
        className="font-semibold text-3xl sm:text-4xl md:text-5xl text-white">
        Request a Demo
      </h1>
      <p
        style={{ lineHeight: "150%", letterSpacing: "-0.03em" }}
        className="mt-4 text-[#878C91] text-sm sm:text-base font-semibold max-w-md mx-auto">
        Let&apos;s hop on a call and discuss the problem you&apos;re facing.
      </p>

      {success && (
        <div className="mt-8 max-w-xl mx-auto rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-left text-sm text-emerald-300">
          Thanks — your request was submitted successfully. We&apos;ll be in
          touch shortly.
        </div>
      )}

      {submitError && (
        <div className="mt-8 max-w-xl mx-auto rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-left text-sm text-red-300">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-10 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <div
              className={`rounded-2xl border bg-white/[0.02] px-5 py-3 transition focus-within:border-[#8955E2] ${
                errors.fullName ? "border-red-500/60" : "border-white/10"
              }`}>
              <label
                htmlFor="fullName"
                className="block text-xs sm:text-sm font-medium text-white">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Type here"
                aria-invalid={errors.fullName ? "true" : "false"}
                className="mt-1 block w-full bg-transparent text-sm text-white placeholder:text-[#878C91] outline-none"
              />
            </div>
            {errors.fullName && (
              <p className="mt-1.5 px-1 text-xs text-red-400">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <div
              className={`rounded-2xl border bg-white/[0.02] px-5 py-3 transition focus-within:border-[#8955E2] ${
                errors.email ? "border-red-500/60" : "border-white/10"
              }`}>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-medium text-white">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Type here"
                aria-invalid={errors.email ? "true" : "false"}
                className="mt-1 block w-full bg-transparent text-sm text-white placeholder:text-[#878C91] outline-none"
              />
            </div>
            {errors.email && (
              <p className="mt-1.5 px-1 text-xs text-red-400">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4 sm:mt-5">
          <div
            className={`rounded-2xl border bg-white/[0.02] px-5 py-3 transition focus-within:border-[#8955E2] ${
              errors.message ? "border-red-500/60" : "border-white/10"
            }`}>
            <label
              htmlFor="message"
              className="block text-xs sm:text-sm font-medium text-white">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Type here"
              aria-invalid={errors.message ? "true" : "false"}
              className="mt-1 block w-full resize-none bg-transparent text-sm text-white placeholder:text-[#878C91] outline-none"
            />
          </div>
          {errors.message && (
            <p className="mt-1.5 px-1 text-xs text-red-400">
              {errors.message}
            </p>
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            className={`inline-flex items-center justify-center gap-3 rounded-full px-8 py-3.5 text-sm sm:text-base font-bold text-white transition disabled:opacity-60 ${
              loading ? "bg-[#6d3acc]" : "bg-[#8955E2] hover:bg-[#6d3acc]"
            }`}>
            {loading ? (
              <svg
                className="h-4 w-4 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
            ) : null}
            {loading ? "Sending..." : "Send"}
            {!loading && <LuArrowRight />}
          </button>
        </div>
      </form>
    </div>
  );
}
