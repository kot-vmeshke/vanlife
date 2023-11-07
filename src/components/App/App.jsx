import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { HomePage } from '../pages/HomePage/HomePage';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { HostPage } from '../pages/HostPage/HostPage';
import { VansPage, loader} from '../pages/VansPage/VansPage';

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
import { NotFound } from '../pages/NotFound/NotFound';
import { Layout } from '../pages/Layout/Layout';
import { Error } from '../Error/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    <Route index element={<HomePage/>}/>
      <Route path="about" element={<AboutPage />} />
      <Route path="host" element={<HostPage />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="vans/:id" element={<HostVanDetails />}>
          <Route index element={<SmallDetails />} />
          <Route path="pricing" element={<SmallPricing />} />
          <Route path="photos" element={<SmallPhotos />} />
        </Route>
      </Route>
      <Route path="vans" element={<VansPage />} loader={loader} errorElement={<Error/>}/>
      <Route path="vans/:id" element={<VanDetails />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export { App };
