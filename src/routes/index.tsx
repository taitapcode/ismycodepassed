import { Link, createFileRoute } from '@tanstack/react-router';
import useProjectFolders from 'state/projectFolders';
import setWindowTitle from 'utils/setWindowTitle';
import SearchInput from 'components/SearchInput';
import Navbar from 'components/Navbar';
import { Unless } from 'react-if';
import { Plus } from 'lucide-react';

const Home: React.FC = () => {
  const { projectEntries } = useProjectFolders();
  console.log(projectEntries);

  return (
    <div className='flex h-full gap-2'>
      <Navbar />
      <main className='mx-auto my-10 flex w-[40rem] flex-col items-center gap-4'>
        <SearchInput />
        <Unless condition={projectEntries.length}>
          <Link className='btn btn-success'>
            <Plus strokeWidth={3} />
            Create new porject
          </Link>
        </Unless>
      </main>
    </div>
  );
};

export const Route = createFileRoute('/')({
  beforeLoad: () => setWindowTitle('Projects'),
  component: Home,
});
