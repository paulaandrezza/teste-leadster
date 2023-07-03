import { DividerX, Text } from '@/app/theme/shared';
import { Video } from '@/types/videos';
import { IoClose, IoCloudDownloadOutline } from 'react-icons/io5';
import {
  BlueText,
  BoxTitle,
  CloseButton,
  Content,
  ContentChild,
  DivButton,
  DownloadButton,
  MiniModalContent,
  ModalContent,
  ModalOverlay,
  RowButtons,
} from './styles';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  video: Video | null;
}

const downloadsLabel = [
  { content: 'Spreadsheet.xls', color: '#00AE7F', bg1: '#9FEFDF', bg2: '#C2F4EA' },
  { content: 'Document.doc', color: '#0074EA', bg1: '#A1D9FF', bg2: '#C2E6FF' },
  { content: 'Presentation.ppt', color: '#A99445', bg1: '#FFF1A0', bg2: '#FFF8D0' },
  { content: 'Folder.zip', color: '#808080', bg1: '#D0DEE7', bg2: '#E8EEF3' },
];

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
        <BoxTitle>
          <Text fontWeight="subtitle">
            <BlueText>Webinar:</BlueText>
            {video?.title}
          </Text>
        </BoxTitle>
        <iframe
          width="100%"
          height="282"
          src={video?.videoLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <Content>
          <ContentChild>
            <Text fontSize="small" fontWeight="bold">
              Descrição
            </Text>
            <DividerX />
            <Text fontSize="small">{video?.description}</Text>
          </ContentChild>
          <ContentChild>
            <Text fontSize="small" fontWeight="bold">
              Downloads
            </Text>
            <DividerX />
            <RowButtons>
              {downloadsLabel.slice(0, -1).map((item, index) => (
                <DownloadButton key={index} color={item.color} bg1={item.bg1} bg2={item.bg2}>
                  <IoCloudDownloadOutline />
                  <div>{item.content}</div>
                </DownloadButton>
              ))}
            </RowButtons>
          </ContentChild>
        </Content>
      </ModalContent>
      <MiniModalContent
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
      >
        {downloadsLabel.map((item, index) => (
          <DownloadButton key={index} color={item.color} bg1={item.bg1} bg2={item.bg2}>
            <IoCloudDownloadOutline />
            <div>{item.content}</div>
          </DownloadButton>
        ))}
      </MiniModalContent>
    </ModalOverlay>
  );
};

export default VideoModal;
