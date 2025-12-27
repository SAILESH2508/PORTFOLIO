import awsLogo from '../../assets/logos/aws_logo.png';

export default function AWSLogo({ size = 28 }: { size?: number }) {
    return (
        <img
            src={awsLogo}
            alt="AWS"
            style={{
                width: 'auto',
                height: size,
                display: 'block'
            }}
        />
    );
}
