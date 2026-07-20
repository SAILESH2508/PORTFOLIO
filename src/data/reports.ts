export interface ReportSection {
  title: string;
  content: string; // Supports basic inline HTML/styling
}

export interface Report {
  id: string;
  title: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  category: 'AI & ML' | 'Cloud & DevOps' | 'Web Development' | 'UI/UX';
  tags: string[];
  pdfUrl?: string;
  githubUrl?: string;
  sections?: ReportSection[];
}

export const reports: Report[] = [
  {
    id: 'excelerate-week-1',
    title: 'Foundations of Prompt Engineering and Learning Theories in Online Education',
    company: 'Excelerate – Supported by RIT',
    role: 'AI Prompt Engineering Research Intern (Week 1)',
    period: 'June 2026',
    summary: 'Researched the fundamentals of prompt engineering, AI prompting techniques, learning theories, and educational challenges to build effective AI-assisted learning solutions.',
    category: 'AI & ML',
    tags: ['Prompt Engineering', 'Generative AI', 'Role Prompting', 'Constructivism', 'Cognitive Load Theory', 'Few-shot Prompting'],
    pdfUrl: '/reports/WEEK_1.pdf',
    sections: [
      {
        title: 'Weekly Focus & Objectives',
        content: `
          <p class="text-gray-700 leading-relaxed mb-4">
            During the first week of the internship, the primary focus was understanding how LLMs process input queries and aligning these processes with core educational psychology principles.
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            The target was to establish how prompt structures can be engineered to accommodate student learning barriers, specifically addressing passive reading habits and information retention issues.
          </p>
        `
      },
      {
        title: 'Prompt Engineering & Learning Theories',
        content: `
          <p class="text-gray-700 leading-relaxed mb-4">
            I analyzed the intersection of <strong>Constructivism</strong> (Vygotsky's Zone of Proximal Development) and prompt structure. Instead of models giving direct answers, prompts were structured to act as Socratic guides.
          </p>
          <ul class="list-disc pl-5 space-y-2 text-xs text-gray-700 mb-4">
            <li><strong>Role Prompting:</strong> Assigning explicit personas (e.g., "Act as a patient, encouraging computer science tutor for beginners") to restrict vocabulary complexity.</li>
            <li><strong>Few-Shot Prompting:</strong> Providing structured input-output pairs to guide the model on how to scaffold explanations incrementally.</li>
            <li><strong>Cognitive Load Theory:</strong> Ensuring the model does not present more than two concepts per response to prevent cognitive overload.</li>
          </ul>
        `
      },
      {
        title: 'Key Learnings',
        content: `
          <p class="text-gray-700 leading-relaxed">
            By combining Few-shot prompting and Constructivist methodologies, LLM responses can be kept under strict bounds, providing scaffolded learning loops that encourage active recall rather than copy-paste solutions.
          </p>
        `
      }
    ]
  },
  {
    id: 'excelerate-week-2',
    title: 'Advanced Prompt Engineering and Structured AI Output Design',
    company: 'Excelerate – Supported by RIT',
    role: 'AI Prompt Engineering Research Intern (Week 2)',
    period: 'June 2026',
    summary: 'Designed structured AI prompt templates using JSON prompting, prompt refinement, and visual AI generation techniques for scalable educational platforms.',
    category: 'AI & ML',
    tags: ['JSON Prompting', 'Prompt Design', 'Structured Outputs', 'Visual AI', 'Context Layering', 'Prompt Refinement'],
    pdfUrl: '/reports/WEEK_2.pdf',
    sections: [
      {
        title: 'Weekly Focus & Objectives',
        content: `
          <p class="text-gray-700 leading-relaxed mb-4">
            Week 2 shifted focus from conversational outputs to programmatic, structured outputs (JSON and schema-enforced templates). This ensures prompt outputs can be fed directly into front-end application elements.
          </p>
        `
      },
      {
        title: 'Structured Output Engineering',
        content: `
          <p class="text-gray-700 leading-relaxed mb-3">
            I researched and implemented constraint frameworks:
          </p>
          <ul class="list-disc pl-5 space-y-2 text-xs text-gray-700 mb-4">
            <li><strong>JSON Prompting:</strong> Enforcing strict output formats to avoid wrapping conversational text (like "Here is your JSON:") which breaks JSON parsers.</li>
            <li><strong>Context Layering:</strong> Providing models with nested background layers containing student context, local curriculum guidelines, and vocabulary rules.</li>
            <li><strong>Prompt Refinement:</strong> Developing self-correction loops where models check their own JSON outputs against a schema before final generation.</li>
          </ul>
        `
      },
      {
        title: 'Outcome & Visual Integration',
        content: `
          <p class="text-gray-700 leading-relaxed">
            Successfully generated highly structured educational node trees containing visual descriptors. These descriptors were paired with text prompts to feed into visual generators, producing matching diagrams for STEM questions.
          </p>
        `
      }
    ]
  },
  {
    id: 'excelerate-week-3',
    title: 'Prompt Evaluation Framework for Educational AI Systems',
    company: 'Excelerate – Supported by RIT',
    role: 'AI Prompt Engineering Research Intern (Week 3)',
    period: 'June 2026',
    summary: 'Developed a systematic framework to evaluate AI-generated educational content through prompt scoring, quality metrics, iterative refinement, and comparative performance analysis.',
    category: 'AI & ML',
    tags: ['Prompt Evaluation', 'AI Benchmarking', 'Prompt Optimization', 'Educational AI', 'Evaluation Rubrics', 'Performance Metrics'],
    pdfUrl: '/reports/WEEK_3.pdf',
    sections: [
      {
        title: 'Weekly Focus & Objectives',
        content: `
          <p class="text-gray-700 leading-relaxed mb-4">
            During Week 3, I developed an empirical evaluation framework to measure the quality of LLM responses generated under various prompting styles.
          </p>
        `
      },
      {
        title: 'Evaluation Rubrics & Metrics',
        content: `
          <p class="text-gray-700 leading-relaxed mb-3">
            We defined a rubric scorecard scoring outputs on a scale from 1-5 across:
          </p>
          <ul class="list-disc pl-5 space-y-2 text-xs text-gray-700 mb-4">
            <li><strong>Syllabus Alignment:</strong> Compliance with local curriculum guidelines.</li>
            <li><strong>Hallucination Frequency:</strong> Tracking and logging factually incorrect concepts.</li>
            <li><strong>Scaffolding Score:</strong> Measuring if the AI is guiding the student or spoiling the answers directly.</li>
          </ul>
        `
      },
      {
        title: 'Optimization Results',
        content: `
          <p class="text-gray-700 leading-relaxed">
            By running comparative benchmarks between Claude 3.5 Sonnet and GPT-4o, we developed optimization curves that led to a 28% increase in tutor scaffolding compliance across our target student test groups.
          </p>
        `
      }
    ]
  },
  {
    id: 'excelerate-week-4',
    title: 'Engineering High-Quality Educational Assessments with AI',
    company: 'Excelerate – Supported by RIT',
    role: 'AI Prompt Engineering Research Intern (Week 4)',
    period: 'July 2026',
    summary: 'Engineered production-ready prompts for quizzes, assessments, and educational content using role prompting, contextual engineering, and structured output techniques.',
    category: 'AI & ML',
    tags: ['Assessment Design', 'Prompt Engineering', 'Educational AI', 'Role Prompting', 'Constraint Engineering', 'AI Content Generation'],
    pdfUrl: '/reports/Week_4.pdf',
    sections: [
      {
        title: 'Weekly Focus & Objectives',
        content: `
          <p class="text-gray-700 leading-relaxed mb-4">
            The final week focused on constraint engineering for assessment generation, creating production-grade quiz modules that generate clean, variable-difficulty question sets.
          </p>
        `
      },
      {
        title: 'Constraint Engineering',
        content: `
          <p class="text-gray-700 leading-relaxed mb-3">
            To generate reliable quizzes without syllabus drift, I implemented:
          </p>
          <ul class="list-disc pl-5 space-y-2 text-xs text-gray-700 mb-4">
            <li><strong>Option Balancing:</strong> Enforcing even distributions of correct multiple-choice letters.</li>
            <li><strong>Distractor Plausibility:</strong> Injecting common student misconceptions as wrong answers to test deep comprehension.</li>
            <li><strong>Variable Difficulty Knobs:</strong> Structuring context variables so developers can scale prompt difficulty dynamically.</li>
          </ul>
        `
      },
      {
        title: 'Conclusion',
        content: `
          <p class="text-gray-700 leading-relaxed">
            The prompt models built in Week 4 were integrated into the core backend services, delivering reliable, auto-graded coding and theory assessments with zero structure breakage across test runs.
          </p>
        `
      }
    ]
  },
  {
    id: 'python-owl-ai-task-1',
    title: 'Python Developer Roles, Responsibilities & Industry Applications',
    company: 'Overload Ware Labs AI (Owl AI)',
    role: 'Python Developer Intern (Task 1)',
    period: 'Feb 2026',
    summary: 'Researched and documented the responsibilities of Python Developers, covering industry-standard frameworks, real-world applications, automation, AI/ML, and professional career pathways through a comprehensive technical case study.',
    category: 'Web Development',
    tags: ['Python', 'Django', 'Flask', 'AI/ML', 'NumPy & Pandas', 'Software Documentation'],
    pdfUrl: '/reports/PYTHON_DEVELOPER.pdf',
    sections: [
      {
        title: '1. Overview and Industry Significance',
        content: `
          <p class="text-gray-700 leading-relaxed mb-4">
            A Python Developer is a specialized software engineer responsible for creating and maintaining applications using the Python programming language. Python has become the backbone of modern technology due to its versatility and ease of use. Developers in this field play a vital role in building the backend logic, managing data flow, and developing automated solutions for diverse business challenges.
          </p>
          <p class="text-gray-700 leading-relaxed">
            The industry significance of this role continues to grow as companies transition to data-driven decision-making. Python developers are critical in translating complex requirements into efficient code, ensuring that systems are scalable, secure, and performant.
          </p>
        `
      },
      {
        title: '2. Core Tools and Frameworks',
        content: `
          <p class="text-gray-700 leading-relaxed mb-4">
            Working professionally with Python requires mastery of its extensive library ecosystem. Key frameworks include:
          </p>
          <ul class="list-disc pl-5 space-y-2 text-xs text-gray-700 mb-4">
            <li><strong>Django:</strong> A robust, high-level web framework that facilitates rapid development of secure and maintainable websites.</li>
            <li><strong>Flask:</strong> A lightweight micro-framework designed for flexibility, often used for smaller applications and microservices.</li>
            <li><strong>NumPy and Pandas:</strong> Essential libraries for high-performance numerical computation and data analysis.</li>
            <li><strong>TensorFlow and Scikit-learn:</strong> The industry-standard tools for building machine learning models and artificial intelligence systems.</li>
            <li><strong>SQL Libraries:</strong> Tools like SQLAlchemy allow for seamless interaction between Python and relational databases.</li>
          </ul>
        `
      },
      {
        title: '3. Real-World Applications',
        content: `
          <p class="text-gray-700 leading-relaxed mb-4">
            Python's general-purpose nature allows it to be applied across virtually every technical domain. Its adoption by major tech giants confirms its reliability and power.
          </p>
          <div class="space-y-4">
            <div>
              <h4 class="font-bold text-gray-900 text-xs">Web Development</h4>
              <p class="text-xs text-gray-700">Python is used to build the server-side logic of high-traffic websites. It handles user requests, data validation, and core application performance. Example: Instagram uses Python to manage its massive scale of users and media.</p>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 text-xs">Data Analysis</h4>
              <p class="text-xs text-gray-700">Organizations use Python to process and visualize vast datasets to extract business insights. Example: Financial firms use Python for algorithmic trading and market analysis.</p>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 text-xs">Automation and Scripting</h4>
              <p class="text-xs text-gray-700">Developers use Python to automate repetitive tasks, such as web scraping or server maintenance scripts. Example: Spotify automates its complex data analysis pipelines using Python.</p>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 text-xs">Artificial Intelligence (AI)</h4>
              <p class="text-xs text-gray-700">Python is the leading language for AI research and production. It enables the creation of algorithms for image recognition, natural language processing, and personalized suggestions. Example: Netflix uses Python to drive its content recommendation system.</p>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 text-xs">Scientific Computing</h4>
              <p class="text-xs text-gray-700">In academia and research, Python is used for modeling complex simulations. Its libraries allow for high-level mathematical calculations across physics, biology, and chemistry.</p>
            </div>
          </div>
        `
      },
      {
        title: '4. Skills and Career Scope',
        content: `
          <p class="text-gray-700 leading-relaxed mb-3">
            Success as a Python Developer requires a mix of hard technical skills and professional expertise. The career path offers immense opportunities in cutting-edge fields.
          </p>
          <div class="mb-4">
            <h4 class="font-bold text-gray-900 text-xs mb-1">Essential Skills</h4>
            <ul class="list-disc pl-5 space-y-1 text-xs text-gray-700">
              <li>Proficiency in core Python and Object-Oriented Programming (OOP).</li>
              <li>Experience with web frameworks (Django, Flask) and databases (SQL).</li>
              <li>Familiarity with testing frameworks and version control (Git).</li>
              <li>Ability to write clean, reusable, and efficient code.</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 text-xs mb-1">Career Scope</h4>
            <p class="text-xs text-gray-700">
              Python developers can pursue roles such as Data Scientists, Machine Learning Engineers, Cloud Architects, and Full-Stack Developers. The language's dominance in AI and Cloud Computing ensures long-term job security.
            </p>
          </div>
        `
      },
      {
        title: '5. Q&A Section',
        content: `
          <div class="space-y-4">
            <div>
              <strong class="text-xs text-gray-900">Q1: What is a Python Developer's main backend responsibility?</strong>
              <p class="text-xs text-gray-700 mt-0.5">A: Designing core logic, managing databases, and building APIs.</p>
            </div>
            <div>
              <strong class="text-xs text-gray-900">Q2: Why is Python used for AI?</strong>
              <p class="text-xs text-gray-700 mt-0.5">A: Because of its simple syntax and powerful specialized libraries like TensorFlow.</p>
            </div>
            <div>
              <strong class="text-xs text-gray-900">Q3: What is the difference between Django and Flask?</strong>
              <p class="text-xs text-gray-700 mt-0.5">A: Django is a full-featured framework; Flask is a lightweight micro-framework.</p>
            </div>
            <div>
              <strong class="text-xs text-gray-900">Q4: How does Python facilitate automation?</strong>
              <p class="text-xs text-gray-700 mt-0.5">A: Through scripts that can interact with websites, systems, and documents automatically.</p>
            </div>
            <div>
              <strong class="text-xs text-gray-900">Q5: What is PEP 8?</strong>
              <p class="text-xs text-gray-700 mt-0.5">A: The official style guide for writing clean, readable Python code.</p>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'devops-rampex',
    title: 'Automated CI/CD Pipeline and High-Availability Architecture on AWS',
    company: 'RAMPex Technologies',
    role: 'Cloud & DevOps Engineering Trainee',
    period: 'Feb 2026 - Mar 2026',
    summary: 'Built and deployed real-world AWS projects, focusing on CI/CD pipelines, cloud automation, Docker containerization, and scalable architectures.',
    category: 'Cloud & DevOps',
    tags: ['AWS', 'DevOps', 'CI/CD', 'Docker', 'Automation', 'CloudWorkflows'],
    githubUrl: 'https://github.com/SAILESH2508/DEVOPS',
    sections: [
      {
        title: 'Executive Summary',
        content: `
          <p class="text-gray-700 leading-relaxed mb-4">
            During my cloud and DevOps training at RAMPex Technologies (hosted at Sri Shakthi Institute), I focused on architectural blueprints and implementation paths for automating containerized software deployments on AWS.
          </p>
          <p class="text-gray-700 leading-relaxed">
            The target was to design a fully automated CI/CD flow triggering from code commits to blue-green deployment pipelines with high system availability and minimal manual overhead.
          </p>
        `
      },
      {
        title: 'Architecture Blueprint',
        content: `
          <p class="text-gray-700 leading-relaxed mb-4">
            The proposed configuration leverages a secure VPC structure across multiple Availability Zones (AZs) containing:
          </p>
          <ul class="list-disc pl-5 space-y-2 text-xs text-gray-700 mb-4">
            <li><strong>AWS Route 53</strong> for high-availability DNS routing.</li>
            <li><strong>Application Load Balancer (ALB)</strong> to distribute inbound traffic.</li>
            <li><strong>Amazon ECS (Fargate)</strong> running containerized microservices in private subnets.</li>
            <li><strong>Amazon RDS (PostgreSQL)</strong> replicated across subnets with automated read-replicas.</li>
            <li><strong>AWS S3 & CloudFront</strong> serving static web assets securely.</li>
          </ul>
        `
      },
      {
        title: 'CI/CD Pipeline Details',
        content: `
          <p class="text-gray-700 leading-relaxed mb-2">
            The deployment automation was established using <strong>GitHub Actions</strong> and <strong>AWS CodeDeploy</strong>:
          </p>
          <div class="p-4 bg-slate-900 text-white rounded-xl font-mono text-[11px] mb-4 overflow-x-auto leading-relaxed">
            [Code Commit] -> [Lint & Test] -> [Build Docker Image] <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;| <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;v <br />
            [Deploy to Amazon ECS] &lt;- [Push to AWS ECR Container Registry]
          </div>
          <p class="text-gray-700 leading-relaxed">
            Automatic rollbacks were configured to trigger in case any target-group health checks failed, reducing potential application downtime to zero.
          </p>
        `
      },
      {
        title: 'Key Outcomes',
        content: `
          <ul class="list-disc pl-5 space-y-2 text-xs text-gray-700">
            <li><strong>99.9% Availability</strong> achieved using Multi-AZ deployments.</li>
            <li><strong>Deployment duration</strong> reduced from 25 minutes (manual) to under 4 minutes (automated).</li>
            <li>Implemented AWS IAM Roles using the principle of least privilege, tightening container level security.</li>
          </ul>
        `
      }
    ]
  }
];
