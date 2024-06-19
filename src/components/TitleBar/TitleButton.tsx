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
        'rounded-full size-[18px] flex justify-center items-center group',
        className,
      )}
      onClick={onClick}
    >
      <Icon className='opacity-0 group-hover:opacity-100 transition-opacity' size={15} />
    </button>
  );
};

export default TitleButton;
