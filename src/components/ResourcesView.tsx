import React, { useState, useMemo } from 'react';
import { ResourceArticle, ResourceCategory, GradeLevel, InteractiveChecklist, PageTab } from '../types';
import { RESOURCE_CATEGORIES, RESOURCE_ARTICLES, INTERACTIVE_CHECKLISTS } from '../data/resourcesData';
import { 
  BookOpen, 
  MessageSquare, 
  ShieldCheck, 
  FileText, 
  Sparkles, 
  Compass, 
  Search, 
  Filter, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  SlidersHorizontal,
  GraduationCap,
  ClipboardList,
  Mail,
  Printer
} from 'lucide-react';

interface ResourcesViewProps {
  onSelectArticle: (article: ResourceArticle) => void;
  onSelectChecklist: (checklist: InteractiveChecklist) => void;
  setActiveTab: (tab: PageTab) => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({
  onSelectArticle,
  onSelectChecklist,
  setActiveTab,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | 'all'>('all');
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>('all');
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredArticles = useMemo(() => {
    return RESOURCE_ARTICLES.filter((article) => {
      // Category filter
      if (selectedCategory !== 'all' && article.category !== selectedCategory) {
        return false;
      }
      // Grade level filter
      if (selectedGrade !== 'all' && article.gradeLevel !== 'all' && article.gradeLevel !== selectedGrade) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchTitle = article.title.toLowerCase().includes(query);
        const matchSummary = article.summary.toLowerCase().includes(query);
        const matchCategory = article.categoryName.toLowerCase().includes(query);
        const matchTakeaways = article.content.keyTakeaways.some((t) => t.toLowerCase().includes(query));
        return matchTitle || matchSummary || matchCategory || matchTakeaways;
      }
      return true;
    });
  }, [selectedCategory, selectedGrade, searchQuery]);

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-blue-950 via-slate-900 to-indigo-950 text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-700 text-blue-200 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-teal-400" />
            <span>Comprehensive Parent Knowledge Hub</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Parent Educational Resources & Guides
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Free, reliable, research-backed guides and interactive toolkits to help you navigate school policies, curriculum benchmarks, and educational advocacy.
          </p>
        </div>
      </section>

      {/* 2. Interactive Search & Filters Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources by keyword (e.g. IEP, conference, homework, DESE, FERPA)..."
              id="resources-search-input"
              className="w-full bg-slate-50 border border-slate-300 rounded-2xl py-3.5 pl-12 pr-4 text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:bg-white transition-all shadow-inner"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-4" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-3.5 text-xs text-slate-400 hover:text-slate-700 bg-slate-200 px-2 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Filter by Category:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                id="filter-category-all"
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-1.5 ${
                  selectedCategory === 'all'
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>All Categories ({RESOURCE_ARTICLES.length})</span>
              </button>

              {RESOURCE_CATEGORIES.map((cat) => {
                const count = RESOURCE_ARTICLES.filter((a) => a.category === cat.id).length;
                const isSelected = selectedCategory === cat.id;
                const Icon = getCategoryIcon(cat.id);
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    id={`filter-category-${cat.id}`}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-1.5 ${
                      isSelected
                        ? 'bg-blue-900 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-blue-800 text-white' : 'bg-slate-200 text-slate-600'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grade Level Selector */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-bold text-slate-500 uppercase tracking-wider flex items-center space-x-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Grade Span:</span>
              </span>
              {(['all', 'elementary', 'middle', 'high'] as GradeLevel[]).map((grade) => (
                <button
                  key={grade}
                  onClick={() => setSelectedGrade(grade)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                    selectedGrade === grade
                      ? 'bg-teal-700 text-white font-bold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {grade === 'all' && 'All Grades (K-12)'}
                  {grade === 'elementary' && 'Elementary (K-5)'}
                  {grade === 'middle' && 'Middle School (6-8)'}
                  {grade === 'high' && 'High School (9-12)'}
                </button>
              ))}
            </div>

            <span className="text-xs text-slate-500">
              Showing <strong className="text-slate-900">{filteredArticles.length}</strong> guides
            </span>
          </div>
        </div>
      </section>

      {/* 3. Interactive Checklists Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                Interactive Checklists
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1.5">
                Actionable Readiness Tools for Parents
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 mt-0.5">
                Click any tool below to launch the step-by-step interactive checklist.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {INTERACTIVE_CHECKLISTS.map((chk) => (
              <div
                key={chk.id}
                onClick={() => onSelectChecklist(chk)}
                className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-4.5 cursor-pointer transition-all duration-150 flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider">
                      {chk.category}
                    </span>
                    <ClipboardList className="w-4 h-4 text-amber-300" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                    {chk.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {chk.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-bold text-teal-300">
                  <span>Open Checklist ({chk.items.length} steps)</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Filtered Article Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">No resources found matching your search.</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Try adjusting your search terms or clearing your filters to view all available parent education guides.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedGrade('all');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 bg-blue-900 text-white rounded-xl text-xs font-bold"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => {
              const Icon = getCategoryIcon(article.category);
              return (
                <div
                  key={article.id}
                  onClick={() => onSelectArticle(article)}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-100 line-clamp-1">
                        {article.categoryName}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center space-x-1 shrink-0">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>

                    {article.content.keyTakeaways && article.content.keyTakeaways.length > 0 && (
                      <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 space-y-1 border border-slate-100">
                        <span className="font-bold text-slate-900 block text-[11px] uppercase tracking-wider text-teal-800">
                          Highlights:
                        </span>
                        <p className="line-clamp-2 text-slate-600">
                          • {article.content.keyTakeaways[0]}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-900 group-hover:text-blue-700">
                    <span>Read Full Guide & Checklists</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 5. Suggest a Topic Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Looking for guidance on a specific educational topic?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Parents Education Foundation continually expands our Massachusetts resource repository. Let us know what tools your family needs!
            </p>
          </div>
          <button
            onClick={() => setActiveTab('contact')}
            id="suggest-topic-btn"
            className="px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold shadow-xs transition-colors shrink-0 flex items-center space-x-2"
          >
            <Mail className="w-4 h-4" />
            <span>Suggest a Topic / Contact</span>
          </button>
        </div>
      </section>
    </div>
  );
};
