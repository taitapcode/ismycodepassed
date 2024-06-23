import { useState } from 'react';
import { CirclePlus } from 'lucide-react';
import Modal from 'components/Modal';

const CreateNewProject: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <button className='btn btn-success' onClick={() => setModalOpen(true)}>
        <CirclePlus strokeWidth={2} />
        Create new project
      </button>
      <Modal open={modalOpen} onOutSideClick={() => setModalOpen(false)}>
        <div>Hello</div>
      </Modal>
    </>
  );
};

export default CreateNewProject;
