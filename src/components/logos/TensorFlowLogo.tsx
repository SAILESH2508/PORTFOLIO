export default function TensorFlowLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
            <path d="M64 120L16 92V36L64 8L112 36V92L64 120Z" fill="#FF6F00" />
            <path d="M78 48L88 28H48V95H62V58L75 88L88 95L78 48Z" fill="#FFD43B" fillOpacity="0.8" />
            <path d="M65 8L65 52L24 28L65 8Z" fill="#FFD43B" fillOpacity="0.4" />
            <path d="M48 28H88V40H74L68 52H48V28Z" fill="white" />
            <path d="M62 58V95H48V52H68L62 58Z" fill="white" fillOpacity="0.8" />
        </svg>
    );
}
