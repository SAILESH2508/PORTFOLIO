export default function ScikitImageLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
            <rect x="20" y="20" width="88" height="88" rx="8" stroke="#4C4C4C" strokeWidth="4" />
            <circle cx="50" cy="50" r="10" fill="#FF9900" />
            <path d="M24 104L54 74L74 94L94 64L104 74V104H24Z" fill="#4C4C4C" fillOpacity="0.6" />
        </svg>
    );
}
