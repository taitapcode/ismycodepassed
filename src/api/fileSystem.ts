import { readDir, BaseDirectory } from '@tauri-apps/api/fs';

export const readProjectFolders = async () => {
  return await readDir('projects', { dir: BaseDirectory.AppData, recursive: true });
};
