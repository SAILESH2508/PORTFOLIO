export default function VirtualBoxLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7.77381V16.2262L12 22L22 16.2262V7.77381L12 2Z" fill="#183A61" />
            <path d="M12 3.54148L3.33333 8.54148V15.4582L12 20.4582L20.6667 15.4582V8.54148L12 3.54148Z" fill="#A7C0E4" />
            <path d="M20.6667 8.54148L12 13.5415L3.33333 8.54148L12 3.54148L20.6667 8.54148Z" fill="#183A61" />
            <path d="M6 7.5L8 6.5L10 8L12 6.5L14 8L16 6.5L18 7.5V8.5L16 7.5L14 9L12 7.5L10 9L8 7.5L6 8.5V7.5Z" fill="white" />
            <path d="M12 20.4582V13.5415L3.33333 8.54148V15.4582L12 20.4582Z" fill="#2E4A6F" />
            <path d="M20.6667 15.4582V8.54148L12 13.5415V20.4582L20.6667 15.4582Z" fill="#295587" />
        </svg>
    );
}
