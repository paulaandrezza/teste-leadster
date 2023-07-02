import { Video } from '@/types/videos';
import { IoClose } from 'react-icons/io5';
import { CloseButton, DivButton, ModalContent, ModalOverlay } from './styles';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  video: Video | null;
}

const VideoModal = ({ isOpen, onClose, video }: Props) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
      >
        <DivButton>
          <CloseButton onClick={onClose}>
            <IoClose />
          </CloseButton>
        </DivButton>
        {video?.title}
      </ModalContent>
    </ModalOverlay>
  );
};

export default VideoModal;
