const WindowTitle: React.FC = () => {
  return (
    <div className='text-white font-bold pointer-events-none w-full text-center'>
      {document.title}
    </div>
  );
};

export default WindowTitle;
