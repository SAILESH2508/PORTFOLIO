export default function NumPyLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
            <rect x="14" y="14" width="100" height="100" fill="#4DABCF" />
            <path d="M40 34V94L56 74L72 94L88 74V94" stroke="#1565C0" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M40 94V34L56 54L72 34L88 54V34" stroke="#90CAF9" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
