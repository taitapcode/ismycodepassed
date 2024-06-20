import { createRoot } from 'react-dom/client';
import 'index.css';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const router = createRouter({ routeTree });

createRoot(document.getElementById('app')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
);

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
