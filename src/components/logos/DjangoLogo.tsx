import djangoLogo from '../../assets/logos/django_logo.png';

export default function DjangoLogo({ size = 28 }: { size?: number }) {
  return (
    <img
      src={djangoLogo}
      alt="Django"
      style={{
        width: 'auto',
        height: size,
        display: 'block',
        borderRadius: '4px'
      }}
    />
  );
}
