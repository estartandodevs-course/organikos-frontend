import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { SkeletonTheme } from 'react-loading-skeleton';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <SkeletonTheme baseColor="#838B2F" highlightColor="#93A236">
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </SkeletonTheme>
);
