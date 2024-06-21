import { createRootRoute, Outlet } from '@tanstack/react-router';
import TitleBar from 'components/TitleBar';

const Root: React.FC = () => {
  return (
    <>
      <TitleBar />
      <Outlet />
    </>
  );
};

export const Route = createRootRoute({
  component: Root,
});
