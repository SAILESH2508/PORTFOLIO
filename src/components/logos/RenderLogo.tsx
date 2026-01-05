export default function RenderLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4L4 10V22L16 28L28 22V10L16 4ZM16 24.3L8 20.3V11.7L16 7.7L24 11.7V20.3L16 24.3Z" fill="#46E3B7" />
            <path d="M16 10L10 13V19L16 22L22 19V13L16 10ZM16 19.5L12 17.5V14.5L16 12.5L20 14.5V17.5L16 19.5Z" fill="#46E3B7" />
        </svg>
    );
}
