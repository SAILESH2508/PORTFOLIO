export default function FigmaLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size * 1.5} viewBox="0 0 38 57" fill="none">
            <path d="M19 28.5H9.5C4.25 28.5 0 24.25 0 19C0 13.75 4.25 9.5 9.5 9.5H19V28.5Z" fill="#F24E1E" />
            <path d="M19 28.5H28.5C33.75 28.5 38 24.25 38 19C38 13.75 33.75 9.5 28.5 9.5H19V28.5Z" fill="#FF7262" />
            <path d="M19 47.5H9.5C4.25 47.5 0 43.25 0 38C0 32.75 4.25 28.5 9.5 28.5H19V47.5Z" fill="#A259FF" />
            <path d="M19 0H9.5C4.25 0 0 4.25 0 9.5C0 14.75 4.25 19 9.5 19H19V0Z" fill="#1ABCFE" />
            <path d="M19 28.5V47.5C19 52.75 14.75 57 9.5 57C4.25 57 0 52.75 0 47.5C0 42.25 4.25 38 9.5 38" fill="#0ACF83" />
        </svg>
    );
}
