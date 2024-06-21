import cn from 'utils/cn';
import useWindowState from 'state/windowState';

const WindowTitle: React.FC = () => {
  const isFocused = useWindowState((state) => state.isFocused);
  console.log(isFocused);
  return (
    <div
      className={cn(
        'pointer-events-none w-full text-center font-bold text-white',
        !isFocused && 'text-neutral-300',
      )}
    >
      {document.title}
    </div>
  );
};

export default WindowTitle;
