import { createRootRoute, Outlet } from '@tanstack/react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import TitleBar from 'components/TitleBar';

const Root: React.FC = () => {
  return (
    <>
      <TitleBar />
      <Outlet />
      <ReactQueryDevtools />
    </>
  );
};

export const Route = createRootRoute({
  component: Root,
});
