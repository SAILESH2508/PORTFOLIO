import { Database, Code2, Terminal, Users, Cpu, Layout, MessageSquare, Briefcase, Puzzle, Brain, Globe, GraduationCap, Building2, Zap, Cloud, GitMerge } from 'lucide-react';
import CLogo from './logos/CLogo';
import CPPLogo from './logos/CPPLogo';
import PHPLogo from './logos/PHPLogo';
import PythonLogo from './logos/PythonLogo';
import ReactLogo from './logos/ReactLogo';
import DjangoLogo from './logos/DjangoLogo';
import JavaScriptLogo from './logos/JavaScriptLogo';
import JavaLogo from './logos/JavaLogo';
import HTMLLogo from './logos/HTMLLogo';
import CSSLogo from './logos/CSSLogo';
import GitLogo from './logos/GitLogo';
import TensorFlowLogo from './logos/TensorFlowLogo';
import MySQLLogo from './logos/MySQLLogo';
import TypeScriptLogo from './logos/TypeScriptLogo';
import NodeLogo from './logos/NodeLogo';
import SQLiteLogo from './logos/SQLiteLogo';
import TailwindLogo from './logos/TailwindLogo';
import BootstrapLogo from './logos/BootstrapLogo';
import FlaskLogo from './logos/FlaskLogo';
import MongoDBLogo from './logos/MongoDBLogo';
import AWSLogo from './logos/AWSLogo';
import PostmanLogo from './logos/PostmanLogo';
import FigmaLogo from './logos/FigmaLogo';
import SpringBootLogo from './logos/SpringBootLogo';
import ExpressLogo from './logos/ExpressLogo';
import PandasLogo from './logos/PandasLogo';
import NumPyLogo from './logos/NumPyLogo';
import PyTorchLogo from './logos/PyTorchLogo';
import KerasLogo from './logos/KerasLogo';
import OpenCVLogo from './logos/OpenCVLogo';
import MatplotlibLogo from './logos/MatplotlibLogo';
import SeabornLogo from './logos/SeabornLogo';
import ScikitLearnLogo from './logos/ScikitLearnLogo';
import PowerBILogo from './logos/PowerBILogo';
import TableauLogo from './logos/TableauLogo';
import VSCodeLogo from './logos/VSCodeLogo';
import RazorpayLogo from './logos/RazorpayLogo';
import ScikitImageLogo from './logos/ScikitImageLogo';
import SciPyLogo from './logos/SciPyLogo';
import NetlifyLogo from './logos/NetlifyLogo';
import RenderLogo from './logos/RenderLogo';
import GoogleCloudLogo from './logos/GoogleCloudLogo';
import GithubLogo from './logos/GithubLogo';
import KubernetesLogo from './logos/KubernetesLogo';
import CSharpLogo from './logos/CSharpLogo';
import DockerLogo from './logos/DockerLogo';
import VirtualBoxLogo from './logos/VirtualBoxLogo';
import UbuntuLogo from './logos/UbuntuLogo';
import ArduinoLogo from './logos/ArduinoLogo';
import StreamlitLogo from './logos/StreamlitLogo';
import VMwareLogo from './logos/VMwareLogo';
import JenkinsLogo from './logos/JenkinsLogo';
import GrafanaLogo from './logos/GrafanaLogo';
import PrometheusLogo from './logos/PrometheusLogo';

import TerraformLogo from './logos/TerraformLogo';

// Helper for generic skills using Lucide icons
const GenericSkillLogo = ({ Icon, color }: { Icon: any; color: string }) => (
  <div className={`w-8 h-8 ${color} rounded-lg flex items-center justify-center text-white shadow-sm shadow-black/20 hover:scale-110 transition-transform duration-300 hover:shadow-md`}>
    <Icon size={18} />
  </div>
);

// Fallback TextBadge (kept for any potentially missed dynamic keys)
const TextBadge = ({ text, color }: { text: string; color: string }) => (
  <div className={`w-8 h-8 ${color} rounded-lg flex items-center justify-center text-white font-bold text-[10px] shadow-sm shadow-black/20 hover:scale-110 transition-transform duration-300 hover:shadow-md`}>
    {text}
  </div>
);

const logos: Record<string, () => JSX.Element> = {
  // Frontend
  React: () => <ReactLogo size={32} />,
  'React.js': () => <ReactLogo size={32} />,
  TypeScript: () => <TypeScriptLogo size={32} />,
  'Tailwind CSS': () => <TailwindLogo size={32} />,
  HTML: () => <HTMLLogo size={32} />,
  CSS: () => <CSSLogo size={32} />,
  JavaScript: () => <JavaScriptLogo size={32} />,
  Bootstrap: () => <BootstrapLogo size={32} />,
  'UI/UX Design': () => <GenericSkillLogo Icon={Layout} color="bg-[#FF61F6]" />,

  // Backend
  Python: () => <PythonLogo size={32} />,
  Django: () => <DjangoLogo size={32} />,
  Flask: () => <FlaskLogo size={32} />,
  MySQL: () => <MySQLLogo size={32} />,
  SQL: () => <SQLiteLogo size={32} />,
  SQLite: () => <SQLiteLogo size={32} />,
  'Node.js': () => <NodeLogo size={32} />,
  'Spring Boot': () => <SpringBootLogo size={32} />,
  'Express.js': () => <ExpressLogo size={32} />,
  PHP: () => <PHPLogo size={32} />,
  'C++': () => <CPPLogo size={32} />,
  'C#': () => <CSharpLogo size={32} />,
  C: () => <CLogo size={32} />,
  Java: () => <JavaLogo size={32} />,
  Tkinter: () => <GenericSkillLogo Icon={Layout} color="bg-[#00599C]" />, // Using generic layout for Tkinter GUI

  // Database
  MongoDB: () => <MongoDBLogo size={32} />,
  DBMS: () => <GenericSkillLogo Icon={Database} color="bg-indigo-600" />,

  // ML/DS
  TensorFlow: () => <TensorFlowLogo size={32} />,
  Pandas: () => <PandasLogo size={32} />,
  NumPy: () => <NumPyLogo size={32} />,
  'Scikit-learn': () => <ScikitLearnLogo size={32} />,
  OpenCV: () => <OpenCVLogo size={32} />,
  Matplotlib: () => <MatplotlibLogo size={32} />,
  Seaborn: () => <SeabornLogo size={32} />,
  PyTorch: () => <PyTorchLogo size={32} />,
  Keras: () => <KerasLogo size={32} />,
  SciPy: () => <SciPyLogo size={32} />,
  'Scikit-image': () => <ScikitImageLogo size={32} />,
  'Power BI': () => <PowerBILogo size={32} />,
  Tableau: () => <TableauLogo size={32} />,
  Streamlit: () => <StreamlitLogo size={32} />,
  'Machine Learning': () => <GenericSkillLogo Icon={Brain} color="bg-purple-600" />,
  'AI/ML/DS': () => <GenericSkillLogo Icon={Brain} color="bg-purple-600" />,
  'ML Frameworks': () => <GenericSkillLogo Icon={Brain} color="bg-purple-600" />,
  'ML Libraries': () => <GenericSkillLogo Icon={Brain} color="bg-purple-600" />,
  LSTM: () => <GenericSkillLogo Icon={Brain} color="bg-blue-600" />,
  'Scikit-Learn': () => <ScikitLearnLogo size={32} />,

  // DevOps & Tools
  Git: () => <GitLogo size={32} />,
  Github: () => <GithubLogo size={32} />,
  'VS Code': () => <VSCodeLogo size={32} />,
  Postman: () => <PostmanLogo size={32} />,
  Figma: () => <FigmaLogo size={32} />,
  AWS: () => <AWSLogo size={14} />,
  Razorpay: () => <RazorpayLogo size={32} />,
  'Chart.js': () => <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">C</div>,
  Vercel: () => <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-xs">▲</div>,
  Netlify: () => <NetlifyLogo size={32} />,
  Render: () => <RenderLogo size={32} />,
  'Google Cloud': () => <GoogleCloudLogo size={32} />,
  Docker: () => <DockerLogo size={32} />,
  Kubernetes: () => <KubernetesLogo size={32} />,
  VirtualBox: () => <VirtualBoxLogo size={32} />,
  VMware: () => <VMwareLogo size={32} />,
  CLI: () => <GenericSkillLogo Icon={Terminal} color="bg-gray-800" />,
  Shell: () => <GenericSkillLogo Icon={Terminal} color="bg-gray-800" />,
  'Shell Scripting': () => <GenericSkillLogo Icon={Terminal} color="bg-gray-800" />,
  Ubuntu: () => <UbuntuLogo size={32} />,
  YAML: () => <TextBadge text="YML" color="bg-[#E94E32]" />,
  Terraform: () => <TerraformLogo size={32} />,
  Jenkins: () => <JenkinsLogo size={32} />,
  Prometheus: () => <PrometheusLogo size={32} />,
  Grafana: () => <GrafanaLogo size={32} />,
  'CI/CD': () => <GenericSkillLogo Icon={GitMerge} color="bg-red-600" />,
  Automation: () => <GenericSkillLogo Icon={Zap} color="bg-yellow-600" />,
  'Cloud Workflows': () => <GenericSkillLogo Icon={Cloud} color="bg-blue-600" />,

  // Soft Skills & Concepts
  'Problem Solving': () => <GenericSkillLogo Icon={Puzzle} color="bg-green-600" />,
  'Prompt Engineering': () => <GenericSkillLogo Icon={Terminal} color="bg-purple-600" />,
  'Software Engineering': () => <GenericSkillLogo Icon={Cpu} color="bg-gray-600" />,
  'Data Structures': () => <GenericSkillLogo Icon={Code2} color="bg-green-600" />,
  'Communication Skill': () => <GenericSkillLogo Icon={MessageSquare} color="bg-purple-500" />,
  'System Design': () => <GenericSkillLogo Icon={Layout} color="bg-blue-600" />,
  Agile: () => <GenericSkillLogo Icon={Users} color="bg-orange-500" />,
  'Robotics (Arduino UNO)': () => <ArduinoLogo size={32} />,
  SIH: () => <GenericSkillLogo Icon={Briefcase} color="bg-[#FF9933]" />, // Using Briefcase for Hackathon/Project
  'Full Stack': () => <GenericSkillLogo Icon={Layout} color="bg-indigo-600" />,
  'API Development': () => <GenericSkillLogo Icon={Terminal} color="bg-gray-700" />,
  Backend: () => <GenericSkillLogo Icon={Database} color="bg-blue-800" />,
  'REST APIs': () => <GenericSkillLogo Icon={Terminal} color="bg-gray-700" />,
  'UI Design': () => <GenericSkillLogo Icon={Layout} color="bg-pink-500" />,
  Prototyping: () => <GenericSkillLogo Icon={Layout} color="bg-purple-500" />,
  'User Research': () => <GenericSkillLogo Icon={Users} color="bg-blue-500" />,
  Vite: () => <TextBadge text="Vt" color="bg-[#646CFF]" />,
  JSON: () => <GenericSkillLogo Icon={Code2} color="bg-gray-500" />,
  'Information Technology': () => <GenericSkillLogo Icon={Terminal} color="bg-teal-600" />,
  Reasoning: () => <GenericSkillLogo Icon={Brain} color="bg-indigo-500" />,
  Aptitude: () => <GenericSkillLogo Icon={Puzzle} color="bg-pink-600" />,
  'Building Agents': () => <GenericSkillLogo Icon={Brain} color="bg-fuchsia-600" />,
  LLMs: () => <GenericSkillLogo Icon={Brain} color="bg-purple-700" />,
  
  // Companies & Issuers
  'RAMPex Technologies': () => <GenericSkillLogo Icon={Zap} color="bg-cyan-600 shadow-cyan-500/20" />,
  'Overload Ware Labs Ai (Owl Ai)': () => <GenericSkillLogo Icon={Cpu} color="bg-blue-600" />,
  'Prodigy InfoTech': () => <GenericSkillLogo Icon={Zap} color="bg-yellow-500" />,
  'Code Alpha': () => <GenericSkillLogo Icon={Code2} color="bg-indigo-600" />,
  'Arttifai Tech': () => <GenericSkillLogo Icon={Brain} color="bg-purple-600" />,
  'Forage | AWS': () => <AWSLogo size={32} />,
  'Forage | TATA': () => <GenericSkillLogo Icon={Building2} color="bg-blue-800" />,
  'Udemy': () => <div className="w-8 h-8 bg-[#A435F0] rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-md">U</div>,
  'NPTEL | IIT Madras': () => <GenericSkillLogo Icon={GraduationCap} color="bg-green-700" />,
  'Xplore IT Corp': () => <GenericSkillLogo Icon={Globe} color="bg-cyan-600" />,

  // Titles mapping (to existing icons)
  'Cloud & DevOps Engineering Trainee': () => <GenericSkillLogo Icon={Cloud} color="bg-blue-600" />,
  'Python Developer Intern': () => <PythonLogo size={32} />,
  'Full Stack Web Development Internship': () => <GenericSkillLogo Icon={Layout} color="bg-indigo-600" />,
  'Full Stack Development Intern': () => <GenericSkillLogo Icon={Layout} color="bg-indigo-600" />,
  'UI/UX Design Intern': () => <GenericSkillLogo Icon={Layout} color="bg-[#FF61F6]" />,
  'Solutions Architecture Job Simulation': () => <GenericSkillLogo Icon={Cloud} color="bg-blue-600" />,
  'GenAI Powered Data Analytics Job Simulation': () => <GenericSkillLogo Icon={Brain} color="bg-purple-600" />,
  'Python Machine Learning: From Beginner to Pro': () => <PythonLogo size={32} />,
  'Python for Data Science': () => <PythonLogo size={32} />,
  'ChatGPT + Bing (Copilot): Prompt Engineering Masterclass': () => <GenericSkillLogo Icon={Terminal} color="bg-purple-600" />,
  'Full Stack Development with Python': () => <GenericSkillLogo Icon={Layout} color="bg-indigo-600" />,
};

export function LanguageLogo({ name }: { name: string }) {
  const LogoComponent = logos[name];

  if (!LogoComponent) {
    // Default fallback with a nice gradient
    return (
      <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-[10px] shadow-lg">
        {name.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return <LogoComponent />;
}
