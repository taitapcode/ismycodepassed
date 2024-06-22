import type { LucideIcon } from 'lucide-react';
import cn from 'utils/cn';

interface TitleButtonProps {
  icon: LucideIcon;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const TitleButton: React.FC<TitleButtonProps> = ({ icon: Icon, className, onClick }) => {
  return (
    <button
      className={cn(
        'group flex size-[18px] items-center justify-center rounded-full',
        className,
      )}
      onClick={onClick}
    >
      <Icon
        className='text-black/70 opacity-0 transition-opacity group-hover:opacity-100'
        strokeWidth={3}
        size={13}
      />
    </button>
  );
};

export default TitleButton;
