export default function SeabornLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
            <circle cx="64" cy="64" r="50" fill="#446688" />
            <path d="M44 64C44 64 54 44 64 44C74 44 84 64 84 64C84 64 74 84 64 84C54 84 44 64 44 64Z" stroke="white" strokeWidth="4" fill="none" />
            <path d="M34 64H94" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M64 34V94" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
    );
}
