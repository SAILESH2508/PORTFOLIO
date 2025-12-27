export default function TableauLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
            <path d="M64 10V40M64 88V118M24 64H54M74 64H104" stroke="#E97627" strokeWidth="8" strokeLinecap="round" />
            <circle cx="64" cy="64" r="10" fill="#E97627" />
            <circle cx="64" cy="25" r="8" fill="#E97627" />
            <circle cx="64" cy="103" r="8" fill="#E97627" />
            <circle cx="39" cy="64" r="8" fill="#E97627" />
            <circle cx="89" cy="64" r="8" fill="#E97627" />
        </svg>
    );
}
