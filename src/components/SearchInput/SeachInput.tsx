import { useRef } from 'react';
import { SearchIcon } from 'lucide-react';

const SearchInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className='flex w-full cursor-text items-center gap-2 rounded-lg border-2 border-neutral p-3 focus-within:border-neutral-content'
      onClick={() => inputRef.current?.focus()}
    >
      <SearchIcon strokeWidth={2} className='pointer-events-none' />
      <input
        type='search'
        placeholder='Enter project name'
        className='grow'
        ref={inputRef}
      />
    </div>
  );
};

export default SearchInput;
