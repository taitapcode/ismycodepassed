import { Outlet, createFileRoute } from '@tanstack/react-router';
import Navbar from 'components/Navbar';

const Layout: React.FC = () => {
  return (
    <div className='flex h-full gap-2'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export const Route = createFileRoute('/_layout')({
  component: Layout,
});
