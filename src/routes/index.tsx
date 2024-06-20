import { createFileRoute } from '@tanstack/react-router';
import setWindowTitle from 'utils/setWindowTitle';
import { useQuery } from '@tanstack/react-query';
import { readProjectFolders } from 'api/fileSystem';
import { Switch, Case, Default } from 'react-if';
import { Skeleton } from 'components/Skeleton';
import SearchInput from 'components/SearchInput';

const Home: React.FC = () => {
  const { isLoading, isError } = useQuery({
    queryKey: ['projectFolders'],
    queryFn: readProjectFolders,
  });

  return (
    <main className='mx-auto my-10 flex w-[40rem] flex-col gap-2'>
      <SearchInput />
      <Switch>
        <Case condition={isLoading}>
          <Skeleton className='h-96 w-96' />
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
