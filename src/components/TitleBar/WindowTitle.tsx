const WindowTitle: React.FC = () => {
  return (
    <div className='pointer-events-none w-full text-center font-bold text-white'>
      {document.title}
    </div>
  );
};

export default WindowTitle;
