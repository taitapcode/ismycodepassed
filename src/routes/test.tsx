import { createFileRoute, Link } from '@tanstack/react-router';
import setWindowTitle from 'utils/setWindowTitle';

const Test: React.FC = () => {
  return (
    <main>
      <Link to='/'>Home</Link>
    </main>
  );
};

export const Route = createFileRoute('/test')({
  beforeLoad: () => setWindowTitle('Test'),
  component: Test,
});
