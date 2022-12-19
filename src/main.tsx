import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import '~/index.css';
import {
  FirstPage,
  FourthPage,
  SecondPage,
  SuccessPage,
  ThirdPage,
} from '~/pages';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { StartingFormProvider } from '~/state';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<App />} />
      <Route path='form/first-page' element={<FirstPage />} />
      <Route path='form/second-page' element={<SecondPage />} />
      <Route path='form/third-page' element={<ThirdPage />} />
      <Route path='form/fourth-page' element={<FourthPage />} />
      <Route path='success' element={<SuccessPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StartingFormProvider>
      <RouterProvider router={router} />
    </StartingFormProvider>
  </React.StrictMode>
);
