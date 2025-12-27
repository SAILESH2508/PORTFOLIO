export default function JavaScriptLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
      <path d="M18 24c0 2-1 3-3 3s-3-1-3-3v-8h2v8c0 1 0 1 1 1s1 0 1-1v-8h2v8zm6-8h-2v6c0 1 0 1-1 1h-1v2h1c2 0 3-1 3-3v-6z" fill="#000"/>
      <path d="M9 10h14v2H9v-2z" fill="#000"/>
    </svg>
  );
}
