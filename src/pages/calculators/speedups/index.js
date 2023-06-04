import Head from 'next/head';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import './index.css';

export default function Calculators() {
  return (
    <>
      <Head>
        <title>Call of Dragons Speedups Calculator | cod.tools</title>
        <meta name="description" content="Coming Soon..." />
      </Head>
      <Header />
      <Footer />
    </>
  );
};