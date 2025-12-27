export default function NodeLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
            <path d="M64 5L114 34V94L64 123L14 94V34L64 5Z" fill="#339933" />
            <path d="M64 25L90 40M90 40V78M90 40L64 55M64 105V55M64 55L38 40V78" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
