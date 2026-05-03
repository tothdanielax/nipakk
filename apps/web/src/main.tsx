import '@nipakk/ui/globals.css';

import { TooltipProvider } from '@nipakk/ui/components/tooltip';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/providers/theme-provider';
import { App } from './app';

const root = document.getElementById('root');
if (!root) throw new Error('root element not found');

createRoot(root).render(
  <StrictMode>
    <TooltipProvider>
      <ThemeProvider>
        <App />
        <Toaster richColors />
      </ThemeProvider>
    </TooltipProvider>
  </StrictMode>
);
