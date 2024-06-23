import CreateNewProject from 'components/CreateNewProject';

const Navbar: React.FC = () => {
  return (
    <nav className='flex w-[15%] flex-col gap-4 bg-base-200 px-4 py-10'>
      <CreateNewProject />
      <div className='divider pointer-events-none'>Recent projects</div>
    </nav>
  );
};

export default Navbar;
