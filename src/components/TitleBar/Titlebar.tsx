import type { LucideIcon } from 'lucide-react';
import cn from 'utils/cn';
import { appWindow } from '@tauri-apps/api/window';
import { Minus } from 'lucide-react';
import { X } from 'lucide-react';

type TitleButtonProps = {
  icon: LucideIcon;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const TitleButton: React.FC<TitleButtonProps> = ({ icon: Icon, className, onClick }) => {
  return (
    <button
      className={cn(
        'rounded-full size-[18px] flex justify-center items-center group',
        className,
      )}
      onClick={onClick}
    >
      <Icon className='opacity-0 group-hover:opacity-100 transition-opacity' size={15} />
    </button>
  );
};

const TitleBar: React.FC = () => {
  return (
    <div
      data-tauri-drag-region
      className='h-9 flex justify-end items-center gap-2 p-2 shadow-lg bg-gray-800'
    >
      <TitleButton
        icon={Minus}
        className='bg-yellow-500'
        onClick={() => appWindow.minimize()}
      />
      <TitleButton icon={X} className='bg-red-500' onClick={() => appWindow.close()} />
    </div>
  );
};

export default TitleBar;
