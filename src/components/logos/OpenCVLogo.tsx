export default function OpenCVLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
            <path d="M64 20C48 20 34 28 26 42" stroke="#FF0000" strokeWidth="12" strokeLinecap="round" />
            <path d="M26 86C34 100 48 108 64 108" stroke="#00FF00" strokeWidth="12" strokeLinecap="round" />
            <path d="M102 42C94 28 80 20 64 20" stroke="#0000FF" strokeWidth="12" strokeLinecap="round" opacity="0.5" />
            <circle cx="64" cy="20" r="5" fill="#FF0000" />
            <circle cx="26" cy="86" r="5" fill="#00FF00" />
            <circle cx="102" cy="86" r="5" fill="#0000FF" />
            <path d="M26 86C18 72 18 56 26 42" stroke="#0000FF" strokeWidth="12" strokeLinecap="round" />
            <path d="M102 86C110 72 110 56 102 42" stroke="#FF0000" strokeWidth="12" strokeLinecap="round" opacity="0.3" />
        </svg>
    );
}
