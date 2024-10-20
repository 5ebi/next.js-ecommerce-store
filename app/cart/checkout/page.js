export const metadata = {
  title: 'Checkout',
  description: 'generated by Sebi',
};

export default function Checkout() {
  return (
    <main>
      <div
        style={{
          display: 'flex',
          color: 'black',
          fontSize: '4rem',
          justifyContent: 'center',
          alignSelf: 'center',
          maxWidth: '1200px',
          width: '60vw',
          height: '65vh',
          backgroundColor: 'rgba(255 255 255 / 100%)',

          margin: ' 2rem 2rem 2rem 2rem',
          padding: '1rem',
          boxShadow: '0rem 0rem 1rem 2rem  rgb(255 255 255 / 100%) ',
        }}
      >
        <h2
          style={{
            fontSize: '4rem',
            fontWeight: '700',
            opacity: '1',
            color: 'var(--sblue)',
            // textShadow: '3px 3px 4px var(--sblue)',
          }}
        >
          Checkout
        </h2>
      </div>
    </main>
  );
}
