import { createRootRoute, Outlet } from '@tanstack/react-router';
import TitleBar from 'components/TitleBar';

export const Route = createRootRoute({
  component: () => (
    <>
      <TitleBar />
      <Outlet />
    </>
  ),
});
