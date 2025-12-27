export default function MySQLLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
            <rect x="10" y="30" width="108" height="68" rx="10" fill="#00758F" />
            <path d="M30 80V48M30 48L42 64L54 48V80M68 80V64L80 48M80 80V48M92 80V48H106" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
