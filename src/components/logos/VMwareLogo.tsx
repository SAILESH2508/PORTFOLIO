export default function VMwareLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="8" width="7" height="7" rx="1.5" fill="#717171" />
            <rect x="8" y="4" width="7" height="7" rx="1.5" fill="#B3B3B3" />
            <rect x="10" y="10" width="11" height="11" rx="1.5" fill="#0091DA" />
        </svg>
    );
}
