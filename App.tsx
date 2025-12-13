import React, { useState, Suspense } from 'react';
import Layout from './components/Layout';
import { View } from './types';
import { Loader2 } from 'lucide-react';

// Lazy load new clinical components
const DoseCalculator = React.lazy(() => import('./components/DoseCalculator'));
const DrugGuide = React.lazy(() => import('./components/DrugGuide'));
const ClinicalGuidelines = React.lazy(() => import('./components/ClinicalGuidelines'));
const PatientInstructions = React.lazy(() => import('./components/PatientInstructions'));

const Loading = () => (
    <div className="flex items-center justify-center h-[60vh]">
        <div className="flex flex-col items-center gap-4">
            <Loader2 className="animate-spin text-blue-600" size={40} />
            <p className="text-slate-400 font-medium">Loading clinical module...</p>
        </div>
    </div>
);

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('calculator');

  const renderView = () => {
    switch (currentView) {
      case 'calculator':
        return <DoseCalculator />;
      case 'drugs':
        return <DrugGuide />;
      case 'guidelines':
        return <ClinicalGuidelines />;
      case 'instructions':
        return <PatientInstructions />;
      default:
        return <DoseCalculator />;
    }
  };

  return (
    <Layout currentView={currentView} onViewChange={setCurrentView}>
        <Suspense fallback={<Loading />}>
            {renderView()}
        </Suspense>
    </Layout>
  );
};

export default App;
