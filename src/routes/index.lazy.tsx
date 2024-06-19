import { Link, createLazyFileRoute } from '@tanstack/react-router';

const Home: React.FC = () => {
  return (
    <main>
      <Link to='/test'>test</Link>
    </main>
  );
};

export const Route = createLazyFileRoute('/')({
  component: Home,
});
