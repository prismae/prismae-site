import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import PageTransition from './components/PageTransition';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter basename="/prismae-site">
      <Header />

      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>

      <Footer />

      <ChatBot />
    </BrowserRouter>
  );
}
