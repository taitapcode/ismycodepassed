import { useEffect } from 'react';
import cn from 'utils/cn';
import useCreateNewProjectState from 'state/createNewProject';
import { CirclePlus, Plus } from 'lucide-react';
import Modal from 'components/Modal';

const CreateNewProject: React.FC = () => {
  const {
    isModalOpen,
    projectName,
    isError,
    errorMessage,
    setModalOpen,
    setProjectName,
    setError,
    clearError,
  } = useCreateNewProjectState();

  const handleCreateNewProject = () => {
    console.log(isError);
    clearError();
    if (!projectName) return setError('Project name cannot be empty');
  };

  useEffect(() => {
    if (isModalOpen) return;
    setProjectName('');
    clearError();
  }, [isModalOpen]);

  return (
    <>
      <button className='btn btn-success' onClick={() => setModalOpen(true)}>
        <CirclePlus strokeWidth={2} />
        Create new project
      </button>
      <Modal open={isModalOpen} onOutSideClick={() => setModalOpen(false)}>
        <div className='mb-56 flex w-96 flex-col items-center gap-4 rounded-xl bg-base-300 p-4'>
          <p className='text-2xl font-bold'>New Project</p>
          <label className='w-full'>
            <div className='label'>
              <div className='label-text text-error'>{errorMessage}</div>
            </div>
            <input
              type='text'
              className={cn(
                'input input-bordered w-full max-w-xs',
                isError && 'placeholder:text-error',
              )}
              placeholder='Enter your project name'
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </label>
          <button className='btn btn-success w-full' onClick={handleCreateNewProject}>
            <Plus />
            Create
          </button>
        </div>
      </Modal>
    </>
  );
};

export default CreateNewProject;
