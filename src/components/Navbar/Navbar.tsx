import { Link } from '@tanstack/react-router';
import { CirclePlus, Folders } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className='flex w-2/12 flex-col gap-4 bg-base-200 px-4 py-10'>
      <Link className='btn btn-success' to='/addnew'>
        <CirclePlus strokeWidth={2} />
        Create new project
      </Link>
      <Link className='btn btn-outline border-2' to='/'>
        <Folders strokeWidth={2} />
        Projects
      </Link>
    </nav>
  );
};

export default Navbar;
