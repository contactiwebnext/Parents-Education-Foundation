import React, { useState, useRef } from 'react';
import { PageTab, ResourceArticle, InteractiveChecklist } from '../types';
import { RESOURCE_CATEGORIES, INTERACTIVE_CHECKLISTS } from '../data/resourcesData';
import { 
  BookOpen, 
  Users, 
  ShieldCheck, 
  FileText, 
  Sparkles, 
  Compass, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  School,
  HeartHandshake,
  MessageSquare,
  ChevronRight,
  ClipboardList,
  Volume2,
  VolumeX
} from 'lucide-react';

const HERO_VIDEO_URL = 'https://edc8ne5pnrahkqbm.public.blob.vercel-storage.com/Create_video_for_education_found%E2%80%A6_202608292358.mp4';

interface HomeViewProps {
  setActiveTab: (tab: PageTab) => void;
  onSelectArticle: (article: ResourceArticle) => void;
  onSelectChecklist: (checklist: InteractiveChecklist) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setActiveTab,
  onSelectArticle,
  onSelectChecklist,
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'understanding-education': return BookOpen;
      case 'school-communication': return MessageSquare;
      case 'educational-rights': return ShieldCheck;
      case 'navigating-policies': return FileText;
      case 'supporting-learning': return Sparkles;
      case 'massachusetts-resources': return Compass;
      default: return BookOpen;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-slate-900 to-indigo-950 text-white pt-16 pb-20 sm:pt-20 sm:pb-28 border-b border-slate-800">
        {/* Background Video with Dark Contrast Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            src={HERO_VIDEO_URL}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover object-center opacity-65 filter saturate-125 brightness-105 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/75 via-slate-950/65 to-indigo-950/80 pointer-events-none" />
        </div>

        {/* Floating Hero Audio Control Button */}
        <div className="absolute top-6 right-6 z-20">
          <button
            onClick={toggleMute}
            id="hero-video-audio-toggle"
            type="button"
            aria-label={isMuted ? "Unmute background video" : "Mute background video"}
            className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-white text-xs font-semibold backdrop-blur-md shadow-lg transition-all duration-150 hover:scale-105"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-slate-400" />
                <span className="text-slate-300">Unmute Video</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-teal-400 animate-pulse" />
                <span className="text-teal-300">Audio Playing</span>
              </>
            )}
          </button>
        </div>

        {/* Subtle background ambient geometric styling */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto space-y-7 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-900/70 border border-blue-700/60 text-blue-200 text-xs sm:text-sm font-semibold tracking-wide shadow-inner">
              <MapPin className="w-4 h-4 text-teal-400" />
              <span>Nonprofit Support • Waltham, MA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-md">
              Empowering Parents. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-teal-300 to-amber-300">
                Supporting Students.
              </span> <br className="hidden sm:block" />
              Strengthening Education.
            </h1>

            <p className="text-base sm:text-xl text-slate-100 leading-relaxed max-w-2xl mx-auto drop-shadow-sm font-medium">
              Parents Education Foundation provides parents in Massachusetts and beyond with the information, tools, and resources they need to stay informed and actively involved in their children's education.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => setActiveTab('resources')}
                id="hero-explore-resources-btn"
                className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-900/40 hover:-translate-y-0.5 transition-all duration-150 flex items-center space-x-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Explore Resources</span>
              </button>

              <button
                onClick={() => setActiveTab('about')}
                id="hero-learn-more-btn"
                className="px-7 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-100 border border-slate-700 font-semibold text-sm sm:text-base shadow-sm hover:-translate-y-0.5 transition-all duration-150 flex items-center space-x-2"
              >
                <Users className="w-5 h-5 text-teal-300" />
                <span>Learn More</span>
              </button>

              <button
                onClick={() => setActiveTab('contact')}
                id="hero-contact-btn"
                className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-950/20 hover:-translate-y-0.5 transition-all duration-150 flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>100% Free Public Guides</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Massachusetts Focus & Beyond</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Research-Backed Strategies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION & MISSION HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Organization Intro */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
              <School className="w-3.5 h-3.5 text-blue-700" />
              <span>Who We Are</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Championing Parents as Primary Advocates in Education
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Parents Education Foundation is an independent nonprofit organization based in Waltham, Massachusetts. We are dedicated to demystifying school systems and equipping families with the understanding, resources, and confidence needed to support student success.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether your child is entering kindergarten, navigating middle school transitions, preparing for high school graduation, or receiving specialized support, we provide clear, reliable guidance for every stage of the journey.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => setActiveTab('about')}
                id="intro-about-us-btn"
                className="inline-flex items-center space-x-2 text-blue-900 hover:text-blue-700 font-bold text-sm"
              >
                <span>Read more about our vision & history</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Core Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5 text-blue-800" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Knowledge & Clarity</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Clear explanations of curriculum frameworks, grade-level benchmarks, and school policies without technical jargon.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-900 flex items-center justify-center font-bold">
                <HeartHandshake className="w-5 h-5 text-teal-800" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">School Partnerships</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Constructive communication templates to build positive, proactive relationships with teachers and school administrators.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-amber-800" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Educational Rights</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In-depth guidance on IEPs, 504 plans, student privacy (FERPA), and parental participation in Massachusetts school districts.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-900 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5 text-indigo-800" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Actionable Toolkits</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Interactive checklists, conference preparation sheets, and daily study habit routines designed for busy households.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY INFORMED PARENTAL INVOLVEMENT MATTERS */}
      <section className="bg-slate-100/80 py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
              The Power of Parent Engagement
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Informed Parental Involvement Matters
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Decades of educational research confirm that parent engagement is the single greatest predictor of student achievement and lifelong success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-3.5">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center font-black text-lg border border-blue-100">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900">Academic Growth & Achievement</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Students with engaged parents earn higher grades and test scores, enroll in higher-level programs, and maintain more consistent attendance throughout the school year.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-3.5">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-900 flex items-center justify-center font-black text-lg border border-teal-100">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900">Social-Emotional Well-Being</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When parents actively listen and collaborate with schools, students demonstrate greater self-esteem, healthier peer relationships, and stronger coping skills during academic challenges.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-3.5">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center font-black text-lg border border-amber-100">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900">Effective Bridge to Educators</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Parents who understand school policies and communication channels can address challenges early, ensuring problems are resolved constructively before impacting student confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RESOURCE HUB CATEGORIES SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Structured Knowledge Hub
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Explore Our Six Core Resource Categories
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Organized educational materials, legal summaries, and practical toolkits designed for Massachusetts parents and beyond.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('resources')}
            id="view-all-resources-top-btn"
            className="px-4 py-2 rounded-xl bg-blue-50 text-blue-900 hover:bg-blue-100 font-bold text-sm transition-colors flex items-center space-x-1.5 shrink-0"
          >
            <span>View All Resources</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCE_CATEGORIES.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            return (
              <div
                key={cat.id}
                onClick={() => setActiveTab('resources')}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200 cursor-pointer group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors flex items-center justify-center shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-900 group-hover:text-blue-700">
                  <span>Browse Articles & Guides</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. INTERACTIVE PARENT CHECKLISTS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl">
          <div className="max-w-3xl space-y-3 mb-8">
            <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-300/30 inline-block">
              Interactive Parent Toolkits
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready-to-Use Interactive Checklists & Worksheets
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Step through our interactive readiness checklists to prepare for parent-teacher conferences, organize IEP meetings, or structure homework routines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {INTERACTIVE_CHECKLISTS.map((chk) => (
              <div
                key={chk.id}
                onClick={() => onSelectChecklist(chk)}
                className="bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl p-5 backdrop-blur-xs transition-all cursor-pointer group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                      {chk.category}
                    </span>
                    <ClipboardList className="w-4 h-4 text-teal-300" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                    {chk.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {chk.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-bold text-teal-300">
                  <span>Open Interactive Tool</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROMINENT CONTACT CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Connect with Parents Education Foundation
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Have questions about educational resources, school communication, or navigating your district policies? Our Waltham, Massachusetts team is here to support you.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href="tel:7818906001"
                  id="home-contact-phone-cta"
                  className="flex items-center space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Phone Support</span>
                    <span className="text-sm font-bold text-slate-900">781-890-6001</span>
                  </div>
                </a>

                <a
                  href="mailto:BCamenker@yahoo.com"
                  id="home-contact-email-cta"
                  className="flex items-center space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-teal-100 text-teal-900 flex items-center justify-center group-hover:bg-teal-800 group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Email Inquiry</span>
                    <span className="text-sm font-bold text-slate-900 truncate block">BCamenker@yahoo.com</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end text-center lg:text-right space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 w-full text-center space-y-1">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Location</span>
                <p className="text-sm font-bold text-slate-900">Parents Education Foundation</p>
                <p className="text-xs text-slate-600">Waltham, MA • Supporting Families in MA & Beyond</p>
              </div>

              <button
                onClick={() => setActiveTab('contact')}
                id="home-open-contact-form-btn"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <span>Open Contact Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
