import { create } from 'zustand';

interface CreateNewProjectState {
  isModalOpen: boolean;
  projectName: string;
  isError: boolean;
  errorMessage: string;
  setModalOpen: (open: boolean) => void;
  setProjectName: (name: string) => void;
  setError: (errorMessage: string) => void;
  clearError: VoidFunction;
}

const useCreateNewProjectState = create<CreateNewProjectState>()((set) => ({
  isModalOpen: false,
  projectName: '',
  isError: false,
  errorMessage: '',
  setModalOpen: (open) => set({ isModalOpen: open }),
  setProjectName: (name) => set({ projectName: name }),
  setError: (error) => set({ isError: true, errorMessage: error }),
  clearError: () => set({ isError: false, errorMessage: '' }),
}));

export default useCreateNewProjectState;
