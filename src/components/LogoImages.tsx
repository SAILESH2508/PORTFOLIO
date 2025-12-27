// Real programming language logo images using CDN URLs

export const logoImages: Record<string, string> = {
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  Django: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  Flask: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  C: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  PHP: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  SQLite: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
  TensorFlow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  PyTorch: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  AWS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  Bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  Pandas: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  NumPy: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  Matplotlib: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg',
  Tkinter: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
  SciPy: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Power BI': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
  Tableau: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg',
  DBMS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'Problem Solving': 'https://cdn-icons-png.flaticon.com/512/2620/2620445.png',
  'Prompt Engineering': 'https://cdn-icons-png.flaticon.com/512/8637/8637099.png'
};

interface LogoImageProps {
  name: string;
  size?: number;
}

export function LogoImage({ name, size = 28 }: LogoImageProps) {
  const logoUrl = logoImages[name];
  
  if (!logoUrl) {
    return (
      <div 
        className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-md flex items-center justify-center text-white font-bold text-xs shadow-md"
        style={{ width: size, height: size }}
      >
        {name.slice(0, 2).toUpperCase()}
      </div>
    );
  }
  
  return (
    <img 
      src={logoUrl} 
      alt={`${name} logo`}
      className="object-contain hover:scale-110 transition-transform"
      style={{ width: size, height: size }}
      onError={(e) => {
        // Fallback if image fails to load
        e.currentTarget.style.display = 'none';
        e.currentTarget.parentElement!.innerHTML = `
          <div class="bg-gradient-to-br from-blue-500 to-purple-500 rounded-md flex items-center justify-center text-white font-bold text-xs shadow-md" style="width: ${size}px; height: ${size}px;">
            ${name.slice(0, 2).toUpperCase()}
          </div>
        `;
      }}
    />
  );
}
