export default function ExpressLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size * 2} height={size} viewBox="0 0 100 50" fill="none">
            <path d="M0 25C0 11.2 11.2 0 25 0H75C88.8 0 100 11.2 100 25C100 38.8 88.8 50 75 50H25C11.2 50 0 38.8 0 25Z" fill="#000000" />
            <text x="50" y="32" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle">ex</text>
        </svg>
    );
}
