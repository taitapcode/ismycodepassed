import { useRef } from 'react';
import { SearchIcon } from 'lucide-react';

const SearchInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className='input input-bordered flex w-full cursor-text items-center gap-2'
      onClick={() => inputRef.current?.focus()}
    >
      <SearchIcon strokeWidth={2} className='' />
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
