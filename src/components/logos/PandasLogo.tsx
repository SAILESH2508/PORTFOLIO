export default function PandasLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
            <path d="M16 64C16 37 37 16 64 16C91 16 112 37 112 64C112 91 91 112 64 112C37 112 16 91 16 64Z" fill="#150458" />
            <path d="M38 38H50V90H38V38Z" fill="#FFCA00" />
            <path d="M56 50H68V90H56V50Z" fill="#E70488" />
            <path d="M74 30H86V90H74V30Z" fill="#130754" />
        </svg>
    );
}
