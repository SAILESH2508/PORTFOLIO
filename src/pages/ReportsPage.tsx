import { useState, useMemo, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { reports, Report } from '../data/reports';
import { FileText, Download, Search, X, BookOpen, ChevronRight, Award, Github } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';

export default function ReportsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeReport, setActiveReport] = useState<Report | null>(null);
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // Reset scroll of modal content on section or report switch
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeSectionIndex, activeReport]);

  const categories = ['All', 'AI & ML', 'Cloud & DevOps', 'Web Development', 'UI/UX'];

  // Filter reports based on search and category tab
  const filteredReports = useMemo(() => {
    return reports.filter((report) => {
      const matchesCategory = selectedCategory === 'All' || report.category === selectedCategory;
      const matchesSearch =
        report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenReport = (report: Report) => {
    setActiveReport(report);
    setActiveSectionIndex(0);
    document.body.style.overflow = 'hidden'; // Lock background scroll
  };

  // Cleanup body scroll lock on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleCloseReport = () => {
    setActiveReport(null);
    document.body.style.overflow = ''; // Restore background scroll
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Header */}
      <div className="relative py-16 px-6 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-10 left-10 animate-float text-blue-600">
            <FileText size={50} />
          </div>
          <div className="absolute top-20 right-20 animate-float text-purple-600" style={{ animationDelay: '1s' }}>
            <BookOpen size={45} />
          </div>
          <div className="absolute bottom-5 left-1/3 animate-float text-cyan-600" style={{ animationDelay: '2s' }}>
            <Award size={40} />
          </div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4 animate-bounce-in">
            <FileText size={36} className="text-blue-600 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 drop-shadow-sm">
              Case Studies
            </h1>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            Detailed technical case studies and outcomes of projects executed during my professional training and internships.
          </p>
        </div>
      </div>

      {/* Control Panel: Category Filter and Search */}
      <div className="container mx-auto max-w-6xl px-6 mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-blue-900/20 shadow-lg shadow-blue-500/5">
          {/* Categories Tab */}
          <div className="flex flex-wrap gap-1.5 justify-center md:justify-start w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs md:text-sm font-bold rounded-xl transition-all transform hover:scale-105 duration-300 ${
                  selectedCategory === category
                    ? 'btn-gradient border-transparent text-white shadow-lg'
                    : 'bg-white border border-blue-900/20 text-gray-600 hover:bg-gray-50 hover:text-gray-900 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search reports, companies, skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-blue-900/20 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="container mx-auto max-w-6xl px-6">
        {filteredReports.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReports.map((report, idx) => (
              <RevealOnScroll key={report.id} delay={idx * 0.1} animation="scale-in">
                <div className="group glass-card rounded-2xl p-6 border border-blue-900/20 hover:border-blue-900 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-3 flex flex-col h-full monitor-card relative bg-white">
                  
                  {/* Card Header: Date and Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-indigo-600 font-bold">{report.period}</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-900 border border-blue-900/20">
                      {report.category}
                    </span>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-cyan-700 transition-colors mb-2">
                      {report.title}
                    </h3>
                    <p className="text-xs font-semibold text-gray-500 mb-4 tracking-wide flex flex-col gap-1">
                      <span>{report.company}</span>
                      <span className="text-gray-600 font-medium italic text-[11px]">{report.role}</span>
                    </p>
                    <p className="text-xs text-gray-600 line-clamp-3 mb-4 leading-relaxed font-medium">
                      {report.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {report.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="text-[10px] font-bold bg-slate-50 text-indigo-900 px-2.5 py-1 rounded-full border border-blue-900/10">
                        {tag}
                      </span>
                    ))}
                    {report.tags.length > 4 && (
                      <span className="text-[10px] font-black text-purple-700 bg-purple-50 px-2 py-1 rounded-full border border-purple-900/10">
                        +{report.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  {(() => {
                    const hasRead = !!(report.sections && report.sections.length > 0);
                    const hasPdf = !!report.pdfUrl;
                    const hasGithub = !!report.githubUrl;
                    
                    const buttonCount = [hasRead, hasPdf, hasGithub].filter(Boolean).length;
                    
                    const gridColsClass = 
                      buttonCount === 3 ? 'grid-cols-3' : 
                      buttonCount === 2 ? 'grid-cols-2' : 'grid-cols-1';

                    // Primary gradient style
                    const primaryClass = "w-full py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 border-none hover:shadow-lg hover:shadow-blue-500/30 hover:bg-gradient-to-l duration-300";
                    
                    // Secondary outlined glass style
                    const secondaryClass = "w-full py-2.5 bg-white/60 hover:bg-white/95 text-blue-900 rounded-xl text-xs font-bold shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 border border-blue-900/15 duration-300";
                    
                    // Tertiary dark outlined style
                    const tertiaryClass = "w-full py-2.5 bg-gray-900/5 hover:bg-gray-900/10 text-gray-800 rounded-xl text-xs font-bold hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 border border-gray-900/10 duration-300";

                    return (
                      <div className={`grid ${gridColsClass} gap-2 mt-auto pt-4 border-t border-blue-900/10`}>
                        {hasRead && (
                          <button
                            onClick={() => handleOpenReport(report)}
                            className={primaryClass}
                          >
                            <BookOpen size={14} />
                            Read Online
                          </button>
                        )}
                        {hasPdf && report.pdfUrl && (
                          <a
                            href={report.pdfUrl}
                            download={report.pdfUrl.split('/').pop()}
                            className={hasRead ? secondaryClass : primaryClass}
                          >
                            <Download size={14} />
                            PDF Study
                          </a>
                        )}
                        {hasGithub && report.githubUrl && (
                          <a
                            href={report.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={hasRead || hasPdf ? tertiaryClass : primaryClass}
                          >
                            <Github size={14} />
                            GitHub
                          </a>
                        )}
                      </div>
                    );
                  })()}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/70 backdrop-blur-sm rounded-3xl border border-slate-200 shadow-md">
            <FileText size={48} className="mx-auto text-gray-400 mb-4 animate-bounce" />
            <h3 className="text-lg font-bold text-gray-800">No case studies found</h3>
            <p className="text-sm text-gray-500 mt-1 max-w-xs mx-auto">
              We couldn't find any case studies matching your current query. Try adjusting your filter tags or search keyword.
            </p>
          </div>
        )}
      </div>

      {/* Interactive Report Document Reader Modal */}
      {activeReport && activeReport.sections && activeReport.sections.length > 0 && createPortal(
        <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 transition-all duration-300 animate-fade-in">
          <div className="bg-white rounded-3xl w-full max-w-4xl h-[85vh] max-h-[85vh] overflow-hidden border border-slate-200 shadow-2xl flex flex-col relative animate-scale-in">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-950 to-indigo-950 text-white px-6 py-5 flex items-start justify-between relative border-b border-white/10">
              <div className="pr-8">
                <span className="text-[10px] font-black bg-cyan-600/30 text-cyan-300 border border-cyan-500/20 px-2.5 py-1 rounded-full uppercase tracking-widest mb-2 inline-block">
                  {activeReport.category} CASE STUDY
                </span>
                <h2 className="text-lg md:text-xl font-bold tracking-tight mb-1 text-white leading-tight">
                  {activeReport.title}
                </h2>
                <p className="text-xs text-white/80 font-medium">
                  {activeReport.company} • <span className="italic">{activeReport.role}</span>
                </p>
                <p className="text-[10px] text-white/60 mt-1 font-bold">{activeReport.period}</p>
              </div>
              <button
                onClick={handleCloseReport}
                className="text-white/60 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-all absolute top-5 right-5"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body (Scrollable container split into Navigation and Content) */}
            <div className="flex flex-col md:flex-row flex-grow overflow-hidden bg-slate-50 min-h-0">
              {/* Report Sidebar Table of Contents */}
              <div className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r border-slate-200 p-4 overflow-y-auto h-[20vh] md:h-full">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Case Study Sections</h4>
                <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
                  {activeReport.sections.map((section, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSectionIndex(idx)}
                      className={`px-3 py-2 text-xs font-bold rounded-xl text-left transition-all duration-200 whitespace-nowrap md:whitespace-normal flex items-center justify-between w-full ${
                        activeSectionIndex === idx
                          ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600 pl-2'
                          : 'text-gray-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>{section.title}</span>
                      <ChevronRight size={12} className={`hidden md:block text-slate-400 transition-transform ${activeSectionIndex === idx ? 'translate-x-1 text-blue-600' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Report Main Content Area */}
              <div
                ref={contentRef}
                className="flex-grow p-6 overflow-y-auto h-[45vh] md:h-full bg-white relative scroll-smooth min-h-0 flex-1"
              >
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-xl font-extrabold text-slate-900 pb-3 border-b border-slate-100 mb-6">
                    {activeReport.sections[activeSectionIndex].title}
                  </h3>
                  
                  {/* Dynamic HTML Content Injection */}
                  <div
                    className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: activeReport.sections[activeSectionIndex].content }}
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-100 px-6 py-4 flex items-center justify-between border-t border-slate-200">
              <div className="flex gap-2">
                {activeSectionIndex > 0 && (
                  <button
                    onClick={() => setActiveSectionIndex(activeSectionIndex - 1)}
                    className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-gray-700 text-xs font-bold rounded-xl transition-all"
                  >
                    Previous
                  </button>
                )}
                {activeSectionIndex < activeReport.sections.length - 1 && (
                  <button
                    onClick={() => setActiveSectionIndex(activeSectionIndex + 1)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all"
                  >
                    Next Section
                  </button>
                )}
              </div>

              <div className="flex gap-2">
                {activeReport.githubUrl && (
                  <a
                    href={activeReport.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-900 hover:bg-black text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5"
                  >
                    <Github size={13} />
                    GitHub Repo
                  </a>
                )}
                {activeReport.pdfUrl && (
                  <a
                    href={activeReport.pdfUrl}
                    download={activeReport.pdfUrl.split('/').pop()}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center gap-1.5"
                  >
                    <Download size={13} />
                    Download PDF Case Study
                  </a>
                )}
                <button
                  onClick={handleCloseReport}
                  className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-gray-700 text-xs font-bold rounded-xl transition-all"
                >
                  Close Reader
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
