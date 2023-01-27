import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import '../common/i18n/config';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
