import { exists, createDir, readDir, BaseDirectory } from '@tauri-apps/api/fs';

export const createAppDataDir = async (dirname: string) => {
  const isExists = await exists(dirname, { dir: BaseDirectory.AppData });
  if (isExists) return;
  createDir(dirname, { dir: BaseDirectory.AppData });
};

export const readProjectFolders = async () => {
  return await readDir('projects', { dir: BaseDirectory.AppData, recursive: true });
};
