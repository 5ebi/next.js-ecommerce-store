import Link from 'next/link';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header style={{ backgroundColor: 'var(--sblue)' }}>
      <nav>
        <ul className={styles.headerStyle}>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>

          <li>
            <Link href="/products">Products</Link>
          </li>

          <li
            style={{
              display: 'flex',
              justifyContent: 'center', // Centers horizontally

              marginLeft: 'auto',
            }}
          >
            <Link href="/cart">
              <div
                style={{
                  border: '3px solid var(--syellow)',
                  borderRadius: '100rem',
                  padding: '0.5rem',
                  display: 'flex', // Flexbox for centering content inside the div
                }}
              >
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    stroke="none"
                  >
                    <path
                      d="M305 4601 c-118 -31 -190 -124 -190 -246 1 -108 48 -180 145 -224 42
-19 65 -21 340 -21 327 0 347 -3 381 -65 10 -16 162 -538 339 -1160 206 -724
333 -1153 353 -1195 55 -113 170 -212 305 -263 57 -22 61 -22 926 -25 995 -3
967 -5 1126 75 166 83 293 237 344 413 25 88 196 1233 196 1314 0 93 -29 207
-77 299 -55 107 -174 223 -284 275 -156 75 -94 72 -1442 72 l-1203 0 -49 171
c-26 94 -63 201 -80 238 -70 145 -208 265 -368 318 -82 27 -84 27 -407 29
-179 2 -338 -1 -355 -5z m3685 -1274 c48 -25 80 -75 80 -124 0 -30 -146 -1009
-170 -1142 -12 -66 -49 -117 -104 -142 -39 -18 -82 -19 -852 -19 -638 0 -814
3 -822 13 -7 8 -328 1120 -410 1420 -4 16 54 17 1115 17 l1120 0 43 -23z"
                    />
                    <path
                      d="M2060 1279 c-147 -18 -276 -115 -343 -257 -30 -63 -32 -74 -32 -178
0 -107 1 -112 37 -185 110 -223 366 -316 585 -213 69 33 161 118 196 181 174
321 -82 698 -443 652z"
                    />
                    <path
                      d="M3815 1278 c-166 -22 -316 -157 -359 -323 -42 -158 5 -319 126 -430
221 -205 560 -141 694 130 81 163 50 356 -78 491 -102 108 -230 152 -383 132z"
                    />
                  </g>
                </svg>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
