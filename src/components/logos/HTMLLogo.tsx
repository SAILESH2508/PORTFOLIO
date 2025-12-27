export default function HTMLLogo({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
            <path d="M71 460L41 32H471L441 460L256 512L71 460Z" fill="#E34F26" />
            <path d="M256 472V70H433L409 430L256 472Z" fill="#EF652A" />
            <path d="M256 472V230H150L144 148H256V70H96L108 230H198L193 286H256V355H190L186 312H130L137 386L256 418V472Z" fill="#EBEBEB" />
            <path d="M256 70V148H368L363 230H256V286H319L314 355H256V418L375 386L384 148L389 70H256Z" fill="white" />
        </svg>
    );
}
