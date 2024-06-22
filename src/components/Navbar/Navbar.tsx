import { CirclePlus, Folders } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className='flex min-w-[15%] flex-col gap-4 bg-base-200 px-4 py-10'>
      <button className='btn btn-success'>
        <CirclePlus strokeWidth={2} />
        Create new project
      </button>
      <div className='divider pointer-events-none'>Projects</div>
    </nav>
  );
};

export default Navbar;
