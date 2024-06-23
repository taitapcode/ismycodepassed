import { createRootRoute, Outlet } from '@tanstack/react-router';
import TitleBar from 'components/TitleBar';

const Root: React.FC = () => {
  return (
    <>
      <TitleBar />
      <main className='mt-9'>
        <Outlet />
      </main>
    </>
  );
};

export const Route = createRootRoute({
  component: Root,
});
