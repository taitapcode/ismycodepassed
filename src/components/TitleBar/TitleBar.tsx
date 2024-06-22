import { appWindow } from '@tauri-apps/api/window';
import TitleButton from './TitleButton';
import WindowTitle from './WindowTitle';
import { Minus, Maximize2, X } from 'lucide-react';

const TitleBar: React.FC = () => {
  return (
    <div
      data-tauri-drag-region
      className='flex h-9 items-center justify-between gap-2 bg-neutral p-2 shadow-sm'
    >
      <WindowTitle />
      <div className='flex items-center gap-2'>
        <TitleButton
          icon={Minus}
          className='bg-yellow-300'
          onClick={() => appWindow.minimize()}
        />
        <TitleButton
          icon={Maximize2}
          className='bg-green-400'
          onClick={() => appWindow.toggleMaximize()}
        />
        <TitleButton icon={X} className='bg-rose-500' onClick={() => appWindow.close()} />
      </div>
    </div>
  );
};

export default TitleBar;
