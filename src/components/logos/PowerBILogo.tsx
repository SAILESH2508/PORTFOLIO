export default function PowerBILogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
            <rect x="42" y="44" width="20" height="60" rx="2" fill="#F2C811" />
            <rect x="66" y="24" width="20" height="80" rx="2" fill="#F2C811" />
            <rect x="90" y="14" width="20" height="90" rx="2" fill="#F2C811" />
            <path d="M18 114H110" stroke="#F2C811" strokeWidth="4" strokeLinecap="round" />
        </svg>
    );
}
