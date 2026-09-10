import { useState, useRef, useEffect } from 'react';
import { 
  Download, ChevronDown, Code2, Brain, Sparkles, Check
} from 'lucide-react';
import { domainResumes } from '../data/resumes';

export default function ResumeDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [openUpward, setOpenUpward] = useState(false);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => {
    if (!isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      // Dropdown menu is roughly 220px tall; open upward if not enough space below
      setOpenUpward(spaceBelow < 240);
    }
    setIsOpen((prev) => !prev);
  };

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={18} className="text-blue-600" />;
      case 'Brain':
        return <Brain size={18} className="text-indigo-600" />;
      case 'Sparkles':
        return <Sparkles size={18} className="text-purple-600" />;
      default:
        return <Code2 size={18} className="text-blue-600" />;
    }
  };

  const handleDownload = (id: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      setIsOpen(false);
    }, 1500);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Split Button Container */}
      <div className="flex items-stretch rounded-xl shadow-lg shadow-cyan-500/20 group" ref={buttonRef}>
        {/* Main Button: Direct Download of Primary Full Stack Resume */}
        <a
          href="/resumes/714023104109_SAILESH_S(FULLSTACK).pdf"
          download="714023104109_SAILESH_S(FULLSTACK).pdf"
          className="px-6 py-4 btn-gradient-cyan font-bold rounded-l-xl flex items-center gap-2 transition-all hover:brightness-105"
        >
          <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
          <span>Download Resume</span>
        </a>

        {/* Dropdown Toggle: Select Domain Resume */}
        <button
          type="button"
          onClick={handleToggle}
          aria-expanded={isOpen}
          className="px-3.5 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-r-xl border-l border-white/20 hover:brightness-110 flex items-center justify-center transition-all cursor-pointer"
          title="Select domain-specific resume"
        >
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Dropdown Menu — flips up or down based on viewport space */}
      {isOpen && (
        <div
          className={`absolute left-0 lg:left-auto lg:right-0 w-80 sm:w-96 rounded-2xl bg-white shadow-2xl border border-blue-900/20 z-50 animate-fade-in divide-y divide-gray-100 overflow-hidden
            ${openUpward ? 'bottom-full mb-2.5' : 'top-full mt-2.5'}`}
        >
          <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50/50 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
              Select Domain Resume
            </span>
            <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full">
              Exact PDFs
            </span>
          </div>

          {/* List of the 3 Domain Resumes */}
          <div className="py-1.5 px-2 space-y-1 max-h-72 overflow-y-auto">
            {domainResumes.map((resume) => (
              <a
                key={resume.id}
                href={resume.pdfPath}
                download={resume.fileName}
                onClick={() => handleDownload(resume.id)}
                className="group/item flex items-center justify-between p-3 rounded-xl hover:bg-blue-50/70 transition-all border border-transparent hover:border-blue-200 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gray-100 group-hover/item:bg-white group-hover/item:shadow-sm border border-transparent group-hover/item:border-gray-200 transition-all flex-shrink-0">
                    {getDomainIcon(resume.iconName)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900 group-hover/item:text-blue-700 transition-colors">
                      {resume.shortTitle}
                    </div>
                    <div className="text-[11px] text-gray-500 font-medium">
                      {resume.badge}
                    </div>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-blue-50 text-blue-700 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all flex-shrink-0 shadow-sm ml-2">
                  {downloadingId === resume.id ? (
                    <Check size={16} className="text-emerald-600 animate-pulse" />
                  ) : (
                    <Download size={16} />
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
