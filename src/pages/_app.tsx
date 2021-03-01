import { useContext, useEffect, useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { SettingsProvider } from '../contexts/SettingsContext';
import '../styles/global.css';

interface IProps {
  colorTheme: string;
}

export default function MyApp({ Component, pageProps }) {
  return (
    <SettingsProvider>
      <Sidebar />
      <Component {...pageProps} />
    </SettingsProvider>
  )
}