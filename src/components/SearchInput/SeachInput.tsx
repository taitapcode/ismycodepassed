import { useRef } from 'react';
import { SearchIcon } from 'lucide-react';

const SearchInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick: React.MouseEventHandler = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className='flex w-full items-center gap-2 rounded-2xl border-2 border-slate-800 p-3'
      onClick={handleClick}
    >
      <SearchIcon strokeWidth={3} className='text-slate-700' />
      <input
        type='search'
        placeholder='Enter project name'
        className='w-[95%] text-lg text-gray-900'
        ref={inputRef}
      />
    </div>
  );
};

export default SearchInput;
