export default function SciPyLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
            <path d="M30 40C30 40 50 10 90 40C90 40 110 50 90 80C90 80 50 110 30 80C30 80 10 70 30 40Z" stroke="#8CAAE6" strokeWidth="8" />
            <circle cx="45" cy="50" r="8" fill="#8CAAE6" />
            <path d="M80 70L90 80" stroke="#8CAAE6" strokeWidth="4" />
        </svg>
    );
}
