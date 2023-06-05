import Head from 'next/head';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import Sidebar from '@/components/sidebar/sidebar';
import './index.css';

const Fieldset = ({ legend }) => {
  const times = ["1m", "5m", "10m", "15m", "30m", "1h", "3h", "8h", "24h"];
  return (
    <fieldset className="speedups-form-box">
      <legend className="speedups-form-title">{legend}</legend>
      {times.map((time, index) => (
        <div className="speedups-input-field" key={index}>
          <label className="speedups-input-label">{time}</label>
          <input type="text" className="speedups-input" placeholder="User input" />
        </div>
      ))}
      <div className="speedups-totals">
        <div>Total: 0s</div>
        <div>Total in Minutes: 0 min</div>
      </div>
    </fieldset>
  );
};

export default function Calculators() {
  return (
    <>
      <Head>
        <title>Call of Dragons Speedups Calculator | cod.tools</title>
        <meta name="description" content="Coming Soon..." />
      </Head>
      <Header />
      <div className="speedups-content">
        <div className="speedups-container">
          <Sidebar className="speedups-sidebar" />
          <main className="speedups-main-section">
            <div className='speedups-titles'>
              <h1 className="speedups-title">Call of Dragons Speedups Calculators</h1>
              <h2 className='speedups-description'>This is a description</h2>
            </div>
            <div className="speedups-form-content">
              {["Building", "Research", "Training", "Universal"].map((name, index) => (
                <Fieldset legend={name} key={index} />
              ))}
            </div>
            <div className="speedups-large-totals">
              <div>Total: 0s</div>
              <div>Total in Minutes: 0 min</div>
            </div>
          </main> 
        </div>
      </div>
      <Footer />
    </>
  );
}