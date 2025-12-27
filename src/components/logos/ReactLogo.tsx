export default function ReactLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="2" fill="#61DAFB"/>
      <ellipse cx="16" cy="16" rx="12" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
      <ellipse cx="16" cy="16" rx="12" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="12" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/>
    </svg>
  );
}
