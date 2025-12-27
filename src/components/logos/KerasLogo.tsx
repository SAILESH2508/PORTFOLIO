export default function KerasLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
            <path d="M10 10H118V118H10V10Z" fill="#D00000" />
            <path d="M88 34L64 64L88 94H74L56 70L54 72V94H42V34H54V62L74 34H88Z" fill="white" />
        </svg>
    );
}
