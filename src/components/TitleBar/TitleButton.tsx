import type { LucideIcon } from 'lucide-react';
import cn from 'utils/cn';

type TitleButtonProps = {
  icon: LucideIcon;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

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
        className='opacity-0 transition-opacity group-hover:opacity-100'
        strokeWidth={3}
        size={15}
      />
    </button>
  );
};

export default TitleButton;
