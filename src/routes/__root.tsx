import { createRootRoute, Outlet } from '@tanstack/react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import TitleBar from 'components/TitleBar';

const Root: React.FC = () => {
  return (
    <>
      <TitleBar />
      <div className='p-2'>
        <Outlet />
      </div>
      <ReactQueryDevtools />
    </>
  );
};

export const Route = createRootRoute({
  component: Root,
});
