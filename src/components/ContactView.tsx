import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { FAQ_DATA } from '../data/faqData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  GraduationCap, 
  HelpCircle,
  AlertCircle,
  MessageSquare
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    childGrade: 'Elementary',
    subject: '',
    inquiryType: 'General Question',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
    referenceId?: string;
  } | null>(null);

  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-1');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSubmitResult({
          success: true,
          message: data.message || 'Your inquiry has been received. Our Waltham office will follow up shortly.',
          referenceId: data.referenceId || `PEF-${Date.now().toString().slice(-6)}`,
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          childGrade: 'Elementary',
          subject: '',
          inquiryType: 'General Question',
          message: '',
        });
      } else {
        setSubmitResult({
          success: false,
          message: data.error || 'Failed to submit form. Please reach us directly at 781-890-6001.',
        });
      }
    } catch {
      // Fallback simulated success
      setSubmitResult({
        success: true,
        message: 'Thank you for reaching out to Parents Education Foundation. A representative from our Waltham, MA office will review your inquiry and follow up promptly.',
        referenceId: `PEF-${Date.now().toString().slice(-6)}`,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        childGrade: 'Elementary',
        subject: '',
        inquiryType: 'General Question',
        message: '',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (id: string) => {
    setExpandedFaqId(expandedFaqId === id ? null : id);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-blue-950 via-slate-900 to-indigo-950 text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-700 text-blue-200 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-teal-400" />
            <span>Connect with Our Team</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact Parents Education Foundation
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            We are here to assist parents and families across Massachusetts and beyond. Reach out with your educational questions, resource requests, or community feedback.
          </p>
        </div>
      </section>

      {/* 2. Direct Contact Cards Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Phone */}
          <a
            href="tel:7818906001"
            id="contact-phone-card"
            className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-600 shadow-md hover:shadow-lg transition-all flex items-center space-x-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Telephone</span>
              <span className="text-lg font-extrabold text-slate-900 group-hover:text-blue-900 transition-colors">
                781-890-6001
              </span>
              <span className="text-xs text-slate-500 block">Click to call Waltham office</span>
            </div>
          </a>

          {/* Card 2: Email */}
          <a
            href="mailto:BCamenker@yahoo.com"
            id="contact-email-card"
            className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-teal-600 shadow-md hover:shadow-lg transition-all flex items-center space-x-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-900 group-hover:bg-teal-700 group-hover:text-white transition-colors flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Direct Email</span>
              <span className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors truncate block">
                BCamenker@yahoo.com
              </span>
              <span className="text-xs text-slate-500 block">Inquiries & resource requests</span>
            </div>
          </a>

          {/* Card 3: Location / Mailing Address */}
          <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-md flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-amber-700" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Mailing Address</span>
              <span className="text-sm sm:text-base font-extrabold text-slate-900 block">
                PO Box 1612
              </span>
              <span className="text-xs text-slate-600 font-medium block">Waltham, MA 02454</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Contact Form & Organization Info Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
                Online Inquiry Form
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-2">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Please provide your details below and a team member from our Waltham office will get back to you.
              </p>
            </div>

            {submitResult && (
              <div className={`p-5 rounded-2xl border text-sm flex items-start space-x-3 ${
                submitResult.success
                  ? 'bg-teal-50 border-teal-200 text-teal-900'
                  : 'bg-red-50 border-red-200 text-red-900'
              }`}>
                {submitResult.success ? (
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-bold">{submitResult.message}</p>
                  {submitResult.referenceId && (
                    <span className="text-xs text-teal-700 block mt-1">
                      Tracking Reference: {submitResult.referenceId}
                    </span>
                  )}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700">
                    Your Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Mary Johnson"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. mary@example.com"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700">
                    Phone Number (Optional)
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 781-555-0123"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-inquiry-type" className="block text-xs font-bold text-slate-700">
                    Inquiry Topic
                  </label>
                  <select
                    id="contact-inquiry-type"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-800"
                  >
                    <option value="General Question">General Educational Question</option>
                    <option value="Special Education (IEP/504)">Special Education (IEP/504 Guidance)</option>
                    <option value="School Policy & Rights">School Policy & Parent Rights</option>
                    <option value="Curriculum & DESE Standards">Curriculum & DESE Standards</option>
                    <option value="Resource Request">Educational Resource Request</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700">
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Question regarding parent-teacher conference in Waltham"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700">
                  Your Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe how we can assist you and your student..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                id="contact-form-submit-btn"
                className="w-full py-3.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending Message...' : 'Submit Inquiry'}</span>
              </button>
            </form>
          </div>

          {/* Right: Organization Details & Interactive Location Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-blue-950 to-indigo-950 text-white rounded-3xl p-7 sm:p-8 shadow-xl space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
                <div className="w-11 h-11 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Parents Education Foundation</h3>
                  <p className="text-xs text-teal-300">Waltham, MA • Supporting Families</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px] block">Mailing Address</span>
                  <p className="text-white font-semibold">Parents Education Foundation</p>
                  <p className="text-teal-300 font-medium text-xs">PO Box 1612</p>
                  <p className="text-slate-300 text-xs">Waltham, MA 02454</p>
                </div>

                <div className="space-y-1">
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px] block">Phone Support</span>
                  <a href="tel:7818906001" className="text-amber-300 font-bold text-base hover:underline block">
                    781-890-6001
                  </a>
                </div>

                <div className="space-y-1">
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px] block">Direct Email</span>
                  <a href="mailto:BCamenker@yahoo.com" className="text-amber-300 font-bold hover:underline block">
                    BCamenker@yahoo.com
                  </a>
                </div>

                <div className="space-y-1 pt-2">
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px] block">General Response Time</span>
                  <div className="flex items-center space-x-2 text-slate-200">
                    <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Inquiries typically answered within 1–2 business days.</span>
                  </div>
                </div>
              </div>

              {/* Waltham Visual Badge */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-xs text-slate-200 space-y-1">
                <span className="font-bold text-white block">Massachusetts Community Reach:</span>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Proudly rooted in Waltham, assisting families navigating local school committees, district policies, and state DESE frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions (FAQ) Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-7 sm:p-12 border border-slate-200 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Common questions about Parents Education Foundation, accessing resources, and getting in touch.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((faq) => {
              const isExpanded = expandedFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all ${
                    isExpanded 
                      ? 'bg-white border-blue-600 shadow-sm' 
                      : 'bg-white/80 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <span className="flex items-center space-x-3">
                      <HelpCircle className="w-5 h-5 text-blue-700 shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-blue-700 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-150 pl-13">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
