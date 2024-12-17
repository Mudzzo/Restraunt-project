import { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/style.css';

import { initAOS } from './utils/aos-animation';

import AppRouter from './routes/AppRouter';

function App() {
  useEffect(() => {
    initAOS();
  }, []);

  return <AppRouter />;
}

export default App;
