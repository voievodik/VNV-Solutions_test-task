import { HashRouter as Router, Routes, Route} from 'react-router-dom';

import { App } from './App';
import { LanguageProvider } from './store/LanguageContext';
import { HomePage } from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

export const Root = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
};
