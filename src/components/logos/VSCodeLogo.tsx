export default function VSCodeLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
            <path d="M28 85L80 110L110 95V33L80 18L28 43L14 33V95L28 85Z" fill="#007ACC" />
            <path d="M28 85L80 55M28 43L80 73" stroke="#007ACC" strokeWidth="1" strokeOpacity="0.5" />
            <path d="M24 64L100 24V104L24 64Z" fill="white" fillOpacity="0.2" />
        </svg>
    );
}
