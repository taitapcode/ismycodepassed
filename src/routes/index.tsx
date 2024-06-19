import { Link, createFileRoute } from '@tanstack/react-router';
import setWindowTitle from 'utils/setWindowTitle';

const Home: React.FC = () => {
  return (
    <main>
      <Link to='/test'>test</Link>
    </main>
  );
};

export const Route = createFileRoute('/')({
  beforeLoad: () => setWindowTitle('Home'),
  component: Home,
});
