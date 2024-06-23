import { motion } from 'framer-motion';
import { When } from 'react-if';

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  onOutSideClick: VoidFunction;
}

const Modal: React.FC<ModalProps> = ({ open, children, onOutSideClick }) => {
  return (
    <When condition={open}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
        }}
        className='fixed inset-0 z-10 grid h-screen w-screen place-items-center backdrop-blur-sm'
        onClick={(e) => {
          if (e.target == e.currentTarget) onOutSideClick();
        }}
      >
        {children}
      </motion.div>
    </When>
  );
};

export default Modal;
