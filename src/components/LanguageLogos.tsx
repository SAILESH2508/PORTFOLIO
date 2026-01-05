import { Database, Code2, Terminal, Users, Cpu, Layout, MessageSquare, Briefcase, Puzzle } from 'lucide-react';
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
  'UI/UX': () => <GenericSkillLogo Icon={Layout} color="bg-[#FF61F6]" />,

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
  Streamlit: () => <GenericSkillLogo Icon={Layout} color="bg-[#FF4B4B]" />,

  // Tools & DevOps & Engineering
  Git: () => <GitLogo size={32} />,
  Github: () => <TextBadge text="Gh" color="bg-[#181717]" />,
  'VS Code': () => <VSCodeLogo size={32} />,
  Postman: () => <PostmanLogo size={32} />,
  Figma: () => <FigmaLogo size={32} />,
  AWS: () => <AWSLogo size={32} />,
  Razorpay: () => <RazorpayLogo size={32} />,
  'Chart.js': () => <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">C</div>,
  Vercel: () => <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-xs">▲</div>,
  Netlify: () => <NetlifyLogo size={32} />,
  Render: () => <RenderLogo size={32} />,
  'Google Cloud': () => <GoogleCloudLogo size={32} />,

  // Soft Skills & Concepts
  'Problem Solving': () => <GenericSkillLogo Icon={Puzzle} color="bg-green-600" />,
  'Prompt Engineering': () => <GenericSkillLogo Icon={Terminal} color="bg-purple-600" />,
  'Software Engineering': () => <GenericSkillLogo Icon={Cpu} color="bg-gray-600" />,
  'Data Structures': () => <GenericSkillLogo Icon={Code2} color="bg-green-600" />,
  'Communication Skill': () => <GenericSkillLogo Icon={MessageSquare} color="bg-purple-500" />,
  'System Design': () => <GenericSkillLogo Icon={Layout} color="bg-blue-600" />,
  Agile: () => <GenericSkillLogo Icon={Users} color="bg-orange-500" />,
  SIH: () => <GenericSkillLogo Icon={Briefcase} color="bg-[#FF9933]" />, // Using Briefcase for Hackathon/Project
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
