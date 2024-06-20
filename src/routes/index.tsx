import { createFileRoute } from '@tanstack/react-router';
import setWindowTitle from 'utils/setWindowTitle';
import { useQuery } from '@tanstack/react-query';
import { readProjectFolders } from 'api/fileSystem';

const Home: React.FC = () => {
  const {} = useQuery({
    queryKey: ['projectFolders'],
    queryFn: readProjectFolders,
  });

  return (
    <main className='container mx-auto my-10'>
      <button>New Code</button>
    </main>
  );
};

export const Route = createFileRoute('/')({
  beforeLoad: () => setWindowTitle('Home'),
  component: Home,
});
