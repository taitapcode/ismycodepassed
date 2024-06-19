import { appWindow } from '@tauri-apps/api/window';
import TitleButton from './TitleButton';
import WindowTitle from './WindowTitle';
import { Minus } from 'lucide-react';
import { X } from 'lucide-react';

const TitleBar: React.FC = () => {
  return (
    <div
      data-tauri-drag-region
      className='h-9 flex justify-between items-center gap-2 p-2 shadow-lg bg-gray-800 select-none'
    >
      <WindowTitle />
      <div className='flex items-center gap-2'>
        <TitleButton
          icon={Minus}
          className='bg-yellow-500'
          onClick={() => appWindow.minimize()}
        />
        <TitleButton icon={X} className='bg-red-500' onClick={() => appWindow.close()} />
      </div>
    </div>
  );
};

export default TitleBar;
