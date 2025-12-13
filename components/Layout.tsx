import React, { useState } from 'react';
import { View } from '../types';
import { 
  Calculator, 
  Pill, 
  BookOpen, 
  HeartHandshake, 
  Menu,
  X,
  Stethoscope,
  LogOut
} from 'lucide-react';

interface LayoutProps {
  currentView: View;
  onViewChange: (view: View) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ currentView, onViewChange, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { id: View; label: string; icon: React.ReactNode }[] = [
    { id: 'calculator', label: 'Dose Calculator', icon: <Calculator size={20} /> },
    { id: 'drugs', label: 'Drug Guide', icon: <Pill size={20} /> },
    { id: 'guidelines', label: 'Clinical Guidelines', icon: <BookOpen size={20} /> },
    { id: 'instructions', label: 'Patient Instructions', icon: <HeartHandshake size={20} /> },
  ];

  const handleNavClick = (view: View) => {
    onViewChange(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-72 bg-white border-r border-slate-200 shadow-sm fixed h-full z-20">
        <div className="p-6 flex items-center gap-3 border-b border-slate-100">
          <div className="bg-blue-600 p-2 rounded-lg shadow-lg shadow-blue-200">
            <Stethoscope size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-800">DentOS</h1>
            <p className="text-xs text-slate-500 font-medium">Clinical Suite</p>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 mt-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 font-medium
                ${currentView === item.id 
                  ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
            >
              <span className={currentView === item.id ? 'text-blue-600' : 'text-slate-400'}>
                {item.icon}
              </span>
              <span>{item.label}</span>
              {currentView === item.id && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500"></div>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
           <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors text-sm font-medium">
             <LogOut size={18} />
             <span>Exit Application</span>
           </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full bg-white text-slate-800 z-30 flex justify-between items-center p-4 shadow-sm border-b border-slate-200">
        <div className="flex items-center gap-2">
           <div className="bg-blue-600 p-1.5 rounded-lg">
             <Stethoscope size={18} className="text-white" />
           </div>
           <span className="font-bold text-lg">DentOS</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-20 md:hidden backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-white z-30 transform transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-slate-100">
            <h2 className="font-bold text-xl text-slate-800">Menu</h2>
        </div>
        <nav className="p-4 space-y-2">
        {navItems.map((item) => (
            <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl text-base font-medium
                ${currentView === item.id 
                ? 'bg-blue-50 text-blue-700' 
                : 'text-slate-600 hover:bg-slate-50'}`}
            >
            {item.icon}
            <span>{item.label}</span>
            </button>
        ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-72 p-4 md:p-8 pt-20 md:pt-8 overflow-x-hidden w-full">
        <div className="max-w-5xl mx-auto">
             {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
