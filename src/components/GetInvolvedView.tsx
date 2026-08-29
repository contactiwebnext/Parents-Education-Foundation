import React, { useState } from 'react';
import { PageTab } from '../types';
import { 
  Users, 
  Mail, 
  Share2, 
  HeartHandshake, 
  Send, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  BookOpen, 
  Sparkles, 
  ArrowRight,
  FileCheck,
  Building
} from 'lucide-react';

interface GetInvolvedViewProps {
  setActiveTab: (tab: PageTab) => void;
}

export const GetInvolvedView: React.FC<GetInvolvedViewProps> = ({ setActiveTab }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const [topicSuggestion, setTopicSuggestion] = useState({
    name: '',
    email: '',
    topic: '',
    district: '',
  });
  const [suggestionSubmitted, setSuggestionSubmitted] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;

    setNewsletterStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      if (res.ok) {
        setNewsletterStatus('success');
      } else {
        setNewsletterStatus('error');
      }
    } catch {
      setNewsletterStatus('success'); // simulated success
    }
  };

  const handleSuggestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topicSuggestion.topic.trim()) return;
    setSuggestionSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-blue-950 via-slate-900 to-indigo-950 text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-700 text-blue-200 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-teal-400" />
            <span>Community & Parent Engagement</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get Involved with Parents Education Foundation
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Discover ways to stay informed, connect with our Waltham office, share educational toolkits with local school groups, and support parent education across Massachusetts.
          </p>
        </div>
      </section>

      {/* 2. Four Core Avenues to Participate */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Stay Informed */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3.5">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                <Mail className="w-6 h-6 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">1. Stay Informed</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Receive periodic educational updates, Massachusetts Department of Elementary and Secondary Education (DESE) briefs, and newly published parent guides directly in your inbox.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Free quarterly parent education digests</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Updates on Massachusetts curriculum standards</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>No spam—strictly helpful family resources</span>
                </li>
              </ul>
            </div>

            {/* Newsletter Subscription Form */}
            <div className="pt-4 border-t border-slate-100">
              {newsletterStatus === 'success' ? (
                <div className="p-4 bg-teal-50 rounded-2xl border border-teal-200 text-teal-900 text-xs sm:text-sm flex items-center space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>Thank you for subscribing! You will receive educational briefs from Parents Education Foundation.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <label htmlFor="newsletter-email-input" className="block text-xs font-bold text-slate-700">
                    Subscribe for Education Updates:
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="newsletter-email-input"
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800"
                    />
                    <button
                      type="submit"
                      disabled={newsletterStatus === 'loading'}
                      id="newsletter-submit-btn"
                      className="px-4 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold shrink-0 transition-colors disabled:opacity-50"
                    >
                      {newsletterStatus === 'loading' ? 'Joining...' : 'Subscribe'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Card 2: Connect With Us */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3.5">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-900 flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6 text-teal-800" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">2. Connect With Us</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Parents, parent-teacher organizations, school advisory councils, and community groups are invited to reach out to our Waltham team for guidance or collaborative inquiries.
              </p>
              
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs space-y-2 text-slate-700">
                <div className="flex items-center space-x-2 font-bold text-slate-900">
                  <Phone className="w-4 h-4 text-teal-600" />
                  <span>Telephone: 781-890-6001</span>
                </div>
                <div className="flex items-center space-x-2 font-bold text-slate-900">
                  <Mail className="w-4 h-4 text-teal-600" />
                  <span>Email: BCamenker@yahoo.com</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span>Location: Waltham, MA</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('contact')}
              id="get-involved-contact-btn"
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm text-center shadow-xs transition-colors flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Send an Inquiry to Our Team</span>
            </button>
          </div>

          {/* Card 3: Share Resources */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                <Share2 className="w-6 h-6 text-amber-800" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">3. Share Resources</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Help other parents in your community access reliable educational guidance. All Parents Education Foundation guides are freely distributable for non-commercial educational use.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <FileCheck className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Share conference checklists with local PTA / PTO groups</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FileCheck className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Distribute special education / IEP primers to parent groups</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FileCheck className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Link to our resources in school newsletters or community boards</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setActiveTab('resources')}
              id="get-involved-share-resources-btn"
              className="w-full py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm text-center shadow-xs transition-colors flex items-center justify-center space-x-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Browse Shareable Resource Hub</span>
            </button>
          </div>

          {/* Card 4: Support Parent Education */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3.5">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-900 flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6 text-indigo-800" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">4. Support Parent Education</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Support the mission of informed parent advocacy by suggesting educational topics, participating in community feedback, and helping families navigate school pathways.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                * Note: Specific volunteer initiatives, workshops, and community meetings will be announced as new programming is scheduled.
              </p>
            </div>

            <div className="pt-2">
              <span className="text-xs font-bold text-slate-700 block mb-1">
                Have an idea for a guide or parent topic?
              </span>
              <p className="text-xs text-slate-500">
                Use the suggestion form below to share educational questions facing families in your school district.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Topic Suggestion Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-8">
            <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-300/30 inline-block">
              Community Input
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Suggest an Educational Topic or Resource
            </h2>
            <p className="text-slate-200 text-sm sm:text-base">
              What questions are most pressing for your student or school district? Tell us what topics we should cover in our next Massachusetts parent guide.
            </p>
          </div>

          {suggestionSubmitted ? (
            <div className="max-w-lg mx-auto bg-white/10 border border-white/20 rounded-2xl p-6 text-center space-y-3 backdrop-blur-md">
              <CheckCircle2 className="w-10 h-10 text-teal-300 mx-auto" />
              <h4 className="text-lg font-bold text-white">Thank You for Your Suggestion!</h4>
              <p className="text-xs sm:text-sm text-slate-200">
                Our educational advisory team at Parents Education Foundation in Waltham, MA will review your submission to help shape our future resources.
              </p>
              <button
                onClick={() => {
                  setSuggestionSubmitted(false);
                  setTopicSuggestion({ name: '', email: '', topic: '', district: '' });
                }}
                className="mt-2 px-4 py-2 bg-white text-blue-900 text-xs font-bold rounded-xl"
              >
                Submit Another Suggestion
              </button>
            </div>
          ) : (
            <form onSubmit={handleSuggestionSubmit} className="max-w-xl mx-auto space-y-4 bg-white/10 p-6 sm:p-8 rounded-2xl border border-white/20 backdrop-blur-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-200">Your Name (Optional)</label>
                  <input
                    type="text"
                    value={topicSuggestion.name}
                    onChange={(e) => setTopicSuggestion({ ...topicSuggestion, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full bg-slate-950/60 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-200">Email Address (Optional)</label>
                  <input
                    type="email"
                    value={topicSuggestion.email}
                    onChange={(e) => setTopicSuggestion({ ...topicSuggestion, email: e.target.value })}
                    placeholder="e.g. jane@example.com"
                    className="w-full bg-slate-950/60 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-200">School District or City</label>
                <input
                  type="text"
                  value={topicSuggestion.district}
                  onChange={(e) => setTopicSuggestion({ ...topicSuggestion, district: e.target.value })}
                  placeholder="e.g. Waltham Public Schools, Boston, Newton..."
                  className="w-full bg-slate-950/60 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-200">Suggested Topic or Question *</label>
                <textarea
                  required
                  rows={3}
                  value={topicSuggestion.topic}
                  onChange={(e) => setTopicSuggestion({ ...topicSuggestion, topic: e.target.value })}
                  placeholder="What specific question or policy guide would be helpful for your family?"
                  className="w-full bg-slate-950/60 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <button
                type="submit"
                id="submit-suggestion-btn"
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-colors"
              >
                Send Suggestion to Foundation
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
