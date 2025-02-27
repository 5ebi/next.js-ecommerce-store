import Image from 'next/image';
import styles from './page.module.scss';

export const metadata = {
  title: 'Profitec Go',
  description:
    'Discover the compact Profitec Go with quick heat-up times and easy controls for a perfect espresso experience.',
};

export default function Products() {
  return (
    <main className="mainWrapper">
      {' '}
      <div>
        <h2>Profitec Go</h2>
      </div>
      <div style={{ padding: '2rem' }}>
        <Image
          src="/images/profitecgo/go-black.jpg"
          width={574}
          height={540}
          alt="Picture of Profitec Go Black"
        />
      </div>
      <div>
        <div className={styles.middle}>
          <button
            className={styles.AddToCart}
            data-test-id="profitecGO-0001"
            // Add the onClick handler
          >
            Add to Cart
          </button>
        </div>
        <div>
          <span />
          <span />
        </div>
        <p className={styles.Wrapper}>
          Die GO ist eine kompakte Einkreis-Siebträgermaschine mit
          Ringbrühgruppe.
          <br />
          <br />
          1,2, 3...GO: Nach einer sehr kurzen Aufheizphase ist die Maschine
          bereit für den Bezug. <br />
          <br />
          Press & GO: Die Extraktion des Espressos, die Aktivierung des
          Dampfmodus sowie das Ein- und Ausschalten der Maschine, einfach auf
          Knopfdruck. <br />
          <br />
          Never lose Control: Auf dem Display wird die Kaffee-Durchlaufzeit
          sekundengenau angezeigt. Über die PID-Temperatursteuerung kannst Du
          außerdem die gewünschte Temperatur des Kaffees für die Extraktion und
          die Temperatur des Dampfes bestimmen. An dem leicht zugänglichen
          Expansionsventil lässt sich der Brühdruck individuell einstellen.
          Zusätzlich kann das Display Dich auf Wunsch an die Reinigung erinnern.
          Durch den implementierten ECO-Modus kannst Du außerdem programmieren,
          nach welcher Zeit der Nichtnutzung die Heizung der Maschine
          abgeschaltet wird, um Energie zu sparen.
          <br />
          <br /> <strong>Exclusive Line:</strong>
          <br /> Die GO, mit einem Gehäuse aus gebürsteten Edelstahl, ist nur
          bei ausgewählten Fachhändlern erhältlich, die unsere Produkte
          ausschließlich regional vertreiben und eine optimale Einweisung in
          unsere Maschinen gewährleisten. <br />
          <br /> YOUR TASTE. YOUR STYLE. YOUR MACHINE - Welche GO ist Deine?
        </p>
      </div>
    </main>
  );
}
