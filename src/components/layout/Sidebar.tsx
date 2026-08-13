import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Brain, History, HelpCircle } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const navItems = [
    {
      to: '/',
      label: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      to: '/predict',
      label: 'Analyze',
      icon: Brain,
    },
    {
      to: '/predictions',
      label: 'History',
      icon: History,
    },
  ];

  return (
    <aside className="w-64 border-r border-gray-200 dark:border-gray-800/80 bg-white/40 dark:bg-gray-950/40 flex flex-col justify-between shrink-0 h-[calc(100vh-4rem)] sticky top-16 select-none transition-colors duration-300">
      {/* Navigation Links */}
      <div className="p-4 space-y-2">
        <div className="px-3 mb-4">
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
            Navigation
          </p>
        </div>
        
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 relative group overflow-hidden border ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-500/20 shadow-sm dark:shadow-[inset_0_0_12px_rgba(99,102,241,0.06)]'
                    : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-800 dark:hover:text-gray-250 hover:bg-gray-100 dark:hover:bg-gray-900/30'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Left glowing line indicator on active */}
                  {isActive && (
                    <div className="absolute left-0 top-3 bottom-3 w-1 bg-indigo-650 dark:bg-indigo-500 rounded-r shadow-[0_0_8px_#6366f1]" />
                  )}
                  
                  <Icon className={`h-5 w-5 transition-transform duration-300 group-hover:scale-105 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300'}`} />
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="p-6 border-t border-gray-100 dark:border-gray-900/80 text-center">
        <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
          <HelpCircle className="h-3.5 w-3.5" />
          <span>Need help?</span>
        </div>
        <p className="text-[10px] text-gray-500 dark:text-gray-650 mt-1">
          CardGuard v1.0.0
        </p>
      </div>
    </aside>
  );
};
export default Sidebar;
