import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Routes/Home/Home';
import Why from './components/Routes/Why/Why';
import NotFound from './components/Routes/NotFound/NotFound';
import CustomCursor from './components/UI/CustomCursors/CustomCursor';

const App = () => {
  const location = useLocation();

  return (
    <>
      <CustomCursor />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Home />} />
          <Route path='/why' element={<Why />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
