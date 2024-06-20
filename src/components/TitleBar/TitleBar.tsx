import { appWindow } from '@tauri-apps/api/window';
import TitleButton from './TitleButton';
import WindowTitle from './WindowTitle';
import { Minus } from 'lucide-react';
import { X } from 'lucide-react';

const TitleBar: React.FC = () => {
  return (
    <div
      data-tauri-drag-region
      className='flex h-9 items-center justify-between gap-2 bg-neutral p-2 shadow-lg'
    >
      <WindowTitle />
      <div className='flex items-center gap-2'>
        <TitleButton
          icon={Minus}
          className='bg-warning text-warning-content'
          onClick={() => appWindow.minimize()}
        />
        <TitleButton
          icon={X}
          className='bg-error text-error-content'
          onClick={() => appWindow.close()}
        />
      </div>
    </div>
  );
};

export default TitleBar;
