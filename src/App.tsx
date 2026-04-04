/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/layout/ScrollToTop';

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Destinations = lazy(() => import('./pages/Destinations').then((m) => ({ default: m.Destinations })));
const Packages = lazy(() => import('./pages/Packages').then((m) => ({ default: m.Packages })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-[50vh]" />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="destinations" element={<Destinations />} />
            <Route path="packages" element={<Packages />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
