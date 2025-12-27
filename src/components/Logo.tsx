import { Code2, Sparkles } from 'lucide-react';

export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: { container: 'w-8 h-8', icon: 16 },
    md: { container: 'w-12 h-12', icon: 24 },
    lg: { container: 'w-16 h-16', icon: 32 }
  };

  return (
    <div className="relative group">
      <div className={`${sizes[size].container} bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:shadow-blue-500/80 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 animate-glow`}>
        <Code2 className="text-white" size={sizes[size].icon} />
      </div>
      <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <Sparkles className="text-yellow-500 animate-pulse" size={12} />
      </div>
    </div>
  );
}
