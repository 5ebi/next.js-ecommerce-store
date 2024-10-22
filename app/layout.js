import './globals.scss';
import Footer from './components/Footer';
import Header from './components/Header';

export const metadata = {
  title: {
    default: 'coffee_lab',
    template: '%s | Coffee_lab',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout-container">
          <Header />
          <main className="content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
