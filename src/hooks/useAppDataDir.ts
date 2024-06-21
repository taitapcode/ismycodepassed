import { BaseDirectory, readDir, type FileEntry } from '@tauri-apps/api/fs';
import { useState, useEffect } from 'react';

export const useAppDataDir = (dirname: string) => {
  const [dirEntry, setDirEntry] = useState<FileEntry[]>([]);

  useEffect(() => {
    readDir(dirname, { dir: BaseDirectory.AppData, recursive: true }).then(setDirEntry);
  }, []);

  return dirEntry;
};
