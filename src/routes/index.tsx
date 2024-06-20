import { createFileRoute } from '@tanstack/react-router';
import setWindowTitle from 'utils/setWindowTitle';
import { useQuery } from '@tanstack/react-query';
import { readProjectFolders } from 'api/fileSystem';
import { Switch, Case, Default } from 'react-if';
import SearchInput from 'components/SearchInput';

const Home: React.FC = () => {
  const { isLoading, isError } = useQuery({
    queryKey: ['projectFolders'],
    queryFn: readProjectFolders,
  });

  return (
    <main className='mx-auto my-10 flex w-[40rem] flex-col items-center gap-4'>
      <SearchInput />
      <Switch>
        <Case condition={isLoading}>
          <div className='flex h-[50vh] w-full items-center justify-center'>
            <div className='loading size-20'></div>
          </div>
        </Case>

        <Case condition={isError}>
          <div className='font-bold text-red-500'>Errorororororor</div>
        </Case>

        <Default>
          <button>Hello world</button>
        </Default>
      </Switch>
    </main>
  );
};

export const Route = createFileRoute('/')({
  beforeLoad: () => setWindowTitle('Home'),
  component: Home,
});
