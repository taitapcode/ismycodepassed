import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  onOutSideClick: VoidFunction;
}

const Modal: React.FC<ModalProps> = ({ open, children, onOutSideClick }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          className='fixed inset-0 z-10 grid h-screen w-screen place-items-center backdrop-blur-sm'
          onClick={(e) => {
            if (e.target == e.currentTarget) onOutSideClick();
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
