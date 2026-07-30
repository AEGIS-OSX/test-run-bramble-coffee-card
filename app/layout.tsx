import { Instrument_Serif, Lora } from 'next/font/google';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata = {
  title: 'Bramble Coffee',
  description: 'Good coffee, made carefully.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${lora.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
