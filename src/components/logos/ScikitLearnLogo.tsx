export default function ScikitLearnLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size * 1.6} height={size} viewBox="0 0 160 100" fill="none">
            <rect x="10" y="10" width="140" height="80" rx="10" fill="#F7931E" />
            <path d="M60 50L80 30L100 50L80 70L60 50Z" fill="#3499CD" />
            <circle cx="50" cy="50" r="10" fill="#3499CD" />
            <circle cx="110" cy="50" r="10" fill="#3499CD" />
        </svg>
    );
}
