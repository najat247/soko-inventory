import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes';
import ErrorBoundary from '@/components/common/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <AppRoutes />
        <Toaster position="top-right" />
      </Router>
    </ErrorBoundary>
  );
};

export default App; 