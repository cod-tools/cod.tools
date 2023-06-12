import React, { useState } from 'react';
import Head from 'next/head';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import Sidebar from '@/components/sidebar/sidebar';

import './index.css';

const timeInSec = {
  "1 m": 60,
  "5 m": 300,
  "10 m": 600,
  "15 m": 900,
  "30 m": 1800,
  "1 h": 3600,
  "3 h": 10800,
  "8 h": 28800,
  "15 h": 54000,
  "24 h": 86400,
  "3 d": 259200,
  "7 d": 604800,
  "30 d": 2592000,
};

const Fieldset = ({ legend, extraFields, values, setValues }) => {
  const times = ["1 m", "5 m", "10 m", "15 m", "30 m", "1 h", "3 h", "8 h", "15 h"].concat(extraFields || []);
  
  const handleChange = (event, time) => {
    setValues(prev => ({ ...prev, [`${legend}-${time}`]: event.target.value }));
  };

  const totalSeconds = times.reduce((total, time) => total + (timeInSec[time] * (values[`${legend}-${time}`] || 0)), 0);
  const totalMinutes = totalSeconds / 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const remainderMinutes = totalMinutes % 60;

  return (
    <fieldset className="speedups-form-box">
      <legend className="speedups-form-title">{legend}</legend>
      {times.map((time, index) => (
        <div className="speedups-input-field" key={index}>
          <label className="speedups-input-label">{time}</label>
          <input type="text" className="speedups-input" placeholder="0" value={values[`${legend}-${time}`] || ''} onChange={(event) => handleChange(event, time)} />
        </div>
      ))}
      <div className="speedups-totals">
        <div>Total: {totalHours}h {remainderMinutes}m</div>
      </div>
    </fieldset>
  );
};

const extraFields = ["24 h", "3 d", "7 d", "30 d"];

export default function Calculators() {
  const [values, setValues] = useState({});

  const totalSeconds = Object.entries(values).reduce((total, [key, val]) => total + (timeInSec[key.split('-')[1]] * val), 0);
  const totalMinutes = totalSeconds / 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const remainderMinutes = totalMinutes % 60;

  const sections = ["Building Speedups", "Research Speedups", "Training Speedups", "Universal Speedups"];
  
  const totals = sections.reduce((acc, section) => {
    const sectionSeconds = Object.entries(values)
      .filter(([key]) => key.startsWith(section))
      .reduce((total, [key, val]) => total + (timeInSec[key.split('-')[1]] * val), 0);

    const sectionMinutes = sectionSeconds / 60;
    const sectionHours = Math.floor(sectionMinutes / 60);
    const sectionRemainderMinutes = sectionMinutes % 60;
    
    return { ...acc, [section]: { hours: sectionHours, minutes: sectionRemainderMinutes }};
  }, {});

  return (
    <>
      <Head>
        <title>Call of Dragons Speedups Calculator | cod.tools</title>
        <meta name="description" content="Call of Dragons Speedups Calculators - Calculate your total amount of speedups you have." />
      </Head>
      <Header />
      <div className="speedups-content">
        <div className="speedups-container">
          <Sidebar className="speedups-sidebar" />
          <main className="speedups-main-section">
            <h1 className="speedups-title">Call of Dragons Speedups Calculators</h1>
            <div className="speedups-form-content">
              {sections.map((name, index) => (
                <Fieldset legend={name} key={index} extraFields={name === "Universal Speedups" ? extraFields : null} values={values} setValues={setValues} />
              ))}
            </div>
            <div className="speedups-large-totals">
              <div>Total: {totalHours}h {remainderMinutes}m</div>
              {sections.map((section, index) => section !== "Universal Speedups" && (
                <div key={index}>{section} + Universal Speedups: {totals[section].hours + totals["Universal Speedups"].hours}h {totals[section].minutes + totals["Universal Speedups"].minutes}m</div>
              ))}
            </div>
          </main> 
        </div>
      </div>
      <Footer />
    </>
  );
}