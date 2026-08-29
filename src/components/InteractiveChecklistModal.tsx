import React, { useState } from 'react';
import { InteractiveChecklist } from '../types';
import { 
  X, 
  CheckCircle2, 
  RotateCcw, 
  Printer, 
  GraduationCap, 
  Sparkles,
  ClipboardList
} from 'lucide-react';

interface InteractiveChecklistModalProps {
  checklist: InteractiveChecklist | null;
  onClose: () => void;
}

export const InteractiveChecklistModal: React.FC<InteractiveChecklistModalProps> = ({
  checklist,
  onClose,
}) => {
  if (!checklist) return null;

  const [items, setItems] = useState(checklist.items);

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  };

  const resetAll = () => {
    setItems((prev) => prev.map((item) => ({ ...item, completed: false })));
  };

  const completedCount = items.filter((i) => i.completed).length;
  const progressPercent = Math.round((completedCount / items.length) * 100);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-5 sm:p-6 flex items-start justify-between gap-4 shrink-0">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider border border-amber-300/30">
                Interactive Toolkit
              </span>
              <span className="text-xs text-blue-200">{checklist.category}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white pt-1">
              {checklist.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200">
              {checklist.description}
            </p>
          </div>

          <button
            onClick={onClose}
            id="close-checklist-modal-btn"
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar Header */}
        <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="w-full sm:w-2/3 space-y-1">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>Your Readiness Progress</span>
              <span className="text-blue-900">{completedCount} of {items.length} Completed ({progressPercent}%)</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-700 to-teal-500 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={resetAll}
              id="reset-checklist-btn"
              className="flex items-center space-x-1 text-xs text-slate-600 hover:text-red-600 px-2 py-1 rounded transition-colors"
              title="Reset checklist"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
            <button
              onClick={handlePrint}
              id="print-checklist-btn"
              className="flex items-center space-x-1 text-xs text-slate-600 hover:text-blue-900 px-2 py-1 rounded transition-colors"
              title="Print checklist"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Checklist Item List */}
        <div className="p-6 overflow-y-auto space-y-3">
          {items.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex items-start space-x-3.5 ${
                item.completed
                  ? 'bg-blue-50/70 border-blue-200 text-slate-800'
                  : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-sm text-slate-700'
              }`}
            >
              <button
                type="button"
                className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                  item.completed
                    ? 'bg-blue-900 border-blue-900 text-white'
                    : 'border-slate-300 bg-white hover:border-blue-600'
                }`}
                aria-label={`Toggle ${item.text}`}
              >
                {item.completed && <CheckCircle2 className="w-4 h-4 text-amber-300" />}
              </button>

              <div className="space-y-1">
                <span className={`text-sm sm:text-base font-bold block ${
                  item.completed ? 'text-blue-950 line-through decoration-slate-400 opacity-80' : 'text-slate-900'
                }`}>
                  {idx + 1}. {item.text}
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">
            Parents Education Foundation • Free Interactive Tools
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
