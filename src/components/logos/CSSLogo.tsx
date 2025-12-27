export default function CSSLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
            <path d="M71 460L41 32H471L441 460L256 512L71 460Z" fill="#1572B6" />
            <path d="M256 472V70H433L409 430L256 472Z" fill="#33A9DC" />
            <path d="M256 472V418L375 386L380 286H320L317 355H256V286H255H202L201 278L193 148H256V70H96L105 230H256V229L256 220L256 148H368L363 230H324H256V309H320L319 313L314 386L256 418V472Z" fill="white" />
            <path d="M256 70V148H193L192 135L256 135V70H256Z" fill="#EBEBEB" />
        </svg>
    );
}
