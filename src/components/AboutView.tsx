import React from 'react';
import { PageTab } from '../types';
import { 
  GraduationCap, 
  Target, 
  Eye, 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  BookOpen, 
  Users, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  School
} from 'lucide-react';

interface AboutViewProps {
  setActiveTab: (tab: PageTab) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActiveTab }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-blue-950 via-slate-900 to-indigo-950 text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-700 text-blue-200 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-teal-400" />
            <span>Waltham, Massachusetts</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Parents Education Foundation
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Dedicated to providing parents in Massachusetts and beyond with the knowledge, resources, tools, and support they need to stay informed and actively involved in their children's education.
          </p>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
              <School className="w-3.5 h-3.5 text-blue-800" />
              <span>Who We Are</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              An Educational Resource Grounded in Family Advocacy
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              Parents Education Foundation is an independent nonprofit organization established in Waltham, Massachusetts. We exist to ensure that every parent has access to clear, practical, and dependable information regarding their child’s schooling, curriculum, and educational rights.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Education is most successful when families and educators work as collaborative partners. However, school policies, specialized terminology, and evolving curriculum frameworks can often feel complex. We bridge that gap by translating educational standards and processes into actionable guidance that parents can readily use.
            </p>
          </div>

          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-3xl p-7 sm:p-9 shadow-xs space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-blue-800" />
              <span>Organizational Snapshot</span>
            </h3>
            
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Mailing Address:</span>
                  <span className="text-slate-700 font-medium block">Parents Education Foundation</span>
                  <span className="text-slate-600 block">PO Box 1612</span>
                  <span className="text-slate-600 block">Waltham, MA 02454</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Phone Inquiries:</span>
                  <a href="tel:7818906001" className="text-blue-900 font-semibold hover:underline">781-890-6001</a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Email:</span>
                  <a href="mailto:BCamenker@yahoo.com" className="text-blue-900 font-semibold hover:underline">BCamenker@yahoo.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Heart className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Service Scope:</span>
                  <span className="text-slate-600">Parents across Massachusetts public and private school districts, and families nationwide seeking educational resources.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Mission */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                <Target className="w-6 h-6 text-blue-800" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Our Mission
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                To provide parents in Massachusetts and beyond with the knowledge, resources, tools, and support they need to stay informed, build constructive relationships with schools, and actively participate in all aspects of their children's education.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 pt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Demystifying curriculum frameworks and standardized testing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Promoting proactive and respectful parent-educator communication</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Clarifying state and federal educational rights (IEP, 504, FERPA)</span>
                </li>
              </ul>
            </div>

            {/* Our Vision */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-900 flex items-center justify-center font-bold">
                <Eye className="w-6 h-6 text-teal-800" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Our Vision
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                We envision a future where every parent—regardless of background or technical experience—feels confident, welcomed, and fully prepared to guide their child's academic journey and foster an inspiring learning environment at home.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 pt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Equitable access to educational toolkits and guidance for all families</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Strengthened school communities through informed family involvement</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Lifelong academic confidence and resilience for every student</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Parent Engagement Matters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
            The Research Foundation
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Parent Engagement Matters
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            When parents take an active, informed interest in their children's schooling, the benefits ripple across academic, behavioral, and personal domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <h4 className="font-bold text-slate-900 text-base">Higher Academic Performance</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Decades of studies show that students whose parents monitor assignments, attend conferences, and support reading at home achieve higher literacy rates and mathematical competency.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <h4 className="font-bold text-slate-900 text-base">Improved Attendance & Graduation</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Regular engagement reinforces the importance of schooling, decreasing chronic absenteeism and establishing clear pathways toward high school graduation and post-secondary goals.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <h4 className="font-bold text-slate-900 text-base">Enhanced Social & Emotional Growth</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Students experience greater self-advocacy, reduced anxiety, and stronger motivation when they know their parents and teachers are aligned in supporting their individual growth.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Our Connection to the Massachusetts Education Community */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-300/30 inline-block">
                Local Massachusetts Roots
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Our Connection to the Massachusetts Education Community
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Based in Waltham, Massachusetts, Parents Education Foundation is intimately attuned to the Commonwealth's public education framework. We closely monitor updates from the Massachusetts Department of Elementary and Secondary Education (DESE), local school committee policies, and district initiatives.
              </p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Whether families are located in Greater Boston, Central Massachusetts, the North or South Shores, Western MA, or across state lines, we strive to make Commonwealth education standards clear and approachable.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-xs space-y-3 text-xs sm:text-sm text-slate-200">
              <span className="font-bold text-amber-300 block uppercase tracking-wider text-xs">
                Massachusetts Focus Areas:
              </span>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>DESE Curriculum Frameworks & Benchmarks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>Massachusetts Chapter 766 Special Education Protections</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>School Committee Open Meetings & Public Input</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>MassCore High School Recommended Programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Guiding Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Guiding Commitments
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Every resource, checklist, and conversation is anchored in our core principles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
            <h4 className="font-bold text-blue-900 text-base">1. Accessibility</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              All guides and tools are freely available to parents and caregivers without barriers or fees.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
            <h4 className="font-bold text-blue-900 text-base">2. Evidence-Based</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our recommendations are rooted in proven educational research and pedagogical best practices.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
            <h4 className="font-bold text-blue-900 text-base">3. Non-Partisan</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We focus squarely on supporting students and empowering families through objective educational information.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
            <h4 className="font-bold text-blue-900 text-base">4. Collaboration</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We champion constructive, respectful bridges between families, teachers, and school districts.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-xl font-bold text-slate-900">
              Have questions for the Parents Education Foundation?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Reach our Waltham, MA office at 781-890-6001 or email BCamenker@yahoo.com.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('contact')}
            className="px-6 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm shadow-sm transition-colors shrink-0 flex items-center space-x-2"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
