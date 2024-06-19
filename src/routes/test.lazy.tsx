import { createLazyFileRoute, Link } from '@tanstack/react-router';

const Test: React.FC = () => {
  return (
    <main>
      <Link to='/'>Home</Link>
    </main>
  );
};

export const Route = createLazyFileRoute('/test')({
  component: Test,
});
