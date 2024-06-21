import { createFileRoute } from '@tanstack/react-router';
import setWindowTitle from 'utils/setWindowTitle';

const NewProject: React.FC = () => {
  return (
    <main className='h-full overflow-y-auto overflow-x-hidden'>
      <h1>H1llo world</h1>
    </main>
  );
};

export const Route = createFileRoute('/_layout/newproject')({
  beforeLoad: () => setWindowTitle('New project'),
  component: NewProject,
});
