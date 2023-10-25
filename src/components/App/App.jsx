import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from '../pages/HomePage/HomePage';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { HostPage } from '../pages/HostPage/HostPage';
import { VansPage } from '../pages/VansPage/VansPage';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import '../../server/server';

import './App.css';
import VanDetails from '../pages/VanDetails/VanDetails';
import { Dashboard } from '../Dashboard/Dashboard';
import { Income } from '../Income/Income';
import { Reviews } from '../Reviews/Reviews';
import { HostVans } from '../HostVans/HostVans';
import { HostVanDetails } from '../HostVanDetails/HostVanDetails';
import { SmallDetails } from '../SmallDetails/SmallDetails';
import { SmallPhotos } from '../SmallPhotos/SmallPhotos';
import { SmallPricing } from '../SmallPricing/SmallPricing';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/host" element={<HostPage />}>
          <Route index element={<Dashboard />} />
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews" element={<Reviews />} />
          <Route path="/host/vans" element={<HostVans />} />
          <Route path="/host/vans/:id" element={<HostVanDetails />}>
            <Route index element={<SmallDetails />} />
            <Route path="/host/vans/:id/pricing" element={<SmallPricing />} />
            <Route path="/host/vans/:id/photos" element={<SmallPhotos />} />
          </Route>
        </Route>
        <Route path="/vans" element={<VansPage />} />
        <Route path="/vans/:id" element={<VanDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export { App };
