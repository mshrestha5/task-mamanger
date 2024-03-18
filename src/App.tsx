import React, {FC, ReactElement} from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material'; 
import { customTheme } from './theme/customTheme';
import { Dashboard } from './pages/dashboard/dashboard';

const App: FC = (): ReactElement => {
  return ( <ThemeProvider theme={customTheme}>
    <CssBaseline />
    <Dashboard/>
    <h1>Hello World</h1>
  </ThemeProvider>);
}

export default App;

/**a simple functional component that renders a "Hello 
 * World" message within a Material-UI ThemeProvider and applies a custom theme 
 * defined in customTheme. The CssBaseline component ensures 
 * consistent baseline styles across different browsers by resetting default styles.
 *  */