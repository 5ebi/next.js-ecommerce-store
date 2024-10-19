import Image from 'next/image';

export default function Hero() {
  return (
    <div>
      <div className="hero-content">
        <Image
          src="/images/background/beans.jpg"
          alt="background image beans"
          quality={100}
          fill
          style={{
            objectFit: 'cover',
            opacity: 0.03,
            zIndex: -5,
          }}
        />
      </div>
    </div>
  );
}
