export default function BootstrapLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
            <rect x="14" y="14" width="100" height="100" rx="20" fill="#7952B3" />
            <path d="M38 34H68C84 34 90 44 90 54C90 64 80 69 70 69C80 69 90 74 90 89C90 104 80 109 64 109H38V34ZM54 48V62H68C74 62 76 58 76 55C76 52 74 48 68 48H54ZM54 74V95H64C72 95 76 92 76 85C76 78 72 74 64 74H54Z" fill="white" />
        </svg>
    );
}
