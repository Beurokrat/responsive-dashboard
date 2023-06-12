
/* 
1. Create custom theme and typography
    --> defaut styling for h1, h2, h3 etc.
*/

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider, CssBaseline } from '@mui/material';
import Home from './screens/Home';
import { theme } from './theme';
import Layout from './screens/layout-designer';

function App() {
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Router>
          <div className='App'>
            <div className='container'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/layout' element={<Layout/>} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
