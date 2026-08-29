import React from 'react';
import { ResourceArticle } from '../types';
import { 
  X, 
  Clock, 
  CheckCircle2, 
  Lightbulb, 
  Printer, 
  Share2, 
  Bookmark, 
  GraduationCap, 
  ChevronRight,
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface ResourceDetailModalProps {
  article: ResourceArticle | null;
  onClose: () => void;
  onContactClick?: () => void;
}

export const ResourceDetailModal: React.FC<ResourceDetailModalProps> = ({
  article,
  onClose,
  onContactClick,
}) => {
  if (!article) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Resource link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-5 sm:p-6 flex items-start justify-between gap-4 shrink-0">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider border border-amber-300/30">
                {article.categoryName}
              </span>
              <span className="flex items-center space-x-1 text-xs text-blue-200">
                <Clock className="w-3 h-3" />
                <span>{article.readTime}</span>
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white pt-1">
              {article.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            id="close-article-modal-btn"
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="bg-slate-50 px-6 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600 shrink-0">
          <span className="font-medium text-slate-700">Parents Education Foundation • Resource Guide</span>
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              id="print-article-btn"
              className="flex items-center space-x-1 text-slate-600 hover:text-blue-900 transition-colors"
              title="Print this guide"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Guide</span>
            </button>
            <button
              onClick={handleShare}
              id="share-article-btn"
              className="flex items-center space-x-1 text-slate-600 hover:text-blue-900 transition-colors"
              title="Share this guide"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
          {/* Summary Quote */}
          <div className="p-4 rounded-xl bg-blue-50/80 border-l-4 border-blue-800 text-slate-800 font-medium italic">
            "{article.content.intro}"
          </div>

          {/* Key Takeaways */}
          {article.content.keyTakeaways && article.content.keyTakeaways.length > 0 && (
            <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-200/70">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center space-x-1.5 mb-3">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Key Takeaways for Parents</span>
              </h4>
              <ul className="space-y-2 text-sm text-slate-800">
                {article.content.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Body Sections */}
          <div className="space-y-6">
            {article.content.sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  {section.heading}
                </h3>
                <div className="space-y-2 text-slate-600 leading-relaxed">
                  {section.body.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {section.actionTips && section.actionTips.length > 0 && (
                  <div className="mt-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1.5">
                    <span className="font-bold text-blue-900 block">Practical Action Tips:</span>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                      {section.actionTips.map((tip, tIdx) => (
                        <li key={tIdx}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Practical Checklist Box */}
          {article.content.practicalChecklist && article.content.practicalChecklist.length > 0 && (
            <div className="bg-blue-900 text-white rounded-xl p-5 sm:p-6 shadow-md space-y-3">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-amber-300" />
                <h4 className="font-bold text-base text-white">Parent Action Checklist</h4>
              </div>
              <p className="text-xs text-blue-200">Keep these steps in mind as you collaborate with your child's educators:</p>
              <div className="space-y-2 pt-1">
                {article.content.practicalChecklist.map((item, cIdx) => (
                  <div key={cIdx} className="flex items-center space-x-2 text-xs sm:text-sm bg-blue-800/60 p-2.5 rounded-lg border border-blue-700/50">
                    <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Need Direct Assistance Card */}
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h5 className="font-bold text-slate-900 text-sm">Have specific questions about your child's school?</h5>
              <p className="text-xs text-slate-600 mt-0.5">Parents Education Foundation is based in Waltham, MA and ready to help.</p>
            </div>
            {onContactClick && (
              <button
                onClick={() => {
                  onClose();
                  onContactClick();
                }}
                id="article-contact-advisor-btn"
                className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold shrink-0 transition-colors flex items-center space-x-1"
              >
                <span>Contact Our Office</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">
            Parents Education Foundation • 781-890-6001
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
