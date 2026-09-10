export interface DomainResume {
  id: string;
  role: string;
  shortTitle: string;
  badge: string;
  pdfPath: string;
  fileName: string;
  iconName: 'Code2' | 'Brain' | 'Sparkles';
}

export const domainResumes: DomainResume[] = [
  {
    id: 'python-fullstack',
    role: 'Python Full Stack Developer',
    shortTitle: 'Python Full Stack Developer',
    badge: 'Full Stack & Web',
    pdfPath: '/resumes/Sailesh_S_Python_Full_Stack_Developer_Resume.pdf',
    fileName: '714023104109_SAILESH_S(FULLSTACK).pdf',
    iconName: 'Code2'
  },
  {
    id: 'ai-engineer',
    role: 'AI Engineer',
    shortTitle: 'AI Engineer (Generative AI)',
    badge: 'Generative AI & LLMs',
    pdfPath: '/resumes/Sailesh_S_AI_Engineer_Resume.pdf',
    fileName: '714023104109_SAILESH_S(AI).pdf',
    iconName: 'Sparkles'
  },
  {
    id: 'ml-engineer',
    role: 'Machine Learning Engineer',
    shortTitle: 'Machine Learning Engineer',
    badge: 'Machine Learning & CV',
    pdfPath: '/resumes/Sailesh_S_Machine_Learning_Engineer_Resume.pdf',
    fileName: '714023104109_SAILESH_S(ML).pdf',
    iconName: 'Brain'
  }
];
