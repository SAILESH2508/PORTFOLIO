export default function PostmanLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
            <circle cx="64" cy="64" r="60" fill="#FF6C37" />
            <path d="M64 24C64 24 50 24 40 40C40 40 35 50 45 70C55 90 64 104 64 104C64 104 73 90 83 70C93 50 88 40 88 40C78 24 64 24 64 24Z" fill="white" />
            <path d="M50 50C50 50 54 54 64 54C74 54 78 50 78 50" stroke="#FF6C37" strokeWidth="4" strokeLinecap="round" />
        </svg>
    );
}
