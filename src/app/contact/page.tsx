'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid work email."),
  phone: z.string().min(5, "Please enter a valid phone number."),
  business: z.string().min(2, "Business or organisation is required."),
  role: z.string().min(2, "Role is required."),
  city: z.string().min(2, "City is required."),
  message: z.string().max(1000, "Message must be less than 1000 characters.").optional()
});

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState('');

  const endpoint = process.env.NEXT_PUBLIC_DEMO_FORM_ENDPOINT;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setFormError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      business: formData.get('business') as string,
      role: formData.get('role') as string,
      city: formData.get('city') as string,
      message: formData.get('message') as string,
    };

    const validation = formSchema.safeParse(data);

    if (!validation.success) {
      const formattedErrors: Record<string, string> = {};
      validation.error.issues.forEach(issue => {
        formattedErrors[String(issue.path[0])] = issue.message;
      });
      setErrors(formattedErrors);
      setFormError("Please correct the errors below.");
      setLoading(false);
      return;
    }

    if (!endpoint) {
      // Development mode / missing endpoint configuration
      setTimeout(() => {
        setFormError("Configuration missing: DEMO_FORM_ENDPOINT is not configured in this environment.");
        setLoading(false);
      }, 1000);
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validation.data)
      });
      
      if (!res.ok) throw new Error('Submission failed');
      
      setSuccess(true);
    } catch (_err) {
      setFormError("An error occurred while submitting your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-32 pb-20 bg-radha-canvas">
        <div className="max-w-[700px] mx-auto px-5 lg:px-12">
          <div className="mb-12 text-center">
            <h1 className="text-[var(--display-major)] font-bold text-radha-ink mb-6 tracking-tight">Request a Demo</h1>
            <p className="text-[var(--body-large)] text-radha-ink-soft">
              See how product intelligence, retail operations and owner visibility connect inside one platform.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-radha-hairline">
            {success ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-radha-success/10 text-radha-success rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">Request Received</h2>
                <p className="text-radha-ink-soft">Thank you for your interest in RADHA. Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {formError && (
                  <div className="p-4 bg-radha-danger/10 border border-radha-danger/20 text-radha-danger rounded-xl text-sm font-medium">
                    {formError}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-medium text-radha-ink">Full Name</label>
                    <input type="text" id="fullName" name="fullName" className={`w-full p-3 rounded-xl border ${errors.fullName ? 'border-radha-danger' : 'border-radha-hairline'} focus:outline-none focus:border-radha-orange transition-colors`} />
                    {errors.fullName && <p className="text-radha-danger text-xs">{errors.fullName}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-radha-ink">Work Email</label>
                    <input type="email" id="email" name="email" className={`w-full p-3 rounded-xl border ${errors.email ? 'border-radha-danger' : 'border-radha-hairline'} focus:outline-none focus:border-radha-orange transition-colors`} />
                    {errors.email && <p className="text-radha-danger text-xs">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-radha-ink">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className={`w-full p-3 rounded-xl border ${errors.phone ? 'border-radha-danger' : 'border-radha-hairline'} focus:outline-none focus:border-radha-orange transition-colors`} />
                    {errors.phone && <p className="text-radha-danger text-xs">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="city" className="block text-sm font-medium text-radha-ink">City</label>
                    <input type="text" id="city" name="city" className={`w-full p-3 rounded-xl border ${errors.city ? 'border-radha-danger' : 'border-radha-hairline'} focus:outline-none focus:border-radha-orange transition-colors`} />
                    {errors.city && <p className="text-radha-danger text-xs">{errors.city}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="business" className="block text-sm font-medium text-radha-ink">Business / Organisation</label>
                    <input type="text" id="business" name="business" className={`w-full p-3 rounded-xl border ${errors.business ? 'border-radha-danger' : 'border-radha-hairline'} focus:outline-none focus:border-radha-orange transition-colors`} />
                    {errors.business && <p className="text-radha-danger text-xs">{errors.business}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="role" className="block text-sm font-medium text-radha-ink">Role</label>
                    <input type="text" id="role" name="role" className={`w-full p-3 rounded-xl border ${errors.role ? 'border-radha-danger' : 'border-radha-hairline'} focus:outline-none focus:border-radha-orange transition-colors`} />
                    {errors.role && <p className="text-radha-danger text-xs">{errors.role}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-radha-ink">Message (Optional)</label>
                  <textarea id="message" name="message" rows={4} className={`w-full p-3 rounded-xl border ${errors.message ? 'border-radha-danger' : 'border-radha-hairline'} focus:outline-none focus:border-radha-orange transition-colors`}></textarea>
                  {errors.message && <p className="text-radha-danger text-xs">{errors.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-radha-orange text-white font-medium hover:bg-radha-orange-deep transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : "Submit Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
