import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import '~/index.css';
import {
  NameAndEmailPage,
  CovidPoliticPage,
  CovidStatePage,
  SuccessPage,
  IsVacinatedPage,
} from '~/pages';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { NameAndEmailFormProvider } from '~/state/context/NameAndEmailFormContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<App />} />
      <Route path='form/name-and-email' element={<NameAndEmailPage />} />
      <Route path='form/covid-state' element={<CovidStatePage />} />
      <Route path='form/is-vacinated' element={<IsVacinatedPage />} />
      <Route path='form/covid-politic' element={<CovidPoliticPage />} />
      <Route path='success' element={<SuccessPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NameAndEmailFormProvider>
      <RouterProvider router={router} />
    </NameAndEmailFormProvider>
  </React.StrictMode>
);
