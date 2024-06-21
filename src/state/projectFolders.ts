import { type FileEntry, readDir, BaseDirectory } from '@tauri-apps/api/fs';
import { create } from 'zustand';

interface ProjectFoldersState {
  projectEntries: FileEntry[];
}

const useProjectFolders = create<ProjectFoldersState>()(() => ({
  projectEntries: [],
}));

readDir('projects', { dir: BaseDirectory.AppData, recursive: true }).then((entries) =>
  useProjectFolders.setState({ projectEntries: entries }),
);

export default useProjectFolders;
