export default function MatplotlibLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
            <circle cx="64" cy="64" r="50" fill="white" stroke="#11557C" strokeWidth="4" />
            <path d="M34 94L54 54L74 74L94 34" stroke="#D32F2F" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M34 94H94" stroke="black" strokeWidth="2" />
            <path d="M34 94V34" stroke="black" strokeWidth="2" />
        </svg>
    );
}
