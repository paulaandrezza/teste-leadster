'use client';

import { Text } from '@/app/theme/shared';
import { Video } from '@/types/videos';
import photo from '@public/thumbnail.png';
import { Box, BoxImage, CardContent } from './styles';

interface Props extends Video {
  onClick: () => void;
}

const VideoCard = ({ title, onClick }: Props) => {
  return (
    <Box onClick={onClick}>
      <BoxImage src={photo} alt="Prévia vídeo" />
      <CardContent>
        <Text fontWeight="bold">{title}</Text>
      </CardContent>
    </Box>
  );
};

export default VideoCard;
