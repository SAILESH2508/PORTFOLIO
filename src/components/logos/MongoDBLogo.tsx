export default function MongoDBLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
            <path d="M64 5C64 5 28 55 28 85C28 105 44 121 64 121C84 121 100 105 100 85C100 55 64 5 64 5Z" fill="#47A248" />
            <path d="M64 115C64 115 62 100 62 85C62 55 64 25 64 25" stroke="#4DB33D" strokeWidth="8" strokeLinecap="round" />
            <path d="M68 60C68 60 84 80 68 110" stroke="#3FA037" strokeWidth="4" strokeLinecap="round" />
        </svg>
    );
}
