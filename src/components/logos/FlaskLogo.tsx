export default function FlaskLogo({ size = 28 }: { size?: number }) {
    // Flask logo (Official shape) using currentColor to adapt to both light (Skills) and dark (Footer) themes.
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.21 0.6H15.79V3.06H13.67V10.24L19.99 22.07C20.17 22.4 20.23 22.78 20.15 23.16C20.07 23.54 19.86 23.88 19.55 24.16C19.24 24.45 18.83 24.6 18.41 24.6H5.59C5.17 24.6 4.76 24.45 4.45 24.16C4.14 23.88 3.93 23.54 3.85 23.16C3.77 22.78 3.83 22.4 4.01 22.07L10.33 10.24V3.06H8.21V0.6Z"
                fill="currentColor"
            />
        </svg>
    );
}
