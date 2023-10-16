import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from '../pages/HomePage/HomePage';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { VansPage } from '../pages/VansPage/VansPage';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import '../../server/server';

import './App.css';
import VanDetails from '../pages/VanDetails/VanDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vans" element={<VansPage />} />
        <Route path="/vans/:id" element={<VanDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export { App };
