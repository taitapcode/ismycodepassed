import { createRootRoute, Outlet } from '@tanstack/react-router';
import TitleBar from 'components/TitleBar';

const Root: React.FC = () => {
  return (
    <>
      <TitleBar />
      <div className='mt-9 h-full'>
        <Outlet />
      </div>
    </>
  );
};

export const Route = createRootRoute({
  component: Root,
});
