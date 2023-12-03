import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { HomePage } from '../pages/HomePage/HomePage';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { HostPage } from '../pages/HostPage/HostPage';
import { VansPage, loader } from '../pages/VansPage/VansPage';

import '../../server/server';

import './App.css';
import VanDetails, {
  loader as vanDetailLoader,
} from '../pages/VanDetails/VanDetails';
import { Dashboard } from '../Dashboard/Dashboard';
import { Income } from '../Income/Income';
import { Reviews } from '../Reviews/Reviews';
import { HostVans, loader as hostVansLoader } from '../HostVans/HostVans';
import { HostVanDetails, loader as hostVanDetailsLoader } from '../HostVanDetails/HostVanDetails';
import { SmallDetails } from '../SmallDetails/SmallDetails';
import { SmallPhotos } from '../SmallPhotos/SmallPhotos';
import { SmallPricing } from '../SmallPricing/SmallPricing';
import { NotFound } from '../pages/NotFound/NotFound';
import { Layout } from '../pages/Layout/Layout';
import { Error } from '../Error/Error';
import { Login } from '../Login/Login';

import { requireAuth } from '../../utils/utils';

const privateRoutesLoader = async () => {
  return await requireAuth();
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="login" element={<Login />} />
      <Route path="host" element={<HostPage />}>
        <Route index element={<Dashboard />} loader={privateRoutesLoader} />
        <Route
          path="income"
          element={<Income />}
          loader={privateRoutesLoader}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={privateRoutesLoader}
        />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route
          path="vans/:id"
          element={<HostVanDetails />}
          loader={hostVanDetailsLoader}>
          <Route
            index
            element={<SmallDetails />}
            loader={privateRoutesLoader}
          />
          <Route
            path="pricing"
            element={<SmallPricing />}
            loader={privateRoutesLoader}
          />
          <Route
            path="photos"
            element={<SmallPhotos />}
            loader={privateRoutesLoader}
          />
        </Route>
      </Route>
      <Route
        path="vans"
        element={<VansPage />}
        loader={loader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VanDetails />}
        loader={vanDetailLoader}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export { App };
