import { Link, createFileRoute } from '@tanstack/react-router';
import { useAppDataDir } from 'hooks';
import setWindowTitle from 'utils/setWindowTitle';
import SearchInput from 'components/SearchInput';
import { Unless } from 'react-if';
import { Plus } from 'lucide-react';

const Home: React.FC = () => {
  const projectEntry = useAppDataDir('projects');

  return (
    <main className='mx-auto my-10 flex w-[40rem] flex-col items-center gap-4'>
      <SearchInput />
      <Unless condition={projectEntry.length}>
        <Link className='btn btn-success'>
          <Plus strokeWidth={3} />
          Create new porject
        </Link>
      </Unless>
    </main>
  );
};

export const Route = createFileRoute('/_layout/')({
  beforeLoad: () => setWindowTitle('Projects'),
  component: Home,
});
