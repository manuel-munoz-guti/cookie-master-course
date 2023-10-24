import { useEffect, useState } from 'react';
import type { AppContext, AppProps } from 'next/app'
import Cookies from 'js-cookie';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material'
import { customTheme, darkTheme, lightTheme } from '@/themes';
import '@/styles/globals.css';

interface Props extends AppProps {
  theme: string;
}

export default function App({ Component, pageProps, theme = 'dark' }: Props) {

  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light';
    const selectedTheme: Theme = cookieTheme === 'light'
    ? lightTheme
    : ( cookieTheme === 'dark' )
      ? darkTheme
      : customTheme;
    setCurrentTheme(selectedTheme);
  }, [])

  return(
    <ThemeProvider theme={ currentTheme }>
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </ThemeProvider>
  );
}
